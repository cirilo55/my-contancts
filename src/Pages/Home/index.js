import { useEffect, useState, useMemo } from 'react';
import {
    Container, Header, ListHeader,
    ListBody, Card
} from '../../Pages/Home/styles';
import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { InputSearchContainer } from './styles';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import Modal from '../../components/Modal';
import Loader from '../../components/Loader';
import ContactsServices from '../../services/ContactsServices';

export default function HomePage() {
    const [contacts, setContacts] = useState([]);
    const [orderBy, setOrderBy] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading]  = useState(true);
    const [hasError, setHasError] = useState(false);

    const filteredContacts = useMemo(() => contacts.filter((contact) =>

        (contact.name.toLowerCase().includes(searchTerm.toLowerCase()))

    ), [contacts, searchTerm]);

    useEffect(() =>{
        async function loadContacts(){
            try {
                setIsLoading(true);

                const contactsList = await ContactsServices.listContacts(orderBy);
                setContacts(contactsList);
            } catch (error){
                setHasError(true);
            }finally{
                setIsLoading(false);
            }
        }
        loadContacts();
    },[orderBy])

    function handleToggleOrderBy(){
        setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc');
    }   

    function handleSearchTerm(event)
    {
        setSearchTerm(event.target.value)
    }

    return (
        <Container>
            <Loader  isLoading={isLoading}/>
            <InputSearchContainer>
                <input 
                value={searchTerm} 
                type='text' 
                placeholder="Pesquise pelo nome..."
                onChange={handleSearchTerm} />
            </InputSearchContainer>
            <Header>
                <strong>
                    {contacts.length}
                    {contacts.length === 1 ? ' contato':' contatos'}
                </strong>
                <a href='/new'>Novo Contato</a>
            </Header>

            {hasError && (
                <div>
                    Occorreu um erro!
                </div>
            )}

            <ListHeader orderBy={orderBy}>
                <header>
                    <button type='button' className='sort-btn' onClick={handleToggleOrderBy} >
                        <span>Nome</span>
                        <img src={arrow} alt="Arrow"></img>
                    </button>
                </header>
            </ListHeader>

            <ListBody>
                {filteredContacts.map((contact) => (
                <Card key={contact.id}>
                    <div className='info'>
                        <div className='contact-name'>
                            <strong>{contact.name}</strong>
                            {contact.category_name && (
                                <small>{contact.category_name}</small>
                            )}
                        </div>

                        <span>{contact.email}</span>
                        <span>{contact.phone}</span>
                    </div>


                    <div className='actions'>
                        <Link to={`/edit/${contact.id}`}>
                            <img src={edit} alt='edit' />
                        </Link>
                        <button type='button'>
                            <img src={trash} alt='delete' />
                        </button>
                    </div>
                </Card>
                ))}
            </ListBody>
        </Container>
    )
}

