import useUniqueID from "../hooks/useID";
import { HomePage, PropertiesPage } from "../pages/index.js";
export const navbar = [
  {
    id: useUniqueID,
    title: "Home",
    element: <HomePage />,
    path: "/home",
    private: "false",
    hidden: "false",
  },
  {
    id: useUniqueID,
    element: <PropertiesPage />,
    title: "Properties",
    path: "/properties",
    private: "false",
    hidden: "false",
  },
];
