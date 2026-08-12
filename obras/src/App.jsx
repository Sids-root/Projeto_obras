import { Routes, Route } from "react-router";

import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Sobre from "./Pages/Sobre";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Produtos" element={<Produtos />} />
      <Route path="/Sobre" element={<Sobre />} />
    </Routes>
  
  );
  
}

export default App;