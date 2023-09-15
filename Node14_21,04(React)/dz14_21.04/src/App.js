import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from "react-router-dom"

function App() {
  return (
    <>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"
/>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.min.js"
></script>
    <nav>
      <ul>
        <li><Link to="/">Biography</Link> </li>
        <li><Link to="/attractions">Attractions</Link> </li>
      </ul>
    </nav>
    <div className='container'>
      <Outlet></Outlet>
    </div>
    </>
  );
}

export default App;
