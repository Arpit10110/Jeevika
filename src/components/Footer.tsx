import Link from 'next/link'
import React from 'react'
const Footer = () => {
  return (
    <>
      <div className='w-full py-[5rem] bg-[#1E2837] text-white flex justify-between px-[4rem] flex-wrap max-tablet:items-center max-tablet:gap-[5rem] ' >
        <div className='w-[60%] flex flex-wrap  justify-around items-center max-mobile:justify-start max-tablet:w-[100%] ' >
            <div className='flex flex-col gap-[1rem] w-[30%] max-mobile:w-[50%] max-xsmobile:w-[90%] max-xsmobile:items-center ' >
                <h2 className='text-[1.8rem] font-bold ' >Quick Links</h2>
                <div className='flex flex-col gap-[0.5rem] font-semibold text-gray-200 text-[1.4rem] ' >
                    <Link href={"/"} >Home</Link>
                    <Link href={"/"} >Medicines</Link>
                    <Link href={"/"} >Compare Price</Link>
                    <Link href={"/jeevika-ai"} >JeevaAi</Link>
                </div>
            </div>
            <div className='flex flex-col gap-[1rem] w-[30%] max-mobile:w-[50%] max-xsmobile:w-[90%] max-xsmobile:mt-[3rem] max-xsmobile:items-center ' >
                <h2 className='text-[1.8rem] font-bold ' >Services</h2>
                <div className='flex flex-col gap-[0.5rem] font-semibold text-gray-200 text-[1.4rem] ' >
                    <Link href={"/"} >Medicine Search</Link>
                    <Link href={"/"} >Prescription Upload</Link>
                    <Link href={"/"} >Price Comparison</Link>
                    <Link href={"/jeevika-ai"} >AI Health Assistant</Link>
                </div>
            </div>
            <div className='flex flex-col gap-[1rem] w-[30%] max-mobile:w-[50%] max-mobile:mt-[2rem] max-xsmobile:w-[90%] max-xsmobile:items-center' >
                <h2 className='text-[1.8rem] font-bold ' >ContactUs</h2>
                <div className='flex flex-col gap-[0.5rem] font-semibold text-gray-200 text-[1.4rem] ' >
                    <Link href={"https://www.instagram.com/___arpit_._/"} >Instagram</Link>
                    <Link href={"https://x.com/ArpitAgrahari26?t=IyDaE6R8sNL10VQlozEYrQ&s=09"} >Twitter</Link>
                    <Link href={"https://www.linkedin.com/in/arpit-agrahari-54aa192a1/"} >LinkedIn</Link>
                    <Link href={"https://www.facebook.com/arpit.agrahari.5"} >Facebook</Link>
                </div>
            </div>
        </div>
        <div className='w-[30%] flex flex-col gap-[1rem] max-tablet:w-[90%] max-xsmobile:items-center ' >
            <h2 className='font-Bungee text-[3rem] ' >Jeevika</h2>
            <p className='text-[1.4rem] text-gray-200 max-xsmobile:text-center ' >Making healthcare more accessible and affordable for everyone.</p>
            <h3 className='text-[1.4rem] text-gray-200  '>© 2025 Jeevika. All rights reserved.</h3>
        </div>
      </div>
    </>
  )
}

export default Footer