import React from 'react';
import { Box, Typography } from '@mui/material';

const AddressCard = () => {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight="bold">
        Lakhan Raut
      </Typography>
      <Typography variant="body2">
        123 Galaxy Residency, Near Tech Park
      </Typography>
      <Typography variant="body2">
        Pune, Maharashtra, 411001
      </Typography>
      <Typography variant="body2">
        Phone: +91 9876543210
      </Typography>
    </Box>
  );
};

export default AddressCard;
