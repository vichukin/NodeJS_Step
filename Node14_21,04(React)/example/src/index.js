import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './Home';
import About from './About';
import News from './News';
import ErrorPage from './ErrorPage';
import UserForm from './UserForm';
import UserInfo from './UserInfo';
const router = createBrowserRouter([
  {
    path:"/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/about",
        element:<About></About>
      },
      {
        path:"/news",
        element: <News></News>
      },
      {
        path:"/contacts",
        element: <h2>Our Contacts</h2>
      },
      {
        path:"/userinfo",
        element: <UserInfo></UserInfo>
      }
    ]
  },
  {
    path: "/login",
    element: <h2>Login page</h2>
  }
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
