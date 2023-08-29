import styled from 'styled-components';

export const StyledHomeExclude = styled.section`
    padding: 40px 0;
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
    }
`

export const Column = styled.div``

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: #323643;
    margin-bottom: 6px;
    @media (min-width: 1085px){
        font-size: 32px;
    }
`

export const Text = styled.p`
    font-size: 12px;
    @media (min-width: 1085px){
        font-size: 16px;
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