'use client'
import styled from "styled-components"

export const ContainerCard = styled.div`
    display: flex;
    gap: 24px;
    margin: auto;
    width: 1200px;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 92px;
    @media (min-width: 320px) and (max-width: 480px) {
     flex-direction: column;
     padding-top: 50px;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    padding-top: 50px;
    justify-content: center;
    align-items: center;
    margin: auto;
    }
`

export const Card = styled.div`
    width: 280px;
    border-radius: 15px;
    cursor: pointer;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
transition: .3s ease-in;

    &&:hover{
        transform: scale(1.1);
    }

`

export const CardImg = styled.img`
    width: 280px;
    height: 212px;
    object-fit: cover;
    border-radius: 15px 15px 0px 0px;
`

export const CardInfoContainer = styled.div` 
    width: 89%;
    margin-top: 16px;
    height: 200px;
    margin-bottom: 10px;
    margin-left: 16px;
    
`

export const CardTitulo = styled.h2`
   font-family: var(--font-roboto);
   font-weight: 400;
   font-size: 16px;
   text-align: start;
   color: black;
`

export const CardSobre = styled.p`
   font-family: var(--font-roboto);
   font-size: 13px;
   text-align: start;
   font-weight: 400;
   padding-top: 7px;
   color: var(--color-secundaria);
`

export const CardPreco = styled.h4`
   font-family: var(--font-roboto);
   font-size: 20px;
   text-align: start;
   padding-top: 65px;
   font-weight: 400;
   color: var(--color-opcional);
`

export const CarInfos = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
`

export const CardDivInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &&::after{
        content: '';
        display: block;
        margin-left: -16px;
        width: 280px;
        background-color: var(--color-gray);
        height: 2px;
    }
`

export const CardData = styled.p`
   font-family: var(--font-roboto);
   font-size: 14px;
   text-align: start;
   font-weight: 400;
   padding-top: 7px;
   color: var(--color-secundaria);
`

export const CardKms = styled.p`
   font-family: var(--font-roboto);
   font-size: 14px;
   text-align: start;
   font-weight: 400;
   padding-top: 7px;
   color: var(--color-secundaria);
`

export const CardInfoFooter = styled.div`
   display: flex; 
   justify-content: space-between;
   margin-top: 10px;
`

export const CardInfoLocalizacao = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const CardTextoLocalizacao = styled.p`
     font-family: var(--font-roboto);
     font-size: 13px;
     text-align: start;
     font-weight: 400;
     padding-top: 7px;
     color: var(--color-secundaria);
`

export const CardIconeLocalizacao = styled.img`
    width: 14px;
    height: 18px;
`

export const CardIconeCurtida = styled.img`
    width: 15px;
    height: 18px;
`