import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavMenu from "./NavMenu";
import NavButtons from "./NavButtons";

export default function Nav() {
  return (
    <>
      <Logo />
      <SearchBar />
      <NavMenu />
      <NavButtons />
    </>
  );
}
