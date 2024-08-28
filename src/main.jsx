import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import User from './components/User/User.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path:"/about",
        loader: ()=>fetch("https://jsonplaceholder.typicode.com/users"),
        element:<About/>
      },
      {
        path:"/contact",
      element:<Contact/>
      },
      {
        path:"/posts",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts/>
      },
      {
        path:"/post/:postId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails/>
      },
      {
        path:"/user/:UserId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.UserId}`),
        element:<UserDetails/>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />

  </StrictMode>,
)
