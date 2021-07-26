import React from 'react';
import './Components.css';
import ItemDoCarrinho from './ItemDoCarrinho';

export class Carrinho extends React.Component {

    somarValorTotal = () => {
        let valorTotal = 0

        for (let produto of this.props.produtosNoCarrinho) {
            valorTotal = (valorTotal + (produto.preco * produto.quantidade))
        }

        return valorTotal
    }

    render() {

        return (

            <div className='card-carrinho'>

                <br /><br />
                <h3 className='centralizar-titulos'> Carrinho </h3>

                <div>

                    {this.props.produtosNoCarrinho.map((produto) => {
                        return <ItemDoCarrinho
                            itemCarrinho={produto}
                            excluirProdutoDoCarrinho={this.props.excluirProdutoDoCarrinho}
                        />
                    })}

                </div>

                <br />

                <div>
                    Valor Total: R${this.somarValorTotal()},00
                    <br /><br />
                </div>

            </div>

        )
    }
}

export default Carrinho