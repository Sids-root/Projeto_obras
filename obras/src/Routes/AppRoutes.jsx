import { Routes, Route } from "react-router";

import Home from "../Pages/Home";
import Contato from "../Pages/Contato";
import Servicos from "../Pages/Servicos";
import Produtos from "../Pages/Produtos";
import Sobre from "../Pages/Sobre";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function AppRoutes() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer/>
    </>

  );
  
}

export default AppRoutes;