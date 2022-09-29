import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        
    }

    body {
        background-color: lightblue;
        text-align: center;
        margin: auto;
        width: 40vw;
    }

    div { 
        height: auto;
    }

    a {
        background-color: tomato;
        margin: 5px;
        border: none;
        border-radius: 15%;
        padding: 5px;
        text-decoration: none;
        cursor: pointer;
    }

    footer{
        margin-top: 30px;
    }

    article {   
        border: 2px solid whitesmoke;
        border-radius: 0 5px 0 5px;
    }

    ul{
        list-style: none;
        padding: 0;

    }

    li {
        background-color: whitesmoke;
        list-style: none;
        border: 3px solid gray;
        border-radius: 10px 0 10px 0;
        padding: 1rem;
        margin-bottom: 0px;
    }

    .list {
        display: flex;
        justify-content: center;
    }

    .headline {
        margin-top: 20px;
        font-size: 36px;
        font-weight: bold;
    }

    .buttonBookmark{
        position: relative;
        top: 15px;
        right: -150px;  
    }

    .storyCard {
        background-color: whitesmoke;
        list-style: none;
        border: 3px solid gray;
        border-radius: 10px 0 10px 0;
        padding: 1rem;
        margin-top: 20px;
    }

    .img{
        cursor: pointer;
    }

    
`;

export default GlobalStyle;
