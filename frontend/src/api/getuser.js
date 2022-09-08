import axios from "axios";

export const getuser = async () => {
    const token = localStorage.getItem("techbee_jwtToken")
    if (token !== "") {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const res = await axios.get("http://localhost:8000/getuser/", config)
        return res;
    }
}

export const del = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/deletepost/${id}/`)
}

export const handlesubmit = async (e,id,inp) => {
    e.preventDefault();
    const token = localStorage.getItem("techbee_jwtToken")
    if (token !== "") {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        await axios.put(`http://127.0.0.1:8000/updatepost/${id}/`, {
            blog_name: inp.blog_name,
            description: inp.description,
            content: inp.content,
        }, config);
    }
}

export const savepost = async (e,inp) => {
    e.preventDefault();
    const token = localStorage.getItem("techbee_jwtToken")
    if (token !== "") {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        await axios.post('http://127.0.0.1:8000/savepost/', {
            blog_name: inp.blog_name,
            description: inp.description,
            content: inp.content,
            author_id: inp.id
        }, config);
    }
}


export const getpost = async () => {
    const res = await axios.get('http://127.0.0.1:8000/getpost/');
    return res.data;
}

export const getblog = async (id) => {
    const res = await axios.get(`http://127.0.0.1:8000/getblog/${id}`);
    return res.data;
}