import React, { useEffect, useState } from "react";
import './main.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useParams,
} from "react-router-dom";
import Posts from "./Posts";

export function Main() {
  return (
    <Router>
      <div className="style">
        <nav>
          <ul class="main_ul">
            <li>
              <Link to="/" className="main_url">Home</Link>
            </li>
            <li>
              <Link to="/posts" className="main_url">Posts</Link>
            </li>
            <li>
              <Link to="/albums" className="main_url">Albums</Link>
            </li>
            <li>
              <Link to="/comments" className="main_url">Comments</Link>
            </li>
            <li>
              <Link to="/photos" className="main_url">Photos</Link>
            </li>
            <li>
              <Link to="/todos" className="main_url" >Todos</Link>
            </li>
            <li>
              <Link to="/users" className="main_url">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" component={Home} exact />

          <Route path="/posts">
            <Posts/>
          </Route>

          <Route path="/albums">
            <Albums />
          </Route>

          <Route path="/comments">
          <Comments/>
          </Route>

          <Route path="/photos" component={Photos} />

          <Route path="/todos">
            <Todos />
          </Route>

          <Route path="/users" component={Users} />

          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


//  ALBUMS

function Albums() {
  const [albums, setAlbums] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/albums";
  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();

    setAlbums(json);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Switch>
        <Route path="/albums/:id" exact>
          <AlbumsDetails />
        </Route>

        <Route>
          <Redirect to="/albums" />
        </Route>
      </Switch>
      <ul>
        {albums.map((el) => (
          <Link to={`/albums/${el.id}`}>
            <li className="padding">
              {el.id} - {el.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

function AlbumsDetails() {
  const [album, setAlbum] = useState();

  const { id } = useParams();
  const history = useHistory();
  const url = `https://jsonplaceholder.typicode.com/albums/${id}`;
  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();

    setAlbum(json);
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <>
      <div className="padding">
        {album && (
          <>
            <h3>
              {album.id} - {album.title}
            </h3>
          </>
        )}
      </div>
      <button onClick={() => history.push(`/albums/${+id + 1}`)}>
        Next one
      </button>
    </>
  );
}

// COMMENTS

function Comments() {
  const [comments, setComments] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/comments";
  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();

    setComments(json);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Switch>
        <Route path="/comments/:id" exact>
          <CommentsDetails />
        </Route>

        <Route>
          <Redirect to="/comments" />
        </Route>
      </Switch>
      <ul>
        {comments.map((el) => (
          <Link to={`/comments/${el.id}`}>
            <li className="padding">
              {el.id} - {el.email}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

function CommentsDetails() {
  const [comment, setComment] = useState();

  const { id } = useParams();
  const history = useHistory();
  const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();

    setComment(json);
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <>
      <div className="padding">
        {comment && (
          <>
            <h3>
              {comment.id} - {comment.email} - {comment.name}
            </h3>
          </>
        )}
      </div>
      <button onClick={() => history.push(`/comments/${+id + 1}`)}>
        Next one
      </button>
    </>
  );
}

// PHOTOS

function Photos() {
  const [photos, setPhotos] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/photos";
  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();

    setPhotos(json);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Switch>
        <Route path="/photos/:id" exact>
          <PhotosDetails />
        </Route>

        <Route>
          <Redirect to="/photos" />
        </Route>
      </Switch>
      <ul>
        {photos.map((el) => (
          <Link to={`/photos/${el.id}`}>
            <li className="padding">
              {el.id} - {el.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

function PhotosDetails() {
  const [photo, setPhoto] = useState();

  const { id } = useParams();
  const history = useHistory();
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();

    setPhoto(json);
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <>
      <div className="padding">
        {photo && (
          <>
            <h3>
              {photo.id} - {photo.title}
            </h3>
            <img src={photo.thumbnailUrl} alt="" />
          </>
        )}
      </div>
      <button onClick={() => history.push(`/photos/${+id + 1}`)}>
        Next one
      </button>
    </>
  );
}

//  TODOS

function Todos() {
  const [todos, setTodos] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos";
  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();

    setTodos(json);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Switch>
        <Route path="/todos/:id" exact>
          <TodosDetails />
        </Route>

        <Route>
          <Redirect to="/todos" />
        </Route>
      </Switch>
      <ul>
        {todos.map((el) => (
          <Link to={`/todos/${el.id}`}>
            <li className="padding">
              {el.id} - {el.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

function TodosDetails() {
  const [todo, setTodo] = useState();

  const { id } = useParams();
  const history = useHistory();
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();

    setTodo(json);
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <>
      <div className="padding">
        {todo && (
          <>
            <h3>
              {todo.id} - {todo.title}
            </h3>
            <p>{todo.completed.toString()}</p>
          </>
        )}
      </div>
      <button onClick={() => history.push(`/todos/${+id + 1}`)}>Next one</button>
    </>
  );
}

// USERS

function Users() {
  const [users, setUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();

    setUsers(json);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Switch>
        <Route path="/users/:id" exact>
          <UsersDetails />
        </Route>

        <Route>
          <Redirect to="/users" />
        </Route>
      </Switch>
      <ul>
        {users.map((el) => (
          <Link to={`/users/${el.id}`}>
            <li className="padding">
              {el.id} - {el.name} - {el.username}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

function UsersDetails() {
  const [user, setUser] = useState();

  const { id } = useParams();
  const history = useHistory();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();

    setUser(json);
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <>
      <div className="padding">
        {user && (
          <>
            <h3>
              {user.id} - {user.name} - {user.username}
            </h3>
            <p>{user.email}</p>
          </>
        )}
      </div>
      <button onClick={() => history.push(`/users/${+id + 1}`)}>
        Next one
      </button>
    </>
  );
}


//  HOME
function Home() {
  return <Redirect to="/" />
}


