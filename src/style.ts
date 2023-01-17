import styled from 'styled-components';
import img from './assets/image.png';

export const page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const textContainer = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  justify-content: space-between;
`

export const title = styled.h1`
  font-family: Mulish;
  text-align: center;
  font-weight: 400;
  font-size: 60px;
  line-height: 75px;
  color: white;
`

export const subtitle = styled.p`
  font-family: 'Mulish';
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #E0E0E0;
`

export const imageContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-image: url(${img});
 background-repeat: no-repeat;
`

export const logo = styled.img`
  width: auto;
  height: auto;
  z-index: 1;
`

export const formContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const userForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const userInput = styled.input`
box-sizing: border-box;
width: 379px;
height: 60px;
background: #26292C;
border: 1px solid #FFFFFF;
border-radius: 50px;
`

