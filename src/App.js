import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';

import Nav from './components/Nav';
import Home from './pages/Home/Home';
import Join from './pages/Join/Join';
import Login from './pages/Login/Login';

export default function App() {
  return (
    <BrowserRouter>
    <Reset />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}
