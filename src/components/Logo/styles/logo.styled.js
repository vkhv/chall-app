import styled from 'styled-components';

export const StyledLogo = styled.div`
    fill: ${({$color}) => $color};
    display: flex;
    column-gap: 10px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 4px;
`