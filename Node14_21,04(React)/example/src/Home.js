import { Link, Outlet } from "react-router-dom";

export default function Home(){
    return <div className="wrap">
        <header>
            <nav>
                <ul>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/userinfo">UserForm</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
        <aside></aside>
        <main>
            <Outlet></Outlet>
        </main>
        <div className="right-bar"></div>
        <footer></footer>
    </div>
}