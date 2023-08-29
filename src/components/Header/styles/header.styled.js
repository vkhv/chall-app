import styled from 'styled-components';
import Logo from '../../Logo';

export const StyledHeader = styled.header`
    background: linear-gradient(90deg, rgba(99,178,192,1) 0%, rgba(29,131,147,1) 180%);
    border-bottom-right-radius: 40px;
`

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 1125px;
    height: 46px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;
    @media (min-width: 1085px){
        height: 80px;
        justify-content: center;
    }
`

export const StyledLogo = styled(Logo)`
    position: absolute;
    left: 15px;
    
`