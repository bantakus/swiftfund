import { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const Accordion = ({faqs}) => {


const faqsIns = JSON.parse(JSON.stringify(faqs))
// let relayed_faqs = false? faqsIns:[{question:"",answer:""}]
const [faqsState,setFaqsState] = useState([{question:"",answer:""},])


useEffect(
  ()=>{
    setFaqsState(faqsIns)
  },[]
)
function close_accordion(ind) {

  setFaqsState(prev => {
    let new_faqs = JSON.parse(JSON.stringify(faqsState))
    new_faqs[ind].open = false
return [...new_faqs]
})
}
function open_accordion(ind) {
  setFaqsState(prev => {
    let new_faqs = JSON.parse(JSON.stringify(faqsState))
    new_faqs[ind].open = true
  return [...new_faqs]
  })
}

  return (
    <div className='bg-slate-200 mx-5 md:mx-36 lg:mx-96 p-5 px-8 8  rounded rounded-lg'>
      {faqsState && faqsState.map((ele,ind)=>
 (<Collapsible key={ind} trigger={
  <div className='flex justify-between items-center  p-5 w-full font-semibold '>
       <div className=''> 
    {ele.question}
  </div>
  <div className='text-xl'>
       {ele.open?<MdKeyboardArrowUp />:<MdKeyboardArrowDown />}
  </div>
       </div>


 } className=' w-full' onClose={()=>close_accordion(ind)} onOpen={()=>open_accordion(ind)}>
<div className='text-gray-700 text-sm p-5'>
{ele.answer}
</div>
</Collapsible>
      ))}
      
       
    </div>
   
  );
};

export default Accordion;