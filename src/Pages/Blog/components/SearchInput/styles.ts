import { styled } from 'styled-components';

export const SearchInputContainer = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.colors['base-input']};

  border: 1px solid ${({ theme }) => theme.colors['base-border']};
  border-radius: 6px;
  margin-top: 0.75rem;

  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.textSizes['text-text-m']};

  &::placeholder {
    font-size: ${({ theme }) => theme.textSizes['text-text-m']};
    color: ${({ theme }) => theme.colors['base-label']};
  }
`;
