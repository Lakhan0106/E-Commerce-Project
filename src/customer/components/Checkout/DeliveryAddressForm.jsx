import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';
import AddressCard from '../AddressCard/AddressCard';

const DeliveryAddressForm = () => {
 const handleSubmit = (e) => {
  e.preventDefault();

  const data = new FormData(e.currentTarget);

  const address = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    streetAddress: data.get("address"),
    city: data.get("city"),
    state: data.get("state"),
    zipCode: data.get("zip"),
    mobile: data.get("phoneNumber"),
  };

  console.log("address", address);
};


  return (
    <Box
      sx={{
        display: { xs: 'block', lg: 'flex' },
        gap: 2,
      }}
    >
      {/* Left Section - Address Card */}
      <Box
        sx={{
          flex: 1,
          border: '1px solid #ccc',
          borderRadius: '0 8px 8px 0',
          boxShadow: 2,
          maxHeight: '32rem',
          overflowY: 'auto',
        }}
      >
        <Box sx={{ p: 3, borderBottom: '1px solid #ccc', cursor: 'pointer' }}>
          <AddressCard />
          <Button
            sx={{ mt: 2, bgcolor: '#7e42f5', textTransform: 'none' }}
            size="large"
            variant="contained"
            fullWidth
          >
            Deliver Here
          </Button>
        </Box>
      </Box>

      {/* Right Section - Form */}
      <Box
        sx={{
          flex: 1,
          border: '1px solid #ccc',
          borderRadius: '8px 0 0 8px',
          boxShadow: 2,
          p: 3,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Row 1: First and Last Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last Name"
                fullWidth
              />
            </Grid>

            {/* Row 2: Address - full width */}
            <Grid item xs={12}>
              <TextField
                required
                id="address"
                name="address"
                label="Address"
                fullWidth
                multiline
                rows={4}
              />
            </Grid>

            {/* Row 3: City and State */}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
              />
            </Grid>

            {/* Row 4: ZIP and Phone */}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal Code"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                fullWidth
              />
            </Grid>

            {/* Button: Full Width */}
            <Grid item xs={12}>
              <Button
                sx={{ mt: 2, py: 1.5, bgcolor: '#7e42f5', textTransform: 'none' }}
                size="large"
                variant="contained"
                type="submit"
                fullWidth
              >
                Deliver Here
              </Button>
            </Grid>
          </Grid>
        </form>

      </Box>
    </Box>
  );
};

export default DeliveryAddressForm;
