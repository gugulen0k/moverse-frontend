import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Authorization = lazy(() => import('./Authorization'))
const Home = lazy(() => import('./Home'))

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path="*" element={ <Navigate to="/" /> }/>
      <Route path='/authorization' element={ <Authorization /> }/>
    </Routes>
  )
}
