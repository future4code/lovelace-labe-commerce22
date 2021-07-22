import React from 'react';
import './Components.css';
import styles from 'styled-components';

function Filtro() {

    return (
        <div className='card-filtro'>

            <div>

                <br />
                <h3 className='centralizar-titulos'> Filtro </h3>

            </div>

            <br />

            <div>

                <label> Valor Mínimo: </label>
                <br />
                <input></input>

                <br /><br />

                <label> Valor Máximo: </label>
                <br />
                <input></input>

                <br /><br />

                <label> Nome do produto: </label>
                <br />
                <input></input>

                <br /><br />

            </div>


        </div>
    )
}

export default Filtro