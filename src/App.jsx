import { Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import CategoriasPage from './pages/CategoriasPage/CategoriasPage';
import ProductosPage from './pages/ProductosPage/ProductosPage';
import ProductoPage from './pages/ProductoPage/ProductoPage';
import AdeudosPage from './pages/AdeudosPage/AdeudosPage';
import AdeudoPage from './pages/AdeudoPage/AdeudoPage';
import VentasPage from './pages/VentasPage/VentasPage';
import './App.css';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/productos" element={<ProductosPage />} />
          <Route exac path="/productos/:id" element={<ProductoPage />} />
          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/adeudos" element={<AdeudosPage />} />
          <Route exac path="/adeudos/:id" element={<AdeudoPage />} />
          <Route path="/ventas" element={<VentasPage />} />
          <Route exac path="/" element={<MainPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
