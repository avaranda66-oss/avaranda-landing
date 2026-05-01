import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { MenuPage } from "../../components/MenuPage";

export const metadata: Metadata = {
  title: "Cardápio | A Varanda",
  description:
    "Entradas, pratos principais, sobremesas e drinks autorais — assinados por Tarcila Azevedo.",
};

export default function CardapioPage() {
  return (
    <>
      <Header />
      <MenuPage />
    </>
  );
}
