import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Montserrat';
        font-weight: 400;
        margin: 0;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    button {
        background-color: transparent;
        border: none;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    p{
        margin: 0;
    }

    h1, h2, h3 {
        margin: 0;
    }

    img {
        display: block;
        object-fit: cover;
    }
`;

export default Reset;