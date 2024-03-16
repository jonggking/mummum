import styled, { DefaultTheme } from 'styled-components';

export type TagProps = {
  title: string;
  color?: keyof DefaultTheme['colors'];
  size?: 's' | 'l';
};

const Tag: React.FC<TagProps> = ({
  title,
  color = 'YELLOW',
  size = 'l',
  ...props
}) => {
  return (
    <StyledTag color={color} size={size} {...props}>
      {title}
    </StyledTag>
  );
};
export default Tag;

const StyledTag = styled.div<{
  color: keyof DefaultTheme['colors'];
  size: 's' | 'l';
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.1rem 1rem;
  border-radius: 15px;
  background-color: ${({ theme, color }) => theme.colors[color][200]};
  color: ${({ theme, color }) => theme.colors[color][700]};

  ${({ size, theme }) => {
    switch (size) {
      case 's':
        return theme.typo['body-3-b'];
      case 'l':
        return theme.typo['body-2-b'];
      default:
        return theme.typo['body-2-b'];
    }
  }};
`;
