import React from 'react';
import Formulario from './components/Formulario';
import styled from 'styled-components';

const App = () => {
  return (
    <Container>
      <Formulario/>
    </Container>
  );
}

const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    width: 60vw;
    max-width: 600px;
    min-width: 350px;
    height: 100vh;
`;

export default App;