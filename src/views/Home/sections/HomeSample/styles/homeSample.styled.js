import styled, { css } from "styled-components";

export const StyledHomeSample = styled.section`
    background-color: #fff;
    padding: 40px 0;
    border-top-left-radius: 60px;
    @media (min-width: 1085px){
        font-size: 32px;
        border-top-left-radius: 120px;
    }
`

export const Container = styled.div`
    max-width: 1125px;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 20px;
`

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 1085px){
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-direction: row-reverse;
    }
`

export const Column = styled.div`
    @media (min-width: 1085px){
        max-width: 465px;
    }
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: #323643;
    margin-bottom: 20px;
    @media (min-width: 1085px){
        font-size: 32px;
        margin-bottom: 0;
    }
`

export const Decor = styled.span`
    color: #217A9E;
`

export const Image = styled.img`
    align-self: center;
    margin-bottom: ${({ $marginBottom }) => $marginBottom};
    width: ${({ $width }) => $width};
`