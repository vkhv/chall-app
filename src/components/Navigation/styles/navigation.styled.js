import styled from 'styled-components';
import Button from '../../Button';

export const StyledNavigation = styled.div`
`

export const List = styled.ul`
    display: flex;
    align-items: center;
    column-gap: 40px;
`

export const Item = styled.li`
    cursor: pointer;
`

export const StyledButton = styled(Button)`
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
`