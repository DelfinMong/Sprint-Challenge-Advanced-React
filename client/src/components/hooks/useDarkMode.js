import { useState, useEffect } from 'react';
import React from "react";
import {LocalStorage} from "./LocalStorage.js";



export const useDarkMode = () => {
    const[storedValue, setValue] = LocalStorage('darkMode', false);

    const body = document.querySelector('body');

    useEffect (() => {
        //creating an if else statement to give option for darkmode
        storedValue ? 
        body.classList.add('dark-mode') : 
            body.classList.remove('dark-mode');
        }
, [storedValue, body.classList])

    return [storedValue, setValue];
}