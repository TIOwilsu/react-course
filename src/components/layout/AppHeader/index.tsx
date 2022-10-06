import { Container } from './style';

interface AppHeaderProps {
  title: string;
  description: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ title, description }) => {
  return (
    <Container>
      <h1 className="app-header__title">{title}</h1>
      <h3 className="app-header__subtitle">{description}</h3>
    </Container>
  );
};
