import React from "react"
import { Link } from "gatsby"

import headerSyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerSyles.header}>
      <h1 className={headerSyles.dollsByAndi}>
        <Link className={headerSyles.dollsByAndiLink} to="/">
          Dolls By Andi
        </Link>
      </h1>
      <nav className={headerSyles.nav}>
        <ul>
          <li>
            <Link
              className={headerSyles.navItem}
              activeClassName={headerSyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerSyles.navItem}
              activeClassName={headerSyles.activeNavItem}
              to="/catalog"
            >
              Catalog
            </Link>
          </li>
          <li>
            <Link
              className={headerSyles.navItem}
              activeClassName={headerSyles.activeNavItem}
              to="/gallery"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className={headerSyles.navItem}
              activeClassName={headerSyles.activeNavItem}
              to="/about"
            >
              About / Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
