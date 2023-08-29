import styled from 'styled-components';


export const StyledHomeBusiness = styled.section`
    padding: 40px 0;
    @media (min-width: 1085px){
        padding: 60px 0;
    }
`

export const Inner = styled.div`
    @media (min-width: 1085px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Container = styled.div`
    max-width: 1125px;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 20px;
`

export const Title = styled.h2`
    font-size: 18px;
    color: #323643;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 20px;
    @media (min-width: 1085px){
        font-size: 32px;
        max-width: 471px;
         margin-right: 35px;
    }
`

export const Decor = styled.span`
    color: #217A9E;
`

export const Image = styled.img`
    max-width: 195px;
    margin: 0 auto;
    @media (min-width: 1085px){
        max-width: 317px;
        margin: 0;
    }
`