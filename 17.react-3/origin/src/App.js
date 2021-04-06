import React, {useEffect, useState} from 'react';
import './App.css';

const Items = ({items, selectedItem, onItemClick}) => {

  return (
    <div className="item_container">
      {items.map(item =>
        <button key={item} className={selectedItem === item
        ? 'selected_button'
        : 'white'} onClick={() => onItemClick(item)}>{item}
        </button>)}
    </div>
  ) 
}

const PostList = ({ list }) => {
  
  return (
    <div>
      {list.map(post => (
        <div key={post.id}>
        <h2>{post.id} - {post.title}</h2>
        <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}
const CommentList = ({ list }) => {
  
  return (
    <div>
      {list.map(comment => (
        <div key={comment.id}>
        <h2>{comment.id} - {comment.name}</h2>
        <p>{comment.body}</p>
        </div>
      ))}
    </div>
  )
}

const AlbumList = ({ list }) => {
  
  return (
    <div>
      {list.map(album => (
        <div key={album.id}>
        <h2>{album.id} - {album.title}</h2>
        </div>
      ))}
    </div>
  )
}

const PhotoList = ({ list }) => {
  
  return (
    <div>
      {list.map(photo => (
        <div key={photo.id}>
        <h2>{photo.id} - {photo.title}</h2>
        <img src={photo.thumbnailUrl} alt="" />
        </div>
      ))}
    </div>
  )
}

const TodoList = ({ list }) => {
  
  return (
    <div>
      {list.map(todo => (
        <div key={todo.id}>
        <h2>{todo.id} - {todo.title}</h2>
        <p>{todo.completed.toString()}</p>
        </div>
      ))}
    </div>
  )
}

const UserList = ({ list }) => {
  
  return (
    <div>
      {list.map(user => (
        <div key={user.id}>
          <h2>{user.id} - {user.name} - {user.username}</h2>
        <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

const urlCreater = (resourse) => `https://jsonplaceholder.typicode.com/${resourse}`

const POSTS = 'Posts';
const COMMENTS = 'Comments';
const ALBUMS = 'Albums';
const PHOTOS = 'Photos';
const TODOS = 'Todos';
const USERS = 'Users';

const Components = {
  [POSTS] : PostList,
  [COMMENTS] : CommentList,
  [ALBUMS] : AlbumList,
  [PHOTOS] : PhotoList,
  [TODOS] : TodoList,
  [USERS] : UserList,
}
function App() {
  
  const items = [
    POSTS,
    COMMENTS,
    ALBUMS,
    PHOTOS,
    TODOS,
    USERS,
  ]

  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [data, setData] = useState({
    [POSTS] : [],
    [COMMENTS] : [],
    [ALBUMS] : [],
    [PHOTOS] : [],
    [TODOS] : [],
    [USERS] : [],
  })
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(urlCreater(selectedItem));
    const object = await response.json();
    setData({...data, [selectedItem]: object})
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [selectedItem])

  const ComponentToRender = Components[selectedItem];

  return (
    <div className="App">
      <Items items={items} selectedItem={selectedItem} onItemClick={item => setSelectedItem(item)} />
      {isLoading && !data[selectedItem].length ? <h1>Loading...</h1> : (
        <ComponentToRender list={data[selectedItem]} />
      )}
    </div>
  );
}

export default App;
