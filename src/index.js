import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components';

const App = () => {
  return (
    <Fragment>
      <Block bgColor='blue' color='red'>
        <h1>Hello Mario World!!</h1>
      </Block>
      <Block color='orange'>
        <h1>Hello Lugi World!!</h1>
      </Block>
    </Fragment>
  );
};

const Block = styled.div`
  background-color: ${({ bgColor }) => bgColor || 'green'};
  color: ${({ color }) => color || 'blue'};
  padding: 10px;
  border: 3px solid ${({ color }) => color || 'blue'};
  border-radius: 5px;
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: gray;
    color: #fff;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
