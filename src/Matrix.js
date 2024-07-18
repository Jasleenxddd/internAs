// src/Matrix.js

import React, { useState } from 'react';
import './Matrix.css';

const Matrix=()=>{
  const initialColors = Array(9).fill('white');
  const [colors, setColors] = useState(initialColors);
  const [clickOrder, setClickOrder] = useState([]);

  const handleBoxClick=(index)=>{
    if(colors[index]==='white'){
      const newColors=[...colors];
      newColors[index]='green';
      setColors(newColors);
      setClickOrder([...clickOrder, index]);

      // Check if this is the last box click
      if(clickOrder.length===8){
        changeColorsToOrange([...clickOrder, index]);
      }
    }
  };

  const changeColorsToOrange=(order)=>{
    order.forEach((index, i)=>{
      setTimeout(()=>{
        setColors(prevColors=>{
          const newColors=[...prevColors];
          newColors[index]='orange';
          return newColors;
        });
      },i*500); // Delay each change by 500ms
    });
  };

  return(
    <div className="matrix">
      {colors.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={()=>handleBoxClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Matrix;
