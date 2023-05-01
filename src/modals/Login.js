import { useState, useRef } from "react";
import { destroyModal } from "../utils/modalUtils";
import OutsideClick from "../utils/OutsideClick";
import ReactFlagsSelect from "react-flags-select";
import { CgClose } from "react-icons/cg";
import { Formik } from "formik";
import * as yup from "yup";
import { RiErrorWarningLine } from "react-icons/ri";

const Login = () => {
  const modalRef = useRef();
  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    DE: "+2",
    TR: "+90",
    NL: "+15",
    IT: "+7",
  };

  return (
    <OutsideClick modalRef={modalRef}>
      <div className="fixed  z-50 w-full h-screen inset-0 flex items-center justify-center  bg-black bg-opacity-40 ">
        <div
          ref={modalRef}
          className="w-[446px] h-[338px]  relative flex flex-col items-center rounded-lg shadow-md  bg-white "
        >
          <div className=" pt-9">
            <h6 className="w-full text-center text-md font-semibold text-primary-brand-color">
              Giriş yap veya kayıt ol
            </h6>
            <button
              onClick={() => {
                destroyModal();
              }}
              className="flex w-[32px] h-[32px] absolute top-8 right-8 bg-slate-300 bg-opacity-30 rounded-lg items-center justify-center"
            >
              <CgClose size={16} />
            </button>
          </div>
          <Formik
            initialValues={{
              phone: "",
            }}
            validationSchema={yup.object({
              phone: yup
                .string()
                .required("Lütfen telefon numaranızı giriniz."),
            })}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              handleBlur,
              touched,
            }) => (
              <form noValidate onSubmit={handleSubmit} className="w-full  p-10">
                <div className="grid gap-y-3  w-full">
                  <div className="flex gap-x-2">
                    <ReactFlagsSelect
                      countries={Object.keys(phones)}
                      customLabels={phones}
                      onSelect={(code) => setSelected(code)}
                      selected={selected}
                      className="flags-select"
                    />
                    <label
                      htmlFor="phone"
                      className="flex-1 relative group cursor-pointer"
                    >
                      <input
                        id="phone"
                        type="text"
                        required
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`peer h-14 rounded px-3.5 border-2 ${
                          errors.phone &&
                          touched.phone &&
                          "!border-red-600 !group-hover:border-red-600 !focus:border-red-600 "
                        }  border-gray-200 w-full transition-colors group-hover:border-primary-brand-color outline-none focus:border-primary-brand-color text-sm pt-2 `}
                      />
                      {errors.phone && touched.phone ? (
                        <RiErrorWarningLine
                          size={26}
                          className="text-red-600 absolute top-3.5 right-4"
                        />
                      ) : null}
                      <span className="absolute text-gray-500 inset-[18px] text-sm  peer-focus:text-primary-brand-color  peer-focus:text-xs peer-focus:inset-[6px] peer-focus:ml-2.5  transform transition-all peer-valid:text-primary-brand-color  peer-valid:text-xs peer-valid:inset-[6px] peer-valid:ml-2.5 ">
                        Telefon Numarası
                      </span>
                    </label>
                  </div>
                  {errors.phone && touched.phone && (
                    <p className="text-red-600 flex ml-10 -mt-1  h-[15px] text-xs justify-center items-center ">
                      {errors.phone}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full h-12 flex items-center justify-center rounded-lg  bg-yellow-brand-color text-primary-brand-color text-sm px-3 py-4 font-semibold hover:text-yellow-brand-color hover:bg-primary-brand-color transition-colors  "
                  >
                    Telefon numarası ile devam et
                  </button>
                  {/* <hr className="h-[1px] bg-gray-300 my-2" />
                    <button className=" bg-blue-700 bg-opacity-10 text-blue-700 text-opacity-80 w-full h-12 flex items-center justify-center rounded   text-sm px-3 py-4 font-semibold hover:bg-blue-700 hover:text-white transition-colors  " >Facebook ile devam et</button>*/}
                </div>
                <p className="text-gray-400 pt-4 self-start  text-xs semibold">
                  Kişisel verilerinize dair Aydınlatma Metni için{" "}
                  <span className="text-primary-brand-color cursor-pointer underline font-semibold">
                    tıklayınız.
                  </span>
                </p>
              </form>
            )}
          </Formik>

          <div className="w-full h-14 bottom-0 absolute rounded-b-lg  bg-gray-100 flex items-center justify-center">
            <p className="text-sm font-semibold text-gray-400 ">
              Hala kayıt olmadınız mı?{" "}
              <span className="text-primary-brand-color cursor-pointer">
                Kayıt Ol
              </span>
            </p>
          </div>
        </div>
      </div>
    </OutsideClick>
  );
};

export default Login;
