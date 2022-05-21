import AddToDo from "../AddToDo";
import { NavLink } from "react-router-dom";


function Nav() {
  return ( 
    <nav className="navigation">
      <NavLink to='/' >ToDos</NavLink>
      <NavLink to='/addtodo'>Add ToDo</NavLink>
    </nav>
  );
}

export default Nav;