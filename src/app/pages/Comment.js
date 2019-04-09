import React from 'react';
import axios from 'axios';
import CommentProfile from '../components/Comment';

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: {}
        };
    }
    
    render() {
        return (
        <>
            Loading
            {this.state.comment && <CommentProfile {...this.state.comment} />}
        </>
        );
    }
    
    componentDidMount() {
        console.log(this.props.params);
        axios.get(`http://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`)
        .then(response => {
           this.setState({comment: response.data}) 
        })
    }
}