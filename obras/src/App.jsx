import { Routes, Route } from "react-router";

import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Sobre from "./Pages/Sobre";
import Servicos from "./Pages/Servicos";
import Contatos from "./Pages/Contato";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/contato" element={<Contatos />} />
    </Routes>
  
  );
  
}

export default App;