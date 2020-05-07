import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        font-size:10px;
    }
    body {
        background-color: #F6F5FC;
    }
    h1 {
        margin:0;
        font-size: 3.4rem;
    }
    h2 {
        margin:0;
        font-size: 2.6rem;
    }
    h3 {
        margin:0;
        font-size: 2.1rem;
    }
    p {
        margin:0;
        font-size: 1.6rem;
        line-height:1.5em;
    }
`;
