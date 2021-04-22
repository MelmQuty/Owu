import React, {useEffect, useState} from "react";
import './main.css'
import {Link, Redirect, Route, Switch} from "react-router-dom";
import FullPost from "./FullPost";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/posts";
    const fetchData = async () => {
        const response = await fetch(url);
        const json = await response.json();

        setPosts(json);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <Switch>
                <Route path="/posts/:id" exact>
                    <FullPost/>
                </Route>

                <Route>
                    <Redirect to="/posts"/>
                </Route>
            </Switch>
            <ul>
                {posts.map((el) => (
                    <Link to={`/posts/${el.id}`}>
                        <li className="padding">
                            {el.id} - {el.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Posts;
