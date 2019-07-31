import React, {Component} from 'react';

export class Pokemon extends Component{
    render(){
        const {pokemon} = this.props;
        const urlArray = pokemon.url.split('/');
        const id = urlArray[urlArray.length - 2];
        return (
            <div className="card">
                <div className="card-header bg-success d-flex">
                    <span className="float-sm-left"> {pokemon.name}  </span>
                    <span className="ml-auto">ID : {id}</span>
                </div>
                <div className="card-body">
                    <div className="card-img">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}


