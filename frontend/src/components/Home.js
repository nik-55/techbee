import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const getpost = async () => {
        const res = await axios.get('http://127.0.0.1:8000/getpost/');
        setPosts(res.data);
    }

    useEffect(() => {
        getpost();
    }, [])

    return (
        <div>
            {posts.map((ele, ind) => {
                return <p key={ele.id}>post {ind + 1} : {ele.input} </p>
            })}
        </div>
    )
}

export default Home