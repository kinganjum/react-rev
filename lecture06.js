import React, { lazy, Suspense } from "react"; 
import ReactDOM from "react-dom/client"; 
import { Header } from "./src/components/header.js";  
import Body from "./src/components/body.js";
import Footer from "./src/components/footer.js";
import About from "./src/components/About.js";
import Error from "./src/components/Error.js";
import Contact from "./src/components/Contact.js";
import RestaurantMenu from "./src/components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Instamart from "./components/Instamart";
import Shimmer from "./src/components/shimmer.js";


const Instamart = lazy( () => import("./src/components/Instamart.js")); //dynamic import. lazy import
// upon on demand loading --> upon render --> suspend loading

const AppLayout = () => {
      return (
        <>
           <Header/>
          {/* {outelet}  with the help of this header and footer will always be present*/} 
           <Outlet/>
           <Footer/>
        </>
      )
  }

  
  const appRouter = createBrowserRouter([
    {
        path: "/",   // it will decide what to do on /
        element: <AppLayout/>, // it will pass the element to render 
        errorElement: <Error />, // it will run when user put wrong address.
        children: [     //child layput it will be childern of AppLayout
        {  
          path: "/", 
          element: <Body/>, 
        },
        {  
            path: "/about", 
            element: <About/>, 
        },
        {  
              path: "/contact", 
              element: <Contact/>, 
        },
        {
          path: "/restaurant/:id",
          element: <RestaurantMenu/>,
        },
        {
          path: "/Instamart",
          element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>,
        },
        ]
    },
   
  ])
  

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />);  // to call function.
   
  
  
  