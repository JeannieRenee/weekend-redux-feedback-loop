import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import axios from 'axios';
// stylesheets import
import './Admin.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Admin(){
    const dispatch = useDispatch();
    const feedbacks = useSelector(store => store.feedback);

    // this is like jQ ready now, runs on page load. 
    useEffect(() => {
        getFeedback();
      }, []);
    
    // Function that houses axios call to database 
    // to get the list of feedback.
    const getFeedback = () => {
      axios.get('/feedback')
        .then((response) => {
          console.log("GET /feedback", response);
          dispatch({
            type: "FEEDBACK",
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log("Error getting feedback", error);
        });
    };

    return ( 
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Feeling</TableCell>
                <TableCell align="center">Understanding</TableCell>                
                <TableCell align="center">Support</TableCell>
                <TableCell align="center">Comments</TableCell>
              </TableRow>
           </TableHead>
            <TableBody>
              {feedbacks.map((feedback) => {
                return <TableRow key={feedback.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="right">{feedback.feeling}</TableCell>
                  <TableCell align="right">{feedback.understanding}</TableCell>                
                  <TableCell align="right">{feedback.support}</TableCell>
                  <TableCell align="left">{feedback.comments}</TableCell>
                </TableRow>
              })} 
            <TableRow>
            </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
    )
}

export default Admin; 