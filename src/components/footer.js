import { useContext } from "react";
import UserContext from "/utils/UserContext.js"

const Footer = () => {
  let {user} = useContext(UserContext)
    return (

        <div className="flex gap-3 ">

          <h5>This is footer Section</h5>
          <h5>{user.name +"  "+ user.email}</h5>
          </div>

    );
  };
  
export default Footer;