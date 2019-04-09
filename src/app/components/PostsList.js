import React from 'react';
import axios from 'axios';
import Post from './Post';

export default class PostsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    
    render() {
        if (!this.state.posts.length) {
            return <>Loading</>;
        }
        
        const posts = this.state.posts.map((post,i) => {
            return <Post key={i} {...post} />
        });
        
        return (
        <>
            <h1>Посты</h1>
            {posts}
        </>
        );
    }
    
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts/')
        .then(response => {
           this.setState({posts: response.data})
        });
    }
}