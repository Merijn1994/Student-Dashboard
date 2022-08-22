import React from "react";

function Header () {
  return (
    <div className="header">
      <img
        src={require("../winclogo.png")}
        className="winc-logo"
      />
      <h1>Student Dashboard</h1>
    </div>
  )
}

export default Header