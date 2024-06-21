'use client'

import styled from "styled-components"

export const DivMenu = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    background-color: white;
    `

export const ContainerMenuHamburguer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: center;
    justify-content: center;
    margin: auto;
`

export const LinhasMenu = styled.span`
    width: 20px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    background-color: black;
    padding: 1.5px;
`

export const Line = styled.span`
   position: absolute;
  width: 60%;  
  border: 1px solid black;
  border-radius: 2px;
  height: 3px;  
  background-color: transparent;
  transform-origin: center;
`;

export const Line1 = styled(Line)`
  transform: rotate(45deg);
`;

export const Line2 = styled(Line)`
  transform: rotate(-45deg);
`;

export const XIcon = styled.div`
position: relative;
width: 40px;  
height: 40px; 
display: flex;
align-items: center;
justify-content: center;
`;
