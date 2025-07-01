import Link from "next/link"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { SignedIn, SignedOut } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between px-[2rem] py-[1rem] items-center  " >
        <div>
          <Link href={"/"} className="text-[2rem] font-bold font-Bungee " >Jeevika</Link>
        </div>
        <div className="flex  justify-center items-center gap-[3rem] text-[1.5rem] font-semibold max-slaptop:hidden   " >
          <Link className="flex transition-all hover:scale-[1.05]  "  href={"/"} >Home</Link>
          <Link className="flex transition-all hover:scale-[1.05]  "  href={"/"} >Medicines</Link>
          <Link className="flex transition-all hover:scale-[1.05]  "  href={"/"} >Compare Price</Link>
          <Link className="flex transition-all hover:scale-[1.05]  "  href={"/"} > <LocalMallIcon className="!text-[1.8rem]" /> </Link>
          <Link className="flex transition-all hover:scale-[1.05]  "  href={"/jeevika-ai"} >Jeevika AI</Link>
        </div>
        <div className="hover:scale-[1.05] transition-all max-slaptop:hidden   " >
          <SignedIn>   
            <Link  className="text-[1.5rem] cursor-pointer  font-semibold  bg-[#00beb1] px-[1rem] py-[0.3rem] rounded-[5px] text-white "  href={"/profile"} >Profile</Link>
          </SignedIn>
          <SignedOut>
             <Link  className="text-[1.5rem] cursor-pointer  font-semibold  bg-[#00beb1] px-[1rem] py-[0.3rem] rounded-[5px] text-white "  href={"/sign-in"} >SignIn</Link>
          </SignedOut>
        </div>
      </nav>
    </>
  )
}

export default Navbar