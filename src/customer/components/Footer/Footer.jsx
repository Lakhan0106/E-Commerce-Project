import { Button } from '@headlessui/react'
import { Grid, Typography, Box } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* Top Footer Grid */}
            <Grid className='bg-black text-white mt-10'
                container
                justifyContent="center"
                sx={{
                    bgcolor: "black",
                    color: "white",
                    py: 6,
                    px: { xs: 2, sm: 4, md: 12 },
                    textAlign: "center"
                }}
                spacing={4}
            >
                {/* Column 1: Company */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 2 }}>Company</Typography>
                    <div><Button className='pb-1 hover:text-blue-400'>About</Button></div>
                    <div><Button className='pb-1 hover:text-blue-400'>Blog</Button></div>
                    <div><Button className='pb-1 hover:text-blue-400'>Jobs</Button></div>
                    <div><Button className='pb-1 hover:text-blue-400'>Press</Button></div>
                    <div><Button className='pb-1 hover:text-blue-400'>Partners</Button></div>
                </Grid>

                {/* Column 2: Solutions */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 2 }}>Solutions</Typography>
                    <div><Button className='pb-1 hover:text-blue-400'>Marketing</Button></div>
                    <div><Button className='pb-1 hover:text-blue-400'>Analytics</Button></div>
                    <div><Button className='pb-1 hover:text-blue-400'>Commerce</Button></div>
                    <div><Button className='pb-1 hover:text-blue-400'>Insights</Button></div>
                    <div><Button className='pb-1 hover:text-blue-400'>Support</Button></div>
                </Grid>

                {/* Column 3: Documentation */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 2 }}>Documentation</Typography>
                    <div><Button className='pb-1 hover:text-blue-400'>Guides</Button></div>
                    <div><Button className='pb-1 hover:text-blue-400'>API Status</Button></div>
                </Grid>

                {/* Column 4: Legal */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 2 }}>Legal</Typography>
                    <div><Button className='pb-1 hover:text-blue-400'>Claim</Button></div>
                    <div><Button className='pb-1 hover:text-blue-400'>Privacy</Button></div>
                    <div><Button className='pb-1 hover:text-blue-400'>Terms</Button></div>
                </Grid>
            </Grid>

            {/* Bottom Bar */}
            <Box sx={{ bgcolor: "black", color: "gray", textAlign: "center", py: 3, fontSize: '0.85rem' }}>
                <div>© {new Date().getFullYear()} ShopSmart Inc. All rights reserved.</div>
                <div>Made with ❤️ by Lakhan Raut.</div>
                <div>Icons made by Freepik from <a href="https://www.flaticon.com" className='text-blue-400 hover:underline'>www.flaticon.com</a></div>
            </Box>
        </div>
    )
}

export default Footer
