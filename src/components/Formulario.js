import React, { useState } from 'react';
import styled from 'styled-components';
import Resultado from './Resultado';

const Formulario = () => {
    const [value, setValue] = useState('');
    const [valorDefinitivo, setValorDefinitivo] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        setValorDefinitivo(value);
    }
    const onChange = (e) => {
        while (isNaN(e.target.value) || e.target.value%1 !==0) {
            alert('Por favor, ingrese un número entero');
            e.target.value='';
        }
        setValue(e.target.value);
    }

    return ( 
        <>
            <Titulo>Prueba Frontend</Titulo>
            <h2>Introduzca un número entero positivo que indique la posición que desea conocer en la serie</h2>
            <Serie>serie(n) = 4primo(n)-triangular(n-1)+fibonacci(n+2)</Serie>
            <Input type='text' value={value} onChange={onChange}/>
            <Button onClick={(e)=> handleClick(e)}>Confirmar</Button>
            {valorDefinitivo.length>0 && <Resultado n={valorDefinitivo}/>}
        </>
     );
}
 
const Titulo = styled.h1`
    margin: 10px;
`;

const Serie = styled.h2`
    font-size: 1.5rem;
    font-style: italic;
    margin-top: 10px;
`;

const Input = styled.input`
    width: 200px;
    height: 50px;
    text-align: center;
    font-size: 1.5rem;
    margin: 40px 0 10px 0;
    border-radius: 20px;
    :focus{
        outline: none;
        background-color: #fcfcfc;
    }
`;

const Button = styled.button`
    height: 40px;
    width: 100px;
    border-radius: 20px;
`;

export default Formulario;