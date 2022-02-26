import { Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import CategoriasPage from './pages/CategoriasPage/CategoriasPage';
import ProductosPage from './pages/ProductosPage/ProductosPage';
import ProductoPage from './pages/ProductoPage/ProductoPage';
import VentasPage from './pages/VentasPage/VentasPage';
import VentaPage from './pages/VentaPage/VentaPage';
import RegisterVentaPage from './pages/RegisterVentaPage/RegisterVentaPage';
import PagosPage from './pages/PagosPage/PagosPage';
import './App.css';
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/productos" element={<ProductosPage />} />
          <Route exac path="/productos/:id" element={<ProductoPage />} />
          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/pagos" element={<PagosPage />} />
          <Route path="/ventas" element={<VentasPage />} />
          <Route path="/ventas/register" element={<RegisterVentaPage />} />
          <Route exac path="/ventas/:id" element={<VentaPage />} />
          <Route exac path="/" element={<MainPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
