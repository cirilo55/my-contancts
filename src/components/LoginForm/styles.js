import styled from "styled-components";

export const Form = styled.form`
    margin: 2.5rem 0;
    width: 25%;
`
export const ButtonContainer = styled.div`
    margin-top: 24px;
    
    button{
        width: 100%;
    }
`

export const ContainerFull = styled.div`
    height: calc(100vh - 4rem);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: aliceblue;
    margin-top: 4rem;
`

export const ContainerForm = styled.div`
    min-width: 400px;
    background-color: #f1f1f1;
    padding: 1rem 2rem;
    margin: 1rem;
    border-radius: 10px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 65vh;
    box-shadow: 0px 0px 10px 0px #afafaf;
    border: 1px solid ${ ({ theme }) => theme.colors.primary.main };
`


export const Title = styled.h1`
    text-align: center;
    color: ${({ theme }) => theme.colors.primary.main };
    position: relative;
    font-size: 1.5rem;
    font-weight: 700;

    /* &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 95%;
        height: 1px;
        background: ${({ theme }) => theme.colors.primary.main };
        transform: translateX(-50%);
        border-radius: 2px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3); /* Sombra na linha */
`;

export const SubTitle = styled.p`
    text-align: center;
    padding: 1rem;
    color: #ccc;
    position: relative;
    font-size: .75rem;
    font-weight: 700;
    
`;

export const Footer = styled.div`
    margin-top: auto;
    text-align: center;
    padding: 1rem;
    border-top: 1px solid #afafaf; 
`