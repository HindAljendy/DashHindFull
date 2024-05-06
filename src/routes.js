import { createBrowserRouter } from "react-router-dom";
import PortfolioLandingPage from "./modules/Portfolio/pages/PortfolioLandingPage/PortfolioLandingPage";
import DashbordControllerPanel from "./modules/Dashbord/pages/DashbordControllerPanel/DashbordControllerPanel";
import Login from "./pages/Login/Login";
import Projects from "./modules/Dashbord/pages/Projects/Projects";
import Messages from "./modules/Dashbord/pages/Messages/Messages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioLandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashbord",
    element: <DashbordControllerPanel />,
    children: [
      { path: "/projects", element: <Projects /> },
      { path: "/messages", element: <Messages /> },
    ],
  },
]);
