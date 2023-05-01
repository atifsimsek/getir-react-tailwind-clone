import store from "../redux/store";
import { append, cLanguage, destroy } from "../redux/modalSlice";
import { useSelector } from "react-redux";

export const useModals = () =>
  useSelector((state) => state.modalReducer.modals);
export const createModal = (name, data = false) =>
  store.dispatch(
    append({
      name,
      data,
    })
  );
export const destroyModal = () => store.dispatch(destroy());

export const useLanguage = () =>
  useSelector((state) => state.modalReducer.language);
export const changeLanguage = (language) => store.dispatch(cLanguage(language));
