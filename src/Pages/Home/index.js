import { useState, useCallback, useEffect } from 'react';
import {
    Container
} from '../../Pages/Home/styles';

import formatDanfe from '../../utils/fomatDanfe';
import { InputSearchContainer, Header, ListBody, Card, SubHeader, ErrorContainer, SpinnerContainer, EmptyListContainer } from './styles';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import DanfeService from '../../services/DanfeServices';
import sad from '../../assets/images/sad.svg';
import Spinner from '../../components/Spinner';
import emptyBox from '../../assets/images/empty-box.svg';
import toast from '../../utils/toast';
import refresh from '../../assets/images/icons/refresh.svg';
import send from '../../assets/images/icons/send.svg';

export default function HomePage() {
    const [orderBy, setOrderBy] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [contactBeingDeleted, setContactBeingDeleted] = useState(null);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);
    const [danfe, setDanfe] = useState('');
    const [danfeList , setDanfeList] = useState([]);

    function handleToggleOrderBy() {
        setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc');
    }


    function handleFormatDanfe(event) { 
        setDanfe(formatDanfe(event.target.value));
    }

    async function handleAddDanfe() {
        try {
            setIsLoading(true);
            const response = await DanfeService.sendDanfe(danfe.replace(/\D/g, '')); // Remove caracteres não numéricos
            toast({
                type: 'success',
                text: 'Danfe Adicionada.'
            });

        } catch (error) {
            toast({
                type: 'danger',
                text: 'Erro ao adicionar Danfe'
            });
        } finally {
            loadDanfes()
        }
    }

    const loadDanfes =  useCallback(async () => {
        try {
            setIsLoading(true);
            const danfeList = await DanfeService.getDanfe();
            setDanfeList(danfeList.arquivos);

        } catch (error) {
            setHasError(true);
        } finally {
            setIsLoading(false);

        }
    });

    async function handleSendSuperus(){
        try {
            setIsLoading(true);
            const response = await DanfeService.sendSuperus();
            toast({
                type: 'success',
                text: response.message
            });
        } catch (error) {
            toast({
                type: 'error',
                text: response.message
            });
        } finally {
            loadDanfes();
        } 
    }
    
    function handleTryAgain() {
        setHasError(false);
        loadDanfes();
    }

    useEffect(() => {
        loadDanfes();
    }, []);

    return (
        <Container>
            <InputSearchContainer>
                <input
                    value={danfe}
                    type='text'
                    placeholder="Pesquisar por número da Danfe"
                    onChange={handleFormatDanfe}
                />
            </InputSearchContainer>

             <Header>
                <div className="d-flex-end">
                    <Button onClick={handleAddDanfe}
                        disabled={isLoading}
                        >Adicionar Danfe</Button>
                </div>
             </Header>

             {hasError && !isLoading && (
                <ErrorContainer>
                    <img src={sad} alt='Sad' />
                    <div className='detail'>
                        <span>Ocorreu um erro ao obter as danfes!</span>
                        <Button onClick={handleTryAgain}>
                            Tentar Novamente
                        </Button>
                    </div>
                </ErrorContainer>
            )}

            {!hasError && !isLoading && danfeList.length !== 0 && (
                <SubHeader>
                <div className='end'> 
                    <button onClick={handleTryAgain}>
                        <img src={refresh} alt='Atualizar' height='24px' />
                    </button>
                    <button onClick={handleSendSuperus}>
                        <img src={send} alt='Enviar' height='30px' />
                    </button>
                </div>
                <h1>Danfes para importar: </h1>
                </SubHeader>
            )}

            {!hasError && danfeList.length === 0 && !isLoading &&
                <EmptyListContainer>
                    <img src={emptyBox} alt='Empty box'/>   
                    <p>
                    Sem Danfe Para importar no momento.
                    </p>
                </EmptyListContainer>
             }

             <ListBody>

             {isLoading &&

             <SpinnerContainer>
                <Spinner isLoading={isLoading} />
             </SpinnerContainer>
             }

             {!isLoading && danfeList && danfeList.map((danfe) => (
                <Card>
                    <div className='info'>
                        <div className='contact-name'>
                            <strong>{danfe}</strong>
                        </div>
                        {/* <span>12/01 - 09:00</span> */}
                    </div>
                </Card>

             ))}


            </ListBody>
        </Container>
    )
}

