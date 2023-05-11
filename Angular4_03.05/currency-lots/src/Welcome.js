import { Link, Outlet } from "react-router-dom";
export default function Welcome(){
    return <>
        <header>
                <nav className="w-100 ">
                    <div className="btn-group w-25 h-100">
                        <Link to="/list" className="btn w-100 btnbg">Lots</Link>
                        <Link to="/create" className="btn w-100 btnbg">New lot</Link>
                    </div>
                </nav>
            </header>
        <div className="container main">
            
            <main>
                <Outlet ></Outlet>
            </main>
        </div>
    </>
}