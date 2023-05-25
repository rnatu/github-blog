import { css, styled } from 'styled-components';

interface ExternalLinkContainerProps {
  iconLeft?: boolean;
}

export const ExternalLinkContainer = styled.a<ExternalLinkContainerProps>`
  font-size: ${({ theme }) => theme.textSizes['components-link']};
  color: ${({ theme }) => theme.colors['brand-blue']};
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-decoration: none;

  ${({ iconLeft }) =>
    iconLeft &&
    css`
      flex-direction: row-reverse;
    `}

  &:hover {
    box-shadow: 0 1px 0 ${({ theme }) => theme.colors['brand-blue']};
  }
`;
