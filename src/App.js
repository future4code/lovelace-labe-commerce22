import React from 'react';
import styles from 'styled-components';
import './App.css';
import Filtro from './Components/Filtro';
import Header from './Components/Header';
import Carrinho from './Components/Carrinho';
import Produtos from './Components/Produtos';

class App extends React.Component {
  state = {
    minFilter:"",
    maxFilter:"",
    nameFilter:""
  }

render(){
  return (
    <div>

      <header> <Header /> </header>

      <br /> <br /> <br /> <br />

      <main className='grid-principal'>

        <div> <Filtro 
        minFilter={this.state.minFilter}
        maxFilter={this.state.maxFilter}
        nameFilter={this.state.nameFilter}
        /> </div>
        <div> <Produtos
             minFilter={this.state.minFilter}
             maxFilter={this.state.maxFilter}
             nameFilter={this.state.nameFilter}/> 
        </div>
        <div> <Carrinho /> </div>

      </main>

      <footer>  </footer>
      
    </div>
  );
  }
}

export default App;
