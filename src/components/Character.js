import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import  Characterdetails  from './Character-Details.js'
// Write your Character component here

const ButtonStyled = styled.button`
    background-color: rgb(79, 96, 98);
    font-size: 20px;
    border: solid 2px rgb(44, 44, 44);
    border-radius: 25px;
    font-size: 1.3rem;
    padding: 2% 5%;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
    transition: all 0.3s ease-in-out;

    &:hover {
    transition: all 0.3s ease-in-out;
    background-color: rgb(113, 126, 128);
    transform: scale(1.05);
  }

`

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
        <div className='characters-container' key={char.id}>
            <div className='img-container'>
                <img src={char.image} alt='profile-pic'></img>
            </div>
            <div className='info-container'>
                <h3>{char.name}</h3>
                <div className='main-info'>
                    {
                        charId === null ?
                        <ButtonStyled onClick={() => open(char.id)}>Details</ButtonStyled>
                        :
                        <ButtonStyled onClick={() => close(char.id)}>Close</ButtonStyled>
                    }
                    {
                        charId === char.id && <Characterdetails info={info} currentCharId={char.id}/>
                    }
                </div>    
                
            </div>
        </div>
    )
}

