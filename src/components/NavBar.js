import React from "react";

function NavBar() {
  const links = ["home", " about", " projects"];

  return (
  <nav key={links}>
    {<a href="#home">Home</a>}
    {<a href="about">About</a>}
    {<a href="#projects">projects</a>}
  </nav>

  )
}

export default NavBar;
