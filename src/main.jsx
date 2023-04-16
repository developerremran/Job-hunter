import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Statistics from './Components/Statistics/Statistics'
import AppliedJobs from './Components/Applied Jobs/AppliedJobs'
import Blog from './Components/BLog/Blog'
import StartApplying from './Components/Start Applying/StartApplying'
import Home from './Components/Home/Home'
import SingleJobDataPage from './Components/SingleJobDataPage/SingleJobDataPage'
import SingleActiveJob from './Components/SingleJobDataPage/SingleActiveJob'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
         path:'/',
         element:<Home></Home>,
         loader:()=> fetch('/public/mainJobsItem.json')
      },
      {
        path:'/Statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/applied-jobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/start-applying',
        element:<StartApplying></StartApplying>
      },
      {
        path:'/job/:jobId',
        element:<SingleJobDataPage></SingleJobDataPage>,
        // loader:({params})=> fetch(`/public/mainJobsItem.json/${params.userId}`)
        
      },
      {
        path:'/singleActiveJob',
        element:<SingleActiveJob></SingleActiveJob>,
         loader:()=> fetch('/public/mainJobsItem.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
      {/* <App></App> */}
  </RouterProvider>
)
