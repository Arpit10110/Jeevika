"use client"
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
const page = () => {

    const [SerachInput, setSerachInput] = useState<string>("");

    const searchmed = async()=>{
        console.log(SerachInput);
    }

  return (
    <>
        <Navbar/>
        <div className='w-full' >
            <div  className='w-full flex justify-between px-[3rem] py-[4rem] items-center ' >
                <div className='w-[70%] flex justify-center rounded-[10px]  bg-gray-200 items-center shadow-[0px_4px_19px_8px_#4042434d]' >
                    <input type="text" placeholder='Search medicine...' className='w-[95%] py-[0.5rem] px-[1rem] text-[1.8rem] font-semibold focus:outline-none  ' value={SerachInput} onChange={(e)=>setSerachInput(e.target.value)}   onKeyDown={(e:any)=>{
                    if (e.key === "Enter") {
                        searchmed();
                    }
                      }} />
                    <button onClick={searchmed}  className='w-[5%] flex items-center justify-center cursor-pointer' ><SearchIcon className='!text-[3rem] text-gray-700  '  /></button>
                </div>
                    <Link href={"/"} className='bg-[#00beb1] text-white py-[0.5rem] px-[1rem] text-[1.8rem] rounded-[1rem] font-semibold  hover:scale-[1.02] transition-all shadow-[0px_4px_19px_8px_#4042434d]'  >Upload Prescription 📄</Link>
            </div>
        </div>
    </>
  )
}

export default page