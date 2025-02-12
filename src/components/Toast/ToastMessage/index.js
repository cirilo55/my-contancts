import { Container } from "./styles"
import PropTypes from 'prop-types';

import XCircleIcon from '../../../assets/images/icons/x-circle.svg'
import CheckCircleIcon from '../../../assets/images/icons/check-circle.svg'
import { useEffect } from "react";

export default function ToastMessage({message , onRemoveMessage}){
    useEffect(() =>{
        const timeoutId = setTimeout(() => {
            onRemoveMessage(message.id)
        }, message.duration || 3000);

        return () =>{
            clearTimeout(timeoutId)
        }
    }, [message, onRemoveMessage])

    function handleRemoveToast(){
        onRemoveMessage(message.id)
    }


    return (
        <Container 
        type={message.type} 
        onClick={handleRemoveToast}
        role="button"
        >
            {message.type === 'success' && <img src={CheckCircleIcon} alt="Check" />}
            {message.type === 'danger' && <img src={XCircleIcon} alt="X" />}
           <strong>{message.text}</strong>
        </Container>
    )

}

ToastMessage.propTypes = {
    
    message: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        type: PropTypes.oneOf(['default', 'success', 'danger']),
        duration: PropTypes.number
    }).isRequired,
    onRemoveMessage: PropTypes.func.isRequired
}

ToastMessage.defaultProps = {
    type: 'default'
}