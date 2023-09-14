import React, { useEffect, useState } from "react"
import './card.css'
import steel from '../../assets/img/pokemonTypes/Icon_Acero.webp'
import water from '../../assets/img/pokemonTypes/Icon_Agua.webp'
import bug from '../../assets/img/pokemonTypes/Icon_Bicho.webp'
import dragon from '../../assets/img/pokemonTypes/Icon_Dragon.webp'
import electric from '../../assets/img/pokemonTypes/Icon_Electrico.webp'
import phantom from '../../assets/img/pokemonTypes/Icon_Fantasma.webp'
import fire from '../../assets/img/pokemonTypes/Icon_Fuego.webp'
import fairy from '../../assets/img/pokemonTypes/Icon_Hada.webp'
import ice from '../../assets/img/pokemonTypes/Icon_Hielo.webp'
import fight from '../../assets/img/pokemonTypes/Icon_Lucha.webp'
import normal from '../../assets/img/pokemonTypes/Icon_Normal.webp'
import grass from '../../assets/img/pokemonTypes/Icon_Planta.webp'
import psychic from '../../assets/img/pokemonTypes/Icon_Psiquico.webp'
import rock from '../../assets/img/pokemonTypes/Icon_Roca.webp'
import dark from '../../assets/img/pokemonTypes/Icon_Siniestro.webp'
import earth from '../../assets/img/pokemonTypes/Icon_Tierra.webp'
import poison from '../../assets/img/pokemonTypes/Icon_Veneno.webp'
import flying from '../../assets/img/pokemonTypes/Icon_Volador.webp'

interface Type {
    name: string
}

interface Types {
    slot: number,
    type: Type
}
interface Move {
    name: string
}
interface Moves {
    move: Move
}
interface Ability {
    name: string
}
interface Abilities {
    ability: Ability
}
interface Stat {
    name: string
}
interface Stats{
    base_stat: number,
    stat: Stat
}

interface Pokemon {
    id: string,
    pokeName: string,
    types: Types[],
    weight: string,
    moves: Moves[],
    abilities: Abilities[],
    img: string,
    stats: Stats[]
}

interface Prop {
    pokemon: Pokemon
}

const Card: React.FC<Prop> = ({pokemon}) => {
    const {id, pokeName, types, weight, moves, abilities, img, stats} = pokemon
    console.log(moves)
    console.log(abilities)
    const [pokeTypes, setPokeTypes] = useState<string[]>([])

    useEffect(() => {
        const typesUpdate: string[] = []
        for(let i=0;i<types.length;i++){
            switch (types[i].type.name) {
                case 'grass':
                    typesUpdate.push(grass)
                    break;
                case 'poison':
                    typesUpdate.push(poison)
                    break;
                case 'normal':
                    typesUpdate.push(normal)
                    break;
                case 'fighting':
                    typesUpdate.push(fight)
                    break;
                case 'flying':
                    typesUpdate.push(flying)
                    break;
                case 'ground':
                    typesUpdate.push(earth)
                    break;
                case 'rock':
                    typesUpdate.push(rock)
                    break;
                case 'bug':
                    typesUpdate.push(bug)
                    break;
                case 'ghost':
                    typesUpdate.push(phantom)
                    break;
                case 'steel':
                    typesUpdate.push(steel)
                    break;
                case 'fire':
                    typesUpdate.push(fire)
                    break;
                case 'water':
                    typesUpdate.push(water)
                    break;
                case 'electric':
                    typesUpdate.push(electric)
                    break;
                case 'psychic':
                    typesUpdate.push(psychic)
                    break;
                case 'ice':
                    typesUpdate.push(ice)
                    break;
                case 'dragon':
                    typesUpdate.push(dragon)
                    break;
                case 'fairy':
                    typesUpdate.push(fairy)
                    break;
                case 'dark':
                    typesUpdate.push(dark)
                    break;
                default:
                    break;
            }
        }

        setPokeTypes(typesUpdate)
    }, [pokemon])

  return (
    <div className="container hidden" >
        <img className="pokemon-img" src={img} alt="pokemon image" />
        <div className="types-container">
            <p className="type-title">Type:</p>
            <div className="types">
                {pokeTypes.map(type => <div className="poke-type"><img src={type} alt="pokemon type" /></div>)}
            </div>
        </div>
        <ul id="stats">

        <li id="poke-name"><h2>{pokeName.charAt(0).toUpperCase()}{pokeName.slice(1, pokeName.length)}</h2></li>
        <div className="stats-container">
            <div className="id-stat">
            <li className="stat">ID: {id}</li>
            </div>
            <div className="weight-stat">
            <li className="stat">Weight: {(parseInt(weight)*0.1).toFixed()} Kg.</li>
            </div>
            {/* <li className="stat">Ability:</li>
            <li className="stat"><ul>{moves.map(move => <li>{move.move.name}</li>)}</ul></li>
            <li className="stat"><ul>{abilities.map(ability => <li>{ability.ability.name}</li>)}</ul></li> */}
            <li className="stat">Stats: <ul className="poke-stats">{stats.map(stat => <li>{stat.stat.name}: {stat.base_stat}</li>)}</ul></li>
        </div>
        </ul>
    </div>
  )
}

export default Card