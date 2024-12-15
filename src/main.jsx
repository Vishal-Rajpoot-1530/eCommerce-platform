import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home_Page from "./components/Home_Page.jsx";
import MEN from "./components/MEN.jsx";
import WOMEN from './components/WOMEN.jsx'
import BEAUTY from './components/BEAUTY.jsx'
import HOME_LIVING from './components/HOME_LIVING.jsx'
import KIDS from './components/KIDS.jsx'
import Profile from './components/Profile.jsx'
import STUDIO from './components/STUDIO.jsx'
import WishList from './components/WishList.jsx'
import Bag from './components/Bag.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home_Page /> },
      { path: "/men", element: <MEN /> },
      { path: "/women", element: <WOMEN /> },
      { path: "/beauty", element: <BEAUTY /> },
      { path: "/home and living", element: <HOME_LIVING /> },
      { path: "/kids", element: <KIDS /> },
      { path: "/profile", element: <Profile /> },
      { path: "/studio", element: <STUDIO /> },
      { path: "/wishlist", element: <WishList /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
