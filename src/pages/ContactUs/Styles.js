import styled from "styled-components";
import { Colors, Fonts } from '../../variables';

export const Paginao = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  `;


export const Form = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width:100%;
  font-family: Lato, sans-serif;
  
  input{
    font-size: 20px;
    border: 1px solid black;
    border-radius: 7px;
  }
  
  label{
    font-size: 16px;
  }

  textarea{
    resize: none;
    border: 1px solid black;
    border-radius: 7px;
  }
`;

export const ContactContainer = styled.div`
  font-family: Poppins, sans-serif;
  height: 100%;
  display: flex;
  
  @media (max-width: 770px){
    flex-direction:column;
    align-items:center;
    row-gap:30px;
  }

  `;


export const Data = styled.div`
    width: 50%;
    max-width:400px;
    padding: 0 50px;
    align-items:center;
    font-family: Lato, sans-serif;
    
    form{
      display: flex;
      row-gap: 15px;
      flex-direction: column;
    }

    @media (max-width: 770px){
      max-width:none;
      padding: 0;
      width:90%;
    }
    @media (max-width: 400px){
      width: 100%;
    }

  `;

export const Infos = styled.div`
  width: 50%;
  max-width: 400px;
  padding: 30px 70px;
  display: flex;
  flex-direction: column;
  
  background: linear-gradient(270deg, #FFD100 -0.74%, rgba(255, 238, 0, 0.95) 20.71%, #FFD100 49.99%, rgba(255, 238, 0, 0.9) 74%, #FFD100 98.41%);  
  border-radius: 5px;
  row-gap: 30px;

  p{
    line-height: 1.5;
    @media (max-width: 770px){
      text-align:center;
    }
  }
  
  @media (max-width: 1080px){
    padding: 30px 20px;
  }

  @media (max-width: 770px){
    max-width:none;
    width:90%;
  }
  @media (max-width: 400px){
    padding: 30px 3px;
    width: 100%;
  }
  `;

export const Title = styled.div`
  text-align:center;
  font-size: 40px;
  font-weight:400;
  font-family: Poppins, sans-serif;
  padding-bottom: 30px;
  `;

export const Subtitle = styled.div`
  text-align:center;
  font-size: 22px;
  font-weight: normal;
  padding-bottom: 30px;
`;

export const ContactInfo = styled.div`
  font-size: 16px;
  @media (max-width: 400px){
    font-size: 14px;
  }
  img{
    justify-content:center;
  width:45px;
  margin-right: 20px;
}
  display: flex;
  align-items:center;
  flex-direction: row;
`;