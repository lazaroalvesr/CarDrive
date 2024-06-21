'use client'
import styled from "styled-components"

export const CardClientes = styled.div`
    background-color: white;
    width: 343px;
    position: relative;
    height: 328px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
`

export const CardClientesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px auto;
    width: 90%;
    gap: 10px;
    height: 90%;
`

export const AvaliacaoEstrela = styled.img`
    width: 140px;
    height: 30pxs;
`

export const AvaliacaoTexto = styled.p`
    text-align: center;
    width: 242px;
    height: 140px;
    font-size: 17px;
    color: var( --color-secundaria);
    font-weight: 600;
    font-family: var(--font-roboto-medium);
`

export const NomeDoCliente = styled.p`
    color: black;
    font-weight: 600;
    font-family: var(--font-roboto-medium);
    font-size: 20px;
`

export const SubtituloCard = styled.span`
    font-family: var(--font-roboto);
    font-weight: 400;
    font-size: 14px;
    color: var( --color-secundaria);
`

export const DivCardImgCliente = styled.div`
    padding: 3px;
    align-items: center;
    bottom: -46px;
    position: absolute;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid var(--color-gray-claro);
`

export const ClienteFoto = styled.img`
    width: 105px;
    height: 103px;
`