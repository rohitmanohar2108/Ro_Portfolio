import React from 'react'
import Contact from './Contact'
import Header from './Header'
import Home from './Home'
import Experince from './Experince'
import Projects from './Projects'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const Body = () => {

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/projects",
    element: <Projects/>
  },
  {
    path:"/Contact",
    element: <Contact />
  },
  {
    path:"/Experience",
    element: <Experince />
  }
])

  return (
    <div>
      <RouterProvider router={appRouter} />

    </div>
  )
}

export default Body
