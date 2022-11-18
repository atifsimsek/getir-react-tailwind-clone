import { useEffect } from 'react';
import { destroyModal } from "../utils/modalUtils"


const OutsideClick = ({ modalRef, children }) => {

    useEffect(() => {

        const closeModal = e => {

            if (e.target !== modalRef.current && !modalRef.current.contains(e.target)) {
                destroyModal()
            }

        }

        document.body.addEventListener("click", closeModal, true);

        return () => document.body.removeEventListener("click", closeModal, true)

    }, [modalRef])


    if (!children) {
        return null;
    }

    return <div> {children}</div>


}

export default OutsideClick