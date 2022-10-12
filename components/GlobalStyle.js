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
        padding: 5px;
        position: fixed;
    }

    .footer-div{
        display: flex;
        gap: 20px;
        margin-bottom: 10px;
        padding-top: 5px;
    }

    article {   
        border: 2px solid whitesmoke;
        border-radius: 0 5px 0 5px;
    }

    ul{
        list-style: none;
        padding: 0;
        margin-bottom: 40px;
    }

    li {
        background-color: whitesmoke;
        list-style: none;
        border: 3px solid gray;
        border-radius: 10px 0 10px 0;
        padding: 1rem;
        margin-bottom: 0px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
    }

    .list {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
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
        .inputForm{
            display: grid;
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
        display: grid;
        align-items: flex-end;
        border: none;
        width: 35px;
        height: 35px;
        cursor: pointer;
        background-color: lightblue;
    }
    
    .intro {
        align-items: center;
        display: flex;
        justify-content: center;
        border: gray;
        background-color: antiquewhite;
        color: grey;
        height: 20rem;
        border-radius: 15px;
        width: auto;
        font-weight: 500;
        font-size: 30px;
    }

    .inputStory{
        
        box-sizing: border-box;
        border: none;
        border-radius: 5px;
        margin: 10px 0px 10px;
        resize: none;
        font-size: 24px;
        line-height: 24px;
        overflow: auto;
        height: auto;
        padding: 8px;
        box-shadow: 0px 4px 10px -8px gray;
    }

    .trash{
        display: flex;
    }

    .AddButton{
        display: flex;
        position: relative;
        margin: 0 auto;
        border: none;
        padding: 1rem;
        border-radius: 20px;
        box-shadow: 0px 4px 10px -8px gray;
        cursor: pointer;
    }

    label {
        padding: 10px;
    }
`;

export default GlobalStyle;
