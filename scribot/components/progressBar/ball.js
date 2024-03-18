import React from 'react'


function Ball({progress,difference}) {
  return (
    <div>
       <div className="w-6 h-6 bg-neutral-200 dark:bg-neutral-200 rounded-full flex items-center justify-center relative overflow-hidden  shadow shadow-4xl animate__animated animate__bounce ">
       <div className={`${difference <= 20 && difference > 0? "bg-yellow-400 dark:bg-yellow-500": difference <= 0 ? "bg-red-400 dark:bg-red-500":"bg-indigo-500"}   absolute bottom-0 flex items-center justify-center w-full text-white`} style={{height:`${progress > 100? 100 : progress}%`}} ><span className='text-white text-sm'>{difference <= 20 && difference}</span></div>
  </div> 
    </div>
    
  )
}

export default Ball;