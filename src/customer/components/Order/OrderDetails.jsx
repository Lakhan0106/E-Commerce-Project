import { Grid, Divider, Button, Stepper, Step, StepLabel } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import React from 'react'

const steps = [
  "Order Placed",
  "Packed",
  "Shipped",
  "Out for Delivery",
  "Delivered"
]

const OrderDetails = () => {
  // This can be dynamic based on order status
  const activeStep = 3 // Means "Out for Delivery" is current step

  return (
    <div className="p-5">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-5">Order Details</h1>

      {/* Stepper */}
      <div className="bg-white shadow-md rounded-md p-5 mb-6">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      {/* Order Info */}
      <div className="bg-white shadow-md rounded-md p-5 mb-6">
        <Grid container spacing={3} alignItems="center">
          {/* Product Image */}
          <Grid item xs={3}>
            <img
              className="w-full h-[250px] object-cover object-top rounded-md"
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/p/g/b/l-uwaw24pts173-u-s-polo-assn-original-imah34qsvvjehhvu.jpeg?q=70"
              alt=""
            />
          </Grid>

          {/* Product Details */}
          <Grid item xs={9}>
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">
                Women Solid Polo Neck Cotton Blend Re
              </h2>
              <p className="opacity-50 text-sm font-semibold">Size: M</p>
              <p className="opacity-50 text-sm font-semibold">Color: Black</p>
              <p className="text-lg font-bold">Rs.1099</p>
              <Divider />
              {/* Delivery Status */}
              <div className="flex items-center space-x-2 mt-3">
                <LocalShippingIcon color="primary" />
                <p className="text-sm">
                  Expected Delivery By <span className="font-semibold">2 Days</span>
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* Order Summary */}
      <div className="bg-white shadow-md rounded-md p-5 mb-6">
        <h2 className="text-lg font-bold mb-3">Order Summary</h2>
        <Divider className="mb-3" />
        <div className="space-y-2 text-sm">
          <p>Order ID: <span className="font-semibold">#12345678</span></p>
          <p>Order Date: <span className="font-semibold">08 Aug 2025</span></p>
          <p>Payment Method: <span className="font-semibold">UPI</span></p>
          <p>Order Status: <span className="text-blue-500 font-semibold">Out for Delivery</span></p>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="bg-white shadow-md rounded-md p-5 mb-6">
        <h2 className="text-lg font-bold mb-3">Shipping Address</h2>
        <Divider className="mb-3" />
        <p className="text-sm">
          Lakhan Raut <br />
          123 MG Road, Nagpur, Maharashtra <br />
          India - 440001 <br />
          Phone: +91 9876543210
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <Button variant="contained" color="primary">
          Track Order
        </Button>
        <Button variant="outlined" color="error">
          Cancel Order
        </Button>
      </div>
    </div>
  )
}

export default OrderDetails
