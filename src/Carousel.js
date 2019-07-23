import React, { Component } from 'react';
import axios from 'axios';
import { Pokemon } from './Pokemon';

export class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentItemIndex: 0,
            pokemonList : [],
            fetched : false
        }
    }

    prevSlide = () => {
        const lastIndex = this.state.pokemonList.length - 1,
              resetIndex = this.state.currentItemIndex === 0,
              index = resetIndex ? lastIndex : this.state.currentItemIndex - 3;
        this.setState({
            currentItemIndex: index
        })
    }

    nextSlide = () => {
        const lastIndex = this.state.pokemonList.length - 1,
              resetIndex = this.state.currentItemIndex === lastIndex,
              index = resetIndex ? 0 : this.state.currentItemIndex + 3;
        this.setState({
            currentItemIndex: index
        });
    }

    componentDidMount() {

        axios.get('http://pokeapi.co/api/v2/pokemon?limit=51')
            .then(res=>res.data)
            .then(response=>{
                this.setState({
                    pokemonList : response.results,
                    loading : true,
                    fetched : true
                });
            });
    }

    render() {
        const {fetched, pokemonList} = this.state;
        // get current image index
        const index = this.state.currentItemIndex;
        let firstThreeItems = pokemonList.slice(index, index + 3);

        if (firstThreeItems.length < 3) {
            firstThreeItems = firstThreeItems.concat(this.state.pokemonList.slice(0, 3 - firstThreeItems.length))
        }

        if(!fetched) {
            return (
                <div>...Loading</div>
            )
        } else {
            return (
                <div className='container'>
                    <div className="card-columns">
                        {
                            firstThreeItems.map((item) => <Pokemon key={item.name} pokemon={item}/>
                        )}
                    </div>
                    <div className="row d-flex">
                        <div className="mr-auto">
                            <button onClick={this.prevSlide} className="btn btn-success">Previous</button>
                        </div>
                        <div className="p-2">
                            <button onClick={this.nextSlide} className="btn btn-success">Next</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

