import { useState } from "react";
import { Link } from "react-router-dom";


export const Logo = () => (
    <a href="/">
    <img className="h-28"
       alt="logo" src="https://lh3.googleusercontent.com/EbPS9tYwL3H8NkiYJPJbuRHmeIFVUYJs99IdfFT7ea6ZF9sw1Vhw9tiCFVCXqornHGKZyP8sy89up4G-yKqGzoLgPx8"/>
    </a>
);
                    
                    
export const Header = () => {

  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
  <div className="flex justify-between  bg-pink-50 shadow-lg sm:bg-purple-300 md:bg-yellow-200"> 
        <Logo/>         
        <div className="nav-iteams">
          <ul className="flex py-10"> 
              <Link to="/">
                  <li className="px-2">Home</li>
              </Link>
              
              <Link to="/about">
                  <li className="px-2">About</li>
              </Link>

              <Link to="/contact">
                  <li className="px-2">Contact</li>
              </Link>
                
                  <li className="px-2">Cart</li>
                  <Link to="/Instamart">
                  <li className="px-2">Instamart</li>
              </Link>
                </ul>
             </div>
             {
              isLoggedIn ? <button onClick={()=> setisLoggedIn(false)}>Log-Out</button> : <button  onClick={()=> setisLoggedIn(true)}>Log-In</button>
             }
            
             
        </div>
        );    
    };

