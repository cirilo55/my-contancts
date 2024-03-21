import {
    Container, Header, ListContainer,
    ListBody, Card
} from '../../Pages/Home/styles';
import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { InputSearchContainer } from './styles';
import Modal from '../../components/Modal';
import Loader from '../../Loader';

export default function HomePage() {
    return (
        <Container>
            <InputSearchContainer>
                <input type='text' placeholder="Pesquise pelo nome..." />
            </InputSearchContainer>
            <Header>
                <strong>3 contatos</strong>
                <a href='/new'>Novo Contato</a>
            </Header>
            <ListContainer>
                <header>
                    <button type='button' className='sort-btn'>
                        <span>Nome</span>
                        <img src={arrow} alt="Arrow"></img>
                    </button>
                </header>
            </ListContainer>
            <ListBody>
                <Card>
                    <div className='info'>
                        <div className='contact-name'>
                            <strong>Bira bixa</strong>
                            <small>Instagram</small>

                        </div>
                        <span>noia@fumarbeck.com.br</span>
                        <span>(41) 42069-6669</span>
                    </div>


                    <div className='actions'>
                        <a href='/'>
                            <img src={edit} alt='edit' />
                        </a>
                        <button type='button'>
                            <img src={trash} alt='delete' />
                        </button>
                    </div>
                </Card>
            </ListBody>
        </Container>
    )
}