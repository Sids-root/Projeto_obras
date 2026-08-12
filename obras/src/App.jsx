import { Routes, Route } from "react-router";

import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Sobre from "./Pages/Sobre";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  
  );
  
}

export default App;