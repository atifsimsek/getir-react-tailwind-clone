import React from 'react'
import { useState } from 'react'

const Language = () => {
  const [close, setClose] = useState(true)

  const closeBtn = () => {
    document.body.style.overflow = "auto"
    setClose(false)
  }
  return (
   <>
   {close && 
     <div className='fixed z-50 w-full h-screen overflow-hidden inset-0 bg-black bg-opacity-30  flex items-center justify-center text-white' >
     <div className='w-96 h-72 relative bg-white '>
       <button onClick={() => { closeBtn() }} className='absolute top-3 right-3 bg-gray-200 px-2.5 py-1'>X</button>

     </div>
   </div>
   }
   </>
  )
}

export default Language