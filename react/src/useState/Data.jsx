import React, { useState } from "react";
import datas from "./datas.json";

const Data = () => {
  const [data, setData] = useState(datas);
  console.log(datas);

    const handleRemove = (itemId) => {
        setData(data.filter(item=>item.id!==itemId))
    }

const handleUpdate = (itemId) => {
setData( data.map(item => {
        if (item.id === itemId) {
            return { name: 'Updated Name'}
            }
            else{
                return item;
            }
            }))
}

  const handleClick = () => {
    setData([]);
  };
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}

          <button onClick={() =>handleUpdate(item.id)}>Update</button>

          <button onClick={() =>handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Clear</button>
    </div>
  );
};

export default Data;
