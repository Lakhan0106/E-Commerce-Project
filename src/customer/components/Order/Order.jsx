import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'

const OrderStatus = [
    { lable: "On The Way", value: "no_the_way" },
    { lable: "Delivered", value: "delivery" },
    { lable: "Cancelled", value: "cancelled" },
    { lable: "Returned", value: "return" },
]

const Order = () => {
    return (
        <div className='pl-5'>
            <Grid container spacing={2} pt={5}>
                {/* Filter Section */}
                <Grid item xs={2.5}>
                    <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                        <h1 className='font-bold text-lg'>Filter</h1>
                        <div className='space-y-4 mt-10'>
                            <h1 className='font-semibold'>Order Status</h1>
                            {OrderStatus.map((Option) => (
                                <div key={Option.value} className='flex items-center pr-20'>
                                    <input
                                        defaultValue={Option.value}
                                        type="checkbox"
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label
                                        className='ml-3 text-sm text-gray-600'
                                        htmlFor={Option.value}
                                    >
                                        {Option.lable}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </Grid>

                {/* Order List Section */}
                <Grid item xs={9.5} >
                    <Grid container direction="column" spacing={2}>
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <Grid item key={i}>
                                <OrderCard />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Order
