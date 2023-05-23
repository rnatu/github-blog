import { styled } from 'styled-components';

export const ExternalLinkContainer = styled.a`
  font-size: ${({ theme }) => theme.textSizes['components-link']};
  color: ${({ theme }) => theme.colors['brand-blue']};
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
