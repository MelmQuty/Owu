import React, {useEffect, useState} from "react";
import './main.css'
import {useHistory, useParams} from "react-router-dom";

const FullPost = () => {
    const [post, setPost] = useState();

    const { id } = useParams();
    const history = useHistory();
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const fetchData = async () => {
        const response = await fetch(url);
        const json = await response.json();

        setPost(json);
    };

    useEffect(() => {
        fetchData();
    }, [id]);
    return (
        <>
            <div className="padding">
                {post && (
                    <>
                        <h3>
                            {post.id} - {post.title}
                        </h3>
                        <p>{post.body}</p>
                    </>
                )}
            </div>
            <button onClick={() => history.push(`/posts/${+id + 1}`)}>
                Next one
            </button>
        </>
    );
}

export default FullPost;
