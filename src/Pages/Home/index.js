import { useState } from 'react';
import {
    Container
} from '../../Pages/Home/styles';

import formatDanfe from '../../utils/fomatDanfe';
import { InputSearchContainer, Header, ListBody, Card } from './styles';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import DanfeService from '../../services/DanfeServices';

export default function HomePage() {
    const [orderBy, setOrderBy] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [contactBeingDeleted, setContactBeingDeleted] = useState(null);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);
    const [danfe, setDanfe] = useState('');

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
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <Container>
            <Loader isLoading={isLoading} />
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
                <Button onClick={handleAddDanfe}>Adicionar Danfe</Button>
             </div>
             </Header>
 
             <ListBody>
                    <Card>
                        <div className='info'>
                            <div className='contact-name'>
                                <strong>{danfe.trim()}</strong>
                            </div>
                            <span>12/01 - 09:00</span>
                        </div>
                    </Card>
            </ListBody>
        </Container>
    )
}

