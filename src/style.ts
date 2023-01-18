import styled from 'styled-components';
import img from './assets/image.png';

export const page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

export const textContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
`

export const title = styled.h1`
  font-family: Mulish;
  text-align: justify;
  font-weight: 400;
  font-size: 60px;
  line-height: 75px;
  margin: 94px 0 0 296px;
  color: white;
`

export const subtitle = styled.p`
  font-family: 'Mulish';
  text-align: justify;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-left: 298px;
  margin-top: 6px;
  margin-bottom: 86px;
  color: #E0E0E0;
`

export const imageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 100%;
`

export const logo = styled.img`
  width: auto;
  height: auto;
  align-self: center;
`

export const inputForm = styled.form`

`

export const userInput = styled.input`
box-sizing: border-box;
width: 379px;
height: 60px;
background: #26292C;
border: 1px solid #FFFFFF;
border-radius: 50px;
margin-left: 17px;
margin-bottom: 18px;
align-self: center;
`
export const inputLabel = styled.label`
width: 75px;
height: 20px;
font-family: 'Mulish';
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #E0E0E0;
margin-left: 296px;
align-self: center;
`
export const registerButton = styled.button`
margin-top: 51px;
width: 471px;
height: 67px;
border-radius: 50px;
align-self: center;
font-family: 'Mulish';
font-weight: 700;
font-size: 32px;
line-height: 40.16px;
`