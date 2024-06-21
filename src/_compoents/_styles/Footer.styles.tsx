'use client'
import styled from "styled-components"

export const FooterContainer = styled.div`
    padding-top: 34px;
    padding-bottom: 57px;
    position: relative;
    display: flex;
    flex-direction: column;
    @media (min-width: 320px) and (max-width: 480px) {
        padding-left: 30px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        padding-left: 30px;
    }
`

export const FooterDiv = styled.div`
    display: grid;
    align-items: start;
    grid-template-columns: repeat(3, 1fr);
    @media (min-width: 320px) and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const FooterIcon = styled.div`
    display: flex;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px) {
      padding-bottom: 20px;
    }
`

export const IconImgFooter = styled.img`
    width: 45px;
    height: 45px;
`

export const IconTituloFooter = styled.h2`
    font-size: 23px;
    padding-left: 4px;
    font-weight: 500;
    font-family: var(--font-raleway-medium);
`

export const IconsFooterContainer = styled.div`
    display: flex;
    gap: 10px;
    padding-top: 40px;

  
`

export const IconFooterImg = styled.img`
   width: 32px;
   cursor: pointer;
   height: 30px;
`

export const TextoDiretosAutorais = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin-top: 30px;
    font-family: var(--font-roboto-medium);
    color: var(--color-secundaria);

    &&::before{
        content: '';
        width: 100%;
        height: 2px;
        background-color: var(--color-secundaria);
        display: block;
        position: absolute;
        bottom: 90px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        &&::before{
        content: '';
        width: 80%;
        height: 2px;
        background-color: var(--color-secundaria);
        display: block;
        position: absolute;
        bottom: 90px;
    }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        &&::before{
        content: '';
        width: 90%;
        height: 2px;
        background-color: var(--color-secundaria);
        display: block;
        position: absolute;
        bottom: 90px;
        }
    }
`