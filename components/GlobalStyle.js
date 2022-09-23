import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box
    }

    body {
        background-color: lightblue;
        text-align: center;
        margin: auto;
        width: 40vw;
    }

    div { 
    
        margin-top: 0 auto;
        width: 400px;   
        display: grid;
        height: auto;
    }
      
    

    a {
        background-color: tomato;
        margin: 5px;
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
        margin: 0;
    }


`;

export default GlobalStyle;
