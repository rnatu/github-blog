import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLinkContainer } from './style';
import { AnchorHTMLAttributes } from 'react';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  icon: IconDefinition;
  iconLeft?: boolean;
}

export function ExternalLink({ text, icon, ...rest }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
      {text}
      <FontAwesomeIcon icon={icon} />
    </ExternalLinkContainer>
  );
}
