
import { NavLink } from "react-router-dom";
import './Nav.css'


function Nav() {
  return ( 
    <nav className="navigation">
      <NavLink className='nav-todo' to='/' >ToDos</NavLink>
      <NavLink className='nav-addtodo'to='/addtodo'>Add ToDo</NavLink>
    </nav>
  );
}

export default Nav;