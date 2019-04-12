import dispatcher from '../dispatcher';
import {ADD_USER, GET_USERS} from '../constants/userConstants';
import {EventEmitter} from 'events';

class userStore extends EventEmitter{
    constructor(){
        super();
        this.users = [];
        this.getUsers = this.getUsers.bind(this);
        this.change = this.change.bind(this);
        this.addUser = this.addUser.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }
    
    getUsers(users) {
        this.users = users;
        this.change();
    }
    
    change() {
        this.emit('change');
    }
    
    addUser(user) {
        this.users = [user, ...this.users];
        this.change();
    }
    
    handleActions(action) {
        switch (action.type) {
            case ADD_USER:
                this.addUser(action.data)
                break;
            case GET_USERS:
                this.getUsers(action.data)
                break;
        }
    }
}

const storeUsers = new userStore();
dispatcher.register(storeUsers.handleActions);

export default storeUsers;