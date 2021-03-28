import './App.css';
import React from 'react';
import { UserCard } from './components/UserCard/card.js';
import { Header } from './components/header/header.js';
import { SectionInfo } from "./components/section/section.js";
import { ProductCard } from "./components/ProductCard/ProductCard.js";
import {Footer} from "./components/footer/Footer.js"

let arrOfHeader = [
  { name: "Main" },
  { name: "Contacts" },
  { name: "Blog" },
  { name: "Intro" },
  { name: "About us" },
];

let arrOfFooter = [
  { name: "Who" },
  { name: "knows" },
  { name: "what" },
  { name: "I should" },
  { name: "put" },
  { name: "here" },
  // { name: "^_^" },
];


function App() {
  return (
    <div className="App">
      <ul class="Header bac-tomato">
        {arrOfHeader.map((value) => (
          <Header {...value} />
        ))}
      </ul>
      <div className={"Container bac-aqua"}>
        <UserCard name="Vlad" surname="Petroitis" age="23" />
        <UserCard name="Andrey" surname="Vlasenko" age="25" />
        <UserCard name="Alina" surname="Vilenko" age="25" />
      </div>

      <div className={"Container bac-tomato"}>
        <SectionInfo
          title="Frontend-Delevoper"
          info="What do you want to know?"
        />
        <SectionInfo
          title="Frontend-Delevoper"
          info="What do you want to know?"
        />
        <SectionInfo
          title="Frontend-Delevoper"
          info="What do you want to know?"
        />
      </div>
      <div className="Container bac-aqua">
        <ProductCard
          title={"Acer Aspire 5 A515-55G"}
          price="750$"
          img="https://images.izi.ua/37107584"
        />
        <ProductCard
          title={"Asus Laptop E410MA-EB268"}
          price="550$"
          img="https://i.citrus.ua/uploads/content/product-photos/topchiy/October-2020/E410_08.jpg"
        />
        <ProductCard
          title={"Apple MacBook Air 13"}
          price="1100$"
          img="https://mobistore.by/files/uploads/BLOG/macbookair20202.jpg"
        />
      </div>
      <ul className="Footer bac-tomato">
        {
          arrOfFooter.map((value) => (
            <Footer {...value}/>
          ))}
      </ul>
    </div>
  );
}

export default App;
