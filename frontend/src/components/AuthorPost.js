import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { del, handlesubmit } from '../api/getuser';

const obj = {
    blog_name: "",
    description: "",
    content: ""
}

const AuthorPost = () => {
    const { postid } = useParams();
    const [inp, setInp] = useState(obj);

    const handleinput = (e) => {
        const name = e.target.name
        const val = e.target.value
        setInp({ ...inp, [name]: val })
    }

    useEffect(() => {
        const getblog = async () => {
            const res = await axios.get(`http://localhost:8000/getblog/${postid}/`)
            setInp(res.data);
        }
        getblog();
    }, [postid])

    return (
        <>
            <form className='mx-4 my-4' onSubmit={(e) =>handlesubmit(e, postid, inp)}>
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
                <button className="btn btn-primary" onClick={() => del(postid)}>Delete</button>
            </form>
        </>
    )
}

export default AuthorPost