import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Layout from './Layout.jsx'
import Github from './components/Github/Github'
const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:'Contact',
        element:<Contact/>
      },
      {
        path:'user/:userid',
        element:<User/>
      },
      {
        path:'Github',
        element:<Github/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
