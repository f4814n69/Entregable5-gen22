import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles/pokeinfo.css"

const PokeInfo = () => {

  const { id } = useParams()

  const [poke, setPoke] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(url)
      .then(res => {
        setPoke(res.data)
        setHasError(false)
      })
      .catch(err => {
        setHasError(true)
        console.log(err)
      })
  }, [id])

  if (hasError) {
    return <h1>X The Pokemon with name "{id}" not found X</h1>
  } else {
    return (
      <div>
        <article className={`card border-${poke?.types[0].type.name}`}>
          <header className={`card_header bg-${poke?.types[0].type.name}`}>
            <img className='card_avatar' src={poke?.sprites.other["official-artwork"].front_default} alt="" />
          </header>
          <h2 className={`card_name color-${poke?.types[0].type.name}`}>#{poke?.order}</h2>
          <h2 className={`card_name color-${poke?.types[0].type.name}`}>{poke?.name}</h2>
          <ul className='card_name'>
            <span className=''>Type</span>
            {
              poke?.types.map(type => (
                <li className={`card_name color-${poke?.types[0].type.name}`} key={type.type.name}>{type.type.name}</li>
              ))
            }
            <span className=''>Habilities</span>
            {
              poke?.abilities.map(ability => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))
            }
          </ul>
       <hr />
          <div>
            <div className="pokeInfo__stats">
              <div className="pokeInfo__tittle-st">
                <h1 className="tittle-stats"> Stats</h1>
                <hr />
              </div>
              <div className="pokeInfo__stat">
                <div className="text_stat">
                  <span>Hp</span>
                  <span>{poke?.stats[0].base_stat}</span>
                </div>
                <div className={`bar__stats bg-${poke?.types[0].type.name}`}>
                </div>
              </div>
              <div className="pokeInfo__stat">
                <div className="text_stat">
                  <span>Stroke</span>
                  <span>{poke?.stats[1].base_stat}</span>
                </div>
                <div className={`bar__stats bg-${poke?.types[0].type.name}`}>
                </div>
              </div>
              <div className="pokeInfo__stat">
                <div className="text_stat">
                  <span>Defending</span>
                  <span>{poke?.stats[2].base_stat}</span>
                </div>
                <div className={`bar__stats bg-${poke?.types[0].type.name}`}>
                </div>
              </div>
              <div className="pokeInfo__stat">
                <div className="text_stat">
                  <span>Speed</span>
                  <span>{poke?.stats[3].base_stat}</span>
                </div>
                <div className={`bar__stats bg-${poke?.types[0].type.name}`}>
                </div>
                <hr />
                <div className="pokeInfo__moveMent">Movements</div>
                <div className="pokeInfo__moveMent">
                  {
                    poke?.moves?.map(move => (
                      <li key={move.move.name}>{move.move.name}</li>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default PokeInfo