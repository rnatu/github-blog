import { css, styled } from 'styled-components';

interface ExternalLinkContainerProps {
  variant?: string;
}

export const ExternalLinkContainer = styled.a<ExternalLinkContainerProps>`
  font-size: ${({ theme }) => theme.textSizes['components-link']};
  color: ${({ theme }) => theme.colors['brand-blue']};
  text-transform: uppercase;
  line-height: 1.2rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-decoration: none;

  ${({ variant }) =>
    variant &&
    css`
      flex-direction: row-reverse;
    `}

  &:hover {
    box-shadow: 0 2px 0 ${({ theme }) => theme.colors['brand-blue']};
  }
`;
