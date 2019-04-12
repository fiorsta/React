import React from 'react';
import UserStore from '../stores/userStore';
import {addUser, getUsers} from '../actions/userActions.js';
import UsersList from '../components/UsersList';

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.onUserChange = this.onUserChange.bind(this);
        this.newUser = this.newUser.bind(this);
    }
    
    newUser() {
        const username = 'NEW NAME';
        const name = 'name name';
        const id = 11;
        const email = 'email';
        const phone = '+78992888';
        const website = 'dsgd@Fdfd.ry';

        addUser(username, name, id, email, phone, website);
    }
    
    onUserChange() {
        this.setState({users: UserStore.users})
    }
    
    render() {
        return (
        <div>
           <button className="btn btn-primary" onClick={this.newUser}>Добавить пользователя</button>
            <UsersList users={this.state.users}/>
        </div>
        );
    }
    
    componentDidMount() {
        UserStore.on('change', this.onUserChange);
        getUsers();
    }
    
    componentWillUnmount() {
        UserStore.removeListener('change', this.onUserChange);
    }
}