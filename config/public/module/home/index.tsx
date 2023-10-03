import React from "react";

import { HeaderErr } from "../../content/headererr";
import { FooterErr } from "../../content/footererr";

export function HomePage() {
  return (
    <>
      <HeaderErr />
      <main className="_main">
        <span>
          <h5>Projetanto a Cultura!</h5>
          <h2>Em planejamento</h2>
        </span>
        <nav>
          {/* <a href="/out/conhecer_o_projeto" title="Venha conhecer o projeto Conheça POA">Conhecer o projeto!</a> */}
          <a href="/out/ficar_por_dentro" title="Ficar por dentro do projeto Conheça POA">Ficar por dentro!</a>
        </nav>
      </main>
      <FooterErr />
    </>
  );
}
