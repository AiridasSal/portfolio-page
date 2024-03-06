import styled from 'styled-components';

export const QuestionFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  background-color: var(--gray-light-color);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  display: flex;
  padding: var(--spacing-lg);
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 24px;

  margin-bottom: var(--spacing-xs);
`;

export const Input = styled.input`
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
`;

export const TextArea = styled.textarea`
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: 16px;
  border: none;
  height: 200px;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
`;

export const ErrorMessage = styled.p`
  color: var(--error-color);
  font-size: 14px;
  margin-top: var(--spacing-md);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-md);
`;
