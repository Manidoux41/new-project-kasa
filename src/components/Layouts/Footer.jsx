import React from "react";
import logoFooter from "../../assets/images/logo-footer.png";

function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src={logoFooter} alt="logo-footer" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
