import React from 'react';
import './Components.css';

class Filtro extends React.Component {

    render() {

        return (

            <div className='card-filtro'>

                <div>
                    <br />
                    <h3 className='centralizar-titulos'> Filtro </h3>
                </div>

                <br />

                <div>

                    <div>

                        <label> Valor Mínimo: </label>
                        <br />
                        <input type='number' value={this.props.valorMinimo} onChange={this.props.onChangeValorMinimo}></input>

                    </div>

                    <br /><br />

                    <div>

                        <label> Valor Máximo: </label>
                        <br />
                        <input type='number' value={this.props.valorMaximo} onChange={this.props.onChangeValorMaximo}></input>

                    </div>

                    <br /><br />

                    <div>

                        <label> Nome do produto: </label>
                        <br />
                        <input type='text' value={this.props.pesquisar} onChange={this.props.onChangePesquisar}></input>

                    </div>

                    <br /><br />

                </div>

            </div>
        )
    }
}

export default Filtro