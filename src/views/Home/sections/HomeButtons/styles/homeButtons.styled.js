import styled from 'styled-components';

export const StyledHomeButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
    @media (min-width: 1085px){
        flex-direction: row;
        row-gap: 0;
        column-gap: 15px;
    }
`

export const Image = styled.img``