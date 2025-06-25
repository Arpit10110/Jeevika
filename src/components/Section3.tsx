import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Image1 from "@/assets/med1Homepage.png"
import Image2 from "@/assets/med2Homepage.png"
import Image3 from "@/assets/med3Homepage.jpg"
import Image from 'next/image';
import Link from 'next/link';
const Section3 = () => {
    interface MedicinePreview {
        name: string;
        image: any;
        desc: string;
      }
      const popularMedicines: MedicinePreview[] = [
        {
          name: "Dolo 650",
          image: Image1, // You can replace with actual image CDN if you prefer
          desc: "• Fever & Pain Relief"
        },
        {
          name: "Allegra 120mg",
          image: Image2, // Replace with an actual thumbnail if needed
          desc: "• Allergy & Cold Relief"
        },
        {
          name: "Pantop 40",
          image: Image3, // Replace with real product image
          desc: "• Acidity & Indigestion"
        }
      ];      
  return (
    <>
        <div className='py-[5rem] bg-gray-200 ' >
            <div className='flex justify-between flex-col items-center gap-[1rem] flex-wrap ' >
                <h2 className=' text-[3rem] font-bold  text-center' >🔍 Search & Compare Medicine Prices</h2>
                <p className='text-[1.3rem] font-semibold text-center text-gray-700 ' >Find the best deals on medicines by comparing prices across top e-pharmacies.</p>
            </div>
            <div className='flex items-center justify-center  mt-[5rem] w-[60%] m-auto shadow-[0px_4px_19px_8px_#4042434d] bg-white rounded-[10px] ' >
                <input type="text" className='w-[95%] text-[2rem]  py-[0.8rem] px-[1rem] focus:outline-none  '  placeholder='Search for medicines...'  />
                <button className='w-[5%] cursor-pointer flex items-center justify-center ' >
                    <SearchRoundedIcon className='!text-[3rem] !font-bold text-blue-600 ' />
                </button>
            </div>
            <div className='flex justify-around items-center mt-[8rem] ' >
                {
                    popularMedicines.map((i,index)=>{
                        return(
                            <div key={index} className='w-[25%] min-h-[50vh] pb-[1rem] bg-white rounded-[7px] cursor-default hover:scale-[1.01] transition-all shadow-[0px_4px_19px_8px_#4042434d] ' >
                                <div className='flex justify-around py-[1rem] items-center ' >
                                    <div className='w-[40%]' >
                                        <Image src={i.image} alt={i.name}  className='w-full h-[20vh] object-cover object-center ' />
                                    </div>
                                    <div className='w-[50%]' >
                                        <h2 className='text-[1.5rem] font-bold ' >{i.name}</h2>
                                        <h4 className='text-[1.2rem] font-semibold text-gray-700 ' >{i.desc}</h4>
                                    </div>
                                </div>
                                <div className='bg-gray-200 px-[0.5rem] py-[1rem] flex flex-col gap-[0.5rem] w-[95%] m-auto rounded-[5px] ' >
                                    <h4 className='text-[1.3rem] font-bold ' >Compare Price on</h4>
                                    <div className='w-full m-auto gap-y-[1rem] items-center justify-around font-semibold mt-[0.5rem] flex flex-wrap  ' >
                                        <h3 className='text-[1.3rem] text-gray-800  bg-red-300 w-[40%] rounded-[7px] text-center  ' >Tata1mg</h3>
                                        <h3 className='text-[1.3rem] text-gray-800  bg-green-400 w-[40%] rounded-[7px] text-center ' >Netmeds</h3>
                                        <h3 className='text-[1.3rem] text-gray-800  bg-yellow-500 w-[40%] rounded-[7px] text-center ' >PharmEasy</h3>
                                        <h3 className='text-[1.3rem] text-gray-800  bg-blue-300 w-[40%] rounded-[7px] text-center ' >Apollo</h3>
                                    </div>
                                </div>
                                <div className='mt-[1.5rem] w-[95%] m-auto  flex' >
                                 <Link href={"/"} target='_blank' className=' w-full bg-blue-700 text-white text-center py-[0.5rem] rounded-[7px] font-semibold text-[1.4rem]'  >Compare Prices</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Section3