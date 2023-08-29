import { StyledMenu, Inner, Row, List, Item, Cover, BodyFreeze } from './styles/menu.styled';
import { useState } from 'react';
import Button from '../Button';
import Logo from '../Logo';
import Icon from '../Icon';

const list = [
    'Главная',
    'Организаторам',
    'Участникам',
    'О нас в цифрах',
]

const Menu = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <StyledMenu>
            <Button onClick={() => setIsOpen(true)}>
                <Icon
                    iconName='icon-burger'
                    opacity='1'
                />
            </Button>
            {isOpen && <Inner>
                <Row>
                    <Logo color='#017E93'/>
                    <Button onClick= {() => setIsOpen(false)}>
                        <Icon
                            iconName='icon-close'
                            color='#000'
                        />
                    </Button>
                </Row>
                <List>
                    {list.map((item, index) => (
                        <Item key={index}>{ item }</Item>
                    ))}
                </List>
            </Inner>}
            {isOpen && <Cover onClick={() => setIsOpen(false)} />}
            <BodyFreeze $isOpen={isOpen}/>
        </StyledMenu>
    )
}

export default Menu