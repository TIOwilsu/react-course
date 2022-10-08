import React from 'react';
import { AppHeader } from 'components/layout/AppHeader';
import { Container } from './style';

const Task2: React.FC = () => {
  return (
    <React.Fragment>
      <AppHeader title="Task2" description="Está é a task 2"></AppHeader>
      <Container>oi</Container>
    </React.Fragment>
  );
};

export default Task2;
