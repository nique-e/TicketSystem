import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componet/Navbar'
import AdminDashboard from './componet/AdminDashbord'
import Register from './componet/Register'
import { Route, Routes } form 'react-router-dom'

function App() {
  const [count,setcount] = useState(0)
  return (
    <>
   <Navbar/>     
      <Route path="/" element={<Register/>}></Route>
      <Route path="/AdminDashbord" element={<AdminDashboard/>}></Route>
     </>
  )
}

export default App
