import styled from "styled-components";

export const StyledPresentation = styled.div`
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    column-gap: 14px;
    margin-bottom: 40px;
`

export const Text = styled.p`
    font-size: 14px;
    color: #217A9E;
    line-height: 120%;
    margin-bottom: 10px;
    @media (min-width: 1085px){
        font-size: 18px;
        margin-bottom: 13px;
    }
`

export const Column = styled.div`
    width: 100%;
`

export const Thumb = styled.div`
    height: 2px;
    width: 100%;
    background-color: #E3F1F4;
    border-radius: 20px;
    margin-bottom: 40px;
    @media (min-width: 1085px){
        margin-bottom: 30px;
    }
`

export const Progress = styled.div`
    width: 0;
    height: 4px;
    background-color: #217A9E;
    margin-top: -1px;
    border-radius: inherit;
`


export const Image = styled.img`
    margin: 0 auto;
`