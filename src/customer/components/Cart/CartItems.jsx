import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CartItems = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>

      <div className='flex items-center'>

        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>

          <img className='w-full h-full object-cover object-top hidden-overflow' src="https://rukminim1.flixcart.com/image/420/420/xif0q/ethnic-set/e/9/8/xl-tf-rani101-tribalfit-original-imah7v6anwzx34bh.jpeg?q=60" alt="" />
        </div>

        <div className='ml-5 space-y-1'>

          <p className='font-semibold'>Womens Kurti Slim Mid Rise Pink</p>
          <p className='opacity-70'>Size: L,white</p>
          <p className='opacity-70 mt-2'>Seller: Crishtaliyo 2fashion</p>

          <div className='flex space-x-5 items-center text-gray-900 pt-6'>
            <p className='font-semibold'> Rs.999 </p>
            <p className='opacity-50 line-through'> Rs.1200</p>
            <p className='text-green-600 font-semibold'> 5% Off</p>
          </div>

        </div>



      </div>
      <div className='lg:flex items-center lg:space-x-10 pt4'>
        <div className='flex items-center space-x-2'>
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className='py-1 px-7 border rounded-sm'> 3 </span>
            <IconButton sx={{color:"#7b32a8"}}>
              <AddCircleOutlineIcon />
            </IconButton>

       

        </div>
        <div>
          <Button sx={{color:"#7b32a8"}}>Remove</Button>
        </div>
      </div>
    </div>
  )
}

export default CartItems
