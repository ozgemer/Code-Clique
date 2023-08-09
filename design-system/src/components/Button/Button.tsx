import { HTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './Button.styled';

interface Props {
  children: ReactNode;
  variant: 'primary' | 'secondary';
  disabled?: boolean;
}

function Button({ children, variant, disabled, ...props }: Props) {
  return (
    <StyledButton disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
}

export { Button, Props };
