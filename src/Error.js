import { useRouteError } from "react-router-dom";

const Error =()=>{
    let err = useRouteError();
return (
<>
{
    
}
<h1>Welcome to error Page</h1>
<h1>{err.status}</h1>
<h3>{err.data}
</h3>

</>
)
}
export default Error;