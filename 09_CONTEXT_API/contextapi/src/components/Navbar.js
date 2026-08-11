import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/contato">Contato</NavLink>
      <NavLink to="/sobre">Sobre</NavLink>
    </nav>
  )
}

export default Navbar
