import styled from 'styled-components';

export const StyledHomePresentation = styled.div`
    background-color: #fff;
    border-bottom-left-radius: 60px;
    @media (min-width: 1085px){
        border-bottom-left-radius: 120px;
    }
`

export const Container = styled.div`
    max-width: 1125px;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 20px
`

export const Title = styled.h2`
    font-size: 20px;
    color: #217A9E;
    margin-bottom: 20px;
    @media (min-width: 1085px){
        font-size: 36px;
        margin-bottom: 52px;
    }
`