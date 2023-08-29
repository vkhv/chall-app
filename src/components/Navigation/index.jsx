import Button from "../Button";
import { StyledNavigation, List, Item, StyledButton } from "./styles/navigation.styled";

const nav = [
    'Главная',
    'Организаторам',
    'Участникам',
    'О нас в цифрах',
]

const Navigation = () => {
    return (
        <StyledNavigation>
            <List>
                {nav.map((item, index) => (
                    <Item key={index}>
                        <StyledButton>{ item }</StyledButton>    
                    </Item>
                ))}
            </List>
        </StyledNavigation>
    )
};

export default Navigation;