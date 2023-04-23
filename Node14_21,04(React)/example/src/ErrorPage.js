import { useRouteError } from "react-router-dom";
export default function ErrorPage(){
    const error = useRouteError();
    console.log(error);
    return<>
    <h1>Oops...</h1>
    <h3>There is error</h3>
    <h4>{error.status}, {error.statusText}</h4>
    <h5><i>{error.error.message}</i></h5>
    </>
}