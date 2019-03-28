import React from 'react';
import ReactDOM from 'react-dom';
import {developer as peter} from './index';

class App extends React.Component {
    render() {
        return <div>
            <p>Hello</p>
            </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

let helloAction = document.getElementsByTagName("p");

helloAction[0].innerHTML += `<strong>, ${peter.name}!</strong>`;

helloAction[0].addEventListener('click',()=>alert(new Date()));