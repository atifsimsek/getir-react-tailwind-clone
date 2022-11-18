
import { destroyModal, useLanguage, changeLanguage } from '../utils/modalUtils'
import OutsideClick from '../utils/OutsideClick'
import { CgClose } from "react-icons/cg"
import { useState, useEffect, useRef } from 'react'




const Language = () => {
  const modalRef = useRef()
  const language = useLanguage()
  const [isDisabled, setIsDisabled] = useState()
  const [value, setValue] = useState(language)

  console.log("adsfasf" + isDisabled)

  useEffect(() => {
    setIsDisabled(!isDisabled)


  }, [value])

  return (
    <OutsideClick modalRef={modalRef}  >
      <div className='fixed  z-50 w-full h-screen inset-0 flex items-center justify-center  bg-black bg-opacity-40 ' >
        <div ref={modalRef} className='w-[446px] h-[300px] gap-8 justify-center relative flex flex-col items-center p-7 rounded-lg shadow-md  bg-white '>
          <h6 className='w-full text-center text-sm font-semibold text-primary-brand-color' >Dil Değiştir</h6>
          <button onClick={() => { destroyModal() }} className='flex w-[32px] h-[32px] absolute top-8 right-8 bg-slate-300 bg-opacity-30 rounded-lg items-center justify-center'>
            <CgClose size={16} />
          </button>
          <div className='w-full rounded-lg border border-gray-100 '>
            <div className='flex items-center rounded-lg justify-between px-2 py-1.5 '>
              <div className='flex items-center justify-center'>
                <input value="tr" type="radio" onChange={(e) => { setValue(e.target.value) }} checked={value === "tr" || value === "tr-TR"} className='peer/draft  h-5 w-5 ml-2 transition-all accent-primary-brand-color' />
                <label className='text-sm ml-3  text-gray-700 peer-checked/draft:text-primary-brand-color '>Türkçe</label>
              </div>
              <img className='p-2' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMTUiPgo8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMFYxNUgyMFYwSDBaIiBmaWxsPSIjRTMxRDFDIi8+CjxtYXNrIGlkPSJtYXNrMSIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE1Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBWMTVIMjBWMEgwWiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2sxKSI+CjwvZz4KPHBhdGggZD0iTTguNSAxMUMxMC40MzMgMTEgMTIgOS40MzMgMTIgNy41QzEyIDUuNTY3IDEwLjQzMyA0IDguNSA0QzYuNTY3IDQgNSA1LjU2NyA1IDcuNUM1IDkuNDMzIDYuNTY3IDExIDguNSAxMVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05LjM3NDI0IDEwLjMwMDJDMTAuOTIwNyAxMC4zMDAyIDEyLjE3NDMgOS4wNDY2IDEyLjE3NDMgNy41MDAyQzEyLjE3NDMgNS45NTM4IDEwLjkyMDcgNC43MDAyIDkuMzc0MjQgNC43MDAyQzcuODI3ODMgNC43MDAyIDYuNTc0MjIgNS45NTM4IDYuNTc0MjIgNy41MDAyQzYuNTc0MjIgOS4wNDY2IDcuODI3ODMgMTAuMzAwMiA5LjM3NDI0IDEwLjMwMDJaIiBmaWxsPSIjRTMwQTE3Ii8+CjxwYXRoIGQ9Ik0xMS4yNzE1IDcuNDk5OEwxNC40MzcyIDguNTI4NDRMMTIuNDgwNyA1LjgzNTQ1VjkuMTY0MTZMMTQuNDM3MiA2LjQ3MTE3TDExLjI3MTUgNy40OTk4WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K" alt="" />
            </div>
            <div className='w-full flex items-center justify-between px-2 py-1.5 border-t-2 border-gray-100 '>
              <div className='flex items-center justify-center'>
                <input value="en" onChange={(e) => { setValue(e.target.value) }} checked={value === "en" || value === "en-Us"} type="radio" className='peer/draft  h-5 w-5 ml-2  accent-primary-brand-color cursor-pointer' />
                <label className='text-sm ml-3  text-gray-700 peer-checked/draft:text-primary-brand-color '>English</label>
              </div>
              <img className='p-2' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMTUiPgo8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMEgyMFYxNUgwVjBaIiBmaWxsPSIjRTMxRDFDIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAxLjI1VjIuNUgyMFYxLjI1SDBaTTAgMy43NVY1SDIwVjMuNzVIMFpNMCA3LjVWNi4yNUgyMFY3LjVIMFpNMCA4Ljc1VjEwSDIwVjguNzVIMFpNMCAxMi41VjExLjI1SDIwVjEyLjVIMFpNMCAxNVYxMy43NUgyMFYxNUgwWiIgZmlsbD0iI0Y3RkNGRiIvPgo8cmVjdCB3aWR0aD0iMTEuMjUiIGhlaWdodD0iOC43NSIgZmlsbD0iIzJFNDJBNSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuMzAwMjUgMi43MTcxOEwxLjk2MjY1IDIuMjU1NzdMMi40NzY0NyAyLjYyNTY5SDIuMTg1NTVMMi43NzM4OCAzLjE0NjA2TDIuNTc1MTcgMy44NzU2OUgyLjI2MzkzTDEuOTYxNzIgMy4yMDU1N0wxLjcwMzk5IDMuODc1NjlIMC45MzU1NDdMMS41MjM4OCA0LjM5NjA2TDEuMzAwMjUgNS4yMTcxOUwxLjk2MjY1IDQuNzU1NzdMMi40NzY0NyA1LjEyNTY5SDIuMTg1NTVMMi43NzM4OCA1LjY0NjA2TDIuNTc1MTcgNi4zNzU2OUgyLjI2MzkzTDEuOTYxNzIgNS43MDU1N0wxLjcwMzk5IDYuMzc1NjlIMC45MzU1NDdMMS41MjM4OCA2Ljg5NjA2TDEuMzAwMjUgNy43MTcxOUwxLjk2MjY1IDcuMjU1NzdMMi42MDM1NyA3LjcxNzE5TDIuNDA0MyA2Ljg5NjA2TDIuOTE5MDEgNi4zNzU2OUgyLjY4MTZMMy4yMTI2NSA2LjAwNTc3TDMuNzI2NDcgNi4zNzU2OUgzLjQzNTU1TDQuMDIzODggNi44OTYwNkwzLjgwMDI1IDcuNzE3MTlMNC40NjI2NSA3LjI1NTc3TDUuMTAzNTcgNy43MTcxOUw0LjkwNDMgNi44OTYwNkw1LjQxOTAxIDYuMzc1NjlINS4xODE2TDUuNzEyNjUgNi4wMDU3N0w2LjIyNjQ3IDYuMzc1NjlINS45MzU1NUw2LjUyMzg4IDYuODk2MDZMNi4zMDAyNSA3LjcxNzE5TDYuOTYyNjUgNy4yNTU3N0w3LjYwMzU3IDcuNzE3MTlMNy40MDQzIDYuODk2MDZMNy45MTkwMSA2LjM3NTY5SDcuNjgxNkw4LjIxMjY1IDYuMDA1NzdMOC43MjY0NyA2LjM3NTY5SDguNDM1NTVMOS4wMjM4OCA2Ljg5NjA2TDguODAwMjUgNy43MTcxOUw5LjQ2MjY1IDcuMjU1NzdMMTAuMTAzNiA3LjcxNzE5TDkuOTA0MyA2Ljg5NjA2TDEwLjQxOSA2LjM3NTY5SDkuNzYzOTNMOS40NjE3MiA1LjcwNTU3TDkuMjAzOTkgNi4zNzU2OUg4LjgzMTM2TDguNjU0MyA1LjY0NjA2TDkuMTY5MDEgNS4xMjU2OUg4LjkzMTZMOS40NjI2NSA0Ljc1NTc3TDEwLjEwMzYgNS4yMTcxOUw5LjkwNDMgNC4zOTYwNkwxMC40MTkgMy44NzU2OUg5Ljc2MzkzTDkuNDYxNzIgMy4yMDU1N0w5LjIwMzk5IDMuODc1NjlIOC44MzEzNkw4LjY1NDMgMy4xNDYwNkw5LjE2OTAxIDIuNjI1NjlIOC45MzE2TDkuNDYyNjUgMi4yNTU3N0wxMC4xMDM2IDIuNzE3MThMOS45MDQzIDEuODk2MDZMMTAuNDE5IDEuMzc1NjlIOS43NjM5M0w5LjQ2MTcyIDAuNzA1NTY2TDkuMjAzOTkgMS4zNzU2OUg4LjQzNTU1TDkuMDIzODggMS44OTYwNkw4LjgyNTE3IDIuNjI1NjlIOC41MTM5M0w4LjIxMTcyIDEuOTU1NTdMNy45NTM5OSAyLjYyNTY5SDcuNTgxMzZMNy40MDQzIDEuODk2MDZMNy45MTkwMSAxLjM3NTY5SDcuMjYzOTNMNi45NjE3MiAwLjcwNTU2Nkw2LjcwMzk5IDEuMzc1NjlINS45MzU1NUw2LjUyMzg4IDEuODk2MDZMNi4zMjUxNyAyLjYyNTY5SDYuMDEzOTNMNS43MTE3MiAxLjk1NTU3TDUuNDUzOTkgMi42MjU2OUg1LjA4MTM2TDQuOTA0MyAxLjg5NjA2TDUuNDE5MDEgMS4zNzU2OUg0Ljc2MzkzTDQuNDYxNzIgMC43MDU1NjZMNC4yMDM5OSAxLjM3NTY5SDMuNDM1NTVMNC4wMjM4OCAxLjg5NjA2TDMuODI1MTcgMi42MjU2OUgzLjUxMzkzTDMuMjExNzIgMS45NTU1N0wyLjk1Mzk5IDIuNjI1NjlIMi41ODEzNkwyLjQwNDMgMS44OTYwNkwyLjkxOTAxIDEuMzc1NjlIMi4yNjM5M0wxLjk2MTcyIDAuNzA1NTY2TDEuNzAzOTkgMS4zNzU2OUgwLjkzNTU0N0wxLjUyMzg4IDEuODk2MDZMMS4zMDAyNSAyLjcxNzE4Wk04LjgyNTE3IDUuMTI1NjlMOS4wMjM4OCA0LjM5NjA2TDguNDM1NTUgMy44NzU2OUg4LjcyNjQ3TDguMjEyNjUgMy41MDU3N0w3LjY4MTYgMy44NzU2OUg3LjkxOTAxTDcuNDA0MyA0LjM5NjA2TDcuNTgxMzYgNS4xMjU2OUg3Ljk1Mzk5TDguMjExNzIgNC40NTU1N0w4LjUxMzkzIDUuMTI1NjlIOC44MjUxN1pNNy40NzY0NyA1LjEyNTY5TDYuOTYyNjUgNC43NTU3N0w2LjQzMTYgNS4xMjU2OUg2LjY2OTAxTDYuMTU0MyA1LjY0NjA2TDYuMzMxMzYgNi4zNzU2OUg2LjcwMzk5TDYuOTYxNzIgNS43MDU1N0w3LjI2MzkzIDYuMzc1NjlINy41NzUxN0w3Ljc3Mzg4IDUuNjQ2MDZMNy4xODU1NSA1LjEyNTY5SDcuNDc2NDdaTTUuMjczODggNS42NDYwNkw1LjA3NTE3IDYuMzc1NjlINC43NjM5M0w0LjQ2MTcyIDUuNzA1NTdMNC4yMDM5OSA2LjM3NTY5SDMuODMxMzZMMy42NTQzIDUuNjQ2MDZMNC4xNjkwMSA1LjEyNTY5SDMuOTMxNkw0LjQ2MjY1IDQuNzU1NzdMNC45NzY0NyA1LjEyNTY5SDQuNjg1NTVMNS4yNzM4OCA1LjY0NjA2Wk01LjQ1Mzk5IDUuMTI1NjlINS4wODEzNkw0LjkwNDMgNC4zOTYwNkw1LjQxOTAxIDMuODc1NjlINS4xODE2TDUuNzEyNjUgMy41MDU3N0w2LjIyNjQ3IDMuODc1NjlINS45MzU1NUw2LjUyMzg4IDQuMzk2MDZMNi4zMjUxNyA1LjEyNTY5SDYuMDEzOTNMNS43MTE3MiA0LjQ1NTU3TDUuNDUzOTkgNS4xMjU2OVpNMy44MjUxNyA1LjEyNTY5TDQuMDIzODggNC4zOTYwNkwzLjQzNTU1IDMuODc1NjlIMy43MjY0N0wzLjIxMjY1IDMuNTA1NzdMMi42ODE2IDMuODc1NjlIMi45MTkwMUwyLjQwNDMgNC4zOTYwNkwyLjU4MTM2IDUuMTI1NjlIMi45NTM5OUwzLjIxMTcyIDQuNDU1NTdMMy41MTM5MyA1LjEyNTY5SDMuODI1MTdaTTcuNzczODggMy4xNDYwNkw3LjU3NTE3IDMuODc1NjlINy4yNjM5M0w2Ljk2MTcyIDMuMjA1NTdMNi43MDM5OSAzLjg3NTY5SDYuMzMxMzZMNi4xNTQzIDMuMTQ2MDZMNi42NjkwMSAyLjYyNTY5SDYuNDMxNkw2Ljk2MjY1IDIuMjU1NzdMNy40NzY0NyAyLjYyNTY5SDcuMTg1NTVMNy43NzM4OCAzLjE0NjA2Wk00Ljk3NjQ3IDIuNjI1NjlMNC40NjI2NSAyLjI1NTc3TDMuOTMxNiAyLjYyNTY5SDQuMTY5MDFMMy42NTQzIDMuMTQ2MDZMMy44MzEzNiAzLjg3NTY5SDQuMjAzOTlMNC40NjE3MiAzLjIwNTU3TDQuNzYzOTMgMy44NzU2OUg1LjA3NTE3TDUuMjczODggMy4xNDYwNkw0LjY4NTU1IDIuNjI1NjlINC45NzY0N1oiIGZpbGw9IiNGN0ZDRkYiLz4KPC9nPgo8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpvdmVybGF5Ii8+CjxwYXRoIGQ9Ik0xLjUgMUgxOC41Vi0xSDEuNVYxWk0xOSAxLjVWMTMuNUgyMVYxLjVIMTlaTTE4LjUgMTRIMS41VjE2SDE4LjVWMTRaTTEgMTMuNVYxLjVILTFWMTMuNUgxWk0xLjUgMTRDMS4yMjM4NiAxNCAxIDEzLjc3NjEgMSAxMy41SC0xQy0xIDE0Ljg4MDcgMC4xMTkyODggMTYgMS41IDE2VjE0Wk0xOSAxMy41QzE5IDEzLjc3NjEgMTguNzc2MSAxNCAxOC41IDE0VjE2QzE5Ljg4MDcgMTYgMjEgMTQuODgwNyAyMSAxMy41SDE5Wk0xOC41IDFDMTguNzc2MSAxIDE5IDEuMjIzODYgMTkgMS41SDIxQzIxIDAuMTE5Mjg4IDE5Ljg4MDcgLTEgMTguNSAtMVYxWk0xLjUgLTFDMC4xMTkyODggLTEgLTEgMC4xMTkyODkgLTEgMS41SDFDMSAxLjIyMzg2IDEuMjIzODYgMSAxLjUgMVYtMVoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5Ii8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIxMCIgeTE9IjAiIHgyPSIxMCIgeTI9IjE1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3Atb3BhY2l0eT0iMC4zIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==" alt="" />
            </div>
          </div>
          <button onClick={() => { changeLanguage(value); destroyModal() }} disabled={isDisabled} className=" disabled:cursor-no-drop enabled:bg-primary-brand-color enabled:hover:bg-secondary-brand-color cursor-pointer   bg-gray-400  w-full p-3.5 text-sm font-semibold rounded-lg text-white">Güncelle</button>
        </div>
      </div>
    </OutsideClick>
  )
}

export default Language