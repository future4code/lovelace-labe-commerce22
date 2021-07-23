import React from 'react';
import './Components.css';
import styles from 'styled-components';

export class Products extends React.Component{
    listaFiltrada = () =>{
        return this.props.products
        filter((product) => product.price < this.props.maxFilter)
        filter((product) => product.price > this.props.minFilter )
        filter((product) => product.name.includes(this.props.name))
    }

    render(){
        const listaFiltrada2 = this.listaFiltrada
    return (
        <div className='card-todos-os-produtos'>

            <div>

                <br />
                <h3 className='centralizar-titulos'> Todos os Produtos </h3>

            </div>

            <br />

            <div className = 'grid-de-produtos'>

                <div className = 'card-produto-individual'>
                    
                    
                    <h3> Produto 1 </h3>
                    <img src="https://picsum.photos/200/200?random=1" alt="produto1" />
                    <div> R$ 599,90 </div>

                </div>
                
                <div className = 'card-produto-individual'>
                    
                    <h3> Produto 1 </h3>
                    <img src="https://picsum.photos/200/200?random=2" alt="produto1" />
                    <div> R$ 599,90 </div>

                </div>

                <div className = 'card-produto-individual'>
                    
                    <h3> Produto 1 </h3>
                    <img src="https://picsum.photos/200/200?random=3" alt="produto1" />
                    <div> R$ 599,90 </div>

                </div>

                <div className = 'card-produto-individual'>
                    
                    <h3> Produto 1 </h3>
                    <img src="https://picsum.photos/200/200?random=4" alt="produto1" />
                    <div> R$ 599,90 </div>

                </div>

                <div className = 'card-produto-individual'>
                    
                    <h3> Produto 1 </h3>
                    <img src="https://picsum.photos/200/200?random=5" alt="produto1" />
                    <div> R$ 599,90 </div>

                </div>

                <div className = 'card-produto-individual'>
                    
                    <h3> Produto 1 </h3>
                    <img src="https://picsum.photos/200/200?random=6" alt="produto1" />
                    <div> R$ 599,90 </div>

                </div>   
                
            </div>

        </div>
    ),
    }
}

export default Products