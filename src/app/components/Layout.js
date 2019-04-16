import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/userActions';
import {fetchPosts} from '../actions/postActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Post';
import User from './User';

class Layout extends React.Component {
    componentDidMount() {
    this.props.dispatch(fetchUser());
}
    
    fetchPosts(){
        this.props.dispatch(fetchPosts());
    }
    
    render() {
        console.log(this.props);
        const {user, posts} = this.props;
        const mappedPosts = posts.map((post,i) => {if (user.id === post.userId) return <Post key={i} {...post}/>});

            return <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <User {...user}/>
                            {(!posts.length)? 
                                <button onClick={this.fetchPosts.bind(this)}>Загрузить посты {user.username}</button>
                                :
                                <>
                                <h1>says</h1>
                                {mappedPosts}
                                </>
                            }
                        </div>
                    </div>
            </div>;

    }
}



function mapStateToProps(state) {
    return {
        user: state.user.user,
        userFetched: state.user.fetched,
        posts: state.posts.posts
    };
}

export default connect(mapStateToProps)(Layout);