import { Container, InputLabel, StyledInput } from './styles';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

const Input: React.FC<IInputProps> = ({ title = 'Placeholder', ...rest }) => {
  return (
    <Container>
      <StyledInput {...rest} />
      <InputLabel>{title}</InputLabel>
    </Container>
  );
};

export default Input;
