import React from "react";

import { HeaderErr } from "../../../content/headererr";
import { FooterErr } from "../../../content/footererr";

export function Err403() {
  return (
    <>
      <HeaderErr />
      <main className="_main">
        <span>
          <h5>Erro 403</h5>
          <h2>Acesso negado</h2>
        </span>
        <nav>
          <a href="/" title="Página Inícial">Página inícial</a>
          <a href="/map" title="Mapa do site">Mapa do site</a>
        </nav>
      </main>
      <FooterErr />
    </>
  );
}
