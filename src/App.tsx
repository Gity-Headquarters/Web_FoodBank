import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dasboard from './pages/Dashboard/Dasboard';
function App() {

  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dasboard />} />
    </Routes>

  )
}

export default App
