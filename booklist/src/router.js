import { createBrowserRouter } from "react-router-dom";
import Crud from "./components/curd";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Crud />,
  },
]);

export default router;
