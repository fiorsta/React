import dispatcher from '../dispatcher';
import {ADD_POST, GET_POSTS} from '../constants/postConstants';
import {EventEmitter} from 'events';

class postStore extends EventEmitter{
    constructor(){
        super();
        this.posts = [];
        this.getPosts = this.getPosts.bind(this);
        this.change = this.change.bind(this);
        this.addPost = this.addPost.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }
    
    getPosts(posts) {
        this.posts = posts;
        this.change();
    }
    
    change() {
        this.emit('change');
    }
    
    addPost(post) {
        this.posts = [post, ...this.posts];
        this.change();
    }
    
    handleActions(action) {
        switch (action.type) {
            case ADD_POST:
                this.addPost(action.data)
                break;
            case GET_POSTS:
                this.getPosts(action.data)
                break;
        }
    }
}

const storePosts = new postStore();
dispatcher.register(storePosts.handleActions);

export default storePosts;