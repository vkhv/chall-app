import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
    width: ${({ $width }) => {
        switch ($width) {
            case 'large':
                return '168px';
            case 'middle':
                return '160px';
            case 'small':
                return '130px';
            default:
                return 'fit-content'
        }
    }};

    ${({ $decoration }) => $decoration === 'dark' && css` 
        background-color: #100F0D;
        border: 1px solid #A2A2A1;
        border-radius: 6px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 6px;
        flex-shrink: 0;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
    `};
`