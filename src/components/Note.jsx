import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    text-align: left;
    background: papayawhip;
    box-shadow: 5px 5px lightgray;
    border: 1px solid blue;
    padding: 2em;
`;

const Title = styled.h1`
    font-size: 1.5em;
    color: palevioletred;
`

const Content = styled.p`
    font-size: 1em;
    color: palevioletred;
`

const Note = ({ title, content }) => {
    return (
        <Card>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </Card>
    )
}

export default Note
