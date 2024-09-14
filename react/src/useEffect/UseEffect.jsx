import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [clicked,setClicked] = useState();
    const [count, setCount] = useState(0);

    useEffect(() => {
        // alert('we r in')
        console.log('we r in')

        return(
            () => {
                console.log('we r out')
            }
        )

    },[clicked])
  return (
    <div>
      <button onClick={() => setClicked('subscribe')}>Subscribe</button>
      <hr/>
      <button onClick={() => setClicked('To')}>To</button>
      <hr/>
      <button onClick={() => setClicked('My Channel')}>My Channel</button>
      <h1>{clicked}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h1>Count: {count}</h1> 
    </div>
  )
}

export default UseEffect
