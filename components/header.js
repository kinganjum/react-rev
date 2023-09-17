export const Logo = () => (
    <a href="/">
    <img className="logo"
       alt="logo" src="https://lh3.googleusercontent.com/EbPS9tYwL3H8NkiYJPJbuRHmeIFVUYJs99IdfFT7ea6ZF9sw1Vhw9tiCFVCXqornHGKZyP8sy89up4G-yKqGzoLgPx8"/>
    </a>
);
                    
                    
export const Header = () => {
  return (
  <div className="header">
        <Logo/>         
        <div className="nav-iteams">
          <ul> 
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Cart</li>
                </ul>
             </div>
        </div>
        );    
    };

