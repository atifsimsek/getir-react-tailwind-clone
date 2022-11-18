
import { destroyModal } from '../utils/modalUtils'
import OutsideClick from '../utils/OutsideClick'
import { CgClose } from "react-icons/cg"
import { useState, useRef } from 'react'
import ReactFlagsSelect from "react-flags-select";


const Register = () => {
  const modalRef = useRef()
  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    DE: "+2",
    TR: "+90",
    NL: "+15",
    IT: "+7"
  }
  return (
    <OutsideClick modalRef={modalRef}  >
      <div className='fixed  z-50 w-full h-screen inset-0 flex items-center justify-center  bg-black bg-opacity-40 ' >
        <div ref={modalRef} className='w-[446px] h-[569px] relative flex flex-col items-center pt-10 rounded-lg shadow-md  bg-white '>
          <h6 className='w-full text-center text-md font-semibold text-primary-brand-color' >Kayıt Ol</h6>
          <button onClick={() => { destroyModal() }} className='flex w-[32px] h-[32px] absolute top-8 right-8 bg-slate-300 bg-opacity-30 rounded-lg items-center justify-center'>
            <CgClose size={16} />
          </button>
          <section className='w-full p-5 flex flex-col gap-6'>
            <div className="flex gap-x-2 w-full">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={code => setSelected(code)}
                selected={selected}
                className="flags-select"
              />
              <label className="flex-1 relative group cursor-pointer">
                <input required className="peer h-14 rounded px-4 border-2 border-gray-200 w-full transition-colors group-hover:border-primary-brand-color outline-none focus:border-primary-brand-color text-sm pt-2 " type="text" />
                <span className=" peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs transition-all absolute top-0 left-0 h-full flex  px-4 items-center text-sm text-gray-500 ">Telefon Numarası</span>
              </label>
            </div>
            <label className="flex-1 relative group cursor-pointer">
              <input required className="peer h-14 rounded px-4 border-2 border-gray-200 w-full transition-colors group-hover:border-primary-brand-color outline-none focus:border-primary-brand-color text-sm pt-2 " type="text" />
              <span className=" peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs transition-all absolute top-0 left-0 h-full flex  px-4 items-center text-sm text-gray-500 ">Ad Soyad</span>
            </label>
            <label className="flex-1 relative group cursor-pointer">
              <input required className="peer h-14 rounded px-4 border-2 border-gray-200 w-full transition-colors group-hover:border-primary-brand-color outline-none focus:border-primary-brand-color text-sm pt-2 " type="text" />
              <span className=" peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs transition-all absolute top-0 left-0 h-full flex  px-4 items-center text-sm text-gray-500 ">E-Posta</span>
            </label>
          </section>
        </div>
      </div>
    </OutsideClick>
  )
}

export default Register