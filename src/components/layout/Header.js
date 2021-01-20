import "./Header.scss";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__greeting">Bonjour $UTILISATEUR$</div>
      <div className="header__karma">Karma: $POINTS$</div>
    </div>
  );
}

export default Header;
