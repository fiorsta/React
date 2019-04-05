import React from 'react';

export default class WelcomeModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: false
        };
    }
    
    render(){
        let modalBlock;
        if (this.state.display){
            modalBlock = (
                <>
                <button className="btn-hide" title="Close" onClick={()=>this.setState({display:false})}>×</button>
                <h2>Hello? No!</h2>
                <p>Welcome to the future. Das ist modales Fenster. Ocultar esto inmediatamente. Per favore, clicca sulla Х!</p>
                </>
            );
        }
    return (
        <div className="welcomeModal">
        {modalBlock}
        </div>
    );
    }
    
    componentDidMount(){
            setTimeout(()=>this.setState({display: true}),2000);
    }
}