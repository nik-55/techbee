import React,{useState} from 'react'
import axios from 'axios';

const AuthorPost = ({ post }) => {
    const obj = {
        blog_name: post?.blog_name,
        description: post?.description,
        content: post?.content,
    }
    const [inp, setInp] = useState(obj);

    const handleinput = (e) => {
        const name = e.target.name
        const val = e.target.value
        setInp({ ...inp, [name]: val })
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("techbee_jwtToken")
        if (token !== "") {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            }
            await axios.put(`http://127.0.0.1:8000/updatepost/${post.id}/`, {
                blog_name: inp.blog_name,
                description: inp.description,
                content: inp.content,
            },config);
            setInp(obj);
        }
    }

   const del = async()=>{
        await axios.delete(`http://127.0.0.1:8000/deletepost/${post.id}/`)
   }

    return (
        <>
            <form className='mx-4 my-4' onSubmit={handlesubmit}>
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
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
            <button type="submit" className="btn btn-primary" onClick={del}>Delete</button>
        </>
    )
}

export default AuthorPost