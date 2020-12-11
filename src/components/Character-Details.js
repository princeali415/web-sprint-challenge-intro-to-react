import React from 'react'

import styled from 'styled-components'


function Characterdetails(props){
    const {close, info, currentcharId} = props
    

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

  export default Characterdetails