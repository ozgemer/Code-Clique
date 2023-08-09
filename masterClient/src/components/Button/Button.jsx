import { StyledButton } from './Button.styled';

function Button({
  children,
  variant = 'sidebar',
  size,
  selected = false,
  disabled = false,
  onClick,
}) {
  return (
    <StyledButton
      variant={variant}
      selected={selected}
      onClick={onClick}
      disabled={disabled}
      size={size}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
