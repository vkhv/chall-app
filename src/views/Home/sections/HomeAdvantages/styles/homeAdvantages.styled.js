import styled, { css } from 'styled-components';

export const StyledHomeAdvantages = styled.section`
    background-color: #fff;
    border-top-right-radius: 60px;
    padding: 40px 0;
    @media (min-width: 1085px){
        border-top-right-radius: 120px;
    }
`

export const Container = styled.div`
    max-width: 1125px;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 20px;
`

export const Inner = styled.div`
    @media (min-width: 1085px){
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`

export const Column = styled.div``

export const Image = styled.img`
    margin-bottom: ${({ $marginBottom }) => $marginBottom || '10px'};
    ${({ $position }) => $position === 'center' && css`
        margin: 0 auto;
    `}
    max-width: ${({ $width }) => $width || '280px'};
    @media (min-width: 1085px){
         max-width: 570px;
    }
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 500;
    line-height: 120%;
    @media (min-width: 1085px){
        font-size: 32px;
    }
`

export const Decor = styled.span`
    color: #217A9E;
`