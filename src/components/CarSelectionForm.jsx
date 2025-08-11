import React from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Paper,
  Typography,
  Stack,
} from '@mui/material';

function CarSelectionForm({
  brands,
  models,
  selectedBrand,
  selectedModel,
  carDetails,
  customerName,
  onBrandChange,
  onModelChange,
  onCustomerNameChange,
  onSubmit,
}) {
  return (
    <Box component="form" onSubmit={onSubmit} noValidate>
      <Stack spacing={3}>
        <TextField
          label="Customer Name"
          value={customerName}
          onChange={onCustomerNameChange}
          fullWidth
          required
        />

        <TextField
          select
          label="Select Brand"
          value={selectedBrand}
          onChange={onBrandChange}
          fullWidth
          required
        >
          <MenuItem value="">Select a brand</MenuItem>
          {brands.map((brand) => (
            <MenuItem key={brand} value={brand}>
              {brand}
            </MenuItem>
          ))}
        </TextField>

        {selectedBrand && (
          <TextField
            select
            label="Select Model"
            value={selectedModel}
            onChange={onModelChange}
            fullWidth
            required
          >
            <MenuItem value="">Select a model</MenuItem>
            {models.map((model) => (
              <MenuItem key={model} value={model}>
                {model}
              </MenuItem>
            ))}
          </TextField>
        )}

        {carDetails && (
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" color="primary" gutterBottom>
              Car Details
            </Typography>
            <Typography><strong>Price:</strong> ${carDetails.price}</Typography>
            <Typography><strong>Specs:</strong> {carDetails.specs}</Typography>
            <Typography><strong>Status:</strong> {carDetails.status}</Typography>
            <Typography><strong>Age:</strong> {carDetails.age} years</Typography>
            <Typography><strong>Owners:</strong> {carDetails.owners}</Typography>
          </Paper>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Submit Request
        </Button>
      </Stack>
    </Box>
  );
}

export default CarSelectionForm;