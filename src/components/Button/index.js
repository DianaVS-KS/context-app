import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'

const Button = ({ text, action }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <button className={`${theme}-button`} onClick={action}>{text}</button>
    )
}

export default Button;