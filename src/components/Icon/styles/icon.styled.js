import styled from 'styled-components';

export const StyledIcon = styled.svg`
    width: ${({ $width }) => $width || '12px'};
    height: ${({ $height }) => $height || '12px'};
    display: block;
    fill: ${({ $color }) => $color};
    fill-opacity: ${({ $opacity}) => $opacity};
`