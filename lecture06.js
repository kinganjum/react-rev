import React from "react"; 
import ReactDOM from "react-dom/client"; 
import {Header} from "./components/header";  
import Body from "./components/body.js";
import Footer from "./components/footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



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
        ]
    },
   
  ])
  

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />);  // to call function.
   
  
  
  