import React from 'react'

class ItemDoCarrinho extends React.Component {

    render() {

        return <div>

            <p>{this.props.itemCarrinho.quantidade} - </p>
            <p>{this.props.itemCarrinho.nome}</p>
            <button onClick={() => this.props.excluirProdutoDoCarrinho(this.props.itemCarrinho.id)}> Excluir </button>

        </div>
    }
}

export default ItemDoCarrinho