import Spinner from '../Spinner';
import styled, { DefaultTheme } from 'styled-components';

export type ButtonProps = {
  text?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
  color?: keyof DefaultTheme['colors'];
  disabled?: boolean;
  icon?: React.ReactElement;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  isLoading,
  children,
  color = 'BLUE',
  disabled = false,
  icon,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type='button'
      color={color}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {/* {isLoading ? <Spinner /> : children ?? text} */}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {children ?? (
            <>
              {icon ? (
                <>
                  {icon}
                  {text && <span>{text}</span>}
                </>
              ) : (
                text
              )}
            </>
          )}
        </>
      )}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{
  color: keyof DefaultTheme['colors'];
  disabled?: boolean;
}>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ theme, color }) => theme.colors[color][700]};
  background-color: ${({ theme, color }) => theme.colors[color][200]};
  &:hover {
    background: ${({ theme, color }) => theme.colors[color][300]};
  }
  ${({ theme }) => theme.typo['body-2-b']};

  border-radius: 0.375rem;
  border: none;

  padding: 1rem;
  text-align: center;
  margin: 0.5rem;
  min-width: 7rem;
  height: 4rem;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;

  color: ${({ theme, disabled }) => disabled && theme.colors.GREY[500]};
  background-color: ${({ theme, disabled }) =>
    disabled && theme.colors.GREY[400]};
  &:hover {
    background: ${({ theme, disabled }) => disabled && theme.colors.GREY[400]};
  }
`;
