import React from 'react';
import './Components.css';
import styles from 'styled-components';
import { render } from '@testing-library/react';

class Filtro extends React.Component {
    render(){
    return (
        <div className='card-filtro'>

            <div>

                <br />
                <h3 className='centralizar-titulos'> Filtro </h3>

            </div>

            <br />

            <div>

                <div> Valor Mínimo: </div>
                <br />
                <input type = "number"
                value={this.props.minFilter}/>

                <br /><br />

                <div> Valor Máximo: </div>
                <br />
                <input type = "number"
                value={this.props.maxFilter}/>

                <br /><br />

                <div> Nome do produto: </div>
                <br />
                <input type = "text"
                value={this.props.nameFilter}
                />

                <br /><br />

            </div>


        </div>
    );
}
}

export default Filtro