import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ClienteHome from './pages/ClienteHome';
import ConductorHome from './pages/ConductorHome';
import AdminHome from './pages/AdminHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cliente" element={<ClienteHome />} />
        <Route path="/conductor" element={<ConductorHome />} />
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
