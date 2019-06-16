import React from "react";
import styled from "styled-components";
import { timeStamp } from './helpers';

const Card = styled.div`
  text-align: left;
  background: papayawhip;
  box-shadow: 5px 5px 12px lightgray;
  border: 2px solid rebeccapurple;
  border-radius: 3px;
  padding: 2em;
  min-width: 25%;
  margin-top: 10px;
  position: relative;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

const Content = styled.p`
  font-size: 1em;
  color: palevioletred;
`;

const Date = styled.div`
  font-size: 1em;
  font-family: monospace;
  color: rebeccapurple;
  position: absolute;
  right: 10px;
  bottom: 10px;
`

const Button = styled.button`
  color: white;
  background: rebeccapurple;
  font-size: 1em;
  font-family: monospace;
`

const Note = ({ title, content, handleOpen, handleDelete, id, date }) => {
  return (
    <CardWrapper>
      <Card onClick={() => handleOpen(id)}>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Date>{timeStamp(date)}</Date>
      </Card>
      <Button onClick={() => handleDelete(id)}>REMOVE</Button>
    </CardWrapper>
  );
};

export default Note;
