import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #F0F2F5;
        --shape: #ffffff;

        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;
        
        --blue-light: #6933FF;

        --text-title: #363f5f;
        --text-body: #969cb3;
    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1880){
            font-size:93.75%; //15px
        }
        @media (max-width){
            font-size: 87.5%; //14px
        }
    }
 
    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins',sans-serif;
        font-weight: 400;
    }
    
    h1, h2 h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`