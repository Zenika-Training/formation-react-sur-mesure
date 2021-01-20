import Header from "./Header";
import Menu from "./Menu";
import "./Layout.scss";

function Layout({ children }) {
  return (
    <div className="layout__wrapper">
      <div className="layout__menu">
        <Menu />
      </div>
      <div className="layout__body">
        <div className="layout__header">
          <Header />
        </div>
        <div className="layout__content">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
