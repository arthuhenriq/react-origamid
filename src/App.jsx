// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
import React from "react";
import Home from "../components/Home";
import Header from "../components/Header";
import Produtos from "../components/Produtos";

const App = () => {

  const {pathname} = window.location;
  let Page = Home
  

  if(pathname === '/produtos') {
    Page = Produtos
  } else {
    Page = Home
  }

  return (
    <section>
      <Header />
      <Page />
    </section>
  );
};

export default App;
