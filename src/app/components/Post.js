import React from 'react';
import {Link} from 'react-router';

export default class Post extends React.Component {
    render() {
        return (
        <div className="card border-secondary mb-3">
            <div className="card-header">
                <Link to={`/users/${this.props.userId}`}>{this.props.title}</Link>
            </div>
            <div className="card-body text-secondary">
                <p>{this.props.body}</p>
            </div>
        </div>
        );
    }
}