import React, {Component} from 'react';

export class Pokemon extends Component{
    render(){
        const {pokemon} = this.props;
        const id = pokemon.url.charAt(pokemon.url.length - 2);
        return (
            <div className="card">
                <div className="card-header bg-success d-flex">
                    <span className="float-sm-left"> {pokemon.name}  </span>
                    <span className="ml-auto">ID : {id}</span>
                </div>
                <div className="card-body">
                    <div className="card-img">
                        <img src={`http://pokeapi.co/media/img/${id}.png`} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}


