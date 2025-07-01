import Image from 'next/image'
import React from 'react'
import Sec4Image1 from "@/assets/Sec4Image1.png"
const Section4 = () => {
  const steps=[
    "Upload a clear photo of your prescription",
    "Your prescription is shared with nearby pharmacies",
    "Receive price quotes from multiple stores",
    "Select the best offer and place your order"
  ]
  return (
    <>
        <div className='w-full  flex flex-wrap justify-around  py-[8rem] items-center max-tablet:gap-[3rem] max-tablet:py-[5rem] ' >  
            <div className='w-[50%] flex flex-col gap-[1rem] max-tablet:w-[95%] max-tablet:items-center ' >
              <div className='flex flex-col gap-[1rem] max-tablet:gap-[2rem] ' >
                <h2 className='text-[3rem]  font-bold  max-tablet:text-center' >📷 Don't want to type? Just upload your prescription.</h2>
                <p className='text-[1.5rem] font-semibold text-gray-700 max-tablet:text-center ' >Snap a photo of your prescription and upload it. We'll share it with nearby medical shops, and you'll receive price quotes from multiple pharmacies. Choose the best deal and place your order with confidence.</p>
              </div>
              <div className='bg-blue-100 w-[90%] max-tablet:mt-[2rem] py-[2rem] rounded-[0.5rem] px-[1rem] flex gap-[1.5rem] flex-col shadow-[0px_4px_19px_8px_#4042434d]   ' >
                {
                  steps.map((i,index)=>{
                    return(
                      <h3 key={index} className='text-[1.5rem] font-semibold ' ><span className='text-blue-700 bg-[#adbff7e3] rounded-[50%] px-[0.9rem]  py-[0.2rem] ' >{index+1}</span> {i}</h3>
                    )
                  })
                }
              </div>
            </div>
            <div className='w-[40%] max-tablet:w-[70%] max-tablet:m-auto ' >
                <Image className='w-full' src={Sec4Image1} alt=''   />
            </div>
        </div>
    </>
  )
}

export default Section4