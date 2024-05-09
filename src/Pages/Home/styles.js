import styled from "styled-components";

export const Container = styled.div`
    margin-top: 32px;

    strong {
        font-weight: bolder;
    }
`;

export const InputSearchContainer = styled.div`
    width: 100%;

    input {
        width: 100%;
        background-color:  #fff;
        border: none;
        border-radius: 25px;
        height: 50px;
        box-shadow: 0px 4 px 10px rgba(0, 0, 0, 0.04);
        outline: 0;
        padding: 0 16px;
        margin-bottom: 18px;
        
        &::placeholder{
            color: #BCBCBC
        }

    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: ${({ justifycontent }) => justifycontent};
    margin-top: 32px;
    padding-bottom: 16px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};

    strong {
        color: #222;
        font-size: 24px;
    }
    a {
        color:  ${({ theme }) => theme.colors.primary.main};
        font-size: 16px;
        text-decoration: none;
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
        padding: 8px 16px;
        border-radius: 4px;
        transition: all 0.2s ease-in;

        &:hover{
            background: ${({ theme }) => theme.colors.primary.main} ;
            color: #fff;
        }
    }


`;

export const ListHeader = styled.div`
    margin-top: 24px;

    header{
        margin-bottom: 8px;

        button{
            background: transparent;
            border: none;
            display: flex;
            align-items: center;


            span {
                margin-top: 8px;
                font-weight: bold;
                color: ${({ theme }) => theme.colors.primary.main}

            }

            img {
                margin-left: 5px;
                transform: ${({ orderby }) => (orderby === 'asc' ? 'rotate(180deg)': 'rotate(0deg)')};
                transition: transform 0.2s ease-in;
            }
        }
    }
`
export const ListBody = styled.div`
    margin-top: 24px;
`

export const Card = styled.div`
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0,0,0, 0.4);
    padding: 16px;
    border-radius: 4px; 
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + & {
        margin-top: 16px;
    }

    .info{
        .contact-name{
            display:flex;
            align-items: center;
            margin-bottom: 4px;

        small{
            background: ${({ theme }) => theme.colors.primary.lighter} ;
            color: ${({ theme }) => theme.colors.primary.main} ;
            text-transform: uppercase;
            padding: 4px;
            border-radius: 2px;
            margin-left: 4px;
        }
    }
    span{
        display: block;
        font-size: 14px;
        color: ${({theme}) => theme.colors.gray[200]}
    }
    }
    .actions{
        button{
            background: transparent;
            border: none;
            margin-left: 8px
        }
    }
`

export const ErrorContainer = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: center;

    .detail{
        margin-left: 24px;
        

        strong {
            font-size: 22px;
            color: ${({ theme }) => theme.colors.danger.main};
            display: block;


            margin-bottom: 8px;
        }
    }
    span{
        color: red;
    }
    button{
        margin-top: 16px;
    }

`

export const EmptyListContainer = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        color: ${({ theme }) => theme.colors.gray[200]};
        text-align: center;
        margin-top: 8px

 
    }
    strong {
            color: ${({ theme }) =>  theme.colors.primary.main}
    }

`;

export const SearchNotFoundContainer = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: center;

    span{
        color: ${({ theme }) => theme.colors.gray[200]};
        margin-left: 24px;
        word-break: break-word;
    }
`