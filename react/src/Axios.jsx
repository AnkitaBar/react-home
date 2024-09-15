import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const [data,setData] = useState([])
    const [name,setName] = useState('');

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setData(response.data))
        .catch(error =>{
                console.error("Error...........",error);
        })

    },[])

   

    function handleChange(e){
        setName(e.target.value);
    }

    const newItem = {
        id:Date.now(),
        title:name,
        body:name
    }
    function handleSubmit(e){
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', newItem)
        .then(response => setData([...data,response.data]))
    
    .catch((error) => {
        console.error("Error...........", error);
    });
    setName(" ");
    }
  return (
    <div>

    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" onChange={handleChange}/>
        <button type="submit">Add Item</button>
    </form>

<h1>axios</h1>

{data.map(item => (
    <div key={item.id}>
        <h2>{item.title}</h2>
    </div>
))}


    </div>
  )
}

export default Axios
