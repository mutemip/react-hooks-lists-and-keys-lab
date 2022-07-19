import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navElements = links.map((link, index) => {
    return <a href={"#" + link} key={index}>{link}</a>
}) 

  return <nav>{navElements}</nav>;
}

export default NavBar;
