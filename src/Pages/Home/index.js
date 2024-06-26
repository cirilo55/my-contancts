import { useEffect, useState, useMemo, useCallback } from 'react';
import {
    Container, Header, ListHeader,
    ListBody, Card, ErrorContainer,
    EmptyListContainer, SearchNotFoundContainer
} from '../../Pages/Home/styles';

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from './../../assets/images/magnifier-question.svg'

import { InputSearchContainer } from './styles';

import Loader from '../../components/Loader';
import ContactsServices from '../../services/ContactsServices';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import toast from '../../utils/toast';

export default function HomePage() {
    const [contacts, setContacts] = useState([]);
    const [orderBy, setOrderBy] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [contactBeingDeleted, setContactBeingDeleted] = useState(null);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);

    const filteredContacts = useMemo(() => contacts.filter((contact) =>

        (contact.name.toLowerCase().includes(searchTerm.toLowerCase()))

    ), [contacts, searchTerm]);

    const loadContacts =  useCallback(async () => {
        try {
            setIsLoading(true);

            let contactsList = await ContactsServices.listContacts(orderBy);
            setHasError(false);
            setContacts(contactsList);
        } catch (error) {
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    }, [orderBy]);

    useEffect(() => {
        loadContacts();
    }, [loadContacts]);

    function handleToggleOrderBy() {
        setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc');
    }

    function handleSearchTerm(event) {
        setSearchTerm(event.target.value)
    }

    function handleTryAgain() {
        loadContacts();
    }
    function handleDeleteContact(contact)
    {
        setContactBeingDeleted(contact)
        setIsDeleteModalVisible(true);
    }
    function handleCloseDeleteModal(){
        setIsDeleteModalVisible(false)
    }

    async function handleConfirmDeleteContact(){
        try{
            setIsLoadingDelete(true);
            await ContactsServices.deleteContact(contactBeingDeleted);

            toast({
                type: 'success',
                text: 'Contact Deleted.'
            });
            setContacts(prevState => prevState.filter(
                (contact) => contact.id !== contactBeingDeleted.id
            ))
            
            handleCloseDeleteModal();
        }catch{  
            toast({
                type: 'danger',
                text: 'Erro ao deletar o contato.'
            });
        } finally{
            setIsLoadingDelete(false);
        }
        
    }

    return (
        <Container>
            <Loader isLoading={isLoading} />

            <Modal 
                title={`Tem certeza que deseja remover o contato ${contactBeingDeleted?.name} ?`}
                danger
                confirmLabel="Deletar"
                onCancel={handleCloseDeleteModal}
                onConfirm={handleConfirmDeleteContact}
                visible={isDeleteModalVisible}
                isLoading={isLoadingDelete}
            >
            <p>HELLO WORLD</p>
            </Modal>
            


            {contacts.length > 0 && (
                <InputSearchContainer>
                <input
                    value={searchTerm}
                    type='text'
                    placeholder="Pesquise pelo nome..."
                    onChange={handleSearchTerm} />
                </InputSearchContainer>
            )}

            <Header justifycontent={(hasError ? 'flex-end': (contacts.length > 0 ? 'space-between' : 'center') )}>
                {(!hasError && contacts.length > 0) && (<strong>
                    {filteredContacts.length}
                    {filteredContacts.length === 1 ? ' contato' : ' contatos'}
                </strong>)}
                <a href='/new'>Novo Contato</a>
            </Header>

            {hasError && (
                <ErrorContainer>
                    <img src={sad} alt='Sad' />
                    <div className='detail'>
                        <span>Ocorreu um erro ao obter seus Contatos!</span>
                        <Button onClick={handleTryAgain}>
                            Tentar Novamente
                        </Button>
                    </div>
                </ErrorContainer>
            )}

            {!hasError && (
            <>
            {(contacts.length < 1 && !isLoading ) && (
                <EmptyListContainer>
                    <img src={emptyBox} alt='Empty box'/>   
                    <p>
                    Você ainda não tem nenhum contato cadastrado!
                    Clique no botão <strong>”Novo contato” </strong> 
                    à cima para cadastrar o seu primeiro!
                    </p>
                </EmptyListContainer>
            )}
            {(contacts.length > 0 && filteredContacts.length < 1) && (
                <SearchNotFoundContainer>
                    <img src={magnifierQuestion} alt="Magnifier question" />
                    <span>
                        Nenhum resultado encontrado para <strong>"{searchTerm}"</strong>
                    </span>
                </SearchNotFoundContainer>
            )}



            {filteredContacts.length > 0 && (
            <ListHeader orderby={orderBy}>
                <header>
                    <button type='button' className='sort-btn' onClick={handleToggleOrderBy} >
                        <span>Nome</span>
                        <img src={arrow} alt="Arrow"></img>
                    </button>
                </header>
            </ListHeader>


            )}
            </>
            )}
          
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
                            <a href={`/edit/${contact.id}`}>
                                <img src={edit} alt='edit' />
                            </a>
                            <button type='button' onClick={() => handleDeleteContact(contact)}>
                                <img src={trash} alt='delete'  />
                            </button>
                        </div>
                    </Card>
                ))}
            </ListBody>
        </Container>
    )
}

