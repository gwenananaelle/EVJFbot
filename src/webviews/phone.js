import React from 'react'
import styled from 'styled-components'
import { WebchatContext } from '@botonic/react'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-around;  
    align-items: center;
`
const RoundButton = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 100%;
    font-size: 25px;
    line-height: 50px;
    color: #FFF;
    background-color: rgba(0, 0, 0, 0.35);
    border: 2px solid #272a2f;
    &.zero {
        grid-column: 2 / 3;
        grid-row: 4 / 5;
    }
    
`
export default class Phone extends React.Component {
  //for further information, see: https://reactjs.org/docs/getting-started.html
static contextType = WebchatContext
constructor(props) {
    super(props)
    this.state = {
        enteredCode: '',
        validCode: '1512',
    }
}
isCodeValid() {
    return this.state.enteredCode === this.state.validCode
}

handleClick(number) {   
    this.state.enteredCode = this.state.enteredCode + number.toString();  
    if (this.state.enteredCode.length === 4) {
        if (this.isCodeValid) {
            this.context.updateUser({
                extra_data: { isPhoneLocked: false },
            })
        }
        this.state.enteredCode = "";
    } else {
        console.log(this.state.enteredCode); 
    }
}

render() {
    const numbersElm = [];
    for (let index = 0; index < 10; index++) {
        numbersElm.push(<RoundButton key={index} className={index === 0 ? "zero" : ""} onClick={() => { this.handleClick(index) }}> {index} </RoundButton>) 
    }
    return (
    <>
        <h1>Unlock</h1>
        <Wrapper>
            {numbersElm}
        </Wrapper>
    </>
    )
}
}