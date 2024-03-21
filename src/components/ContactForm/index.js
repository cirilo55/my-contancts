import PropTypes from 'prop-types';
import { useState } from 'react';

import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';

import { Form, ButtonContainer } from "./styles";

import FormGroup from "../FormGroup";
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import formatPhone from '../../utils/formatPhone';

export default function ContactForm({ buttonLabel }){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('');

    const { setError , removerError, getErrorMessagerFieldName, errors } = useErrors();

    const isFormValid = (name && errors.length===0) 

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
        console.log({name, email, phone, category})
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

                />
            </FormGroup>

    
            <FormGroup error={getErrorMessagerFieldName('email')}>
                <Input  
                placeholder="E-mail"
                onChange={handleEmailChange}
                value={email}
                error={getErrorMessagerFieldName('email')}
                maxLength="32"

                />
            </FormGroup>

            <FormGroup>
                <Input  
                placeholder="Telefone"
                onChange={handlePhoneChange}
                value={phone}
                maxLength="15"

                />
            </FormGroup>

            <FormGroup>
                <Select
                value={category}
                onChange={(event) => setCategory(event.target.value)}

                >
                    <option value="Instagram">Instagram</option>
                    <option value="Linkedin">Linkedin</option>
                    <option value="Facebook">Facebook</option>
                </Select>
            </FormGroup>

            <ButtonContainer>
                <Button type='submit' disabled={!isFormValid}>
                    {buttonLabel}
                </Button>
            </ButtonContainer>
        </Form>
    );
}
ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
}