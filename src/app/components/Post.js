import React from 'react';

export default class Post extends React.Component {
    render() {
        return (
        <div className="card border-secondary mb-3">
            <div className="card-header">
                <h2>{this.props.title}</h2>
            </div>
            <div className="card-body text-secondary">
                <p>{this.props.body}</p>
            </div>
        </div>
        );
    }
}