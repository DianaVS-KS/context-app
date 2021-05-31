import React from 'react';
import { ThemeContextConsumer } from '../../context/ThemeContext';
import Button from '../Button';
import './styles.css';

const UserCard = ({user, deleteUser, isLoggedIn}) => {

    const handleOnDelete = () => {
        deleteUser(user.id);
    }

    return (
        <ThemeContextConsumer>
            {({theme}) => (
                <div className={`${theme}-theme card`}>
                   
                    <h3>User: {user.id}</h3>
                    <h1>{user.name}</h1>
                    <img src={user.avatar} />
                    {isLoggedIn ? 
                    <><p>{user.biography}</p>                    
                    <Button text="Delete User" action={handleOnDelete} /></>
                    : null}
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default UserCard;