import React, { useState } from 'react'

const From = () => {
    const [formData,setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleInput = (e) => {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})
    }
  return (
    <form onSubmit={handleInput}>
    <label>
        Name:
        <input type='text' name='name' value={formData.name} onChange={handleInput} />  
    </label>
    <label>
        Email:
        <input type='email' name='email' value={formData.email} onChange={handleInput} />  
    </label>
    <label>
        password:
        <input type='text' name='password' value={formData.password} onChange={handleInput} />  
    </label>
    <button type='submit'>Submit</button>
      
    </form>
  )
}

export default From
