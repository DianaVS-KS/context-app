import React, { Component } from 'react';
import Button from '../Button';
import { ThemeContextConsumer } from '../../context/ThemeContext';
import './styles.css'

class ToggleButton extends Component {
    render(){
        return (
            <ThemeContextConsumer>
                {({ theme, toggleTheme }) => (
                    <Button className={`${theme}-button toggle`} text="Change Theme" action={toggleTheme} />
                )}
            </ThemeContextConsumer>
        );
    }
}

export default ToggleButton;