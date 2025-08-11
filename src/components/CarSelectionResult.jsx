import React from 'react';
import { Alert, Typography, Button, Stack, CircularProgress } from '@mui/material';

function CarSelectionResult({ carResult, insuranceResult, bankResult, onBack }) {
    console.log('CarSelectionResult:', { carResult, insuranceResult, bankResult });
  return (
    <Alert severity="success" sx={{ mt: 3 }}>
      <Stack spacing={1}>
        <Typography variant="subtitle1" fontWeight={600}>
          Your Request Summary
        </Typography>
        <Typography>
          <strong>Customer:</strong> {carResult.customerName}
        </Typography>
        <Typography>
          <strong>Car:</strong> {carResult.brand} {carResult.model}
        </Typography>
        <Typography>
          <strong>Insurance Premium:</strong>{' '}
          {insuranceResult === null ? (
            <CircularProgress size={18} sx={{ verticalAlign: 'middle' }} />
          ) : insuranceResult.error ? (
            <span style={{ color: 'red' }}>Error</span>
          ) : (
            <>${insuranceResult.premium}</>
          )}
        </Typography>
        <Typography>
          <strong>Loan Approved:</strong>{' '}
          {bankResult === null ? (
            <CircularProgress size={18} sx={{ verticalAlign: 'middle' }} />
          ) : bankResult.error ? (
            <span style={{ color: 'red' }}>Error</span>
          ) : (
            <span style={{ color: bankResult.approved === 'Approved' ? 'green' : 'red' }}>
              {bankResult.approved === 'Approved' ? 'Yes' : 'No'}
            </span>
          )}
        </Typography>
        <Button variant="outlined" onClick={onBack} sx={{ mt: 1 }}>
          New Request
        </Button>
      </Stack>
    </Alert>
  );
}

export default CarSelectionResult;