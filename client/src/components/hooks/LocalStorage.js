  
import { useState } from 'react';


export const LocalStorage = (key, initialValue) => {
  const item = JSON.parse(localStorage.getItem(key))//puts the obj/arr back to normal
  // define state -> receives initial value to set up localStorage property
  const [storedValue, setStoredValue] = useState(item || initialValue);//if there is an item being returned, return item else return the initialValue

  //define setter function that sets a value to localStorage when called & sets state property to new value that needs to be returned as a string with JSON.stringify(value)
  const setValue = value => {
    window.localStorage.setItem(key, JSON.stringify(value)) 
    setStoredValue(value);
  }

  return [storedValue, setValue];
}