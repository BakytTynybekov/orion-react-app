import "./nav.scss";

function Nav(props) {
  const navItems = [
    {
      name: "Главная",
      classN: "nav__menu-link",
      href: "/",
    },
    {
      name: "Услуги",
      classN: "nav__menu-link services-link",
      href: "javascript:void(0)",
    },
    {
      name: "Кейсы",
      classN: "nav__menu-link",
      href: "/",
    },
    {
      name: "Клиенты",
      classN: "nav__menu-link",
      href: "/",
    },
    {
      name: "Новости",
      classN: "nav__menu-link",
      href: "/",
    },
    {
      name: "Контакты",
      classN: "nav__menu-link",
      href: "/",
    },
  ];

  const liItems = navItems.map((item) => {
    return (
      <li className="nav__menu-item">
        <a href={item.href} className={item.classN}>
          {item.name}
        </a>
      </li>
    );
  });
  return (
    <nav className="nav">
      <ul className="nav__menu">{liItems}</ul>
    </nav>
  );
}

export default Nav;
