import { useSelector } from "react-redux";
import classes from "./Nav.css";
import NavItem from "./NavItem/NavItem";

function Nav() {
  const isAuthenticated = useSelector(store => store.auth.idToken !== null);

  return (
    <ul className={classes.Nav}>
      <NavItem url="/" className="logo">SuuBar</NavItem>
      <NavItem url="/">Главная страница</NavItem>
      <NavItem url="/">История</NavItem>
      <NavItem url="/">Отчетность</NavItem>
      <NavItem url="/">Настройки</NavItem>
      <NavItem url="/">Помощь</NavItem>
      {/* <NavItem url="/products">All products</NavItem>
      <NavItem url="/categories">Drink's</NavItem>
      <NavItem url="/contacts">Contacts</NavItem> */}
      { isAuthenticated ? <NavItem url="/signout">Регистрация</NavItem> : null }
      { !isAuthenticated ? <NavItem url="/auth">Вход</NavItem> : null }
    </ul>
  );
}

export default Nav;