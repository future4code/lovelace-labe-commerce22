import React from 'react';
import './App.css';
import '../src/Components/Components.css';
import Filtro from './Components/Filtro';
import Header from './Components/Header';
import Carrinho from './Components/Carrinho';
import CardProdutos from './Components/CardProdutos';
import Produtos from './Components/Produtos';
import ItemDoCarrinho from './Components/ItemDoCarrinho';

const produtos = [
  {
    id: 1,
    nome: 'Produto 1',
    preco: 190,
    imagem: 'https://picsum.photos/200/200?a=1',
  },
  {
    id: 2,
    nome: 'Produto 2',
    preco: 280,
    imagem: 'https://picsum.photos/200/200?a=2',
  },
  {
    id: 3,
    nome: 'Produto 3',
    preco: 370,
    imagem: 'https://picsum.photos/200/200?a=3',
  },
  {
    id: 4,
    nome: 'Produto 4',
    preco: 460,
    imagem: 'https://picsum.photos/200/200?a=4',
  },
]

export class App extends React.Component {

  state = {
    valorMinimo: 1,
    valorMaximo: 999,
    pesquisar: 'produto',
    produtosNoCarrinho: [
      {
        id: 5,
        nome: 'Produto 5',
        preco: 550,
        imagem: 'https://picsum.photos/200/200?a=5',
        quantidade: 1
      },
    ]
  }

  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value })
  }

  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value })
  }

  onChangePesquisar = (event) => {
    this.setState({ pesquisar: event.target.value })
  }

  adicionarProdutoAoCarrinho = (idProduto) => {
    const produtoNoCarrinho = this.state.produtosNoCarrinho.find(produto => idProduto === produto.id)

    if (produtoNoCarrinho) {
      const novosProdutosNoCarrinho = this.state.produtosNoCarrinho.map(produto => {
        if (idProduto === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }
        return produto
      })

      this.setState({ produtosNoCarrinho: novosProdutosNoCarrinho })

    } else {
      const adicionarNovoProduto = produtos.find(produto => idProduto === produto.id)
      const novosProdutosNoCarrinho = [...this.state.produtosNoCarrinho, { ...adicionarNovoProduto, quantidade: 1 }]
      this.setState({ produtosNoCarrinho: novosProdutosNoCarrinho })
    }
  }

  excluirProdutoDoCarrinho = (idProduto) => {
    const novosProdutosNoCarrinho = this.state.produtosNoCarrinho.map((produto) => {
      if (idProduto === produto.id) {
        return {
          ...produto,
          quantidade: produto.quantidade - 1
        }
      }
      return produto
    }).filter((produto) => produto.quantidade > 0)

    this.setState({ produtosNoCarrinho: novosProdutosNoCarrinho })
  }

  render() {

    return (

      <div>

        <header> <Header texto='Clarice Passos e Natan Benfica' /> </header>

        <br /> <br /> <br /> <br />

        <main className='grid-principal'>

          <div>
            <Filtro
              valorMinimo={this.state.valorMinimo}
              valorMaximo={this.state.valorMaximo}
              pesquisar={this.state.pesquisar}
              onChangeValorMinimo={this.onChangeValorMinimo}
              onChangeValorMaximo={this.onChangeValorMaximo}
              onChangePesquisar={this.onChangePesquisar}
            />
          </div>

          <div>

            <div className='grid-de-produtos'>

              <Produtos
                produtos={produtos}
                valorMinimo={this.state.valorMinimo}
                valorMaximo={this.state.valorMaximo}
                pesquisar={this.state.pesquisar}
                adicionarProdutoAoCarrinho={this.adicionarProdutoAoCarrinho}
              />

              <Carrinho
                produtosNoCarrinho={this.state.produtosNoCarrinho}
                excluirProdutoDoCarrinho={this.excluirProdutoDoCarrinho}
              />

            </div>

          </div>

        </main>

      </div>

    )

  }

}

export default App;
