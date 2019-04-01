import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Login from './Login';

class App extends React.Component {
    render() {
        const menuItems = [
            {href:'/', title:'Главная'},
            {href:'/catalog', title:'Каталог'},
            {href:'/about', title:'О нас'},
            {href:'/contacts', title:'Контакты'},
        ];
        return <div>
            <Menu items={menuItems} titleMenu="Основное меню"/>
            <Login/>
            </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
