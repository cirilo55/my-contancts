import styled from "styled-components";

export const Overlay = styled.div`
    position: absolute;
    left: 0;
    top:0;

    width: 100%;
    height: 100%;

    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(5px);

    display: flex;
    align-items: center;
    justify-content: center;
` 

export const Container = styled.div`
    max-width: 450px;
    width: 100%;

    background: #fff;
    border-radius: 4px;
    padding: 25px;

    > h1{
        font-size: 22px;
        color: ${ ({theme, danger}) => (danger ? theme.colors.danger.main : theme.colors.gray[900])}
    }
    p {
        margin-top: 8px;
    }

`

export const Footer = styled.footer`
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    .cancel-button{
        background: transparent;
        border: none;
        color: gray;
        font-size: 16px;
        margin-right: 8px;
        color: ${ ({ theme }) => theme.colors.gray[200]}
        
        &[disabled]{
            cursor: default
        }

    }
`;