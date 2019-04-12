import React from 'react';
import User from './User';

export default class UsersList extends React.Component {
    render() {
        if (!this.props.users.length) {
            return <>Loading</>;
        }
        
        const users = this.props.users.map((user,i) => {
            return <User key={i} {...user} />
        });
        
        return (
        <>
            <h1>Пользователи</h1>
            {users}
        </>
        );
    }
}