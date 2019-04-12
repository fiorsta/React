import React from 'react';
import Post from './Post';

export default class PostsList extends React.Component {
    render() {
        if (!this.props.posts.length) {
            return <>Loading</>;
        }
        
        const posts = this.props.posts.map((post,i) => {
            return <Post key={i} {...post} />
        });
        
        return (
        <>
            <h1>Посты</h1>
            {posts}
        </>
        );
    }
}