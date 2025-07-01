import Link from 'next/link'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <>
      <div className='w-full py-[5rem] bg-[#1E2837] text-white flex justify-between px-[4rem] ' >
        <div className='w-[60%] flex justify-around items-center ' >
            <div className='flex flex-col gap-[1rem] w-[30%]  ' >
                <h2 className='text-[1.8rem] font-bold ' >Quick Links</h2>
                <div className='flex flex-col gap-[0.5rem] font-semibold text-gray-200 text-[1.4rem] ' >
                    <Link href={"/"} >Home</Link>
                    <Link href={"/"} >Medicines</Link>
                    <Link href={"/"} >Compare Price</Link>
                    <Link href={"/"} >JeevaAi</Link>
                </div>
            </div>
            <div className='flex flex-col gap-[1rem] w-[30%] ' >
                <h2 className='text-[1.8rem] font-bold ' >Services</h2>
                <div className='flex flex-col gap-[0.5rem] font-semibold text-gray-200 text-[1.4rem] ' >
                    <Link href={"/"} >Medicine Search</Link>
                    <Link href={"/"} >Prescription Upload</Link>
                    <Link href={"/"} >Price Comparison</Link>
                    <Link href={"/"} >AI Health Assistant</Link>
                </div>
            </div>
            <div className='flex flex-col gap-[1rem] w-[30%] ' >
                <h2 className='text-[1.8rem] font-bold ' >ContactUs</h2>
                <div className='flex flex-col gap-[0.5rem] font-semibold text-gray-200 text-[1.4rem] ' >
                    <Link href={"https://www.instagram.com/___arpit_._/"} >Instagram</Link>
                    <Link href={"https://x.com/ArpitAgrahari26?t=IyDaE6R8sNL10VQlozEYrQ&s=09"} >Twitter</Link>
                    <Link href={"https://www.linkedin.com/in/arpit-agrahari-54aa192a1/"} >LinkedIn</Link>
                    <Link href={"https://www.facebook.com/arpit.agrahari.5"} >Facebook</Link>
                </div>
            </div>
        </div>
        <div className='w-[30%] flex flex-col gap-[1rem]' >
            <h2 className='font-Bungee text-[3rem] ' >Jeevika</h2>
            <p className='text-[1.4rem] text-gray-200  ' >Making healthcare more accessible and affordable for everyone.</p>
            <h3 className='text-[1.4rem] text-gray-200  '>© 2025 Jeevika. All rights reserved.</h3>
        </div>
      </div>
    </>
  )
}

export default Footer