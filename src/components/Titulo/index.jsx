import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
color: #7271fd;
text-align: ${(props) => props.alinear};
margin: 0;
`

const Titulo = ({titulo}) => {
    return (
        <div>
            <Title alinear="center">{titulo}</Title>
        </div>
    );
};

export default Titulo;