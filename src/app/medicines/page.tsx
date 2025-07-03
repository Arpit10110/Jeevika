"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import default_image from "@/assets/default_image.jpg"
import Footer from '@/components/Footer';
import Loader from "@/assets/loader.gif"
const page = () => {
    const [Isloading, setIsloading] = useState<boolean>(true);
    const [SerachInput, setSerachInput] = useState<string>("");
    const [MedData,SetMedData] = useState<any[]>([]);
    const [Page,SetPage] = useState<number>(1);

    const searchmed = async()=>{
        console.log(SerachInput);
    }


    const fetch_med = async(page:number)=>{
        try {
            console.log(page);
            setIsloading(true);
            const res= await axios.post("http://localhost:5000/medrouter/getallmedicines",{
                "page":page
            })
            console.log(res.data);
            SetMedData(res.data.data);
            setIsloading(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            
        }
    }


    useEffect(() => {
        fetch_med(1)
    }, [])
    



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
            {
                Isloading == true ? 
                <div className='w-full flex justify-center  min-h-[70vh] ' >
                    <Image src={Loader} alt='Loading...' className='object-fit w-[15%] h-fit mt-[7rem] '  />
                </div>:     
                <div className='w-full mt-[4rem] mb-[8rem] ' >
                    <div className='flex w-full flex-wrap justify-around gap-y-[6rem] gap-x-[2rem]  ' >
                        {
                            MedData.map((i:any,index:number)=>{
                                return(
                                    <div key={index} className='w-[20%] bg-gray-50 rounded-[10px] shadow-[0px_4px_19px_8px_#4042434d]  hover:scale-[1.03] transition-all ' >
                                        <Image src={default_image} alt='default_image' className='w-full rounded-[10px] h-[40vh] object-cover '  />
                                        <div className='flex gap-[0.5rem] p-[1rem] flex-col  ' >
                                            <h2 className='text-[1.5rem] font-bold ' >{i.name}</h2>  
                                            <h2 className='text-[1.2rem] text-gray-600 font-semibold '>{i.pack_size_label}</h2>      
                                            <div className='flex justify-between items-center ' >
                                                <h2 className='text-[1.5rem] text-green-500 font-bold' >₹ {i.price}</h2>
                                                <button className='text-[1.3rem] font-bold bg-[#00beb1] px-[0.8rem] py-[0.5rem] rounded-[1rem] text-white cursor-pointer ' >Add To Cart</button>
                                            </div>    
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='mt-[8rem] flex justify-center gap-[5rem] ' >
                        <button className='text-[1.5rem] font-bold bg-[#00beb1] px-[2rem] py-[0.5rem] rounded-[0.8rem] text-white cursor-pointer shadow-[0px_4px_19px_8px_#4042434d]  '  onClick={()=>{
                            if(Page > 1){
                            const page_number = Page - 1;
                                SetPage(page_number);
                                fetch_med(page_number);
                            }
                        }}  >Prev Page</button>
                        <button className='text-[1.5rem] font-bold bg-[#00beb1] px-[2rem] py-[0.5rem] rounded-[0.8rem] text-white cursor-pointer shadow-[0px_4px_19px_8px_#4042434d]  '  onClick={()=>{
                            const page_number = Page + 1;
                            SetPage(page_number);
                            fetch_med(page_number);
                        }}  >Next Page</button>
                    </div>
                </div>
            }
        </div>
        <Footer/>
    </>
  )
}

export default page