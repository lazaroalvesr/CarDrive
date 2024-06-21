'use client'
import { HeaderMobile } from "@/lib/interface"
import styled from "styled-components"

export const HeaderContainer = styled.section`
    width: 100%;
    background-color: white;
    border-bottom: 2px solid #d6dbe2;
`

export const Header = styled.header`
    align-items: center;
    display: flex;
    justify-content: space-between;
    @media (min-width: 320px) and (max-width: 480px) {
      padding-left: 20px;
      justify-content: space-evenly;
      gap: 20px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        justify-content: space-around;
    }
`

export const HeaderIcon = styled.div`
    display: flex;
    align-items: center;
`

export const IconImg = styled.img`
    width: 45px;
    height: 45px;
`

export const IconTitulo = styled.h2`
    font-size: 23px;
    padding-left: 4px;
    font-weight: 500;
    font-family: var(--font-raleway-medium);
`

export const HeaderNav = styled.nav`
    display: flex;
`

export const HeaderUl = styled.ul<HeaderMobile>`
    display: flex;
    gap: 20px;
    @media (min-width: 320px) and (max-width: 480px) {
     display: ${({ ativo }) => ativo ? 'flex' : 'none'};
     position: absolute;
     flex-direction: column;
     z-index: 1;
     left: 0px;
     background-color: white;
     height: 320px;
     justify-content: center;
     align-items: center;
     top: 72px;
     width: 100%;
    }
`

export const HeaderLi = styled.li`
    font-size: 20px;
    list-style: none;
    font-family: var(--font-roboto);
    @media (min-width: 320px) and (max-width: 480px) {
     font-size: 20px;
    }
`

export const DivLogin = styled.div`
    border-left: 2px solid #d6dbe2;
    display: flex;
    align-items: center;
    height: 70px;
    padding-left: 18px;
`

export const ImgUser = styled.img`
    width: 28px;
    height: 28px;
`

export const ButtonTextLogin = styled.p`
font-size: 16px;
color: black;
font-family: var(--font-roboto);
`

export const ImgChat = styled.img`
    width: 22px;
    cursor: pointer;
    height: 22px;
    padding-left: 20px;
    @media (min-width: 320px) and (max-width: 480px) {
        display: none;
    }
`

export const ButtonMobile = styled.button`
    display: none;
    @media (min-width: 320px) and (max-width: 480px) {
     display: flex;
     border: none;
    }
`