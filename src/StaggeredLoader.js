import React, { Component } from 'react'
import './App.css'
import styled, { keyframes } from 'styled-components'
import { opacify } from 'polished'
import _ from 'lodash'

const Container = styled.div`
  background: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Pulse = keyframes`
    0% {
        opacity: 0;
    }
    25% {
        opacity: 1;
    }
    75% {
        opacity: 0;
    }
`
const SlideLeft = keyframes`
    0% {
        transform: translateX(0px);
    }
    25% {
        transform: translateX(2px);
    }
    100% {
        transform: translateX(0px);
    }
`
const SlideRight = keyframes`
    0% {
        transform: translateX(0px);
    }
    25% {
        transform: translateX(-2px);
    }
    100% {
        transform: translateX(0px);
    }
`
const Rotate360 = keyframes`
    0% {
        transform: rotateZ(0deg)
    }
    50% {
        transform: rotateZ(360deg);
    }
    100% {
        transform: rotateZ(0deg);
    }
`
const Bar = styled.div`
    opacity: 0;
    width: ${ props => (1 / props.numBars) * 100 }%;
    height: 5px;
    background: ${ props => props.color ? props.color : 'red' };
    margin: 0px 4px;
    box-shadow: 0px 0px 40px 2px ${ props => props.color ? opacify(-.3, props.color) : opacify(-.3, 'red') };
    animation: ${ Pulse } 1s ease infinite;
        ${'' /* ${ props => props.left ? SlideLeft : SlideRight } 1s ease infinite; */}
    animation-delay: ${ props => props.index * 100 }ms;
`
const BarContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    ${'' /* animation: ${ Rotate360 } 2s ease infinite; */}
    ${'' /* animation-delay: ${ props => (props.numBars / 2) * 100 } */}
`
export default class App extends Component {
  renderBars = () => {
      const { numBars, color } = this.props
      const leftBars = _.range(numBars / 2).map(num => {
          return (
              <Bar color={ color } numBars={ numBars } left={ true } index={ num } key={ `left${num}`}/>
          )
      })
      const rightBars = _.range(numBars / 2).map(num => {
          return (
              <Bar color={ color } numBars={ numBars } index={ (numBars / 2) - 1 - num } key={ `right${num}` }/>
          )
      })
      return (
          <BarContainer numBars={ numBars }>
              { leftBars }
              { rightBars }
          </BarContainer>
      )
  }
  render() {
      return (
          <Container>
              { this.renderBars() }
          </Container>
      )
  }
}
