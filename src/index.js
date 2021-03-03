import React from "react";

import Logo from "./components/Logo"
import Photo from "./components/Photo"

const Main = () => {
  return (
    <>
      <Logo />
      <Photo count = {0} file = {require("./assets/images/elefante.png")} />
      <Photo count = {0} file = {require("./assets/images/leao.png")}/>
      <Photo count = {0} file = {require("./assets/images/dog.png")}/>
      <Photo count = {0} file = {require("./assets/images/gato.png")}/>
      <Photo count = {0} file = {require("./assets/images/pato.png")}/>
            <Photo count = {0} file = {require("./assets/images/papagaio.png")}/>

    </>
  )
}

export default Main;
