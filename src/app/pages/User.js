import React from 'react';
import axios from 'axios';
import UserProfile from '../components/User';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }
    
    render() {
        return (
        <>
            {this.state.user && <UserProfile {...this.state.user} />}
        </>
        );
    }
    
    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
        .then(response => {
           this.setState({user: response.data}) 
        })
    }
}