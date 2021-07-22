import React from 'react';
import styles from 'styled-components';
import './App.css';
import Filtro from './Components/Filtro';
import Header from './Components/Header';
import Carrinho from './Components/Carrinho';
import Produtos from './Components/Produtos';

function App() {
  return (
    <div>

      <header> <Header /> </header>

      <br /> <br /> <br /> <br />

      <main className='grid-principal'>

        <div> <Filtro /> </div>
        <div> <Produtos /> </div>
        <div> <Carrinho /> </div>

      </main>

      <footer>  </footer>
      
    </div>
  );
}

export default App;
