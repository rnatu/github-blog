import { HTMLProps } from 'react';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLinkContainer } from './style';

interface ExternalLinkProps extends HTMLProps<HTMLAnchorElement> {
  text: string;
}

export function ExternalLink({ text, ...rest }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
      {text}
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </ExternalLinkContainer>
  );
}
