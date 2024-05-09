import {Overlay, Container, Footer} from './styles';
import Button from '../Button';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactPortal from '../ReactPortal';

export default function Modal({ 
    danger, 
    title, 
    children,
    cancelLabel,
    confirmLabel,
    onConfirm,
    onCancel,
    visible,
    isLoading

 })
{
    if(!visible){
        return;
    }

    return (
        <ReactPortal containerId="modal-root">
        <Overlay>
            <Container danger={danger}>
                <h1>{title}</h1>
                {children}
                <Footer>
                    <button className='cancel-button' type='button' onClick={onCancel} disabled={isLoading}>{cancelLabel}</button>
                    <Button danger={danger} type='button' onClick={onConfirm} isLoading={isLoading}>{confirmLabel}</Button>
                </Footer>
            </Container>
        </Overlay>
        </ReactPortal>
    );
}

Modal.propTypes = {
    danger: PropTypes.bool,
    visible: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool,
    cancelLabel: PropTypes.string,
    confirmLabel: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
}

Modal.defaultProps = {
    danger: false,
    isLoading: false,
    cancelLabel: 'Cancelar',
    confirmLabel: 'Confirmar'
}