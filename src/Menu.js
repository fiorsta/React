import React from 'react';

class Menu extends React.Component{
    render(){
        const items = this.props.items.map((item, i) => {
            return <li key = {i}><a href={item.href}>{item.title}</a></li>
        });
        return <div>
            <h1>{this.props.titleMenu}</h1>
            <ul>
                {items}
            </ul>
            </div>;
    }
}

export default Menu;
                                           