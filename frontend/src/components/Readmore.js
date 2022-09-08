import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Readmore = () => {
    const { postid } = useParams();
    const [post, setPost] = useState({});

    const getpost = async (id) => {
        const res = await axios.get(`http://127.0.0.1:8000/getblog/${id}`);
        return res.data;
    }

    useEffect(() => {
        const call = async () => {
            const data = await getpost(postid);
            setPost(data)
        }
        call()
    }, [postid])

    return (
        <>
            {Object.keys(post).length === 0 ? "Loading..." :
                <div className='mx-5 my-5'>
                    <h3>{post.blog_name}</h3>
                    <small className='d-block text-muted'>Posted on date by author</small>
                    <img alt='Not loaded' src='https://source.unsplash.com/random/1920x1080/?wallpaper/landscape' className='my-2 w-50' />
                    <p className='lead my-4' style={{ "fontFamily": "cursive" }}>{post.content}</p>
                </div>}
        </>)
}

export default Readmore