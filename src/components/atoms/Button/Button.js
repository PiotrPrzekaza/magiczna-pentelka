import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  border: none;
  width: 200px;
  border: none;
  height: 50px;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: lowercase;
  border-radius: 30px;

  ${({ small }) =>
    small &&
    css`
      background-color: #dd7783;
      width: 100px;
      height: 20px;
      font-size: ${({ theme }) => theme.fontSize.xxs};
    `}
`;
export default Button;
