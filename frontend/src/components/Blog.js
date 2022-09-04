import React, { useState } from 'react'
import axios from 'axios'

const Blog = () => {
    const [inp, setInp] = useState("");
   
    // const [file, setFile] = useState();


    const handleinput = (e) => {
        setInp(e.target.value);
    }
    // const handlefile = (e) => {
    //   const f = e.target.files[0];
    //   setFile(f);
    // }
    const handlesubmit = async () => {
        // const form = new FormData();
        // form.append('file', file);
        // form.append('input', inp);

        // await axios.post('http://127.0.0.1:8000/savepost/', form, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data'
        //   }
        // });

        await axios.post('http://127.0.0.1:8000/savepost/', {
            input: inp
        });
        setInp("");
        // await getpost();
    }

   

    return (
        <div>
            <input value={inp} onChange={handleinput} />
            {/* <input type={"file"} onChange={handlefile} /> */}
            <button onClick={handlesubmit}>submit</button>
        </div>
    )
}

export default Blog