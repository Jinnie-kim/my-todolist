import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Reset } from 'styled-reset';

import Nav from './components/Nav';
import Home from './pages/Home/Home';
import Join from './pages/Join/Join';
import Login from './pages/Login/Login';
import { useGlobalContext } from './api/todos/useGlobalContext';

export default function App() {
  const { token } = useGlobalContext();
  return (
    <BrowserRouter>
      <Reset />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={token ? <Home /> : <Navigate replace={true} to="/login" />}
        />
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate replace={true} to="/" />}
        />
        <Route
          path="/join"
          element={!token ? <Join /> : <Navigate replace={true} to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
