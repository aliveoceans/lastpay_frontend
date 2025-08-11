import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

function RequestList() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/requests')
      .then(res => setRequests(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <TableContainer component={Paper}>
      {requests.length === 0 ? (
        <Typography variant="body1" color="text.secondary" sx={{ p: 3 }}>
          No customer requests found.
        </Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Owners</TableCell>
              <TableCell>Insurance Premium</TableCell>
              <TableCell>Loan Approved</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map(request => (
              <TableRow key={request.id}>
                <TableCell>{request.customerName}</TableCell>
                <TableCell>{request.carBrand}</TableCell>
                <TableCell>{request.carModel}</TableCell>
                <TableCell>${request.carPrice}</TableCell>
                <TableCell>{request.carStatus}</TableCell>
                <TableCell>{request.carAge}</TableCell>
                <TableCell>{request.carOwners}</TableCell>
                <TableCell>${request.insurancePremium}</TableCell>
                <TableCell>
                  <span style={{ color: request.loanApproved === 'Approved' ? 'green' : 'red' }}>
                    {request.loanApproved === 'Approved' ? 'Yes' : 'No'}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}

export default RequestList;