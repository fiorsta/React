import React from 'react';
import PostStore from '../stores/postStore';
import {addPost, getPosts} from '../actions/postActions.js';
import PostsList from '../components/PostsList';

export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.onPostChange = this.onPostChange.bind(this);
        this.newPost = this.newPost.bind(this);
    }
    
    newPost() {
        const body = 'Text';
        const userId = 1;
        const title = 'My post';
        
        addPost(title, userId, body);
    }
    
    onPostChange() {
        this.setState({posts: PostStore.posts})
    }
    
    render() {
        return (
        <div>
           <button className="btn btn-primary" onClick={this.newPost}>Добавить пост</button>
            <PostsList posts={this.state.posts}/>
        </div>
        );
    }
    
    componentDidMount() {
        PostStore.on('change', this.onPostChange);
        getPosts();
    }
    
    componentWillUnmount() {
        PostStore.removeListener('change', this.onPostChange);
    }
}