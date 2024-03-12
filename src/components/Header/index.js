import { Container, InputSearchContainer } from "./style"

import Logo from '../../assets/imgs/Group.svg';

export default function Header(){
    return (
        <Container>
            <img src={Logo} alt='MyContancts' width='201' />

            <InputSearchContainer>
                <input type='text' placeholder="Pesquise pelo nome..."/>
            </InputSearchContainer>
        </Container>
    )
}