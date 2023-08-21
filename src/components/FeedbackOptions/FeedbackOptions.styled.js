import { styled } from "styled-components";

export const ListBtn = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
gap: 20px;
`;


export const Button = styled.button`
width: 100px;
padding: 10px 5px;
border-radius: 10px; 
font-size: 16px;
font-weight: 600;
text-transform: capitalize;
border: 2px solid darkblue;

&:hover {
   background-color: darkblue;
   color:white; 
  }
`;