import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import ApplyIntro from "./ApplyIntro";
import Trash from "./Trash";
import SmallCards from "./SmallCards";
import LongCards from "./LongCards";

export default function Home() {
  return (
    <>
      <NavBar />
      <ApplyIntro />
      <SmallCards />
      <LongCards />
      <Trash />
    </>
  );
}
