import './App.css';
import React, { useState, createContext, useContext } from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'

const TodoContext = createContext();
const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const onTodoCreate = (newTodo) => {
    if (!newTodo || !newTodo.title || !newTodo.descr) {
      console.error('error! should be {title: "...", descr: "..."}')
      return
    }

    setTodos([newTodo, ...todos])
  }
  return (
    <TodoContext.Provider value={{
      todos,
      onTodoCreate
    }}>
      {children}
    </TodoContext.Provider>
      
  )
}

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      {todos.map(el =><TodoItem key={el.title + el.descr} todo={el}/>)}
    </div>
  )
}

const TodoItem = ({ todo }) => {
  return (
    <div className="div-input">
        <h4>{todo.title}</h4>
        <p>{todo.descr}</p>
    </div>
  );
}

const AddTodo = () => {
  const [todoValue, setTodoValue] = useState({
    title: '',
    descr: '',
  });

  const { onTodoCreate } = useContext(TodoContext);

  const onTodoChange = ({ target: { name, value } }) => setTodoValue({ ...todoValue, [name]: value })
  
  const onCreate = () => {
    onTodoCreate(todoValue);
    setTodoValue({
      title: "",
      descr: "",
    });
  }
  return (
    <div className="div-input">
      <input value={todoValue.title} onChange={onTodoChange} type="text" name="title" placeholder="Todo title" />
      <br/>
      <br/>
      <input value={todoValue.descr} onChange={onTodoChange} type="text" name ="descr" placeholder="Todo descr"/>
      <br />
      <br/>
      <button onClick={onCreate}>Add todo</button>
    </div>
  );
}

const Header = () => {
  return (
    <header className="main-header">
      <Link to="/">Todos list</Link>
      <Link to="/new-todo">Add new todo</Link>
    </header>
  );
}

function App() {
  return (
    <TodoContextProvider>
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <TodoList />
            </Route>

            <Route path="/new-todo">
              <AddTodo />
            </Route>
          </Switch>
        </Router>
      </div>
    </TodoContextProvider>
  );
}

export default App;
