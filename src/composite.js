import React, { Component } from 'react'
import styled from 'styled-components'
import tile from './Assets/tile.jpg'
import logo from './Assets/logo.png'


export const Container = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  z-index: -1;
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
`

export const LogoBanner = styled.span`
  height: 30%;
  width: 99.5%;
  opacity: .6;
  background-color: black;
  position: absolute;
  bottom: 0%;
  left: 0;
  padding: 5px 0px 5px 5px;
  z-index: 99
`


export const Logo = styled.img`
  height: 100%;
  float: left;
`

export const TitleText = styled.span`
  color: white;
  position: absolute;
  width: 97%;
  height: 100%;
  display: table;
  z-index: 9999
`

export const Text = styled.span`
  display: table-cell;
  vertical-align: middle;
  font-size: 7vh;
  text-align: left;
  padding-left: 22%;
  padding-bottom: 2%;
  @media screen and (max-width: 768px) { 
    font-size: 5vh;
  }
`

class Composite extends Component {

  render() {

    return (
      <Container>
        <Image src={tile} />
        <LogoBanner>
          <Logo src={logo} />
          <TitleText>
            <Text>Home and Away</Text>
          </TitleText>
        </LogoBanner>
      </Container> 
    )
  }
}

export default Composite
