import './App.css';
import React, {useState} from 'react';

const arr = [
    {
        id: 1,
        name: "Heart",
        location: "Thorax",
    },
    {
        id: 2,
        name: "Stomach",
        location: "Abdomen",
    },
    {
        id: 3,
        name: "Brain",
        location: "Skull",
    },
];

function App() {

    // 1 відмалювати список карточок базуючись на якомусь створеному вами масиві створити окрему кнопку,
    // яка буде видаляти поточний перший елемент(або останній)

    // const alterArr = (itemToRemove) => {
    //   if (itemToRemove !== "first" && itemToRemove !== "last") return;
    //   const newArr = [...arr];
    //   itemToRemove === "first" ? newArr.shift() : newArr.pop();
    //   changeArr(newArr);
    // };
    // return (
    //   <div className="App">
    //     <h1>Meow</h1>
    //     <ul>
    //       {arr.map((el) => (
    //         <li key={el.id} className="app_items">
    //           {`${el.name} - ${el.location}`}
    //         </li>
    //       ))}
    //     </ul>
    //     <button className="button" onClick={() => alterArr("first")}>
    //       {" "}
    //       remove first{" "}
    //     </button>
    //     <button className="button" onClick={() => alterArr("last")}>
    //       {" "}
    //       remove last{" "}
    //     </button>
    //   </div>
    // );

    //  2 те саме, тільки з кнопкою реверт (повернутись до стану, де у нас видно 3 елемнети, як на початку)

    // const [itemsToHide, setItemsToHide] = useState([]);

    // const filteredArr = arr.filter(el => !itemsToHide.includes(el.id))

    // const alterArr = () => {
    //   const itemToRemove = filteredArr[0];
    //   if (!itemToRemove) return;
    //   setItemsToHide([...itemsToHide, itemToRemove.id]);
    // };

    // const onRevert = () => {
    //   setItemsToHide([]);
    // }
    // return (
    //   <div className="App">
    //     <h1>Meow</h1>
    //     <ul>
    //       {filteredArr.map((el) => (
    //         <li key={el.id} className="app_items">
    //           {`${el.name} - ${el.location}`}
    //         </li>
    //       ))}
    //     </ul>
    //     <button className="button" onClick={alterArr}> remove  </button>
    //     <button className="button" onClick={onRevert}> revert  </button>
    //   </div>
    // );

    // 3   задача з зірочкою) кожна карточка з завдання вище має мати кнопку,
    //   по кліку на яку, ми видаляємо зі списку саме її + реверт

    const [items, setItems] = useState(arr);

    const alterArr = (id) => {
        setItems(prevState => {
            return prevState
                .map(x => ({...x}))
                .filter(x => x.id !== id)
        });
    };

    const onRevert = () => {
        setItems(arr);
    };
    return (
        <div className="App">
            <h1>Meow</h1>
            <ul>
                {items.map((el) => (
                    <li key={el.id} className="app_items">
                        {el.name} : {el.location} -
                        <button className="button" onClick={() => alterArr(el.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <button className="button" onClick={onRevert}> Revert</button>
        </div>
    );
}

export default App;
