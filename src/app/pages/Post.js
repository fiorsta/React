import React from 'react';
import axios from 'axios';
import PostProfile from '../components/Post';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
    }
    
    render() {
        return (
        <>
            Loading
            {this.state.post && <PostProfile {...this.state.post} />}
        </>
        );
    }
    
    componentDidMount() {
        console.log(this.props.params);
        axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
        .then(response => {
           this.setState({post: response.data}) 
        })
    }
}