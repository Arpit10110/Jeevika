"use client"
import Navbar from '@/components/Navbar'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const page = () => {
  return (
    <>
        <div>
            <Navbar/>
            <div>
                <div className='flex justify-center w-full  font-semibold gap-[0.8rem] items-center mt-[1rem]  ' >
                    <h1 className="text-[2rem] w-fit  ">
                        🤖 Jeevika AI helps you with
                    </h1>
                    <TypeAnimation
                            sequence={[
                                " home remedies",
                                " diet tips",
                                " generic medicines",
                                " preventive care",
                                " 24x7 health support"
                            ]}
                            wrapper="span"
                            speed={2}
                            style={{ fontSize: '2rem',width:"20%", color:"#00beb1", display: 'inline-block' }}
                            repeat={Infinity}
                            />
                </div>
                <div className='w-[90%] h-[75vh] bg-gray-200 m-auto mt-[2rem] rounded-[1rem] p-[1rem] flex flex-col justify-between  ' >
                    <div className='chatsection w-full h-[87%]  '  >
                    </div>
                    <div className='w-full h-[10%] ' >
                        <input type="text" placeholder='Ask Ai...' className=' focus:outline-none font-semibold bg-white w-[90%] text-[1.8rem] py-[0.5rem] rounded-[10px] px-[1rem] '  />

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page