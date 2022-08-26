import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [inp, setInp] = useState("");
  const [posts, setPosts] = useState([]);
  const handleinput = (e) => {
    setInp(e.target.value);
  }

const handlesubmit = async () => {
    await axios.post('http://127.0.0.1:3000/savepost/', {
       input: inp 
    })
    setInp("");
  }

const getpost=async()=>{
  const res = await axios.get('http://127.0.0.1:3000/getpost/');
  setPosts(res.data);
}

  useEffect(()=>{
    getpost();
  },[inp])
  return (
    <>
      <input value={inp} onChange={handleinput} />
      <button onClick={handlesubmit}>submit</button>
      {posts.map((ele)=>{
        return <p key={ele.id}>post 1 : {ele.input} </p>
      })}
    </>
  )
}

export default App