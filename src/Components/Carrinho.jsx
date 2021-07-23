import React from 'react';
import './Components.css';
import styled from 'styled-components';

class Carrinho extends React.Component {
    state = {
        produtos: [
            {
                id: 1,
                name: "Foguete da Missão Apollo 11",
                value: 10000.0,
                imageUrl: "https://picsum.photos/200/200",
            }
        ]

    };

    apagarPost = (id) => {
        const novaListaDeProdutos = this.state.listaDeProdutos.filter((produtos) => {
            if (id === produtos.id) {
                return false
            } else {
                return true
            }
        })
        this.setState({ listaDeProdutos: novaListaDeProdutos })
    };
    
    render () {
    return(
        <div className = 'card-carrinho'>

            <div>

                <br />
                <h3 className='centralizar-titulos'> Carrinho </h3>

            </div>

            <br />

            <button onClick="apagarPost()">Remover</button>
            <div>

                Valor Total: 0,00

                <br /><br />

            </div>

        </div>
    );

    }
}

export default Carrinho