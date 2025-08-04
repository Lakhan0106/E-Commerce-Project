import { Grid } from '@mui/material'
import React from 'react'

const OrderStatus = [
    { lable: "On The Way", value: "no_the_way" },
    { lable: "Delivered", value: "delivery" },
    { lable: "Cancelled", value: "cancelled" },
    { lable: "Returned", value: "return" },



]

const Order = () => {
    return (
        <div>
            <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={2.5}>
                    <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                        <h1 className='font-bold text-lg'>Filter</h1>
                        <div className='space-y-4 mt-10'>
                            <h1 className='font-semibold'>Order Status</h1>
                            <div></div>

                        </div>
                    </div>
                </Grid>

            </Grid>
            <Grid item>

            </Grid>
        </div>
    )
}

export default Order
