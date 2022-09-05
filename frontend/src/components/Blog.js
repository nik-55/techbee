import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const obj = {
    blog_name: "",
    description: "",
    content: "",
}
const Blog = ({ login }) => {
    const [inp, setInp] = useState(obj);

    const handleinput = (e) => {
        const name = e.target.name
        const val = e.target.value
        setInp({ ...inp, [name]: val })
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://127.0.0.1:8000/savepost/', {
            blog_name: inp.blog_name,
            description: inp.description,
            content: inp.content
        });
        setInp(obj);
    }

    return (
        <>
            {login ? <form className='mx-4 my-4' onSubmit={handlesubmit}>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Blog Name</label>
                    <div className="col-sm-10">
                        <input onChange={handleinput} type={"text"} name="blog_name" value={inp.blog_name} className="form-control w-50" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea onChange={handleinput} type={"text"} name="description" value={inp.description} className="form-control w-75" style={{ "resize": "none" }} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Blog Content</label>
                    <div className="col-sm-10">
                        <textarea onChange={handleinput} type={"text"} name="content" value={inp.content} className="form-control w-75" rows="10" style={{ "resize": "none" }} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Image</label>
                    <div className="col-sm-10">
                        <input type={"file"} className="form-control w-25" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
            </form> : <Link className='mx-5 my-5' to="/login">Login In To create blog</Link>}
        </>
    )
}

export default Blog