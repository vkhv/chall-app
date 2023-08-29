import { StyledIcon } from "./styles/icon.styled";
import sprite from './sprites/sprite.svg'

const Icon = ({
    className,
    iconName,
    color = '#fff',
    opacity = '0.7',
    size = ['30px', '30px'],
}) => {
    return (
        <StyledIcon
            className={className}
            $color={color}
            $opacity={opacity}
            $width={size[0]}
            $height={size[1]}
        >
            <use xlinkHref={`${sprite}#${iconName}`} />
        </StyledIcon>
    )
};

export default Icon;