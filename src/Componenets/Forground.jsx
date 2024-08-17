import React, { useRef, useState } from 'react'
import Card from './Card'

function Forground() {
  const ref = useRef(null)

  const data= [
    {
      desc: "Lorem ipsum dolor sit amet consectetur.",
      filesize:".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now",tagColor:"green"},

      
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur.",
      filesize:".9mb",
      close: true,
      tag: { isOpen: null, tagTitle: "open Now",tagColor:"green"},

      
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur.",
      filesize:".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now",tagColor:"blue"},

      
    },
  ];
  return (
   
        <div ref={ref} className='top-0 left-0 w-full h-full fixed z-[3] flex gap-5 flex-wrap p-5'>
       {data.map((item,index)=>(
        <Card data={item} reference={ref} />

       ))}
      
    </div>

    
  );
}

export default Forground