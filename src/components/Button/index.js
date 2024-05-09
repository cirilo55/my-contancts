import PropTypes from 'prop-types'
import { StyledButton } from "./styles";

import Spinner from "../Spinner";

export default function Button({ type , disabled,  isLoading, onClick, children, danger }) {
    return (
        <StyledButton type={type} disabled={disabled || isLoading} onClick={onClick} danger={danger}>
                {!isLoading && children} 
                {isLoading && <Spinner size={16} />}
        </StyledButton>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    danger: PropTypes.bool
}

Button.defaultProps = {
    type: 'button',
    disabled: false,
    isLoading: false
}  