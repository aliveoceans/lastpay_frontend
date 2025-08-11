import React, { useState } from 'react';
import { Box, Tabs, Tab, Paper, Typography, Container } from '@mui/material';
import CarSelection from './components/CarSelection';
import RequestList from './components/RequestList';

function App() {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Paper elevation={3} sx={{ mb: 4, p: 3, textAlign: 'center' }}>
        <Typography variant="h4" color="primary" fontWeight={700} gutterBottom>
          LastPay Car Dealer
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Select your car and submit your request
        </Typography>
      </Paper>

      <Paper elevation={2}>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Car Selection" />
          <Tab label="Customer Requests" />
        </Tabs>
        <Box sx={{ p: 3 }}>
          {tab === 0 && <CarSelection />}
          {tab === 1 && (
            <>
              <Typography variant="h6" color="primary" fontWeight={600} mb={2}>
                Customer Requests
              </Typography>
              <RequestList />
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default App;