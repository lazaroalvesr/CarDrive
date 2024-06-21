'use client'
import styled from "styled-components"

export const ContainerImg = styled.div`
    width: 100%;
    position: relative;
    height: 440px;
    display: flex;
    @media (min-width: 768px) and (max-width: 1024px) {
       height: 330px;
    }
`

export const BannerImg = styled.img`
    width: 100%;
    object-fit: cover;
`

export const ContainerText = styled.div`
    position: absolute;
    top: 40px;
    height: 20px;
    left: 230px;
    width: 340px;
    @media (min-width: 320px) and (max-width: 480px) {
   left: 40px;
   top: 20px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        left: 37px;
        top: 40px;
        width: 300px;
    }
`

export const BannerText = styled.h2`
    font-size: 35px;
    color: white;
    font-weight: 500;
    font-family: var(--font-roboto-medium);
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 25px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 30px;
    }
`

export const BannerButton = styled.button`
    background-color: black;
    padding: 10px 90px;
    color: white;
    font-family: var(--font-roboto);
    margin-top: 20px;
    border-radius: 15px;
    font-size: 14px;
    cursor: pointer;
    margin-left: -20px;
    @media (min-width: 320px) and (max-width: 480px) {
      margin-top: 240px;
      margin-left: 50px;
    }
      @media (min-width: 768px) and (max-width: 1024px) {
       padding: 10px 80px ;
    }
`