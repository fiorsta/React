import React from 'react';
import axios from 'axios';
import User from './User';

export default class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    
    render() {
        if (!this.state.users.length) {
            return <>Loading</>;
        }
        
        const users = this.state.users.map((user,i) => {
            return <User key={i} {...user} />
        });
        
        return (
        <>
            <h1>Пользователи</h1>
            {users}
        </>
        );
    }
    
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users/')
        .then(response => {
           this.setState({users: response.data})
        });
    }
}