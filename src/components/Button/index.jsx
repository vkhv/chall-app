import { StyledButton } from "./styles/button.styled";

const Button = ({
    className,
    decoration,
    children,
    width,
    href,
    ...props
}) => {

    const Tag = href ? 'a' : 'button'

    return (
        <StyledButton
            className={className}
            $width={width}
            $decoration={decoration}
            as={Tag}
            href={href}
            {...props}
        >
            {children}
        </StyledButton>
    )
};

export default Button;