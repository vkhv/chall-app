import styled from 'styled-components';

export const StyledHomePromo = styled.section`
    background-color: #fff;
    padding: 40px 0;
`

export const Container = styled.div`
    max-width: 1105px;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 10px;
`

export const Inner = styled.div`
    @media (min-width: 1085px){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const Column = styled.div`
    max-width: 540px;
`

export const Title = styled.h1`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 24px;
    @media (min-width: 1085px){
        font-size: 38px;
        margin-bottom: 40px;
    }
`

export const Decor = styled.span`
    color: #217A9E;
`

export const Image = styled.img`
    width: 298px;
    margin: 0 auto;
    @media (min-width: 1085px){
        width: 490px;
        margin: 0;
    }
`