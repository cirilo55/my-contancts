import { Container, Header, ListContainer,
     ListBody, Card } from './styles';
import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList(){
    return (
      
        <Container>
            <Header>
                <strong>3 contatos</strong>
                <a href=''>Novo Contato</a>
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
                        <strong>Mateus Silva</strong>
                        <small>Instagram</small>

                    </div>
                    <span>mateus@devacad.com.br</span>
                    <span>(41) 99990-0000</span>
                </div>


                <div className='actions'>
                    <a href='/'>
                        <img src={edit} alt='edit' />
                    </a>
                    <button type='button'>
                        <img src={trash} alt='delete'/>
                    </button>
                </div>
            </Card>

            <Card>
                <div className='info'>
                    <div className='contact-name'>
                        <strong>Mateus Silva</strong>
                        <small>Instagram</small>

                    </div>
                    <span>mateus@devacad.com.br</span>
                    <span>(41) 99990-0000</span>
                </div>


                <div className='actions'>
                    <a href='/'>
                        <img src={edit} alt='edit' />
                    </a>
                    <button type='button'>
                        <img src={trash} alt='delete'/>
                    </button>
                </div>
            </Card>

            <Card>
                <div className='info'>
                    <div className='contact-name'>
                        <strong>Mateus Silva</strong>
                        <small>Instagram</small>

                    </div>
                    <span>mateus@devacad.com.br</span>
                    <span>(41) 99990-0000</span>
                </div>


                <div className='actions'>
                    <a href='/'>
                        <img src={edit} alt='edit' />
                    </a>
                    <button type='button'>
                        <img src={trash} alt='delete'/>
                    </button>
                </div>
            </Card>
        </ListBody>
        </Container>
    )
}