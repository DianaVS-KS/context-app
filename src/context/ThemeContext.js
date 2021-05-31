import React, { Component } from 'react';

const ThemeContext = React.createContext();
const { Provider, Consumer } = ThemeContext;

class ThemeContextProvider extends Component {
    state = { theme: 'Light'};

    toggleTheme = () => {
        this.setState(({ theme }) => ({
            theme: theme === 'Light' ? 'Dark' : 'Light',
        }));
    };

    render() {
        const { theme } = this.state;

        return (
            <Provider value={{ theme, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </Provider>
        )
    }

}

export { ThemeContext, ThemeContextProvider, Consumer as ThemeContextConsumer };