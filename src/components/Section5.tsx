import Link from 'next/link';
import React from 'react'

const Section5 = () => {
    type Feature = {
        title: string;
        description: string;
      };
      
      const jeevikaFeatures: Feature[] = [
        {
          title: "🌿 Home Remedies",
          description: "Trusted natural remedies for everyday health concerns",
        },
        {
          title: "🥗 Diet Suggestions",
          description: "Personalized diet tips for a healthier lifestyle",
        },
        {
          title: "💊 Generic Alternatives",
          description: "Discover budget-friendly substitutes for costly medicines",
        },
        {
          title: "🛡️ Preventive Care",
          description: "Proactive tips to avoid common health issues",
        },
      ];
      
  return (
    <>
        <div  className='bg-[#EFFBF8] py-[8rem] flex flex-wrap justify-around  '   >
            <div className='w-[45%]   ' >

            </div>
            <div className='w-[45%] flex flex-col gap-[3rem]' >
                <div className='w-full flex flex-col gap-[1rem]'>
                    <h2 className='text-[3rem] font-bold ' >🤖 Your Health Companion - 24x7</h2>
                    <p className='text-[1.5rem] font-semibold text-gray-700  ' >
                    Jeevika AI offers smart health support at your fingertips — from home remedies and personalized diets to affordable generic alternatives. It's always on, always ready to guide you.
                    </p>
                </div>
                <div className='flex flex-wrap w-full justify-around gap-y-[3rem] '  >
                    {
                        jeevikaFeatures.map((feature, index) => (
                            <div key={index} className='w-[45%] flex flex-col gap-[7px] rounded-[7px] hover:scale-[1.03]  bg-white p-[1rem] justify-center items-center transition-all cursor-pointer shadow-[0px_4px_19px_8px_#4042434d]  '>
                                <span className='text-[1.8rem] text-center font-semibold '>{feature.title}</span>
                                <p className='text-[1.3rem] text-center'>{feature.description}</p>
                            </div>
                        ))
                    }
                </div>
                <Link href={"/jeevika-ai"} className='bg-blue-400 py-[0.5rem] rounded-[10px] text-center text-[2rem] font-semibold text-white hover:scale-[1.02] transition-all  shadow-[0px_4px_19px_8px_#4042434d] '  >🤖 Ask Jeevika AI</Link>
            </div>
        </div>
    </>
  )
}

export default Section5