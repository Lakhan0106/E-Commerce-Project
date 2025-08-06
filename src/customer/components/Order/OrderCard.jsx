import { Grid } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <div>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>

                <div className='flex cursor-pointer'>
                 <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/p/g/b/l-uwaw24pts173-u-s-polo-assn-original-imah34qsvvjehhvu.jpeg?q=70" alt="" />
                 <div className='ml-5'>

                    <p>Women Solid Polo Neck Cotton Blend Re</p>

                 </div>

                </div>

            </Grid>

        </Grid>
      
    </div>
  )
}

export default OrderCard
