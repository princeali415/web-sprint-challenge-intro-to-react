import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Characterdetails from './components/Character-Details.js'
// Write your Character component here

export default function Character(props){
    const {char, charId, open, close} = props

    const [info, setInfo] = useState(null)

    useEffect(() => {
        charId === char.id && 
        axios.get(`https://rickandmortyapi.com/api/character/${charId}`)
        .then(res => {
            setInfo(res.data)
        })
        .catch(err => {
            debugger
        })
    }, [char.id, charId])

    return (
        <div className='characters-container'>
            <img src={char.image} alt='profile-pic'></img>
            <h3>Name: {char.name} </h3>
            <div className='main-info'>
                <Characterdetails info={info} currentCharId={char.id}/>
            </div>
        </div>
    )
}

