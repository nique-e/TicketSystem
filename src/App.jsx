import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componet/Navbar'
import AdminDashboard from './componet/AdminDashbord'
import Register from './componet/Register'
import CustomerProfile from './componet/CustomerProfile'


function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/customer" element={<CustomerProfile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
