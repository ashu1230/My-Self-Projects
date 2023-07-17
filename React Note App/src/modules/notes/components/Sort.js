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
import { getTotalRecords, sortNote } from '../redux/note-slice';
// import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';

export const Sort = (props)=>{
    const [sort, setSort] = useState('');
    const dispatch = useDispatch();

    const sortIt = (event) => {
      const sortBy = event.target.value;
      console.log("first", sortBy);
      setSort(sortBy); 
        dispatch(sortNote({sortBy}))
        console.log("dispatched");
    }

    const notesObject = useSelector(state=>{
      return {'notes':state.noteSlice.notes, 'total': state.noteSlice.total};
    });
    useEffect(()=>{
      dispatch(getTotalRecords()); // Push
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
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={sortIt}
        >
          <MenuItem value="id">Sort By Id</MenuItem>
          <MenuItem value="title">Sort By Title</MenuItem>
          <MenuItem value="descr">Sort By Description</MenuItem>
        </Select>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{backgroundColor:'black', color:'white'}}>
          <TableRow>
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="left">DescrDescription</StyledTableCell>
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