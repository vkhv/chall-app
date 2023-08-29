import styled, {css} from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const StyledMenu = styled.div`
    position: relative;
    color: red;
    z-index: 111;
`

export const Inner = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    min-height: 420px;
    background-color: #fff;
    padding: 10px 20px 10px 30px;
    border-bottom-left-radius: 60px;
    z-index: 2;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
`

export const List = styled.ul`
    padding-left: 4px;
`

export const Item = styled.li`
    color: #323643;
    font-weight: 500;
    &:not(:last-child){
        margin-bottom: 40px;
    }
`

export const Cover = styled.div`
    position: fixed;
    inset: 0;
    height: 100vh;
    width: 100vw;
    background-color: #323643;
    opacity: 0.5;
    z-index: 1;
`

export const BodyFreeze = createGlobalStyle`
    body{
        ${({ $isOpen }) => $isOpen && css`
            height: 100vh;
            overflow: hidden;
        `}
    }
`