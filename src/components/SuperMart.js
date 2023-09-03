import React, { useState } from 'react'


const Section =({title, Description,show,setShow})=>{
    
    return(
        <div className='p-2 m-2 border-2 border-blue-400 '>
        <h2 className=' p-2 '>{title}</h2>
        {
       
        show ?(<button className='p-2' onClick={()=>{
            setShow(show);
        }}>Hide</button>):( <button className="p-2 "onClick={()=>{
            setShow(show);
        }}>Show</button>  )

        }
        
        {show?(<h2 className='font-thin'>{Description}</h2>):( <></>)}
        </div>
    )
}

function SuperMart() { 
  let [visibleSection, setVisibleSection] =useState("");
  return (
    <>
    
    <Section title={"Header Section"} 
    Description = {" Sudden she seeing garret far regard. By hardly it direct if pretty up regret. Ability thought enquire settled prudent you sir. Or easy knew sold on well come year. Something consulted age extremely end procuring. Collecting preference he inquietude projection me in by.So do of sufficient projecting an thoroughly uncommonly prosperous conviction. Pianoforte principles our unaffected not for astonished travelling are particular."}
    show ={visibleSection==="Header"}
    setShow={(e)=>{
        // console.log(e)  // false --> click kra hai phle false tha pr ab show hona chahiye 
        console.log(visibleSection)
           if(e){
            setVisibleSection("")
           }else{
            setVisibleSection("Header")
           }
    }}
    />

<Section title={"Teams Of Instamart"} 
    Description = {" Sudden she seeing garret far regard. By hardly it direct if pretty up regret. Ability thought enquire settled prudent you sir. Or easy knew sold on well come year. Something consulted age extremely end procuring. Collecting preference he inquietude projection me in by.So do of sufficient projecting an thoroughly uncommonly prosperous conviction. Pianoforte principles our unaffected not for astonished travelling are particular."}
    show ={visibleSection==="Team"}
    setShow={(e)=>{
        // console.log(e)  // false --> click kra hai phle false tha pr ab show hona chahiye 
        console.log(visibleSection)
           if(e){
            setVisibleSection("")
           }else{
            setVisibleSection("Team")
           }
    }}
    />
    

<Section title={"Career "} 
    Description = {" Sudden she seeing garret far regard. By hardly it direct if pretty up regret. Ability thought enquire settled prudent you sir. Or easy knew sold on well come year. Something consulted age extremely end procuring. Collecting preference he inquietude projection me in by.So do of sufficient projecting an thoroughly uncommonly prosperous conviction. Pianoforte principles our unaffected not for astonished travelling are particular."}
    show ={visibleSection==="Career"}
    setShow={(e)=>{
        // console.log(e)  // false --> click kra hai phle false tha pr ab show hona chahiye 
        console.log(visibleSection)
           if(e){
            setVisibleSection("")
           }else{
            setVisibleSection("Career")
           }
    }}
    />


<Section title={"Contact"} 
    Description = {" Sudden she seeing garret far regard. By hardly it direct if pretty up regret. Ability thought enquire settled prudent you sir. Or easy knew sold on well come year. Something consulted age extremely end procuring. Collecting preference he inquietude projection me in by.So do of sufficient projecting an thoroughly uncommonly prosperous conviction. Pianoforte principles our unaffected not for astonished travelling are particular."}
    show ={visibleSection==="Contact"}
    setShow={(e)=>{
        // console.log(e)  // false --> click kra hai phle false tha pr ab show hona chahiye 
        console.log(visibleSection)
           if(e){
            setVisibleSection("")
           }else{
            setVisibleSection("Contact")
           }
    }}
    />
    
    </>
    

  )
}
/*
Super Market 
header about --> section
team instamart --> section
career -->section
contact --> section



*/
export default SuperMart