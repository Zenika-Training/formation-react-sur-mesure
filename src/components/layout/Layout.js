import Header from "./Header";
import Menu from "./Menu";

function Layout({ children }) {
  return (
    <div>
      <Menu />
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
