'use client'
import styled from "styled-components"

export const ContainerCarrosDestaque = styled.section`
    display: flex;
    margin: 59px  auto;
    flex-direction: column;
    margin-bottom: 70px;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const CarrosDestaqueTitulo = styled.h1`
   font-size: 40px;
   font-weight: 500; 
   color: black;
   font-family: var(--font-roboto-medium);

   &&::after{
    content: '';
    background-color: black;
    width: 302px;
    height: 2px;
    border-radius: 8px;
    margin: 4px auto;
    display: block;
   }

   @media (min-width: 320px) and (max-width: 480px) {
    font-size: 30px;
      justify-content: space-evenly;
      gap: 20px;

      &&::after{
    content: '';
    background-color: black;
    width: 200px;
    height: 2px;
    border-radius: 8px;
    margin: 4px auto;
    display: block;
   }
    }
`

export const CarrosDestaqueButton = styled.button`
   background-color: black;
   padding: 15px 140px;
   margin-top: 30px;
   border-radius: 15px;
   color: white;
   cursor: pointer;
   font-size: 22px;
   font-weight: 400;
   font-family: var(--font-roboto);
   @media (min-width: 320px) and (max-width: 480px) {
    padding: 10px 110px;
    }
`