import { NavLink } from "react-router-dom";
import "./Menu.scss";

function Menu() {
  return (
    <div className="menu__wrapper">
      <NavLink
        className="menu__nav-link"
        activeClassName="menu__nav-link_active"
        exact
        to="/"
      >
        Liste
      </NavLink>
      <NavLink
        className="menu__nav-link"
        activeClassName="menu__nav-link_active"
        exact
        to="/add"
      >
        Ajouter
      </NavLink>
    </div>
  );
}

export default Menu;
