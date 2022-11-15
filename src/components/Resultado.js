import React from 'react';
import UseObtenerResultado from './UseObtenerResultado';
import styled from 'styled-components';

const Resultado = ({n}) => {
    const numero = Number(n);
    const resultado= UseObtenerResultado(numero);
    return ( 
        <>
            <Titulo>El resultado de serie({numero}) es:</Titulo>
            <Respuesta>{resultado}</Respuesta>
        </>
     );
}

const Titulo = styled.h2`
    font-size: 1.8rem;
    margin-top: 50px;
`;

const Respuesta = styled.h3`
    font-size: 3rem;
`;
    
export default Resultado;