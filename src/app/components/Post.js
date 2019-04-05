import React from 'react';

export default class Post extends React.Component {
    render() {
        return(
        <div className="post">
            <h1>{this.props.title}</h1>
            <p>{this.props.postBody}</p>
        </div>
        );
    }
}