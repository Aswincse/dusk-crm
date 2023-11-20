// Home.js
import React from 'react';
import { List, ListItem, Container, Typography, Box, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Custdetail = ({ customers, onDeleteCustomer }) => {
  const handleDeleteClick = (index) => {
    onDeleteCustomer(index);
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Customer List
        </Typography>
        <List>
          {customers.map((customer, index) => (
            <ListItem key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <Typography variant="subtitle1">{`${customer.firstName} ${customer.lastName}`}</Typography>
                <Typography variant="body2">{`Email: ${customer.email}`}</Typography>
                <Typography variant="body2">{`Phone Number: ${customer.phoneNumber}`}</Typography>
                <Typography variant="body2">{`Company: ${customer.companyName}`}</Typography>
                <Typography variant="body2">{`Priority: ${customer.priority}`}</Typography>
                <Typography variant="body2">{`Quotation Amount: ${customer.quotationAmount}`}</Typography>
              </div>
              <div>
                <IconButton color="secondary" onClick={() => handleDeleteClick(index)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Custdetail;