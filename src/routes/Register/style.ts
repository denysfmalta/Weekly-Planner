import styled from 'styled-components';
import notebook from '../../assets/image 2.png';

export const page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const textContainer = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
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
  width: 100%;
`

export const logo = styled.img`
  width: auto;
  height: auto;
  z-index: 1;
`

export const background = styled.div`
 width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props})`};
`