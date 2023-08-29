import styled from 'styled-components';
import HomeButtons from '../../HomeButtons';

export const StyledHomePrefooter = styled.section`
    background-color: #fff;
`

export const Wrapper = styled.div`
    background: linear-gradient(90deg, rgba(99,178,192,1) 0%, rgba(29,131,147,1) 180%);
    padding-top: 40px;
    border-top-left-radius: 60px;
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

export const Column = styled.div`
    @media (min-width: 1085px){
        max-width: 521px;
    }
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 20px;
`

export const Image = styled.img`
    align-self: center;
    width: 330px;
    @media (min-width: 1085px){
        width: 495px;
    }
`

export const StyledHomeButtons = styled(HomeButtons)`
    margin-bottom: 37px;
    @media (min-width: 1085px){
        margin-bottom: 0;
    }
`
