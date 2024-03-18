import Head from 'next/head'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Horizontal_nav from '../components/navbar/horizontal_nav'

import {BsStarFill,BsKeyFill,BsKey,BsGraphUp,BsImage, BsPenFill, BsPen, BsPalette,BsArrowDownRight,BsRocket,BsCheck, BsClock, BsOption, BsPerson} from "react-icons/bs"

import {GiProfit} from  "react-icons/gi"

import Image from 'next/image'
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper/modules';
import ReactStars from 'react-stars'
import Accordion from '../components/Accordion'

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FaSmile, FaTimes } from 'react-icons/fa'
import { MdPayment } from 'react-icons/md'

import CoinItem from '../components/CoinItem';

import Link from 'next/link'
import ProgressBar from '../components/widgets/progressBar'
import { useRouter } from 'next/router'


function Home() {

  
  const [user,setUser] = useState(false);
  
  const faqs = [
    {question:"What gift card brands do you accept?", answer:"We accept a wide range of gift card brands, including popular ones like Amazon, iTunes, and Google Play. Check our list for the full selection.",open:false},
    {question:"Can I sell my unused gift cards for cryptocurrency?", answer:" Yes, you can! Our platform allows you to exchange your unused gift cards for cryptocurrency of your choice.",open:false},
    {question:" How long does it take to receive my cryptocurrency/Cash after a transaction?", answer:"Cryptocurrency/Gift card transactions are typically completed within minutes. In some cases, it may take a bit longer due to network confirmation times.",open:false},
    {question:"Do you charge fees for gift card transactions?", answer:"Yes, we have a transparent fee structure.",open:false},
    {question:"What cryptocurrencies can I Trade?", answer:"We support a variety of cryptocurrencies, including Bitcoin, Ethereum, Litecoin, and more. You can choose your preferred cryptocurrency during the transaction.",open:false},
    {question:"What happens if my gift card code is invalid or doesn't work?", answer:" If you encounter any issues with your gift card code, our support team is here to assist you promptly.",open:false},
    {question:" Do you offer customer support?", answer:"Absolutely. Our customer support team is available 24/7 to assist you with any questions or concerns.",open:false},
    {question:"Is there a loyalty program for frequent customers?", answer:"Yes, we have a loyalty program that rewards our valued customers with discounts and special offers.",open:false},
    {question:"  Are your services priced competitively?", answer:"  Yes, we believe in offering high-quality services at competitive prices. Our pricing is transparent, and we provide detailed quotes for each transactions. Our focus is on delivering value to our clients.",open:false}

  ]

  const router = useRouter();

  const services_ = [{
    title:"24/7 Service",
    icon:<BsClock />,
    readmore:false
  },{
    title:"Best Rate At Every Situation",
    icon:<GiProfit />,
    readmore:false
  },{
    title:"Fast and Reliable Transaction", 
    icon:<BsRocket />,
    readmore:false
  },{
    title:"Instant Payment",
    icon:<MdPayment />,
    readmore:false
  },{
    title:"Multiple Payment Options",
    icon:<BsOption />,
    readmore:false,
    readmore:false
  },{
    title:"Good Customer Service",
    icon:<FaSmile />,
    readmore:false,
    readmore:false
  }]



const reviews = [
  {name:"Iyanu opeyemi",pic:"/static/reviewers/face1.jpg",review:"Quick and hassle-free! Converted my gift cards to cash in minutes. Highly recommended!",
rating:4},
  {name:"Shegzy",pic:"/static/reviewers/face17.jpg",review:"This platform is a lifesaver!" ,
rating:4.6},
  {name:"Samuel Ayo",pic:"/static/reviewers/face3.jpg",review:"I feel safe trading cryptocurrencies on this exchange.",
rating:4.4},
  {name:"Festus Ubah",pic:"/static/reviewers/face5.jpg",review:"Really customer friendly, the support team guided me through my first transaction.",
rating:5},
  {name:"Dolapo James",pic:"/static/reviewers/face4.jpg",review:"Convenient and efficient! Bought Bitcoin with my gift card, and the process was super smooth.",
rating:5},
  {name:"Ogunfiditmi Olaoluwa",pic:"/static/reviewers/face11.jpg",review:"Amazing customer support! They resolved my gift card issue within minutes.",
rating:4.9},
  {name:"Irawo Samuel",pic:"/static/reviewers/face6.jpg",review:"Regularly using this platform. The loyalty program is a great incentive!",
rating:5},
  {name:"Anuoluwa Opemipo",pic:"/static/reviewers/face7.jpg",review:"Traded my Crypto in few minutes.",
rating:5},
  {name:"Chukwuemeka Stephen",pic:"/static/reviewers/face8.jpg",review:"Good selection of cryptocurrencies, but I'd love more market trend information.",
rating:4},
  {name:"Olajuigbe loveth",pic:"/static/reviewers/face9.jpg",review:"Eco-friendly crypto exchanges are the future! Keep up the good work.",
rating:5},
  {name:"sir Perlz",pic:"/static/reviewers/face10.jpg",review:"TCouldn't be happier with the service. Easy and efficient way to trade gift cards and crypto.",
rating:4.7},
  {name:"Obasanjo Tumininu",pic:"/static/reviewers/face12.jpg",review:"Reliable exchange, but automatic exchange on the site would be appreciated.",
rating:4.3},
  {name:"Topefatuase Monica",pic:"/static/reviewers/face15.jpg",review:"Prompt service. Traded my gift card within minutes!",
rating:4},
  {name:"Grace Godswill",pic:"/static/reviewers/face18.jpg",review:"Quick Response to my need and Solid exchange.",
rating:5},
  {name:"Abigail Umolu",pic:"/static/reviewers/face19.jpg",review:"It has to be the best platform for trading crypto and giftcards.",
rating:4.8},
];
  // state for the services the site offers
  const [services,setServices] = useState(services_);
  
  
  const  switchReadMore = (index) =>{
   console.log(index)
   if(index){
    
    let service_selected = services[index];
service_selected.readmore = true;
   
   return setServices(prev =>{
    prev.splice(index,1,service_selected)
    return [...prev]
   })
   }
   
  }

  useEffect(
    ()=>{
      setUser(JSON.parse(localStorage.getItem('user')))
    },[]
  )

  const getAll = async () => {
    const res = await axios.get(api.getPostsUrl).catch( err => console.log(err));

   const data = await res?.data;
   return data;
  }


  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getPostFeeds = async () => {
      try{
        const res = await axios.get(api.getPostsUrl,{
          signal:controller.signal
        });
        console.log(res.data);  
        isMounted && dispatch(getAllPosts(data));
      }
      catch(err){
        console.log(err)
      }
    };
    getPostFeeds();

    return () =>{
      isMounted = false;
      controller.abort();
    }
},[])

