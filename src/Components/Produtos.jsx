import React from 'react';
import CardProdutos from './CardProdutos.jsx';
import './Components.css';

class Produtos extends React.Component {

    state = {
        sort: 'DECRESCENTE'
    }    

    filtrarListaDeProdutos = () => {
        return this.props.produtos
            .filter((produto) => this.props.valorMaximo ? produto.preco < this.props.valorMaximo : true)
            .filter((produto) => this.props.valorMinimo ? produto.preco > this.props.valorMaximo : true)
            .filter((produto) => this.props.pesquisar ? produto.nome.includes(this.props.pesquisar) : true)
            .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.preco - b.preco : b.preco - a.preco)
    }

    onChangeSort = (event) => {
        this.setState({sort: event.target.value})
    }

    render() {

        const listaDeProdutos = this.filtrarListaDeProdutos()

        return (

            <div>

                <div className='card-todos-os-produtos'>

                    <h3 className='centralizar-titulos'> Todos os Produtos </h3>

                    <label> Ordenar produtos:

                        <select name="Ordenar" className='centralizar-titulos' value={this.state.sort} onChange={this.onChangeSort}>
                            <option value='CRESCENTE'> Crescente </option>
                            <option value='DECRESCENTE'> Decrescente </option>
                        </select>

                    </label>

                </div>

                <div>

                    {listaDeProdutos.map((produto) => {
                        return <CardProdutos
                            produto = {produto}
                            adicionarProdutoAoCarrinho = {this.props.adicionarProdutoAoCarrinho}
                        />
                    })}
                </div>
            </div>
        )
    }
}

export default Produtos;