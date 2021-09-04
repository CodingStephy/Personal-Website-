import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useWidth from "../../hooks/useWidth";
// import { ReactComponent as S } from "../../icon/icon.svg";
const links = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];
const Header = () => {
  const [headerActiveClass, setHeaderActive] = useState("");
  const [open, setOpen] = useState(false);
  const width = useWidth();
  useEffect(() => {
    const chk = () =>
      window.scrollY > 100 || width <= 992
        ? setHeaderActive(" bg-light shadow")
        : setHeaderActive("");
    chk();
    window.addEventListener("scroll", chk);
    return () => {
      window.removeEventListener("scroll", chk);
    };
  }, [width]);
  const showDrawer = () => {
    return (
      <Drawer
        classes={{
          paper: "drawer",
        }}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        {
          <List>
            {links.map((link, index) => (
              <ListItem
                onClick={() => setOpen(false)}
                component="a"
                href={link.link}
                button
                key={index}
              >
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
          </List>
        }
      </Drawer>
    );
  };
  const showLinks = () => {
    return (
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          {links.map((link, index) => (
            <li class="nav-item" key={index}>
              <a class="nav-link" href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <header
      className={`py-3 navbar navbar-light navbar-expand-lg fixed-top${headerActiveClass}`}
    >
      <nav className="container justify-content-lg-between align-items-center justify-content-start">
        <button
          class="navbar-toggler p-0 border-0 shadow-none me-2"
          type="button"
        >
          <IconButton
            className="p-2"
            onClick={() => setOpen(true)}
            component="span"
          >
            <span
              style={{ width: `1.3rem`, height: `1.3rem` }}
              class="navbar-toggler-icon"
            ></span>
          </IconButton>
        </button>
        <a
          href="/"
          className="navbar-brand d-inline-flex justify-content-center align-items-center text-dark"
        >
          <span className="great-vibes h1 mb-0 fw-bold">Stephanie Liu</span>
        </a>
        {width > 992 ? showLinks() : showDrawer()}
      </nav>
    </header>
  );
};

export default Header;
