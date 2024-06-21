'use client'
import styled from "styled-components"

export const AvaliacaoClientesContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 115px 0px;
    flex-direction: column;
    @media (min-width: 320px) and (max-width: 480px) {
         margin: 70px 0px;
    }
`

export const AvaliacaoClientesTitulo = styled.h1`
   font-size: 38px;
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
    font-size: 26px;
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

export const GridCardClientes = styled.div`
    display: grid;
    margin-top: 70px;
    grid-template-columns: repeat(3, 1fr);
    gap: 37px;
    @media (min-width: 320px) and (max-width: 480px) {
           grid-template-columns: 1fr;
           gap: 80px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns:repeat(2,1fr);
        gap: 80px;
    }
`