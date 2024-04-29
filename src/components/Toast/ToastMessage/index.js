import { Container } from "./styles"
import PropTypes from 'prop-types';

import XCircleIcon from '../../../assets/images/icons/x-circle.svg'
import CheckCircleIcon from '../../../assets/images/icons/check-circle.svg'

export default function ToastMessage({message , onRemoveMessage}){
    function handleRemoveToast(){
        onRemoveMessage(message.id)
    }


    return (
        <Container type={message.type} onClick={handleRemoveToast}>
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
    }).isRequired,
    onRemoveMessage: PropTypes.func.isRequired
}

ToastMessage.defaultProps = {
    type: 'default'
}