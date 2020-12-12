import React, {useState} from 'react'

import styled from 'styled-components'

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
    color: whitesmoke;
    &:hover {
    transition: all 0.3s ease-in-out;
    background-color: rgb(113, 126, 128);
    transform: scale(1.05);
  }
  @media (max-width: 750px){
    font-size: 15px
  }

`


function Characterdetails(props){
    const { info } = props
    const [toggleB, setToggleB]= useState(false)

    const Toggle = () => {
      setToggleB(!toggleB)
    }

    return (
      <div>
        <ButtonStyled onClick={Toggle}> {toggleB ? "Hide Details" : "Show Details"}</ButtonStyled>
          {
              toggleB && <ul id='details'>
                  
                  <p><b>SPECIES:</b> {info.species}</p>
                  <p><b>GENDER:</b> {info.gender}</p>
                  <p><b>STATUS:</b> {info.status}</p>
              </ul>
          }   
      
     </div>
      )
    }

  export default Characterdetails