import React from 'react'
import styled from 'styled-components'
import { WebchatContext } from '@botonic/react'


const Container = styled.div`
  position: absolute;
  left: 17%;
  top: 20%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Input = styled.input`
  width: 80px;
  height: 40px;
  background: #2f2f2f;
  border-radius: 8px;
  margin-top: 20px;
  text-align: center;
  color: white;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  `

export default class CustomCover extends React.Component {
    static contextType = WebchatContext
    constructor(props) {
      super(props);
      this.state = {
        name: "",
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({name: event.target.value});
    }
  
    handleSubmit(event) {
      this.context.updateUser({
        name: this.state.name,
        extra_data: {
            isPhoneLocked: true,
            namesFound: [],
            clueFound: [],
        }
      })
      this.context.sendText('hi', 'Hi')
      this.props.closeComponent()
      event.preventDefault();
    }
  
    render() {
      return (
        <Container>
            <Form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.name} onChange={this.handleChange} />
            </label>
            <Input type="submit" value="Submit" />
            </Form>
        </Container>
      );
    }
  }