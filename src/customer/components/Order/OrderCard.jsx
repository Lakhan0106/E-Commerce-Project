import { Grid } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import React from 'react'

const OrderCard = () => {
  return (
    <div className="hover:shadow-2xl border p-3 rounded-md bg-white">
      <Grid container spacing={2} alignItems="center" pl={5} pr={5}>
        
        {/* Image + Details */}
        <Grid item xs={3}>
          <div className="flex cursor-pointer items-center">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/p/g/b/l-uwaw24pts173-u-s-polo-assn-original-imah34qsvvjehhvu.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>Women Solid Polo Neck Cotton Blend Re</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>

        {/* Empty placeholder to maintain equal spacing if needed */}
        <Grid item xs={3}></Grid>

        {/* Price */}
        <Grid item xs={3} pl={20}>
          <p className="font-semibold">Rs.1099</p>
        </Grid>

        {/* Delivery */}
       <Grid item xs={5} pl={10}>
          <div className="flex items-center space-x-2">
            <LocalShippingIcon color="primary" />
            <p className="text-sm">
              Expected Delivery By <span className="font-semibold">2 Days</span>
            </p>
          </div>
        </Grid>

      </Grid>
    </div>
  )
}

export default OrderCard
