import { useState } from "react";
import { Link } from "react-router-dom";


export const Logo = () => (
    <a href="/">
    <img className="logo"
       alt="logo" src="https://lh3.googleusercontent.com/EbPS9tYwL3H8NkiYJPJbuRHmeIFVUYJs99IdfFT7ea6ZF9sw1Vhw9tiCFVCXqornHGKZyP8sy89up4G-yKqGzoLgPx8"/>
    </a>
);
                    
                    
export const Header = () => {

  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
  <div className="header">
        <Logo/>         
        <div className="nav-iteams">
          <ul> 
              <Link to="/">
                  <li>Home</li>
              </Link>
              
              <Link to="/about">
                  <li>About</li>
              </Link>

              <Link to="/contact">
                  <li>Contact</li>
              </Link>
                
                  <li>Cart</li>
                  <Link to="/Instamart">
                  <li>Instamart</li>
              </Link>
                </ul>
             </div>
             {
              isLoggedIn ? <button onClick={()=> setisLoggedIn(false)}>Log-Out</button> : <button  onClick={()=> setisLoggedIn(true)}>Log-In</button>
             }
            
             
        </div>
        );    
    };

