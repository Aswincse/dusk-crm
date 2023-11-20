// AddCustomer.js
import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box, CircularProgress, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddCustomer = ({ onAddCustomer }) => {
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    companyName: '',
    email: '',
    priority: '',
    quotationAmount: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setCustomerData({
      ...customerData,
      [field]: value,
    });
  };

  const handleAddCustomer = async () => {
    const { firstName, lastName, phoneNumber, companyName, email, priority, quotationAmount } = customerData;

    if (firstName.trim() === '' || lastName.trim() === '' || phoneNumber.trim() === '' || companyName.trim() === '' || email.trim() === '') {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onAddCustomer({
        firstName,
        lastName,
        phoneNumber,
        companyName,
        email,
        priority,
        quotationAmount,
      });

      setCustomerData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        companyName: '',
        email: '',
        priority: '',
        quotationAmount: '',
      });

      navigate('/customer-details');
    } catch (error) {
      setError('An error occurred while adding the customer. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth="sm"
        style={{
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#ffffff',
          padding: '20px',
        }}
      >
        <Box my={4}>
          <Typography variant="h4" align="center" gutterBottom>
            Add Customer
          </Typography>

          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={customerData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />

          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={customerData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />

          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={customerData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
          />

          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={customerData.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={customerData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />

          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="priority-label">Priority</InputLabel>
            <Select
              label="Priority"
              value={customerData.priority}
              onChange={(e) => handleInputChange('priority', e.target.value)}
            >
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="low">Low</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Quotation Amount"
            variant="outlined"
            fullWidth
            margin="normal"
            value={customerData.quotationAmount}
            onChange={(e) => handleInputChange('quotationAmount', e.target.value)}
          />

          {error && (
            <Typography color="error" variant="body2" gutterBottom>
              {error}
            </Typography>
          )}

          <Button
            variant="contained"
            color="primary"
            onClick={handleAddCustomer}
            fullWidth
            disabled={loading}
            style={{ marginTop: '16px' }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Add Customer'}
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default AddCustomer;