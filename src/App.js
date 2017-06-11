import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import styled, { keyframes } from 'styled-components'
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
        transform: translateX(-7px);
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
        transform: translateX(7px);
    }
    100% {
        transform: translateX(0px);
    }
`
const Bar = styled.div`
    opacity: 0;
    width: 70px;
    height: 5px;
    background: red;
    margin: 0px 4px;
    box-shadow: 0px 0px 40px 2px red;
    animation: ${ Pulse } 1s ease, ${ props => props.left ? SlideLeft : SlideRight } 1s ease;
    animation-delay: ${ props => {console.log(props.index);return props.index * 100} }ms;
    animation-iteration-count: infinite;
`
const BarContainer = styled.div`
    display: flex;
    flex-direction: row;
`
export default class App extends Component {
  renderBars = () => {
      const { numBars } = this.props
      const leftBars = _.range(numBars / 2).map(num => {
          return (
              <Bar left={ true } index={ num } key={ `left${num}`}/>
          )
      })
      const rightBars = _.range(numBars / 2).map(num => {
          return (
              <Bar index={ (numBars / 2) - 1 - num } key={ `right${num}` }/>
          )
      })
      return (
          <BarContainer>
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
