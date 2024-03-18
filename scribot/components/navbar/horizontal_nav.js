
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {FaBars,FaSearch,FaUserCircle} from "react-icons/fa"
import Image from "next/image";
import { FaHamburger } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsC } from "react-icons/bs";
import { GiCancel,GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link"

// This navigation bar is for the landing page of the app

function Horizontal_nav({className,bgColor,brandSize,textColor,activated}){
    
  const [nav,setnav] = useState(false)
function open(){
setnav(true)
}
function close(){
setnav(false)
}
const router = useRouter();
   
  return (
   <div className={` bg-white shadow  fixed w-full z-50  backdrop-blur-xl  p-2 px-5`}>
    <div className={`  container mx-auto flex justify-between items-center py-2 ${className} xl:px-10 `}>

      {/* nav and brand logo */}
      <div className={`flex
        items-center justify-between w-full`}>

 {/* Brand */}
  <div className={`font-bold ${brandSize} h-6 w-full `}>
 {/* Logo */}
 <div className={`  p-2 text-white  h-6 w-full flex items-center  lg:text-xl relative`}>
 <Image src={"/static/logo.png"} alt={"logo"} width={50} height={50} /> 
 
 </div>
</div>

{/* navbar */}
<div className="gap-10 text-slate-300 items-center hidden lg:flex text-white">

    <div>
        <div className={`${activated === "home" && "text-yellow-400 font-semibold "} hover:text-yellow-400 cursor-pointer`}  style={{
                boxShadow:"0.02rem 0.02rem 5rem rgba(255, 0, 255, 0.2)",
                transition:'all ease-in-out 0.5s'
              }} onClick={e => router.replace("/")}>Home</div>
    </div>
   
  
    
    <div>
        <div className= {`${activated === "pricing" && "text-yellow-400 font-semibold"} hover:text-yellow-400 cursor-pointer`}  style={{
                boxShadow:"0.02rem 0.02rem 5rem rgba(255, 0, 255, 0.2)",
                transition:'all ease-in-out 0.5s'
              }} onClick={e => router.replace("QMS")}>QMS</div>
    </div>
    <div>
        <a href="tel:+2347036778009" className= {`${activated === "contact" && "text-yellow-400 font-semibold"} hover:text-yellow-400 cursor-pointer`}  style={{
                boxShadow:"0.02rem 0.02rem 5rem rgba(255, 0, 255, 0.2)",
                transition:'all ease-in-out 0.5s'
              }}>Contact</a>
    </div>
   
   
    <div className="p-2 px-4 border border-yellow-400 text-yellow-400 rounded rounded-lg hover:bg-yellow-400 hover:text-slate-900 font-semibold w-40 text-center cursor-pointer" style={{
            transition:'all ease-in-out 0.5s'
          }}>
        <div  href="/Trade" className= {`${activated === "trade" && "text-yellow-400 font-semibold"}`} onClick={e => router.replace("Trade")} >Trade</div>
    </div>
    
</div>
{/* small screen */}
<div className="lg:hidden relative ">
  <div className="btn p-2  rounded  cursor-pointer text-slate-900" style={{
                boxShadow:"0.02rem 0.02rem 5rem rgba(255, 0, 255, 0.2)",
                transition:'all ease-in-out 0.5s'
              }} onClick={()=>open()}>
    <RxHamburgerMenu className="text-2xl " />
  </div>

  </div>
   {/* nav bar */}
   <div className={`text-slate-300  top-0 absolute right-0 w-full h-screen text-2xl py-3 bg-gray-800 font-semibold  lg:hidden  ${nav ? "flex flex-col items-start  pt-24" :"hidden"}`}>
<div className="fixed top-5 right-2  p-1 text-md rounded btn cursor-pointer border rounded border-gray-500 hover:bg-gray-900" onClick={()=>close()}>
  <GiCancel  />
</div>
<div className="flex items-center justify-start w-full  border-slate-700 p-5 ">
    <Link href="/" className={`${activated === "home" && "text-yellow-400 font-semibold text-center "} hover:text-yellow-400 `}  style={{
            transition:'all ease-in-out 0.5s'
          }}>Home</Link>
</div>


<div className="flex items-center justify-start w-full  border-slate-700 p-5 ">
    <Link href="/QMS" className= {`${activated === "pricing" && "text-yellow-400 font-semibold text-center"} hover:text-yellow-400`}  style={{
            transition:'all ease-in-out 0.5s'
          }}>QMS</Link>
</div>
<div className="flex items-center justify-start w-full  border-slate-700 p-5 ">
    <a href="tel:+2347036778009" className= {`${activated === "contact" && "text-yellow-400 font-semibold text-center"} hover:text-yellow-400`}  style={{
            transition:'all ease-in-out 0.5s'
          }}>Contact</a>
</div>

<div className="p-2 bg-yellow-500 text-gray-800 rounded rounded-lg  font-semibold text-center border-slate-700 p-3 px-10 mx-4" >
    <Link href="/Trade" className= {``} >Trade</Link>
</div>
<div className=' text-center p-5 mt-24 text-sm'>
    &copy;2023 - CryptoCentre
   </div>
</div>

</div>
 
  </div>
  
 
   
    </div>
  )
}

export default Horizontal_nav;