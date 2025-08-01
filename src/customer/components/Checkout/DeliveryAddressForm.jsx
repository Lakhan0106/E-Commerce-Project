import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'

const DeliveryAddressForm = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className='border rounded-e-md shadow-md-h-[30.5rem] overflow-y-scroll'>

          <div className='p-5 py-7 border-b cursur-pointer'>
            <AddressCard />
            <Button sx={{mt:2, bgcolor:"#7e42f5"}} size='large' variant='contained'>Deliver Here</Button>

          </div>

        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">

            <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>

                    <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="firstName"
                    fullWidth
                    autoComplete="given-name"
                    />

                  </Grid>
                   <Grid item xs={12} sm={6}>

                    <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="lastName"
                    fullWidth
                    autoComplete="given-name"
                    />

                  </Grid>

                </Grid>
            </form>

          </Box>

        </Grid>
      </Grid>
    </div>
  )
}

export default DeliveryAddressForm
