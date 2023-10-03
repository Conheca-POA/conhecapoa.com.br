import React from "react";
import { Year } from "../script/copyrightyear";
import { GitBranch } from "@phosphor-icons/react";

export function FooterErr() {
  const CopyrightYear = Year();

  return (
    <footer className="_footer">
      <p>© {CopyrightYear} Conheça POA</p>
      <span className="_version">
        <GitBranch />
        B1.0.0
      </span>
    </footer>
  );
}
