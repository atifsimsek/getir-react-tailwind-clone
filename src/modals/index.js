import React from 'react'
import modalData from "../modalData.js"
import { useModals } from '../utils/modalUtils.js'

const Modal = () => {
 
  const modals = useModals()
  return (
    <div>
      {modals.map((modal,index) => {
        const modalD = modalData.find(m => m.name === modal.name)
        return(
         <modalD.element key={index}/>
        )
      })}
    </div>
  )
}

export default Modal