import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  padding: 0 16px;
  transition: border-color 0.2s ease-in;
  

`;

export const IconWrapper = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
  height: 100%;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;