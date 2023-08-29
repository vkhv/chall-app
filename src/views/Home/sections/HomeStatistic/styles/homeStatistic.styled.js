import styled from 'styled-components';

export const StyledHomeStatistics = styled.section`
    background-color: #fff;
    border-top-right-radius: 60px;
    padding: 40px 0;
    @media (min-width: 1085px){
         padding: 70px 0 80px 0;
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
    }
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #217A9E;
    @media (min-width: 1085px){
        font-size: 32px;
    }
`

export const Item = styled.div`
    width: 100%;
    border-radius: 20px;
    background-color: #F6FBFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
    &:not(:last-child){
        margin-bottom: 20px;
        @media (min-width: 1085px){
            margin-bottom: 0;
            margin-right: 31px;
        }
    }
`

export const Count = styled.div`
    font-size: 32px;
    color: #217A9E;
    font-weight: 600;
    margin-bottom: 6px;
    @media (min-width: 1085px){
        font-size: 46px;
        margin-bottom: 8px;
    }
`

export const Text = styled.p`
    font-size: 14px;
    color: #000;
    @media (min-width: 1085px){
        font-size: 18px;
    }
`