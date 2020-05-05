import React, { useState } from "react";
import "./styles.css";

import { Switch } from './Switch'

export const App = () => {
const [ value, setValue ] = useState(false);

// a flexible, modular React switch component:

  return (
    <div className="app">
      <Switch
        isOn={value}
        onColor="#EF476F"
        handleToggle={() => setValue(!value)}
      />
 
    </div>
  );
  
}

/*
export const App = () => {

  return (
    <div className="app">
      <Switch />
    </div>
  );
}
*/
