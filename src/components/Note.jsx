import React from "react";
import styled from "styled-components";

const Card = styled.div`
  text-align: left;
  background: papayawhip;
  box-shadow: 5px 5px 10px lightgray;
  border: 2px solid rebeccapurple;
  border-radius: 3px;
  padding: 2em;
  min-width: 25%;
  margin-top: 10px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

const Content = styled.p`
  font-size: 1em;
  color: palevioletred;
`;

const Note = ({ title, content }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Card>
  );
};

export default Note;
