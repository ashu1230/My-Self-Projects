import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
// import { noteOperations } from '../services/note-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {fetchNotes, getTotalRecords } from '../redux/note-slice';
// import { apiClient } from '../../../shared/services/api-Client';
export const List = (props)=>{
    //console.log('Props are ', props.notes);
    const dispatch = useDispatch();
    const notesObject = useSelector(state=>{
      console.log('*********** State is ', state);
      return {'notes':state.noteSlice.notes, 'total': state.noteSlice.total, 'isLoading':state.noteSlice.isLoading };
    }); // Pull
    // Component (HTML Page) Mount
    // Life Cycle Methods (Hook)
    useEffect(()=>{
      // Component Mount
      console.log('Component Mount....');
      dispatch(getTotalRecords()); // Push
      dispatch(fetchNotes());

      // BAD PRSCTICE TO USE LOGIC IN COMPONENTS.....
      // const promise = apiClient.read();
      // promise.then (result => {
      //   console.log('Result is:--- ', result);
      // }).catch(err => {
      //   console.log('Error is:-', err);
      // })

      // // just for api test...
      // const promise = apiClient.read();
      // console.log('response', promise);


      // // promise WALA FANDA...
      // promise.then(data => {
      //   console.log('data is' , data);
      // }).catch(err => {
      //   console.log('Error Is', err);
      // })
    },[]);


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));

    return (<div>
        <h1>Total Records {notesObject.total}</h1>

        {/* JSON Data Loading */}
        {notesObject.isLoading? <p>Loading.....</p>:<p>Data Loaded...</p>}


        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{backgroundColor:'black', color:'white'}}>
          <TableRow>
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="left">Descr</StyledTableCell>
            <StyledTableCell align="left">Completion Date</StyledTableCell>
            <StyledTableCell align="right">Importance</StyledTableCell>
            <StyledTableCell align="right">Operations</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {notesObject.notes.map(note=>{
                return (<TableRow>
                    <TableCell align="right">{note.id}</TableCell>
                    <TableCell align="left">{note.title}</TableCell>
                    <TableCell align="left">{note.descr}</TableCell>
                    <TableCell align="left">{note.cdate}</TableCell>
                    <TableCell align="right">{note.importance}</TableCell>
                    {/* <TableCell align="right"><i class="fa-solid fa-trash"></i> <i class="fa-solid fa-pen-to-square"></i></TableCell> */}
                    <TableCell align='right'><DeleteIcon/> <EditIcon/></TableCell>
                </TableRow>);
            })}
        </TableBody>
        </Table>
        </TableContainer>
        {/* <h1>{props.note.id} {props.note.title} {props.note.descr}</h1> */}
    </div>)
}