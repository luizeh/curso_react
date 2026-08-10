import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/">Sobre</NavLink>
      <NavLink to="/products">Produtos</NavLink>
    </nav>
  )
}

export default Navbar
