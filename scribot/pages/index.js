import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Horizontal_nav from '../components/navbar/horizontal_nav'
import axios from 'axios';
import CoinItem from '../components/CoinItem';
import { FaArrowRight ,FaChartBar,FaLaptopHouse, FaScroll} from "react-icons/fa";
import ProgressBar from '../components/widgets/progressBar';
import Accordion from '../components/Accordion'
import { AiOutlineFileProtect } from "react-icons/ai";
import { GoLaw, GoNumber } from "react-icons/go";
import { FaChartGantt, FaMessage } from "react-icons/fa6";
import { IoDocument, IoDocumentTextOutline } from "react-icons/io5";
import { BsArrowBarLeft, BsBagCheck, BsBox, BsCash, BsStar } from 'react-icons/bs';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper/modules';
import ReactStars from 'react-stars'
import ScrollToTop from 'react-scroll-to-top';
import { GiLetterBomb, GiOfficeChair, GiPresent, GiTalk } from 'react-icons/gi';
import { MdNumbers, MdSecurity } from 'react-icons/md';
import { useRouter } from 'next/router';

function Index() {
    const [coins, setCoins] = useState([]);
    const faqs = [
        {question:" What are the eligibility criteria for obtaining a loan ?", answer:"To be eligible for a loan with us, you must meet certain criteria including being of legal age (18 years or older) and possessing at least fair credit history. Additionally, we may require proof of identity, residency, and other documentation as part of our application process.",open:false},
        {question:"How much can I borrow from your company?", answer:" The loan amount you can borrow depends on various factors including your income and the specific loan product you're interested in. We offer a range of loan options to accommodate different financial needs, and the maximum amount you can borrow will be determined during the application process.",open:false},
        {question:"What is the interest rate for your loans?", answer:"Our interest rates vary depending on factors such as the type of loan, the duration of the loan, and your creditworthiness. We strive to offer competitive rates that are transparent and clearly communicated to our customers before they commit to borrowing from us.",open:false},
        {question:"Can I repay my loan early without incurring penalties?", answer:"Yes, you can typically repay your loan early without facing any prepayment penalties. We encourage responsible financial management and offer flexibility for borrowers who wish to pay off their loans ahead of schedule.",open:false},
        {question:"What happens when I cannot meet the deadline for repayment?", answer:"In this case, you can extend your repayment date, but this attempt usually attracts a small penalty fine.",open:false}
    
      ]
    
      const reviews = [
        {name:"James Hernandez",pic:"/static/reviewers/face1.jpg",review:"SwiftFund provided me with a lifeline when I was in a tough spot financially. Their team was compassionate and understanding, and they worked quickly to get me the funds I needed. I can't thank them enough for their help.",
      rating:4},
        {name:"Gao Lei",pic:"/static/reviewers/face17.jpg",review:"I had a great experience with SwiftFund. The loan specialists were knowledgeable and guided me through the process with ease. I'm happy with the loan terms and would recommend SwiftFund to anyone looking for financial assistance.",
      rating:4.6},
        {name:"Mary laurence",pic:"/static/reviewers/face3.jpg",review:"SwiftFund made the loan application process simple and straightforward. Their team was professional and responsive, and they were able to secure a loan for me in a timely manner. I'm very satisfied with their service.",
      rating:4.4},
        {name:" Robert Brown",pic:"/static/reviewers/face5.jpg",review:"I couldn't be happier with the service I received from SwiftFund. They were friendly, efficient, and helped me find a loan that met my needs perfectly. I would definitely use their services again in the future.",
      rating:5},
        {name:"Samuel Jones",pic:"/static/reviewers/face4.jpg",review:"SwiftFund went above and beyond to assist me with my loan application. Their team was proactive and communicative throughout the process, ensuring everything was taken care of. I highly recommend their services.",
      rating:5},
        {name:"Chloe Lewis",pic:"/static/reviewers/face11.jpg",review:"SwiftFund provided me with exceptional service when I needed it most. The loan specialists were understanding and guided me through the entire process. I highly recommend their services.",
      rating:4.9},
        {name:"Smith Adesanya",pic:"/static/reviewers/face6.jpg",review:"SwiftFund exceeded my expectations. Their team was friendly and knowledgeable, and they worked tirelessly to find the best loan option for me. I couldn't be happier with the outcome.",
      rating:5},
        {name:"Daniel Murphy",pic:"/static/reviewers/face7.jpg",review:"I had a fantastic experience with SwiftFund. From start to finish, they were responsive and helpful, making the loan process smooth and stress-free. I highly recommend their services to anyone in need of financial assistance.",
      rating:4.1},
        {name:"Noah Daniel",pic:"/static/reviewers/face8.jpg",review:"SwiftFund went above and beyond to help me secure a loan when others turned me down. Their dedication and expertise made all the difference, and I'm incredibly grateful for their support.",
      rating:5}
      ];
        const router = useRouter();

  return (
    <div><Head>

    {/* title */}
<title>Home</title>
{/* meta tags */}
<meta name="description" content="Welcome to Swiftfund, where your financial goals meet possibility! Get ready to embark on a seamless journey towards your dreams with our
 hassle-free lending solutions. Whether you're looking to fund your next big project, consolidate debt, or seize a lucrative opportunity, we've got you covered.
 Explore our range of flexible loan options tailored to fit your needs, backed by competitive rates and expert guidance. Say goodbye to financial
  barriers and hello to a brighter future with SwiftFund. Start your application today and let's make your aspirations a reality!" />

{/* header links */}
<link rel="icon" href="./static/logo.ico" />
</Head>



{/* navbar */}
<div className='w-full'>
 <Horizontal_nav activated={"home"} />
 {/* main */}
 <main className='relative overflow-hidden   text-white'>
 <ScrollToTop smooth />
    {/* Showcase section */}
   <div style={{background:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),URL(/static/display.jpg)",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}
    className='w-full min-h-[45rem]  '>

        <div className='flex flex-col items-start  mx-auto px-5 lg:px-36 py-12 pt-16 gap-5 lg:pt-36 md:pt-24'>
            
        <div className='text-5xl lg:text-7xl font-semibold'>
        Fast & Flexible  <br /> Business Loans:
      <span className='text-sky-400'>  in 10 Minutes</span>   </div>
        <p className=' text-sm'>Apply in under 2 minutes
        Get funds as fast as 24 hours
        <br />
        Applying won’t impact your credit score.
        We believe everyone deserves a second chance, and have your best interests at heart. </p>

  <div className='bg-gradient-to-r from-green-500 to-blue-500 w-56 p-5 cursor-pointer text-center flex items-center justify-center gap-2 text-lg sm:text-xl font-semibold rounded  mt-5 ' style={{
                transition:'all ease-in-out 0.5s ',
              }} onClick={(e)=> router.push("/auth/signup")}>Take a Loan <span><FaArrowRight /></span>
            </div>
    </div>
   </div>
   {/* mobile */}
   {/* second section */}
   <div className='min-h-screen bg-white flex flex-col lg:flex-row items-center lg:items-start lg:justify-center lg:gap-8 justify-start px-auto px-16 gap-8 py-8'>
   
    {/* content text */}
    <div className='text-slate-800 w-96'>
        {/* content title */}
    <div className='text-3xl lg:text-6xl font-semibold py-5'>
    Why is it Worth Taking a <span className='text-green-500'>Loan </span>from us ?
      </div>
   <div className='flex flex-col gap-8 items-center justify-center lg:hidden my-12'>

{/* items 1 */}
<div className='p-5 rounded rounded-lg  h-96 bg-green-600 text-white flex flex-col gap-'>
{/* Icon */}
<IoDocument className='text-4xl pb-16 ' />
{/* card title */}
<div className='font-semibold text-2xl lg:text-4xl'>
We do Not
Require Extra Documents
</div>
<p>By eliminating unnecessary paperwork, we aim to provide a more accessible and customer-friendly lending service. Whether you&apos;re seeking a personal loan, business loan, or any other type of financing, you can trust us to make the process straightforward and convenient.</p>

</div>
{/* items 2 */}
<div className='p-5 rounded rounded-lg  h-96 text-slate-700 flex flex-col gap-5'>
{/* Icon */}
<BsArrowBarLeft className='text-4xl pb-16 text-green-600' />
{/* card title */}
<div className='font-semibold text-2xl lg:text-4xl'>
We Return
Money for a Loan
</div>
<p>We prioritize customer satisfaction and strive to make the loan repayment process as smooth and stress-free as possible. We understand that life can be unpredictable, and we&apos;re here to support our clients every step of the way.</p>

</div>
{/* items 3 */}
<div className='p-5 rounded rounded-lg  h-96 bg-sky-400 flex flex-col gap-5 text-white'>
{/* Icon */}
<FaChartBar className='text-4xl pb-16 ' />
{/* card title */}
<div className='font-semibold text-2xl lg:text-4xl'>
We Reduce the Rate for
Regular Customers
</div>
<p>By offering reduced interest rates for regular customers, we aim to reward loyalty, foster long-term relationships, and provide added value to our clients&apos; borrowing experience.</p>

</div>
{/* items 4 */}
<div className='p-5 rounded rounded-lg  h-96 text-slate-700 flex flex-col gap-5'>
{/* Icon */}
<GiPresent className='text-4xl pb-16 text-green-600 ' />
{/* card title */}
<div className='font-semibold text-2xl lg:text-4xl'>
We Give out Gifts Weekly
and Pay off Interest
</div>
<p>We  are committed to going above and beyond to ensure the satisfaction and well-being of our clients. We understand that borrowing money is a significant decision, and we strive to make the experience as rewarding and positive as possible.</p>

</div>
{/* items 5 */}
<div className='p-5  rounded rounded-lg h-96 bg-sky-800 flex flex-col gap-5 text-white'>
{/* Icon */}
<BsCash className='text-4xl pb-16 ' />
{/* card title */}
<div className='font-semibold text-2xl lg:text-4xl'>
Auto Renewal when
Paying Interest
</div>
<p>Our auto-renewal feature for interest payments is designed to simplify the loan management process for our clients, providing them with peace of mind and convenience. We believe in empowering our clients with flexible options that suit their individual needs and preferences.</p>

</div>
{/* items 6 */}
<div className='p-5  rounded rounded-lg h-96 text-slate-700 flex flex-col gap-5 '>
{/* Icon */}
<GiOfficeChair className='text-4xl pb-16 text-green-600' />
{/* card title */}
<div className='font-semibold text-2xl lg:text-4xl'>
We Provide 3 Bonus Days
for Paying a Loan
</div>
<p>We aim to incentivize timely repayment behavior, promote financial responsibility, and enhance the overall borrowing experience for our clients.</p>

</div>

   </div>
    </div>

  {/* desktop */}
  
   
    {/* content text */}
   
    
   <div className='flex flex-col gap-8 items-center justify-center hidden lg:grid grid-cols-2 my-12 '>

{/* items 1 */}
<div className='p-5 rounded rounded-lg  h-96 bg-green-600 text-white flex flex-col gap-5 w-96'>
{/* Icon */}
<IoDocument className='text-4xl pb-16 ' />
{/* card title */}
<div className='font-semibold text-2xl lg:text-4xl'>
We do Not
Require Extra Documents
</div>
<p>By eliminating unnecessary paperwork, we aim to provide a more accessible and customer-friendly lending service. Whether you&apos;re seeking a personal loan, business loan, or any other type of financing, you can trust us to make the process straightforward and convenient.</p>

</div>
{/* items 2 */}
<div className='p-5 rounded rounded-lg  h-96 text-slate-700 flex flex-col gap-5 w-96'>
{/* Icon */}
<BsArrowBarLeft className='text-4xl pb-16 text-green-600' />
{/* card title */}
<div className='font-semibold text-2xl lg:text-4xl'>
We Return
Money for a Loan
</div>
<p>We prioritize customer satisfaction and strive to make the loan repayment process as smooth and stress-free as possible. We understand that life can be unpredictable, and we&apos;re here to support our clients every step of the way.</p>

</div>
{/* items 3 */}
<div className='p-5 rounded rounded-lg  h-96 text-slate-700 flex flex-col gap-5 w-96'>
{/* Icon */}
<GiPresent className='text-4xl pb-16 text-green-600 ' />
{/* card title */}
<div className='font-semibold text-2xl lg:text-4xl'>
We Give out Gifts Weekly
and Pay off Interest
</div>
<p>We are committed to going above and beyond to ensure the satisfaction and well-being of our clients. We understand that borrowing money is a significant decision, and we strive to make the experience as rewarding and positive as possible.</p>

</div>
{/* items 4 */}
<div className='p-5 rounded rounded-lg  h-96 bg-sky-400 flex flex-col gap-5 text-white w-96'>
{/* Icon */}
<FaChartBar className='text-4xl pb-16 ' />
{/* card title */}
<div className='font-semibold text-2xl lg:text-4xl'>
We Reduce the Rate for
Regular Customers
</div>
<p>By offering reduced interest rates for regular customers, we aim to reward loyalty, foster long-term relationships, and provide added value to our clients&apos; borrowing experience.</p>

</div>

{/* items 5 */}
<div className='p-5  rounded rounded-lg h-96 bg-sky-800 flex flex-col gap-5 text-white w-96'>
{/* Icon */}
<BsCash className='text-4xl pb-16 ' />
{/* card title */}
<div className='font-semibold text-2xl lg:text-4xl'>
Auto Renewal when
Paying Interest
</div>
<p>Our auto-renewal feature for interest payments is designed to simplify the loan management process for our clients, providing them with peace of mind and convenience. We believe in empowering our clients with flexible options that suit their individual needs and preferences.</p>

</div>
{/* items 6 */}
<div className='p-5  rounded rounded-lg h-96 text-slate-700 flex flex-col gap-5 w-96'>
{/* Icon */}
<GiOfficeChair className='text-4xl pb-16 text-green-600' />
{/* card title */}
<div className='font-semibold text-2xl lg:text-4xl'>
We Provide 3 Bonus Days
for Paying a Loan
</div>
<p>we aim to incentivize timely repayment behavior, promote financial responsibility, and enhance the overall borrowing experience for our clients</p>

</div>

   </div>
    </div>

 </main>

</div>
   
    <div className='bg-gradient-to-r from-cyan-700 to-sky-700 p-5  py-24 flex flex-col lg:flex-row items-center justify-center text-white gap-8 lg-8'>
     <div className='text-2xl lg:text-3xl font-semibold text-center'>
    <div>Contact us and Get
a 5% Discount on Your First Loan</div> 
 <div className='text-slate-300 text-sm lg:text-md'>You can also get up to 10% from referrals </div>
     </div>
    
     <div className='bg-green-500 w-56 p-5 cursor-pointer text-center flex items-center justify-center gap-2 text-lg sm:text-xl font-semibold rounded  mt-5 ' style={{
                transition:'all ease-in-out 0.5s ',
              }} onClick={(e)=> router.push("/auth/signup")}>
               
    Take a Loan <span><FaArrowRight /></span>
    </div>
   
     </div>
     {/* Third section */}
   <div className='min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center px-auto px-16 gap-8 py-16 '>
     {/* content text */}
     <div className='text-slate-800 w-96'>
        {/* content title */}
    <div className='text-3xl lg:text-4xl'>
    We <span className='text-green-500'>Understand </span>Your Needs
      </div>
      <p>We thrive on its people. Hailing from diverse backgrounds akin to our clientele, the Swiftfund team cherishes integrity and empathy. 
        Our loan specialists boast extensive experience assisting customers akin to yourself.
Comprising friendly and open-minded individuals, our team is fully accredited and equipped with professional training. 
We hold our commitment to customers in high regard, diligently tailoring loan products to align with your needs and goals.
</p>
    </div>
    <div className='border border-green-500 border-8  '>
        <Image src="/static/smile.jpg" alt={"Display Image"} width={500} height={500} className='w-96 h-96 ' />
    </div>
   


   </div>
     {/* Values of the team */}
<div className='p-5 min-h-screen gap-12 bg-gray-200 p-5 py-12 text-white text-center flex flex-col items-center justify-center'>

      {/* Title */}
  <div>
   <div className='text-slate-800 text-3xl font-semibold'>The Values of Our Team</div> 
<div className='text-slate-400 p-2'>We believe in giving back to the communities we serve</div>
  </div>
 
 {/* Cards */}

 {/* Wrapper */}
 <div className='flex flex-col lg:flex-row justify-center items-center gap-5'>

{/* items 1 */}
<div className='p-6 bg-white text-slate-600 w-72  flex flex-col gap-5'>

{/* Icon */}
<MdSecurity className='text-4xl pb-16 text-green-600' />
{/* card title */}
<div className='font-semibold text-2xl lg:text-4xl '>
We are responsible for the safety of your data confirmed by PCI DSS certificate
</div>
<p>The charms of pleasure lorem ipsum dolor sit lorem ipsum ammet.</p>

</div>
{/* items 2 */}
<div className='p-5 bg-black w-72  bg-green-600 flex flex-col gap-5'>
{/* Icon */}
<FaMessage className='text-4xl pb-16 ' />
{/* card title */}
<div className='font-semibold text-2xl lg:text-4xl '>
We honestly talk about loan conditions - without hidden fees & additional fees
</div>
<p>We recognize the impact our services can have on individuals and communities.
     Therefore, we take responsibility for our actions and decisions, ensuring they are socially responsible and contribute positively to society.</p>

</div>
{/* items 3 */}
<div className='p-5  w-72  bg-sky-500 flex flex-col gap-5'>
{/* Icon */}
<GoLaw className='text-4xl pb-16 ' />
{/* card title */}
<div className='font-semibold text-2xl lg:text-4xl'>
We comply with laws to protect your user rights
</div>
<p>We operate with honesty and transparency in all our dealings. 
    Integrity is the foundation of trust, and we believe in upholding the highest ethical standards in every aspect of our business.</p>

</div>
 </div>
   
     </div>
<div className='bg-white min-h-screen flex items-center justify-center'>
{/* FAQS */}
<div className=' ' id='faqs'>
    <div className="text-slate-600 text-3xl p-5 text-center font-semibold pb-24">
                Frequently Asked Questions
              </div>
              <div>
                <Accordion faqs={faqs}  />
              </div>
              <div className='text-gray-700 text-sm text-center mt-5 p-5'>
              If you have any further questions or specific inquiries, don&apos;t hesitate to contact us!
              </div>
</div>
</div>
<div className=' bg-green-600 p-5 py-24'>
    
    {/* newsletter */}
   <div className="flex flex-col lg:flex-row px-24 items-center justify-center gap-12 " > 
    
     <div className='text-4xl text-white font-semibold text-center w-72'>
        
     Subscribe and Learn About New Loan Conditions
  
      </div>
   
          <div className='flex flex-col items-center justify-center'>
           
          <div className='flex flex-col lg:flex-row px-24 gap-3'>
     
        <input name='newsletter' placeholder='Your E-mail' className='outline-none bg-white p-4 text-3xl rounded'/>
        <div className='cursor-pointer text-2xl p-4 bg-slate-800 text-white rounded btn text-center'>Subscribe</div>
       
    </div>
    <div className='text-white p-5 text-slate-100 text-sm lg:hidden'>You automatically give your consent <br /> to the processing of your personal data.</div>
    <div className='text-white p-5 text-slate-100 text-sm hidden lg:flex'>You automatically give your consent to the processing of your personal data.</div>
        </div>   

   </div>
   </div>
  {/* Reviews */}
  <div className='sm:px-5 xl:px-10  bg-white pt-36 relative overflow-hidden px-5 lg:px-56'>
    <div className='text-4xl text-slate-700 text-center font-semibold py-16'>Customer <span className='text-green-500'>Review</span></div>
    <p className='text-slate-700 text-center'>4.9 rating of 232 reviews</p>
  <Swiper
     
       
     spaceBetween={10}
     slidesPerView={1}
     grabCursor={true}
     centeredSlides={false}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
       
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} 
      modules={[Autoplay]}
      className="mySwiper z-60 justify-start"
    >
     
   {reviews.map((ele,index) =>(
        <SwiperSlide key={index}> {/* review */}
        <div className='flex flex-col w-full p-5 border border-gray-500 rounded rounded-lg text-slate-900 gap-2 mt-5 w-full bg-slate-200  h-64'>
          <div className='flex items-center gap-3  '>
            {/* Profile Picture */}
            <Image height={40} width={40} src={ele.pic} alt='' className='rounded-full object-fit'/>
            <div>
           {ele.name}
            </div>
          </div>

          {/* Rating */}
          <div className=''>
          <ReactStars
          edit={0}
  count={5}
  size={24}
  color2={'#ffd700'} 
  value={ele.rating}
  half />
          </div>
          <div>
            {ele.review}
          </div>
          
        </div></SwiperSlide>
      ))}
     
    </Swiper>
   </div>
  {/* footer */}
  <div className='     sm:px-5 xl:px-10  bg-white pt-36 relative overflow-hidden '>
    <div className='sm:container  sm:mx-auto w-96 flex flex-col xl:flex-row p-5 gap-5 sm:gap-5'>
<div className='text-sm '>
      <div className='text-lg font-semibold
      '>
       <a href="tel:">Contact Us</a> 
      </div>
      <div className='flex flex-col sm:flex-row text-gray-400 gap-5'>
         
      <a href='tel:' className=' font-semibold'>Book a Call</a>
    <a href='http://' className=' font-semibold'>Telegram</a>
    <a href='mailto:' className=' font-semibold'>Email Us</a>
      </div>
      
    </div>
    <div className='text-sm'>
      <div className='text-lg font-semibold
      '>
        Legal
      </div>
      <div className='flex flex-col sm:flex-row gap-5 text-gray-400'>
         <a href='http:// ' className=' font-semibold'>Privacy Policy</a>
    <a href='http://' className=' font-semibold'>Terms and Conditions</a>
    
      </div>
      
    </div>
    <div className='text-sm'>
      <div className='text-lg font-semibold
      '>
       Info
      </div>
      <div className='flex flex-col sm:flex-row gap-5 text-gray-400'>
         <a href='http:// ' className=' font-semibold'>How to Get</a>
    <a href='http://' className=' font-semibold'>FAQS</a>
    
    <a href='http://' className=' font-semibold'>Services</a>
    
    <a href='http://' className=' font-semibold'>Privacy</a>
    
      </div>
      
    </div>
    <div className='text-sm'>
      <div className='text-lg font-semibold
      '>
       Services
      </div>
      <div className='flex flex-col sm:flex-row gap-5 text-gray-400'>
         <a href='http:// ' className=' font-semibold'>Loan Without Refusal</a>
    <a href='http://' className=' font-semibold'>Loan Wthout Calls</a>
    
    <a href='http://' className=' font-semibold'>Credit Around the Clock</a>
    
    <a href='http://' className=' font-semibold'>Credit Without Certification</a>
    <a href='http://' className=' font-semibold'>Loan to Unemployed</a>
    <a href='http://' className=' font-semibold'>Credit without Certification</a>
    <a href='http://' className=' font-semibold'>Cash Loan</a>
    
      </div>
      
    </div>

    </div>
    
   
   </div>
   <div className=' bg-white text-center p-5 font-semibold'>
    &copy;2024 - SwiftFund
   </div>
   <div className='font-semibold bg-gray-200 text-center text-sm p-5 flex items-center justify-center gap-5'>
Powered by <img  src='/static/powered.png' alt='january'/> <span className='font-semibold'>january</span>
   </div>
  
</div>
  )
}

export default Index;