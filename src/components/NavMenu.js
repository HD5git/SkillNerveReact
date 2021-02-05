import React from "react";
import { navMenuItems } from "./config.js";
export default function NavMenu() {
  return (
    <>
      {navMenuItems.map((menuItem) => (
        <div class="nav-menu-item">{menuItem}</div>
      ))}
    </>
  );
}
