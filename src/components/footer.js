import React from "react";


const MainLogo=function(){
    return (
        <div>
        <img className="Logo h-10 w-10 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw4AawRmqv3WJwO8RPtKUAjSQ6YgR5GUKrXw&usqp=CAU"></img>
        </div>
);
    };

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__logo">
           <MainLogo/>
          <h5>MyPizza</h5>
          <p>Best Pizzas in town, try it out!</p>
        </div>
        <div>
          <h5 className="footer__title mb-3">Delivery Time</h5>
          
        </div>
      </footer>
    );
  };
  
export default Footer;