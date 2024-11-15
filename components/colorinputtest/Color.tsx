"use client"

import React from 'react';


import './color.css';
import { MuiColorInput } from 'mui-color-input';

const Color: React.FC = () => {
  const [value, setValue] = React.useState<string>('#ffffff');

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <label className="custom-color-picker">
        Select Color
        <input type="color" id="head" name="head" style={{ display: 'none' }} />
      </label>

      <input type="color" id="head" name="head" className="color-picker" />

      <MuiColorInput format="hex" value={value} onChange={handleChange} />
    </div>
  );
};

export default Color;
