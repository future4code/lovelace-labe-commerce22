import React from 'react';
import './Components.css';

class Header extends React.Component {

    render() {

        return (

            <header className='card-header'>
    
                <img src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5f0ddfa5457382057f17ceb2_gif_quebracabeca.gif" width='150px' height='30px' alt="" />
    
                <h1> Labe-Commerce - Grupo: {this.props.texto} </h1>
    
                <div>
    
                    <div>Fazer Login</div>
                    <div>Cadastre-se</div>
    
                </div>
    
            </header>
        )
    }
}

export default Header;