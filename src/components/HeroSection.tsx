import Image from 'next/image'
import React from 'react'
import HeroImage from "@/assets/heroImage.jpg"
import Link from 'next/link'
const HeroSection = () => {
  return (
    <>
        <div className='w-full flex justify-between bg-[#D6E3EB] ' >
            <div className='w-[50%] flex items-center ' >
                <div className='flex flex-col pl-[2rem] gap-[2rem] ' >
                    <h1 className='text-[3.5rem] font-bold ' >Buy Medicines Smarter — Save More, Stay Healthy</h1>
                    <p className='text-[1.5rem] font-semibold ' >Buy medicines directly from nearby stores or compare prices across top Indian platforms like Tata 1mg & PharmEasy. Save time, save money — all in your language.</p>
                    <div className='flex gap-[3rem] ' >
                        <Link className='text-[1.5rem] font-semibold bg-white hover:scale-[1.02] transition-all rounded-[5px] px-[1rem] py-[0.3rem] '  href={"/"} >🛒 Start Buying</Link>
                        <Link className='text-[1.5rem] font-semibold bg-white hover:scale-[1.02] transition-all rounded-[5px] px-[1rem] py-[0.3rem] '  href={"/"}>🔍 Check Best Prices</Link>
                    </div>
                </div>
            </div>
            <div className='w-[50%]' >
                <Image className='w-full' src={HeroImage} alt='' />
            </div>
        </div>
    </>
  )
}

export default HeroSection