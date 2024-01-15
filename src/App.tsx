import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dasboard from './pages/Dashboard/Dasboard';
import DanaAdmin from './pages/DanaAdmin/DanaAdmin';
import TotalPosko from './pages/TotalPosko/TotalPosko';
import ManagePosko from './pages/ManagePosko/ManagePosko';
import TransaksiUser from './pages/TransaksiUser/TransaksiUser';
import DetailTransaksi from './pages/DetailTransaksi/DetailTransaksi';

function App() {

  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dasboard />} />
      <Route path="/dana-admin" element={<DanaAdmin />} />
      <Route path="/total-posko" element={<TotalPosko />} />
      <Route path="/manage-posko" element={<ManagePosko />} />
      <Route path="/transaksi-user" element={<TransaksiUser />} />
      <Route path="/transaksi-user/detail-transaksi/:id" element={<DetailTransaksi />} />
    </Routes>

  )
}

export default App
