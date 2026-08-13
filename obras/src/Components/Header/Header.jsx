import './Header.css'
import { Link } from "react-router";

export default function Header(){
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to ="/servicos">Serviços</Link>
      <Link to="/contato">Contatos</Link>
    </nav>
  )
}