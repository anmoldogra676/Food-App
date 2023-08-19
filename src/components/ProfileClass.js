import React from "react";

class Profile extends React.Component{

   constructor(props){
    super(props);
    console.log("In constructor")
    this.state={
        count: 0,
        count2:0
    };
   }

    render(){
        let {count,count2} = this.state;
        console.log("before render")
        return(
        <>
        <h1>Class Based Profile</h1>
        <h2>{this.props.name}</h2>
        <h2>count :{count2}</h2>
        <button onClick={()=>{
            this.setState({
                count2:count2+1,
            })


        }}>click </button>
        </>
        )

    }
}
export default Profile;  

/*
Notes for class based component
if we have to write class based component
then 
render() -> is the crucial function which is needes
constructor() --> is the one 
*/