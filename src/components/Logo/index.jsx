import { StyledLogo, Column } from './styles/logo.styled';
import { logo, challApp, copyright } from './iconLogo';

const Logo = ({ className, trademark, color = '#fff' }) => {
    return (
        <StyledLogo
            className={className}
            $color={color}
        >
            {logo}
            <Column>
                {challApp}
                {trademark && copyright}
            </Column>
        </StyledLogo>
    )
};

export default Logo;