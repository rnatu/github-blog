import { styled } from 'styled-components';

interface TitleProps {
  size?: 'l' | 'm' | 's';
  color?: 'title' | 'subtitle' | 'text';
}

interface TextProps {
  size?: 'm' | 's';
  color?: 'text' | 'span' | 'label';
}

export const Title = styled.h1<TitleProps>`
  font-size: ${({ theme, size }) =>
    theme.textSizes[`title-title-${size ?? 'm'}`]};
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
`;

export const Text = styled.p<TextProps>`
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-text-${size ?? 'm'}`]};
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
`;
