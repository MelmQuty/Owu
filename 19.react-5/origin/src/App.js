import React  from "react";
import './App.css'
import { Main } from "./components/main.js"

// Нужно было создать меню навигации с плейсхолдера, условия:
// Home - очищает всё.
// При нажании на соотвествующий отдел(posts, users etc) - грузится список.
// При нажатии на отдельный пост - подробная инфа.При нажатии ещё раз на отдел(posts, users etc) -
// подчистка подробной инфы.
// Пытался сделать через компоненты в каждый отдел(posts, users etc) отдельно пункт навигации,
// но тогда не срабатывал Router (возможно это и можно было сделать как-то, но я не додумался.)
// Ссылки и кнопка немного стилизированы

export default function App() {
  return (
    <>
      <Main />
    </>
  );
}


