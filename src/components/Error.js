import { useRouteError } from "react-router-dom"; // use to handle status of errors(1.04.00)


const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>OOpppsss</h1>
            <h2>something went wrong !!</h2>
            <h2>{err.status + " : " + err.statusText} </h2>
        </div>
    )
}

export default Error;