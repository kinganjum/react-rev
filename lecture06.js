import React from "react"; 
import ReactDOM from "react-dom/client"; 
import {Header} from "./components/header";  
import Body from "./components/body.js";
import Footer from "./components/footer";


const AppLayout = () => {
      return (
          <>
         <Header/>
         <Body/>
         <Footer/>
         </>
      )
  }
  
  
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout/>);  // to call function.
   
  
  
  