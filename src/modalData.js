import Language from "./modals/Language";
import Login from "./modals/Login";
import Register from "./modals/Register";

const modals = [
  {
    name: "login",
    element: Login,
  },
  {
    name: "language",
    element: Language,
  },
  {
    name: "register",
    element: Register,
  },
];

export default modals;
