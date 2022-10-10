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
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    div { 
        height: auto;
    }

    a {
        
        margin: 5px;
        border: none;
        border-radius: 15%;
        padding: 5px;
        text-decoration: none;
        cursor: pointer;
    }

    img.active{
        background-color: gray;
        width: 30px;
    }

    .footerBlock {
        display: flex;
        justify-content: center;
    }


    nav{
        bottom: 0;
        position: fixed;
    }

    .footer-div{
        display: flex;
        gap: 20px;
        margin-bottom: 10px;
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
        cursor: pointer;
    }

    .list {
        display: flex;
        justify-content: center;
    }

    .headline {
        margin-top: 20px;
        font-size: 24px;
        font-weight: bold;
    }

    .buttonBookmark{
        position: relative;
        top: 15px;
        right: -150px;  
    }

    @media (max-width: 767px)  {
        .buttonBookmark {
            top: 15px;
            right: -80px; 
        }
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

    .playButton {
        margin: 1rem;
        background-color: lightblue;
        border: none;
        cursor: pointer;
    }

    .playingstory {
        background-color: antiquewhite;
        color: gray;
        font-size: 25px;
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 700;
        border: 2px dotted gray;
    }
    
    .removeButton {
        background-color: tomato;
        border: none;
        border-radius: 25px 0 25px 4px;
    }
    
    .intro {
        align-items: center;
        display: flex;
        justify-content: center;
        border: 2px solid gray;
        background-color: antiquewhite;
        color: grey;
        height: 5rem;
        border-radius: 15px;
        width: auto;
        font-weight: 500;
        font-size: 30px;
    }

    .inputStory {
        
    }
`;

export default GlobalStyle;
