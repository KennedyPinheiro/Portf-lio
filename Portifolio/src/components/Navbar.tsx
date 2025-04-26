import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        MinhaLogo
      </div>
      <ul style={styles.navLinks}>
        <li><NavLink to="/" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Home</NavLink></li>
        <li><NavLink to="/sobre" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Sobre</NavLink></li>
        <li><NavLink to="/projetos" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Projetos</NavLink></li>
        <li><NavLink to="/contato" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Contato</NavLink></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px 20px",
  } as React.CSSProperties,
  logo: {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
  } as React.CSSProperties,
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  } as React.CSSProperties,
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  } as React.CSSProperties,
  activeLink: {
    color: "yellow",
    textDecoration: "underline",
  } as React.CSSProperties,
};

export default Navbar;
