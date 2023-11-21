import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: 25px;
  color: blue;
  font-weight: bold;
`

export const Form = styled.form``

export const Input = styled.input`
  padding: 10px;
`

export const Label = styled.label`
  font-size: 15px;
  color: black;
`

export const Container = styled.div`
  box-shadow: ${props => (props.shadow ? '0px 16px 4px 0px #bfbfbf' : null)};
  padding: 10px;
  height: ${props => props.height}vh;
  display: ${props => props.display};
  flex-direction: ${props => props.direction};
  margin-bottom: ${props => props.margin}px;
  justify-content: ${props => props.content};
  align-items: ${props => props.align};
`

export const Select = styled.select`
  padding: 10px;
`

export const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
`

export const Img = styled.img`
  width: 300px;
`

export const Paragraph = styled.p`
  font-size: ${props => props.size}px;
  color: white;
  text-align: center;
`

export const Memecontainer = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  padding: 20px;
`
