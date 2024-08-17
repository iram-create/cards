import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion"
function Card({data,reference}) {
  return (
   
         <motion.div drag  dragConstraints={reference}  whileDrag={{scale:1.2}} dragElastic={.1}  dragTransition={{ bounceStiffness: 100, bounceDamping: 100 }} className=' relative w-48 h-72 rounded-[40px] bg-zinc-900 py-10 px-8 text-white overflow-hidden flex-shrink-0'>
            <FaFileAlt/>
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0  w-full left-0 '>
            <div className='flex items-center justify-between mb-3 py-3   px-8'>
                <h5>{data.filesize}</h5>
                <span className='bg-white rounded-full text-black w-7 h-7 flex justify-center items-center '>
                    {data.close ? <RxCross2/> :<IoMdDownload size=".7em"  color='#fff'/> }
                    
                    </span>
            </div>
            {data.tag.isOpen&& <div className={`tag w-full ${data.tag.tagColor==="blue"?"bg-blue-800":"bg-green-800" } py-4 flex items-center justify-center`}>
               <h3 className='text-sm'>{data.tag.tagTitle}</h3> 
            </div>}
           
            </div>
            
         </motion.div>
         
   
  )
}

export default Card