import { StyledHeader, Inner, StyledLogo } from "./styles/header.styled";
import { useState, useEffect } from "react";
import Menu from "../Menu";
import Navigation from "../Navigation";

const Header = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    return (
        <StyledHeader>
            <Inner>
                <StyledLogo />
                {screenWidth > 1085 && <Navigation />}
                {screenWidth < 1085 && <Menu />}
            </Inner>
        </StyledHeader>
    )
};

export default Header;