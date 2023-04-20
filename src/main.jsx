import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './companent-2/Main/Main'
import Home from './companent-2/Home/Home'
import Register from './companent-2/Register/Register'
import Login from './companent-2/Login/Login'
import AuthProvider from './Provider/AuthProvider'
/* import Home from './companent/Home/Home'
import Register from './companent/Register/Register'
import Login from './companent/Login/Login'
import Logout from './companent/Logout/Logout' */
const router = createBrowserRouter([
  /* {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'logout',
        element: <Logout/>
      }
    ]
  } */
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'login',
        element: <Login/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
)
