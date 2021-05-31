import React, { Component } from 'react';

const LogInContext = React.createContext();
const { Provider, Consumer } = LogInContext;

class LogInContextProvider extends Component {
    state = { isLoggedIn: true };

    logIn = () => {
        this.setState(({ isLoggedIn }) => ({
            isLoggedIn: isLoggedIn ? false : true,
        }));
        if(this.state.isLoggedIn) alert('Please Log In Again to Show Info');
    };

    render() {
        const { isLoggedIn } = this.state;
        const { children } = this.props;

        return (
            <Provider value={{ isLoggedIn,
                logIn: this.logIn,}}>
                {children}
            </Provider>
        );
    }

}

export { LogInContext, LogInContextProvider, Consumer as LogInContextConsumer };