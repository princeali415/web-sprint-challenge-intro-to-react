import React from 'react'
import  Characterdetails  from './Character-Details.js'
// Write your Character component here


export default function Character(props){
    const {char} = props


    return (
        <div className='characters-container' key={char.id}>
            <div className='img-container'>
                <img src={char.image} alt='profile-pic'></img>
            </div>
            <div className='info-container'>
                <h3>{char.name}</h3>
                <div className='main-info'>
                    <Characterdetails info={char} > </Characterdetails>
                </div>    
                
            </div>
        </div>
    )
}

