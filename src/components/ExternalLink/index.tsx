import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLinkContainer } from './style';
import { AnchorHTMLAttributes } from 'react';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  icon: IconDefinition;
  variant?: boolean;
}

export function ExternalLink({
  text,
  icon,
  variant = false,
  ...rest
}: ExternalLinkProps) {
  const variantClass = variant ? 'iconLeft' : '';

  return (
    <ExternalLinkContainer variant={variantClass} {...rest}>
      {text}
      <FontAwesomeIcon icon={icon} />
    </ExternalLinkContainer>
  );
}
