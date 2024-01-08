import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dasboard from './pages/Dashboard/Dasboard';
import DanaAdmin from './pages/DanaAdmin/DanaAdmin';
function App() {

  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dasboard />} />
      <Route path="/dana-admin" element={<DanaAdmin />} />
    </Routes>

  )
}

export default App
