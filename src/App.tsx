import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Layout from './Layout/Layout';
function App() {

  return (

    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element={<Layout />} />
    </Routes>

  )
}

export default App
