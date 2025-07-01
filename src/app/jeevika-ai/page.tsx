"use client";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import loadinggif  from "@/assets/loading.gif"
interface ChatData {
  role: string;
  data: string;
}

const Page: React.FC = () => {
  const [UserChat, SetUserChat] = useState<string>(""); 
  const [Chatdata, SetChatdata] = useState<ChatData[]>([{
    role: "ai",
    data: "Hi! I'm Jeevika AI 🤖. Ask me about home remedies, diet tips, or generic medicines."
  }
  ]); 
  const [AiThink,SetAiThink]  = useState<boolean>(false); 
  const scrollRef = React.useRef<HTMLDivElement | null>(null);


  const Submitchat = async (): Promise<void> => {
    try {
      const userchatdata: ChatData = {
        role: "user",
        data: UserChat,
      };
      await SetChatdata((prev) =>[...prev, userchatdata]);
      const temp_userQuery= UserChat
      SetUserChat("")
      SetAiThink(true);
      const res = await axios.post("/api/askjeevika-ai", {
        userquery: UserChat,
        chatdata: Chatdata,
      });
      SetAiThink(false);
      console.log(res);
      const aichatdata: ChatData = {
        role: "ai",
        data: res.data.message,
      };
      SetChatdata((prev) =>[...prev, aichatdata]);
    } catch (error) {
      console.error("Error submitting chat:", error);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [Chatdata,AiThink]);
  

  return (
    <>
      <div>
        <Navbar />
        <div>
          <div className="flex justify-center w-full font-semibold gap-[0.8rem] items-center mt-[1rem]">
            <h1 className="text-[2rem] w-fit">🤖 Jeevika AI helps you with</h1>
            <TypeAnimation
              sequence={[
                " home remedies",
                " diet tips",
                " generic medicines",
                " preventive care",
                " 24x7 health support",
              ]}
              wrapper="span"
              speed={2}
              style={{
                fontSize: "2rem",
                width: "20%",
                color: "#00beb1",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </div>
          <div className="w-[90%] h-[75vh] bg-gray-200 m-auto mt-[2rem] rounded-[1rem] p-[1rem] flex flex-col justify-between">
            <div className="allchat w-full h-[87%] overflow-y-scroll flex flex-col gap-[1rem] ">
                {
                    Chatdata.map((i:{role:string,data:string},index:number)=>{
                        return(
                            <div className="flex gap-[0.5rem]  " key={index}>
                               { i.role == "user" ? 
                                <h3  ><AccountCircleIcon className="!text-[2.5rem]"/></h3>:
                                <h3><AutoAwesomeIcon className="!text-[2.5rem] text-[#00beb1]  "/></h3>
                               }
                               { i.role == "user" ? 
                                <h2 className="!text-[1.5rem] font-semibold text-gray-700 ">{i.data}</h2>
                                :
                                <h2 className="!text-[1.5rem] font-semibold  ">{i.data}</h2>
                               }
                            </div>
                        )
                    })
                }
                  {/* Loader message when AI is thinking */}
                {AiThink && (
                  <div className="flex gap-[0.5rem] items-center">
                    <AutoAwesomeIcon className="!text-[2.5rem] text-[#00beb1]" />
                    <img src={loadinggif.src} alt="Loading..." className="w-[9%] object-cover object-center h-[2.5vh] " />
                  </div>
                )}

                {/* Scroll anchor */}
                <div ref={scrollRef} />
            </div>
            <div className="w-full h-[10%] flex justify-between">
              <input
                type="text"
                value={UserChat}
                placeholder="Ask Ai..."
                className="focus:outline-none font-semibold bg-white w-[93%] text-[1.8rem] py-[0.5rem] rounded-[10px] px-[1rem]"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  SetUserChat(e.target.value)
                }
                onKeyDown={(e:any)=>{
                  if (e.key === "Enter" && UserChat.trim() !== "") {
                    Submitchat();
                  }
                }}
              />
              <button
                className="w-[5%] bg-blue-500 rounded-[10px] flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-all"
                onClick={Submitchat}
              >
                <SendIcon className="!text-[2.5rem] rotate-[340deg] text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;