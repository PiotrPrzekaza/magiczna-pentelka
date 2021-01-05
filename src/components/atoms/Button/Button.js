import React from 'react';
import styled, { css } from 'styled-components';

export const Button = styled.button`
  color: white;
  text-align: center;
  text-transform: lowercase;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 5px;
  width: 33%;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.grey1};
  background-color: transparent;
  color: ${({ theme }) => theme.grey1};
  ${({ submit }) =>
    submit &&
    css`
      width: 50%;
      margin: 50px auto 0;
      font-weight: ${({ theme }) => theme.bold};
      letter-spacing: 1px;
      color: ${({ theme }) => theme.white};
      transition: transform 0.5s ease;
      :hover {
        transform: scale(1.1);
        background-color: ${({ theme }) => theme.grey400};
        color: ${({ theme }) => theme.black};
      }
    `}
`;
