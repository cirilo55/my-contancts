import { createGlobalStyle } from 'styled-components';
//temas: font-weight: regular 400 
//       font-weight: bold 900
export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }
    body{
        background: ${({ theme }) => theme.colors.background};
        font-size: 16px;
        color: ${({ theme }) => theme.colors.gray[900]}
    }

    button{
        cursor: pointer;
    }

    .text-center{
        text-align: center;
    }
    .p-1{
        padding: 0.25rem;
    }
    .p-2{
        padding: 0.5rem;
    }
    .p-3{
        padding: .75rem;
    }
    .p-4{
        padding: 1rem;
    }
    .mb-4{
        margin-bottom: 1rem;
    }
    .mb-3{
        margin-bottom: .75rem;
    }
    .mb-2{
        margin-bottom: .5rem;
    }
    .mb-1{
        margin-bottom: .25rem;
    }
    .mt-4{
        margin-top: 1rem;
    }
    .mt-3{
        margin-top: .75rem;
    }
    .mt-2{
        margin-top: .5rem;
    }
    .mt-1{
        margin-top: .25rem;
    }
    .mt-0{
        margin-top: 0;
    }
    .mb-0{
        margin-bottom: 0;
    }
    .text-white{
        color: white;
    }
    .text-gray-100{
        color: #f7fafc;
    }
    .text-color-main{
        color: ${ ({ theme }) => theme.colors.primary.main };

    }
    .text-color-light{
        color: ${ ({ theme }) => theme.colors.primary.light };
    }
    


`;