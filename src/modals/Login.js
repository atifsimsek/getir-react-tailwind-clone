
import { useRef } from 'react'
import { destroyModal } from '../utils/modalUtils'
import OutsideClick from '../utils/OutsideClick'


const Login = () => {
  const modalRef = useRef()
  return (
    <OutsideClick modalRef={modalRef}  >
      <div className='fixed z-50 w-full h-screen overflow-hidden inset-0 bg-black bg-opacity-30  flex items-center justify-center text-white' >
        <div ref={modalRef} className='w-96 h-72 relative bg-white '>
          <h1 className='text-black' >Login</h1>
          <button onClick={() => { destroyModal() }} className='absolute top-3 right-3 bg-gray-200 px-2.5 py-1'>X</button>
        </div>
      </div>
    </OutsideClick>
  )
}

export default Login