import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiClient } from "../../../shared/services/api-Client";

export const fetchNotes = createAsyncThunk('notes/fetch', async() => {
    try {
        const response = await apiClient.read();  // its returnsobjects in array [{} {} {}];
        return response;
    }
    catch(err) {
        throw err;   
    }
})

const noteSlice = createSlice({
    name:'noteslice',
    initialState:{'notes':[], 'total':0, 'search-result':[], isLoading:false},
    reducers:{
        // CRUD Operations
        // Sync Operations 
        // action - coming from the component 
        // state - update the centeralized store.
        addNote(state, action){
            const noteObject = action.payload;
            console.log('Add Note Reducer Operation Called.... ', action.payload);
            state.notes.push(noteObject);
            
        },
        getTotalRecords(state, action){
            state.total = state.notes.length;
        },
        removeNote(state, action){

        },
        searchNote(state, action){
            const searchObj = action.payload;
            console.log('search Obj::: ', searchObj);
            state['search-result'] = state.notes.filter(note => note.title.includes(searchObj.search));

            // state['search-result'] = state.notes.filter(note => note.id===searchObj.search);
        },
        sortNote(state, action){
            const sortObject = action.payload;
            const key = sortObject.sortBy;
            state.notes.sort((first, second) => {
                if(key === 'id') {
                    return first[key] - second[key];
                }
                else {
                    return first[key].localeCompare(second[key]);
                }
            })
        } 
    },

    // async Operations
    extraReducers:(builder) => {
        builder.addCase(fetchNotes.pending, (state, action) => {
            state.isLoading = true;
            state.notes = [];
        })
        .addCase(fetchNotes.fulfilled, (state, action ) => {
            state.isLoading = false;
            state.notes = action.payload;
        }).addCase(fetchNotes.rejected, (state, action) => {
            state.isLoading = false;
            state.notes = [];
            state.err = action.payload;     
        })
    }
});
export const {addNote, removeNote, getNote,getTotalRecords,searchNote, sortNote} =  noteSlice.actions; // Component
export default  noteSlice.reducer;