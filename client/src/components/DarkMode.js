  
import React, { useState } from 'react';

import { makeStyles, FormGroup, FormControlLabel, Switch } from '@material-ui/core';

import { useDarkMode } from './hooks/useDarkMode.js';

const DarkMode = () => {

    const [darkMode, setDarkMode] = useDarkMode(false);

    const handleChange = () => {
        setDarkMode(!darkMode);
    }

    return (
        <FormControlLabel control={<Switch checked={darkMode} onChange={handleChange} value='checked' color="primary" />} label="DarkMode" />
    )
}


export default DarkMode; 