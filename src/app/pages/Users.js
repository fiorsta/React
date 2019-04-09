import React from 'react';
import UsersList from '../components/Userslist';

export default class Users extends React.Component {
    render() {
        return (
        <>
            {
                (!this.props.children) ? (<UsersList/>) : (this.props.childen)
            }
        </>
        );
    }
}