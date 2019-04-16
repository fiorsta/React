import React from 'react';

export default class User extends React.Component {
    render() {
        return (
        <div className="card border border-secondary mb-3">
            <div className="card-header">
                <h1>{this.props.username}</h1>
            </div>
            <div className="card-body text-secondary">
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
                <p>{this.props.website}</p>
            </div>
        </div>
        );
    }
}