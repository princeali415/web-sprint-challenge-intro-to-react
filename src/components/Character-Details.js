import React, { useState } from 'react'
import Character from './components/Character.js'
import styled from 'styled-components'
// Write your Character component here

export default function CharacterDetails(props){
    const {close, info} = props
    

    return (
      <>
      {
          info &&
          <div>
              <ul>
                  <p>ID: {info.id}</p>
                  <p>SPECIES: {info.species}</p>
                  <p>GENDER: {info.gender}</p>
                  <p>STATUS: {info.status}</p>
              </ul>
          </div>
      }
      </>
      )
    }
