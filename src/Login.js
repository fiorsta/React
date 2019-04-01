import React from 'react';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: 'UserName',
            userPassword: ''};
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleChange(event) {
        const target = event.target; 
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }
    _handleSubmit(event) {
        event.preventDefault();
        alert('User: ' + this.state.userName);
    }
    render(){
        return (
            <form onSubmit={this._handleSubmit}>
                <label>Логин:
                <input type="text" name="userName" value={this.state.userName} onChange={this._handleChange} />
                </label>
                <label>Пароль:
                <input type="password" name="userPassword" value={this.state.userPassword} onChange={this._handleChange} />
                </label>
                <button type="submit">Войти</button>
            </form>
        );
    };
}

export default Login;
