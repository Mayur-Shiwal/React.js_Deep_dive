import React, { Suspense, useState } from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
import './App.css'
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(()=> import('./components/Landing'))

// lazy => it returns a promise so that only required components will be fetched

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={"Loading..."}> <Dashboard/> </Suspense>}></Route>
          <Route path='/' element={<Suspense fallback={"Loading..."}> <Landing/> </Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
// suspense => when asynchronous component fetching happens its should be wrapped inside a suspense API


function Appbar(){
  const navigate = useNavigate();
  return <div>
    <button onClick={() => navigate("/")}>Landing Page</button>
    <button onClick={() => navigate("/dashboard")}>Dashboard Page</button>
  </div>
}

export default App
