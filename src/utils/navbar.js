import useUniqueID from "../hooks/useID";
import { HomePage, PropertiesPage } from "../pages/index.js";
export const navbar = [
  {
    id: useUniqueID,
    title: "Home",
    element: <HomePage />,
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueID,
    element: <PropertiesPage />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueID,
    element: <h1>generic sing in</h1>,
    title: "Sing in",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useUniqueID,
    element: <h1>generic sing up</h1>,
    title: "Sing up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
