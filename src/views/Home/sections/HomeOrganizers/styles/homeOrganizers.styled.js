import styled from 'styled-components';

export const StyledHomeOrganizers = styled.section`
    padding: 40px 0;
    @media (min-width: 1085px){
        padding: 60px 0;
    }
`

export const Container = styled.div`
    max-width: 1125px;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 20px;
`

export const Column = styled.div`
    @media (min-width: 1085px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Title = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #217A9E;
    margin-bottom: 20px;
    @media (min-width: 1085px){
        font-size: 36px;
        margin-bottom: 22px;
    }
`

export const Subtitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #323643;
    margin-bottom: 20px;
     @media (min-width: 1085px){
        font-size: 32px;
        margin-bottom: 0;
        max-width: 492px;
    }
`

export const Decor = styled.span`
    color: #217A9E;
`

export const Image = styled.img`
    max-width: 284px;
    @media (min-width: 1085px){
        max-width: 472px;
    }
`

