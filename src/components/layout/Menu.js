const { NavLink } = require("react-router-dom");

function Menu() {
  return (
    <div>
      <NavLink exact to="/">
        Liste
      </NavLink>
      <NavLink exact to="/add">
        Ajouter
      </NavLink>
    </div>
  );
}

export default Menu;
