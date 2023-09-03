import { createContext } from "react";

let userData = createContext({
     user:{
        name:"Anmol",
        email:"dummy@gmail.com"
     }
})
export default userData;
// Default data de diya aapne --->isko kahin pe modify krke bhejna ho mtlb kisi alg value se --> filename.provider
// krke component m value ko modify krna pdega 
// create Context se ek context bna diya 
// ab isko kahin bhi use kr skta hun m 