const [coins, setCoins] = useState([]);

const api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

useEffect(() => {
  axios.get(api).then((response) => {
    setCoins(response.data)
  }).catch((error) => {
    console.log(error)
  })
}, [])



  return (
    <div className='min-h-screen overflow-hidden w-full'>
          <Head>

            {/* title */}
        <title>Swiftfund</title>
        {/* meta tags */}
        <meta name="description" content=" Trade or Exchange all your cryptocurrencies and giftcards  with us.
         We are driven by the belief that everyone should have the opportunity to access, profit from, and benefit from contemporary digital assets, especially those who are most in need.
         We accept a wide range of gift card brands, including popular ones like Amazon, iTunes, and Google Play. Check our list for the full selection.
         We support a variety of cryptocurrencies, including Bitcoin, Ethereum, Litecoin, and more. You can choose your preferred cryptocurrency during the transaction.
         " />

        {/* header links */}
        <link rel="icon" href="./static/logo.ico" />
      </Head>



      {/* navbar */}
      <div className='w-full'>
         <Horizontal_nav activated={"home"} />

      </div>
     
     <aside className='fixed right-5 p-2 xl:px-10 mt-16 hidden lg:block'>

       
      
     </aside>
      <main className='relative overflow-hidden'>
       

       {/* color Cool Grey area */}
       <div className='bg-black add_style w-full overflow-hidden p-5'>
        <div className='sm:container  sm:mx-auto  sm:px-5 xl:px-10  w-full pt-24 sm:pt-40 relative overflow-hidden'>
       
     
          {/* intro */}
  
          <div className='text-center overflow-hidden'>
         <div className='flex flex-col sm:flex-row sm:justify-between items-center'>
          <div>
            {/* showcase Title */}
            <div className='font-bold text-black text-3xl sm:text-4xl'>
              <span className='text-yellow-600'>Trade All Your</span> Cryptocurrencies & Giftcard With Us
            </div>
            {/* showcase content */}
            <div className='text-slate-800 text-lg text-lead mt-3'>
              We are driven by the belief that everyone should have the opportunity to access, profit from, and benefit from contemporary digital assets, especially those who are most in need.
            </div>
            
            <div className='hover:bg-yellow-600 hover:text-white p-3 text-center text-lg sm:text-xl font-semibold  text-yellow-600 border border-lg border-yellow-600 rounded rounded-lg mt-5 ' style={{
                transition:'all ease-in-out 0.5s',
              }} onClick={(e)=> router.push("Trade")}>
               
      Trade Now 
    </div>
   
     
    
          </div>

          {/* Showcase Image */}
          <div className='mt-12 sm:mt-0 '>
            <Image src="/static/display.png" alt="display" className='' height={1200} width={1700} />
          </div>
         </div>
      
           {/* section 2 */}
  
  
           <div className=' leading-loose min-h-screen flex flex-col items-center justify-center pb-8 overflow-hidden'>
          {/* header */}
          <div className=' text-2xl text-center font-semibold pb-12 text-black'>
           And Why Should You Choose CryptoCenter?
          </div>
  
             <div className=''> 
             <div className='text-white w-full grid sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-3 justify-center items-center gap-12 overflow-hidden pt-5'>
      {services.map((ele,index) => (<AnimationOnScroll animateIn=" animate__fadeInUp "     className='flex  gap-5 items-start hover:border-gray-600  border border-gray-500    p-5 rounded rounded-lg' key={index}>
              {/* icon */}
              <div key={index} className=' text-2xl '>
            
                <div className=' text-slate-800 relative flex items-center justify-center '>
                  
                 <span className='z-20 text-yellow-600'>{ele.icon}</span> 
                </div>
              </div>
              {/* content and title */}
              <div className='flex flex-col items-start justify-center'>
                {/* title */}
              <div key={index} className='font-semibold text-start text-xl text-black'>
                {ele.title}
              </div>
              {/* content */}
              </div>
          </AnimationOnScroll>) )}
</div>
  </div> 
  </div>    
  </div>     
       </div>
       </div>
       
   
{/* Section white area*/}
{/* section 1 */}
      <div className='bg-white w-full pt-16 relative text-slate-800 p-5'>

        <div className="sm:container sm:mx-auto sm:px-5 xl:px-10 overflow-hidden flex flex-col items-center justify-center w-full" > 
          {/* Intro Text */}
          <div className='text-2xl text-black font-semibold text-center w-full font-semibold mt-8'>Let&apos;s Save you Time and Money</div>
   <p className='text-slate-600 text-center  py-3 pb-12 text-sm'>
   Our rates and prices are regularly updated to stay correct according to market trends because the aim is not to only make profit but to ensure every customer gets the proper and satisfactory value for any transaction made.
   </p>

        </div>  
      </div>

      {/*Section gray area  */}
     {/* section Reviews */}
     <div className='w-full bg-gray-900 min-h-screen p-5 pt-12 '>
      <div className='sm:container sm:mx-auto sm:px-5 xl:px-10 overflow-hidden flex flex-col items-center justify-center w-full'>
              {/* The Title of the review part */}
              <div className='text-2xl text-slate-200 py-5 pt-16 text-center flex flex-col sm:flex-row gap-2 items-center justify-center font-semibold'>
                CyrptoCenter Received <span className='text-yellow-500'><BsStarFill /></span> 4.8/5 Stars in Over 1000+ Reviews
              </div>

<div className='w-full mt-5'>

     
   
 
</div>
           
<div className='w-full mt-5'>

</div>
       <div className='text-[10rem] text-gray-800 mt-24 font-slim mb-24'>
       <BsGraphUp />
       </div>   
             
      </div>
    
     </div>
     {/* Black Section Area 2 */}
   <div className='bg-black w-full'>
    
   <div className="sm:container sm:mx-auto sm:px-5 xl:px-10 overflow-hidden flex flex-col items-center justify-center w-full" > 
     {/*  Market Summary */}
     <div className='mt-16'>
        <div className='text-sm text-yellow-500 text-center py-3 font-semibold'>
          Market Summary
        </div>
        <div className='text-center text-2xl leading-relaxed font-semibold px-5'>
      Live Crypto Stats
        </div>
        <div className="p-2 bg-yellow-500 text-gray-800 border hover:border-yellow-500  hover:bg-yellow-600 rounded rounded-lg my-5 font-semibold text-center border-slate-700 p-3 px-10 mx-4" >
    <a href="" className= {``} >Trade/Exchange</a>
</div>
        {/* grid */}
         <div className="heading flex items-center justify-between  text-yellow-400 mt-5 px-5">
        {coins.length > 0 ?<div>
          <div className='heading flex items-center justify-between  text-yellow-400 mt-5 px-5'>
               
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'> Market Cap</p>
                </div>

                {coins.map((coins,index)=> {
                    return (
                        
                            <CoinItem coins={coins} key={index} />
                       
                    )
                })}
        </div>
           :<div className='w-full flex items-center justify-center py-24  ' >
           <ProgressBar />
          </div> }
          </div>
         <div className="text-lg  p-5 text-center mt-8">
          Got Questions Or Need Help?...
         </div>
         <div className='text-center text-lg'>
          Don&apos;t fret, We&apos;ve Got You Covered.
           
         </div>
         <div>
         just contact us.
         </div>
         <div className='w-full flex justify-center'>
         </div>
  
      </div>
{/* FAQS */}
<div className='mt-24 w-full p-5'>
    <div className="text-2xl  p-5 text-center">
                Frequently asked Questions
              </div>
              <div>
                <Accordion faqs={faqs} />
              </div>
              <div className='text-gray-300 text-sm text-center mt-5'>
              If you have any further questions or specific inquiries, don&apos;t hesitate to contact us!
              </div>
</div>
            

   </div>
   {/* footer */}
   <div className='flex flex-col sm:flex-row p-5 gap-5 sm:container  sm:mx-auto  sm:px-5 xl:px-10  w-full pt-36 relative overflow-hidden sm:gap-24'>
    <div className='text-sm'>
      <div className='text-lg font-semibold
      '>
       <a href="tel:+2347036778009">Contact Us</a> 
      </div>
      <div className='flex flex-col sm:flex-row text-gray-400 gap-5'>
         
      <a href='tel:+2347036778009' className='hover:text-white font-semibold'>Book a Call</a>
    <a href='http://' className='hover:text-white font-semibold'>Telegram</a>
    <a href='mailto:cryptocentree@gmail.com' className='hover:text-white font-semibold'>Email Us</a>
      </div>
      
    </div>
    <div className='text-sm'>
      <div className='text-lg font-semibold
      '>
        Legal
      </div>
      <div className='flex flex-col sm:flex-row gap-5 text-gray-400'>
         <a href='http:// ' className='hover:text-white font-semibold'>Privacy Policy</a>
    <a href='http://' className='hover:text-white font-semibold'>Terms and Conditions</a>
    
      </div>
      
    </div>
   
   </div>
   <div className=' text-center p-5'>
    &copy;2023 - CryptoCentre
   </div>
   <div className=' text-center text-sm p-5'>
    Built by CYBUG TECHNOLOGIES
   </div>
   </div>

      </main>

        


      {/* {
        !user &&  <div>
        <AuthModal />
      </div>
      } */}
     
       
    </div>
  )
}

export default Home