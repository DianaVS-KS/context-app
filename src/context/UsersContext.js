import React, { Component } from 'react';
import { USERS } from '../assets/users';

const UsersContext = React.createContext();
const { Provider, Consumer } = UsersContext;

class UsersContextProvider extends Component {
    state = { users: USERS };

    deleteUser = (userId) => {
        this.setState((prevState) => ({
            users: prevState.users.filter((user) => user.id !== userId),
        }));
    }

    render() {
        const { users } = this.state;
        const { children } = this.props;

        return (
            <Provider value={{ 
                users,
                deleteUser: this.deleteUser,}}>
                {children}
            </Provider>
        );
    }

}

export { UsersContext, UsersContextProvider, Consumer as UsersContextConsumer };