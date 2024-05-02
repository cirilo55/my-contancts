import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';
import CategoriesServices from '../../services/CategoriesServices';

import { Form, ButtonContainer } from "./styles";

import FormGroup from "../FormGroup";
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import formatPhone from '../../utils/formatPhone';
import Spinner from '../Spinner';

export default function ContactForm({ buttonLabel, onSubmit }){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { setError , removerError, getErrorMessagerFieldName, errors } = useErrors();


    const isFormValid = (name && errors.length===0) ;
    useEffect(() =>{
        async function loadCategories(){
            try{
            const categoriesList = await CategoriesServices.listCategories();

            setCategories(categoriesList)
            setIsLoadingCategories(false)
            } catch(err){}
        }
  

        loadCategories()
    }, [])

    function handleNameChange(event) {
        setName(event.target.value);

        if(!event.target.value)
        {
            setError({ field: 'name', message: 'Nome é obrigatorio'});

        }else{
            removerError('name');
        }
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
        
        if(event.target.value && !isEmailValid(event.target.value)){
            setError({ field: 'email', message: 'E-mail invalido'})

        }else{
            removerError('email');
        }
    }

    function handlePhoneChange(event){
        setPhone(formatPhone(event.target.value))
    }

    function handleSubmit(event)
    {
        event.preventDefault();

        setIsSubmitting(true);

        onSubmit({
            name, email, phone, categoryId
        });
        setName('');
        setEmail('');
        setPhone('');
        setCategoryId('');
        
        setIsSubmitting(false);
    }
                                                                         
    return (
        <Form method="POST" onSubmit={handleSubmit}>
            <FormGroup error={getErrorMessagerFieldName('name')}>
                <Input  
                placeholder="Nome"
                value={name}
                onChange={handleNameChange}
                error={getErrorMessagerFieldName('name')}
                maxLength="32"
                disabled={isSubmitting}

                />
            </FormGroup>

    
            <FormGroup error={getErrorMessagerFieldName('email')}>
                <Input  
                placeholder="E-mail"
                onChange={handleEmailChange}
                value={email}
                error={getErrorMessagerFieldName('email')}
                maxLength="32"
                disabled={isSubmitting}


                />
            </FormGroup>

            <FormGroup>
                <Input  
                placeholder="Telefone"
                onChange={handlePhoneChange}
                value={phone}
                maxLength="15"
                disabled={isSubmitting}


                />
            </FormGroup>

            <FormGroup isLoading={isLoadingCategories}>
                <Select
                value={categoryId}
                onChange={(event) => setCategoryId(event.target.value)}
                disabled={isLoadingCategories || isSubmitting}
                >
                
                    <option value="">Categories</option>
                    {categories.map((category) => 
                        <option key={category.id} value={category.id}>{category.name}</option>
                    )}
                </Select>   
            </FormGroup>


            <ButtonContainer>
                <Button type='submit' disabled={!isFormValid} isLoading={isSubmitting}>
                    {buttonLabel}
                </Button>
            </ButtonContainer>
        </Form>
    );
}
ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    onSubmit: PropTypes.func
}