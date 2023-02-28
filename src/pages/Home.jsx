import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/trainerName.slice'
import "./styles/home.css"

const Home = () => {

const dispatch = useDispatch()
const navigate = useNavigate()

const handleSubmit = e => {
  e.preventDefault()
  dispatch(setNameTrainer(e.target.name.value.trim()))
  e.target.name.value = ""
  navigate("/pokedex")
}

  return (
    <div className='home'>
      <h1 className='home_title'>Pokedex</h1>
      <h2 className='home_title'>Hi Trainer</h2>
      <p className='home_description'>To start this pokedex, give me your name</p>
       <form className='home_form' onSubmit={handleSubmit}>
        <input className='home_input' id="name" type="text" />
        <button className='home_btn'>Start</button>
       </form>
    </div>
  )
}

export default Home