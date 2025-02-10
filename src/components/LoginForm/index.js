import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';

import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';
import InputComponent from '../InputComponent';
import { Form, ButtonContainer, ContainerFull, Title, Footer, SubTitle } from "./styles";
import { Email, Lock } from '@material-ui/icons';

import FormGroup from "../FormGroup";
import Input from '../Input';
import Button from '../Button';
const LoginForm = forwardRef(({ buttonLabel, onSubmit}, ref) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { setError , removerError, getErrorMessagerFieldName, errors } = useErrors();

    const isFormValid = (email && password && errors.length===0);

    function handleEmailChange(event) {
        setEmail(event.target.value);
        
        if(event.target.value && !isEmailValid(event.target.value)){
            setError({ field: 'email', message: 'E-mail invalido'})

        }else{
            removerError('email');
        }
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);

        if(event.target.value.length < 6){
            setError({ field: 'password', message: 'Senha deve conter no mínimo 6 caracteres'})
        }
        else{
            removerError('password');
        }
    }


    function handleSubmit(event)
    {
        event.preventDefault();

        setIsSubmitting(true);

        onSubmit({
            email, password
        });
        setIsSubmitting(false);
    }
                                                                         
    return (
        <ContainerFull>  
                <div>
                    <Title>Sistema Notas Fiscais</Title> 
                </div>
                <div>
                   <SubTitle>Faça o login para acessar o sistema</SubTitle>
                </div>
                <Form method="POST" onSubmit={handleSubmit}>
                    <FormGroup error={getErrorMessagerFieldName('email')}>
                        <InputComponent  
                        placeholder="E-mail"
                        onChange={handleEmailChange}
                        value={email}
                        error={getErrorMessagerFieldName('email')}
                        maxLength="32"
                        disabled={isSubmitting}
                        />
                    </FormGroup>
                    <FormGroup>
                        <InputComponent  
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        value={password}
                        maxLength="15"
                        disabled={isSubmitting}
                        type="password"
                        />
                    </FormGroup>

                    <ButtonContainer>
                        <Button type='submit' disabled={!isFormValid} isLoading={isSubmitting}>
                            {buttonLabel}
                        </Button>
                    </ButtonContainer>
                </Form>
                <Footer>
                    <p> <strong></strong></p>
                </Footer>
        </ContainerFull>
    );
})

LoginForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    onSubmit: PropTypes.func
}

export default LoginForm