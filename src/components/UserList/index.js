import React, {useContext} from 'react';
import { UsersContextConsumer } from '../../context/UsersContext';
import UserCard from '../UserCard';
import './styles.css'
import Button from '../Button';
import { LogInContextConsumer } from '../../context/LoginContext';
import { ThemeContext } from '../../context/ThemeContext';

const UserList = () => {
    const { theme } = useContext(ThemeContext);
    return(
        <LogInContextConsumer>
        {({ logIn, isLoggedIn }) => (
            <>
            <Button className={`${theme}-button`} text={isLoggedIn ? "LogOut" : "LogIn"} action={logIn} />
        
            <UsersContextConsumer>
                {({ users, deleteUser }) =>(
                    <div className="container-cards">
                        {users.map((user) => (
                            <UserCard 
                                key={user.id}
                                user={user}
                                deleteUser={deleteUser}
                                isLoggedIn={isLoggedIn}
                            />
                        ))}
                    </div>
                )}
            </UsersContextConsumer>
        </>
        )}
        </LogInContextConsumer>
        
    );
}

export default UserList;