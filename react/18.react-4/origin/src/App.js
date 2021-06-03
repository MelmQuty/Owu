import React, {useState} from 'react';
import './App.css';
import SelectForm from './components/select.js'
import BeingHungry from './components/checkbox.js'
import RadioForm from './components/radio.js'

// // // дз  створти 2 інтупи і кнопку
// // // перший відповідає за ендпоінт джсон плейсхолдера(перша частина енпоніту) другий - за айдішнік
// // // якщо другого ендпоінту нема - тягнемо весь список  потрібно зробити валідацію на перший інпут -
// // // чи ендпоінт існуючий на другий - чи це число і чи воно в рамках 1 - 100

const URL = 'https://jsonplaceholder.typicode.com'

const AVAILABLE_URL = [
  'posts',
  'comments',
  'albums',
  'photos',
  'todos',
  'users',
]

function App()
{

  const [endpoint, setEndpoint] = useState('');
  const [id, setId] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const [items, setItems] = useState([]);
  const [singleItem, setSingleItem] = useState(null)

    const onSubmit = () => {
      
// Перевірка першого поля
    if (!endpoint) {
      return setErrorMessage('You need to fill in the 1st field')
    };

    if (!AVAILABLE_URL.includes(endpoint.trim().toLowerCase())) {
      return setErrorMessage('You need to use smt from this: posts, comments, albums, photos, todos, users')
    }

// Перевірка другого поля
    const idToNum = Number(id);

    if (!idToNum && id !== '' && idToNum !== 0) {
      return setErrorMessage('You need to use only numbers in the second field')
    };

    if ((idToNum < 1 || idToNum > 100) && id !== '') {
      return setErrorMessage('Please, enter the value for the 2nd field between 1-100')
    }

    fetchData();
    setErrorMessage('');

  }

  const fetchData = async () => {
    const response = await fetch(`${URL}/${endpoint.trim().toLowerCase()}/${id.trim()}`)
    const json = await response.json();

    if (id) {
      setSingleItem(json)
      setItems([])

      return
    }
      setSingleItem(null)
      setItems(json)
  }

  return (
    <div className="App">
      <br />
      <br />
      <input
        className="input_item"
        value={endpoint}
        onChange={({ target: { value } }) => setEndpoint(value)}
        type="text"
        placeholder="Enter division name"
      />
      <br />
      <br />
      <input
        className="input_item"
        value={id}
        onChange={({ target: { value } }) => setId(value)}
        type="text"
        placeholder="Enter choice id"
      />
      <br />
      <br />
      <button className="button_item" onClick={onSubmit}>
        Fetch Data
      </button>
      <h1 className="error">{errorMessage}</h1>
      <div className="single_item">
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {singleItem && JSON.stringify(singleItem, null, 2)}
        </pre>
      </div>
      <div>
        {items.map((el) => (
          <div>
            {el.id} - {el.title ?? el.name}
          </div>
        ))}
      </div>
      {/* // Первое задание было на функциональных,поэтому эти будут на классовых. */}
      {/* // create controlled select component */}
      <hr />
      <SelectForm />
      <hr />
      {/* // create controlled checkbox */}
      <BeingHungry />
      <hr />
      {/* // create controlled radio */}
      <RadioForm/>
      </div>
  );
}

export default App;