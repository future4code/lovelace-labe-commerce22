import React from 'react';
import './Components.css';

export default class CardProdutos extends React.Component {

    render() {

        const produto = this.props.produto

        return (

            <div>

                <div className='card-produto-individual'>

                    <h3> {produto.nome} </h3>
                    <img src={produto.imagem} />
                    <div> Preço: R$ {produto.preco},00 </div>
                    <div>
                        <button
                            onClick={() => this.props.adicionarProdutoAoCarrinho(produto.id)}> Adicionar ao Carrinho
                        </button>
                    </div>

                </div>

            </div>

        )
    }
}
