'use client'
import styled from "styled-components"

export const VenderCarroContainer = styled.div`
    display: flex;
    padding: 70px 0px;
    gap: 28px;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    gap: 30px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        gap: 50px;
    }
`

export const VenderDivImg = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    @media (min-width: 768px) and (max-width: 1024px) {
       margin-left: 14px;
    }
`

export const VenderImg = styled.img`
    width: 400px;
    height: auto;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 93%;
    }

`

export const VenderCarroContainerText= styled.div`
   display: flex;
   flex-direction: column;
`

export const VenderCarroTitulo = styled.h2`
   font-size: 40px;
   font-family: var(--font-roboto-bold);
`

export const VendeDiv = styled.div`
   width: 750px;
   gap: 10px;
   display: flex;
   flex-wrap: wrap;
   height: auto;
   @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    }
      @media (min-width: 768px) and (max-width: 1024px) {
       width: 100%;
    }
`

export const VenderButton = styled.button`
    display: flex;
    width: 220px;
    justify-content: center;
    border-radius: 14px;
    cursor: pointer;
    margin-top: 60px;
    text-align: center;
    padding: 15px 0px;
    background-color: black;
    color: white;
    font-weight: 400;
    font-family: var(--font-roboto);
`