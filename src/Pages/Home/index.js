import { useState } from 'react';
import {
    Container
} from '../../Pages/Home/styles';

import formatDanfe from '../../utils/fomatDanfe';
import { InputSearchContainer, Header, ListBody, Card } from './styles';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

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
             <Button>Adicionar Danfe</Button>
             </div>
             </Header>
 
             <ListBody>
                    <Card>
                        <div className='info'>
                            <div className='contact-name'>
                                <strong>{"5464.8978.9789.7897.8978.7897.8978.9789.7897.8978.9789"}</strong>
                            </div>
                            <span>12/01 - 09:00</span>
                        </div>
                    </Card>
            </ListBody>
        </Container>
    )
}

