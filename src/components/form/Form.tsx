"use client"

import { useState} from "react"
import Card from "../card/Card"
import './form.css'

const Form = () => {

    const [nameOrId, setNameOrId] = useState<string | null>('');
    const [pokemon, setPokemon] = useState({
        id: '',
        pokeName: '',
        types: [],
        weight: '',
        moves: [],
        abilities: [],
        img: '',
        stats: [],
    });
    const pokeUrl=`https://pokeapi.co/api/v2/pokemon/${nameOrId}`
    const pokeNames: string[] = [];
    const [labelAnimation, setLabelAnimation] = useState<string | null>('')

    const pokeRequest = async () =>{
        const response = await fetch(pokeUrl);
        if(!response.ok){
            throw new Error("failed to fetch");
        }
        const data = await response.json();
        setPokemon({
            id: data.id,
            pokeName: data.name,
            types: data.types,
            weight: data.weight,
            moves: data.moves,
            abilities: data.abilities,
            img: data.sprites.other.dream_world.front_default,
            stats: data.stats
        })
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        pokeRequest();
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLFormElement | HTMLInputElement>) => {
        const inputValue = e.target.value.toLowerCase()
        setNameOrId(inputValue);
    }

    const handleBlur = (e: React.ChangeEvent<HTMLFormElement | HTMLInputElement>) => {
            if(e.target.value === ''){
                setLabelAnimation('label-translate-origin')
            }
    }

  return (
    <>
    <form action="submit" onSubmit={handleSubmit}>

    <h1>PokeSearch!</h1>

    <div className="label">
    <label className={labelAnimation ?? ''} htmlFor="name" id="name-label">Pokemon Name or ID</label>
    <input type="search" onFocus={() => setLabelAnimation('label-translate-top')} onBlur={handleBlur} list="pokemons" value={nameOrId ?? ''} onChange={handleOnChange} id="name" name="name" className="input" autoComplete="on" />
    {
        <datalist id="pokemons">
            {pokeNames.map((pokeName, index) => <option key={index} value={pokeName}>{pokeName}</option>)}
        </datalist>
    }

    </div>
    <div className="error" id="name-error"></div>

    <button id="getPokemon">Search!</button>
</form>
<Card pokemon={pokemon} />
</>
  )
}

export default Form