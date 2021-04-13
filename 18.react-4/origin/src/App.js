import React, {useState} from 'react';
import './App.css';

// // // дз  створти 2 інтупи і кнопку
// // // перший відповідає за ендпоінт джсон плейсхолдера(перша частина енпоніту) другий - за айдішнік
// // // якщо другого ендпоінту нема - тягнемо весь список  потрібно зробити валідацію на перший інпут -
// // // чи ендпоінт існуючий на другий - чи це число і чи воно в рамках 1 - 100

// // const URL = 'https://jsonplaceholder.typicode.com'

// // const AVAILABLE_URL = [
// //   'posts',
// //   'comments',
// //   'albums',
// //   'photos',
// //   'todos',
// //   'users',
// // ]

// function App()
// {

//   const [endpoint, setEndpoint] = useState('');
//   const [id, setId] = useState('');

//   const [errorMessage, setErrorMessage] = useState('');

//   const [items, setItems] = useState([]);
//   const [singleItem, setSingleItem] = useState(null)

//   const onSubmit = () => {
// // Перевірка першого поля
//     if (!endpoint) {
//       return setErrorMessage('You need to fill in the 1st field')
//     };

//     if (!AVAILABLE_URL.includes(endpoint.trim().toLowerCase())) {
//       return setErrorMessage('You need to use smt from this: posts, comments, albums, photos, todos, users')
//     }

// // Перевірка другого поля
//     const idToNum = Number(id);

//     if (!idToNum && id !== '' && idToNum !== 0) {
//       return setErrorMessage('You need to use only numbers in the second field')
//     };

//     if ((idToNum < 1 || idToNum > 100) && id !== '') {
//       return setErrorMessage('Please, enter the value for the 2nd field between 1-100')
//     }

//     fetchData();
//     setErrorMessage('');

//   }

//   const fetchData = async () => {
//     const response = await fetch(`${URL}/${endpoint.trim().toLowerCase()}/${id.trim()}`)
//     const json = await response.json();

//     if (id) {
//       setSingleItem(json)
//       setItems([])

//       return
//     }
//       setSingleItem(null)
//       setItems(json)
//   }

//   return (
//     <div className="App">
//       <br />
//       <br/>
//       <input className ="input_item" value={endpoint} onChange={({ target: { value } }) =>
//         setEndpoint(value)} type="text" placeholder="Enter division name" />
//       <br />
//       <br/>
      
//       <input className ="input_item" value={id} onChange={({ target: { value } }) =>
//         setId(value)} type="text" placeholder="Enter choice id" />
//       <br/>
//       <br/>
    
      
//       <button className="button_item" onClick={onSubmit}>Fetch Data</button>
      
//       <h1 className="error">{errorMessage}</h1>

//       <div className="single_item">
//         <pre style={{whiteSpace: 'pre-wrap'}}>
//           {singleItem && JSON.stringify(singleItem, null, 2)}
//         </pre>
//       </div>

//       <div>
//         {items.map(el => (<div>{el.id} - { el.title ?? el.name}</div>))}
//       </div>
//     </div>
//   );
// }

// export default App;

// Первое задание было на функциональных,поэтому эти будут на классовых.

// create controlled select component

// class SelectForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "coconut" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("Выбери своё состояние сегодня: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Выбери своё cостояние сегодня:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="ちくしょう">Сhikusyou</option>
//             <option value=" 行くぞ">Iku zo</option>
//             <option value="食らえ">Kurae</option>
//             <option value="勝負だ">Syoubu da</option>
//             <option value="舐めんなよ">Namenna</option>
//           </select>
//         </label>
//         <input type="submit" value="Отправить" />
//       </form>
//     );
//   }
// }

// export default SelectForm;

// create controlled checkbox

// class beingHungry extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLove: true,
//       isStatus: true,
//       isSushi: true,
//       numberOfSushi: 999,
//       isPizza: false,
//       numberOfPizza: 0,
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value,
//     });
//   }

//   render() {
//     return (
//       <div class="checkbox_form">
        
//         <form>
//           <label>
//             Всегда ли Вы голодны?
//             <input
//               name="isStatus"
//               type="checkbox"
//               checked={this.state.isStatus}
//               onChange={this.handleInputChange}
//             />
//           </label>
//         </form>

//         <form>
//           <label>
//             Испытываете ли Вы истинную любовь к вкусной еде?
//             <input
//               name="isLove"
//               type="checkbox"
//               checked={this.state.isLove}
//               onChange={this.handleInputChange}
//             />
//           </label>
//         </form>

//         <form>
//           <label>
//             Заказываете суши?
//             <input
//               name="isSushi"
//               type="checkbox"
//               checked={this.state.isSushi}
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <br />
//           <label>
//             Количество:
//             <input
//               name="numberOfSushi"
//               type="number"
//               value={this.state.numberOfSushi}
//               onChange={this.handleInputChange}
//             />
//           </label>
//         </form>

//         <form>
//           <label>
//             Заказываете пиццу?
//             <input
//               name="isPizza"
//               type="checkbox"
//               checked={this.state.isPizza}
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <br />
//           <label>
//             Количество:
//             <input
//               name="numberOfPizza"
//               type="number"
//               value={this.state.numberOfPizza}
//               onChange={this.handleInputChange}
//             />
//           </label>
//         </form>

//       </div>
//     );
//   }
// }

// export default beingHungry;



// create controlled radio
// class radioForm extends React.Component {
//   setCar(event) {
//     console.log(event.target.value);
//   }

//   render() {
//     return (
//       <div className="radio_form" onChange={this.setCar.bind(this)}>
//         <p>Select your choice</p>
//         <input type="radio" value="BMW" name="car" /> BWM
//         <input type="radio" value="Mersedes" name="car" /> Mersedes
//         <input type="radio" value="Tesla" name="car" /> Tesla
//         <input type="radio" value="Audi" name="car" /> Audi
//         <input type="radio" value="Maserati" name="car" /> Maserati
//       </div>
//     );
//   }
// }

// export default radioForm;