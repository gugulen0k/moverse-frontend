import { lazy } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import Sidebar from "./Home/components/Sidebar";

const Authorization = lazy(() => import('./Authorization'))
const Home = lazy(() => import('./Home'))

const WithSidebar = () => {
  return (
    <>
      <Sidebar className='h-full w-max'/>
      <Outlet />
    </>
  )
}

export const Routing = () => {
  return (
    <div className='h-screen flex'>
      <Routes>
        <Route path='/authorization' element={<Authorization />}/>
        <Route element={<WithSidebar />}>
          <Route path="*" element={<Navigate to="/" />}/>
          <Route path='/' element={<Home />}/>
        </Route>
      </Routes>
    </div>
  )
}
