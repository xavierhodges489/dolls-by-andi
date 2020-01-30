import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <span>
        Copyright © 2020 • Icons courtesy of{" "}
        <a href="https://fontawesome.com/license" target="_blank">
          Font Awesome
        </a>
      </span>
    </div>
  )
}

export default Footer
