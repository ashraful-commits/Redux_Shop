import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Shop from "../Pages/Shop/Shop";
import Admin from "../Pages/Admin/Admin";
import Product from "../Component/Product/Product";
import Catagory from "../Component/Catagory/Catagory";
import Brand from "../Component/Brand/Brand";
import Tag from "../Component/Tags/Tag";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "contact", element: <Contact /> },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "",
            element: <Product />,
          },
          {
            path: "catagroy",
            element: <Catagory />,
          },
          {
            path: "barnd",
            element: <Brand />,
          },
          {
            path: "tag",
            element: <Tag />,
          },
        ],
      },
    ],
  },
]);

export default router;
