import React from "react";
import Header from "../components/Header";
import CategoryList from "../components/CategoryList";

const categories = ["Кухня", "Напитки", "Закуски", "Кальяни"];

export default function Main() {
  return (
    <div>
      <Header title={"Меню"} />

      <CategoryList categories={categories} />
    </div>
  );
}
