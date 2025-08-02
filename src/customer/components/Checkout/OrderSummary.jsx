import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItems from '../Cart/CartItems'
import { Button } from '@mui/material'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard/>

      </div>
         <div>

      <div className='lg:grid grid-cols-3 relative pt-10'>
        <div className='col-span-2'>
          {[1,1,1,1,1,1].map((item)=><CartItems />)}
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border'>
            <p className='uppercase font-bold opacity-60 pb-4 '>Price Details</p>
            <hr />
            <div className='space-y-3 font-semobold mb-10' >
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>Rs.2300</span>

              </div>
              <div className='flex justify-between pt-3'>
                <span>Disccount</span>
                <span className='text-green-600'>-1000</span>

              </div>
              <div className='flex justify-between pt-3'>
                <span>Delivary Charges</span>
                <span className='text-green-600'>Free</span>

              </div>
              <div className='flex justify-between pt-3 font-bold '>
                <span>Total Amount</span>
                <span className='text-green-600'>Rs.1300</span>

              </div>
            </div>
            <Button color="secondary" variant="contained" className='w-full mt-5' sx={{ px: "2.5rem", py: ".7rem" }}>
              Checkout
            </Button>
          </div>

        </div>

      </div>



    </div>
    </div>
  )
}

export default OrderSummary
