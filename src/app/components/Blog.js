import React from 'react';
import Post from './Post';

export default class Blog extends React.Component {
    render() {
        const posts = this.props.items.map((post, i)=>{
            return <Post key={i} title={post.title} postBody={post.postBody}></Post>
        })
        return(
        <div className="blog">
            {posts}
        </div>
        );
    }
}