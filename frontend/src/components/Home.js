import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const getpost = async () => {
        const res = await axios.get('http://127.0.0.1:8000/getpost/');
        return res.data;
    }

    useEffect(() => {
        const call = async () => {
            const data = await getpost()
            setPosts(data);
        }
        call()
    }, [])

    return (
        <div className="my-5">
            {posts.map((ele, ind) => {
                return (
                    <div className="card row blog_card bg-warning my-4 w-50 mx-5 text-center" style={{ "width": "18rem" }} key={ele.id}>
                        <div className="card-body">
                            <h4 className="card-title">{ele.blog_name}</h4>
                            <small className="card-subtitle mb-2 text-muted">Posted by author</small>
                            <p className="card-text">{ele.description}</p>
                            <Link to={`/${ele.id}`} className="card-link">Read More</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home