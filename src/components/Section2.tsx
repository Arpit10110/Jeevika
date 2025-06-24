import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MessageIcon from '@mui/icons-material/Message';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const Section2 = () => {
    interface BiddingStep {
        step: string;
        description: string;
        icon: any; 
      }
      const biddingSteps:BiddingStep[] = [
        {
          step: "Step 1",
          description: "Search and select the medicines you need, then add them to your cart — just like any online store.",
          icon: <LocalMallIcon className='!text-[3rem] text-blue-500' />
        },
        {
          step: "Step 2",
          description: "We send your order details to nearby verified medical stores via SMS and WhatsApp instantly.",
          icon: <MessageIcon className='!text-[3rem] text-red-500' />
        },
        {
          step: "Step 3",
          description: "Local pharmacies reply with their best price offers, and each one tries to give you the lowest deal.",
          icon:<CurrencyRupeeIcon className='!text-[3rem] text-white rounded-[50%] py-[0.3rem] bg-green-500 ' />
        },
        {
          step: "Step 4",
          description: "Compare all the received bids, select the one that suits you best, and confirm the final purchase.",
          icon: <CheckCircleIcon className='!text-[3rem] text-blue-500' />
        }
      ];
      
  return (
    <>
    <div className='py-[5rem]' >
        <div className='flex justify-between flex-col items-center gap-[1rem] flex-wrap ' >
            <h2 className=' text-[3rem] font-bold  text-center' >🏥 Let Medical Shops Bid for You!</h2>
            <p className='text-[1.3rem] font-semibold text-center' >Save time and money with local stores bidding to serve you best.</p>
        </div>
        <div className='flex  justify-around items-center flex-wrap mt-[5rem] gap-y-[3rem] ' >
            {
                biddingSteps.map((i,index)=>{
                    return(
                        <div className='w-[40%]  bg-gray-200 p-[1rem] flex flex-col gap-[0.8rem] items-center rounded-[5px] cursor-pointer hover:scale-[1.02] transition-all py-[3.5rem] px-[3rem] ' key={index}>
                            <h3  >{i.icon}</h3>
                            <h1 className='text-center text-[1.8rem] font-bold  '>{i.step}</h1>
                            <p className='text-center text-[1.5rem] font-semibold ' >{i.description}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Section2