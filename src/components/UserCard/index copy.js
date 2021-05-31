import React from 'react';
import { LogInContextConsumer } from '../../context/LoginContext';
import { ThemeContextConsumer } from '../../context/ThemeContext';
import Button from '../Button';
import './styles.css';

const UserCard = ({user, deleteUser}) => {

    const handleOnDelete = () => {
        deleteUser(user.id);
    }

    return (
        <ThemeContextConsumer>
            {({theme}) => (
                <div className={`${theme}-theme card`}>
                    <LogInContextConsumer>
                    {({ logIn, isLoggedIn }) => (
                        <>
                        <Button className={`${theme}-button`} text={isLoggedIn ? "LogOut" : "LogIn"} action={logIn} />
                    
                    <h3>User: {user.id}</h3>
                    <h1>{user.name}</h1>
                    <img src={user.avatar} />
                    {isLoggedIn ? 
                    <><p>{user.biography}</p>                    
                    <Button text="Delete User" action={handleOnDelete} /></>
                    : null}</>
                    )}
                    </LogInContextConsumer>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default UserCard;