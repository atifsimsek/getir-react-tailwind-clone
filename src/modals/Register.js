
import { destroyModal } from '../utils/modalUtils'
import OutsideClick from '../utils/OutsideClick'
import { CgClose } from "react-icons/cg"
import { useState, useRef } from 'react'
import ReactFlagsSelect from "react-flags-select";
import { Formik } from 'formik';
import * as yup from 'yup';
import { RiErrorWarningLine } from "react-icons/ri"
import { BiCheck } from "react-icons/bi"


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
      <div className='fixed  z-50 w-full h-screen  inset-0 flex items-center justify-center  bg-black bg-opacity-40 ' >
        <div ref={modalRef} className='w-[446px] min-h-[590px] relative flex flex-col items-center pt-10 rounded-lg shadow-md  bg-white '>
          <h6 className='w-full text-center text-md font-semibold text-primary-brand-color' >Kayıt Ol</h6>
          <button onClick={() => { destroyModal() }} className='flex w-[32px] h-[32px] absolute top-8 right-8 bg-slate-300 bg-opacity-30 rounded-lg items-center justify-center'>
            <CgClose size={16} />
          </button>
          <Formik
            initialValues={{
              phone: "",
              nameSurname: "",
              email: "",
              agree: false
            }}
            validationSchema={
              yup.object({
                phone: yup.string().required("Lütfen telefon numaranızı giriniz."),
                nameSurname: yup.string().required("Lütfen ad ve soyadınızı giriniz."),
                email: yup.string().email("Lütfen geçerli bir E-Mail adresi giriniz.").required("Lütfen email adresinizi giriniz."),
                agree: yup.boolean()
              })
            }
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              handleReset,
              handleBlur,
              dirty,
              touched,
              isSubmitting,


            }) => (



              <form noValidate onSubmit={handleSubmit} className='w-full p-4 flex flex-col gap-4' >
                <div className="flex gap-x-2 w-full">
                  <ReactFlagsSelect
                    countries={Object.keys(phones)}
                    customLabels={phones}
                    onSelect={code => setSelected(code)}
                    selected={selected}
                    className="flags-select"
                  />
                  <label htmlFor='phone' className="flex-1 relative group cursor-pointer">
                    <input
                      id='phone'
                      type="text"
                      required
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`peer h-14 rounded px-3.5 border-2 ${errors.phone && touched.phone && "border-red-600 group-hover:border-red-600 focus:border-red-600 "}  border-gray-200 w-full transition-colors group-hover:border-primary-brand-color outline-none focus:border-primary-brand-color text-sm pt-2 `} />
                    {errors.phone && touched.phone ? (
                      <RiErrorWarningLine size={26} className='text-red-600 absolute top-3.5 right-4' />
                    ) : null}
                    <span className="absolute text-gray-500 inset-[18px] text-sm  peer-focus:text-primary-brand-color  peer-focus:text-xs peer-focus:inset-[6px] peer-focus:ml-2.5  transform transition-all peer-valid:text-primary-brand-color  peer-valid:text-xs peer-valid:inset-[6px] peer-valid:ml-2.5 ">Telefon Numarası</span>
                  </label>
                </div>
                {errors.phone && touched.phone && (
                  <p className='text-red-600 flex -ml-0.5 -mt-1  h-[5px] text-xs justify-center items-center '>
                    {errors.phone}
                  </p>
                )}
                <label htmlFor='nameSurname' className="flex-1 relative group cursor-pointer">
                  <input
                    id='nameSurname'
                    type="text"
                    required
                    value={values.nameSurname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`peer h-14 rounded px-3.5 border-2 ${errors.nameSurname && touched.nameSurname && "border-red-600 group-hover:border-red-600 focus:border-red-600"}  border-gray-200 w-full transition-colors group-hover:border-primary-brand-color outline-none  focus:border-primary-brand-color text-sm pt-2`} />
                  {errors.nameSurname && touched.nameSurname && (
                    <RiErrorWarningLine size={26} className='text-red-600 absolute top-3.5 right-4' />
                  )}
                  <span className="absolute text-gray-500 inset-[18px] text-sm  peer-focus:text-primary-brand-color  peer-focus:text-xs peer-focus:inset-[6px] peer-focus:ml-2.5  transform transition-all peer-valid:text-primary-brand-color  peer-valid:text-xs peer-valid:inset-[6px] peer-valid:ml-2.5 " >Ad Soyad</span>
                </label>
                {errors.nameSurname && touched.nameSurname && (
                  <p className='text-red-600 flex -ml-0.5 -mt-1  h-[5px] text-xs justify-start items-center '>
                    {errors.nameSurname}
                  </p>
                )}
                <label htmlFor='email' className="flex-1 relative group cursor-pointer">
                  <input
                    id='email'
                    type="text"
                    required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`peer h-14 rounded px-3.5 border-2 ${errors.email && touched.email && "border-red-600 group-hover:border-red-600 focus:border-red-600"}  border-gray-200 w-full transition-colors group-hover:border-primary-brand-color outline-none focus:border-primary-brand-color text-sm pt-2`} />
                  {errors.email && touched.email && (
                    <RiErrorWarningLine size={26} className='text-red-600 absolute top-3.5 right-4' />
                  )}
                  <span className="absolute text-gray-500 inset-[18px] text-sm  peer-focus:text-primary-brand-color  peer-focus:text-xs peer-focus:inset-[6px] peer-focus:ml-2.5  transform transition-all peer-valid:text-primary-brand-color  peer-valid:text-xs peer-valid:inset-[6px] peer-valid:ml-2.5 " >E-Posta</span>
                </label>
                {errors.email && touched.email && (
                  <p className='text-red-600 flex -ml-0.5  -mt-1  h-[5px] text-xs justify-start items-center '>
                    {errors.email}
                  </p>
                )}

                <label className='display flex items-center  gap-x-3 w-full'>
                  <span className='mt-1.5 relative'>
                    <input
                      type="checkbox"
                      className='appearance-none checked:border-primary-brand-color checked:bg-primary-brand-color p-[9px] transition-all cursor-pointer hover:border-primary-brand-color  h-[16px] w-[16px] shadow-sm border-2 rounded-md  border-gray-300' />
                    <BiCheck size={24} className='text-white absolute -top-[1.5px] -left-[1.5px]' />
                  </span>
                  <span className='text-xs leading-5 cursor-pointer text-gray-400' >Getir’in bana özel kampanya, tanıtım ve fırsatlarından <br /> haberdar olmak istiyorum.</span>
                </label>

                <p className='text-xs text-gray-400 leading-5  '>Kişisel verilerinize dair Aydınlatma Metni için <span className='text-primary-brand-color underline'>tıklayınız.</span> Üye olmakla, <span className='text-primary-brand-color underline'>Kullanım Koşulları</span> hükümlerini kabul etmektesiniz.</p>

                <div className="w-full absolute bottom-0 left-0 right-0 rounded-b-lg">
                  <div className='px-5  mb-5'>
                    <button type='submit' className='w-full rounded-lg h-11 text-white hover:bg-secondary-brand-color text-sm font-semibold  bg-primary-brand-color'>Kayıt Ol</button>
                  </div>
                  <div className='h-14 bg-gray-100 rounded-b-lg flex items-center justify-center'>
                    <p className='text-gray-500 opacity-90  text-sm '>Getir'e üyeyseniz <span className='text-primary-brand-color text-sm font-semibold'>Giriş yap</span></p>
                  </div>
                </div>

              </form>
            )}

          </Formik >
        </div>
      </div>
    </OutsideClick>
  )
}

export default Register