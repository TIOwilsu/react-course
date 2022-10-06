import Logo from 'assets/images/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <header className="app-header">
        <img src={Logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Link className="app-link" to="/task1">
          Task1
        </Link>
      </header>
    </Container>
  );
};

export default Home;
