import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles/pokecard.css"

const PokeCard = ({ pokemon }) => {

const [poke, setPoke] = useState()

const navigate = useNavigate()

useEffect(() => {
  axios.get(pokemon.url)
  .then(res=>setPoke(res.data))
  .catch(err => console.log(err))
},[])

const handleClick = () => {
  navigate(`/pokedex/${poke.id}`)
}

return (
    <article onClick={handleClick} className={`card border-${poke?.types[0].type.name}`}>
      <header className={`card_header bg-${poke?.types[0].type.name}`}>
        <img className='card_avatar' src={poke?.sprites.other["official-artwork"].front_default} alt="" />
      </header>
      <h2 className={`card_name color-${poke?.types[0].type.name}`}>{poke?.name}</h2>
      <ul className='card_type-list'>
        {
        poke?.types.map(type => (
          <li className='card_type-item' key={type.type.name}>{type.type.name}</li>
        ))
        }
      </ul>
      <hr className='card_hr' />
      <ul className='card_stat-list'>
        {
          poke?.stats.map(stat => (
            <li className='card_stat-name' key={stat.stat.url}>
            <span className='card_stat-name'>{stat.stat.name}</span>
            <span className={`card_stat-number color-${poke?.types[0].type.name}`}>{stat.base_stat}</span>
            </li>
          ))
        }
      </ul>
    </article>
  )
}

export default PokeCard