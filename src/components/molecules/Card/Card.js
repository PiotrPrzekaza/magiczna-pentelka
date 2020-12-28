import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Heading } from 'components/atoms/Heading/Heading';
import { Button } from 'components/atoms/Button/Button';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  min-height: 400px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.secondaryBg};
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
  position: relative;
  overflow: hidden;
  display: grid;
`;

const StyledButton = styled(Button)`
  border-radius: 30px;
  width: 33%;

  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.grey400};
    color: ${({ theme }) => theme.black};
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const AboutStyledWrapper = styled.div`
  height: 50vh;
  width: 50vw;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
`;

const AboutStyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const AboutInnerWrapper = styled.article`
  width: 80%;
  height: 50%;
`;

const AboutStyledHeading = styled(Heading)`
  margin: 50px 0 0 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const InnerWrapper = styled.div`
  position: relative;
  justify-content: space-around;
  padding: 17px 30px;
  ${({ flex }) =>
    flex &&
    css`
      align-items: center;
      margin: 30px 0 0 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledImage = styled.img`
  position: absolute;
  border-radius: 10px;
  margin-top: 20px;
  width: 150px;
  height: 150px;
  left: 5%;
  top: 2%;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-left: 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Card = ({ typeOfCard, id, title, price, desc, imageUrl, color, createdTime }) => (
  <>
    {typeOfCard === 'products' && (
      <Wrapper typeOfCard={typeOfCard}>
        <InnerWrapper>
          <StyledImage src={imageUrl} alt="" />
          <StyledHeading>{title}</StyledHeading>
        </InnerWrapper>
        <InnerWrapper flex>
          <StyledParagraph>Cena: {price}</StyledParagraph>
          <StyledParagraph>{desc}</StyledParagraph>
          <StyledParagraph>Kolor: {color}</StyledParagraph>
          <StyledParagraph>Czas realizacji: {createdTime}</StyledParagraph>
          <StyledButton>Zamów</StyledButton>
        </InnerWrapper>
      </Wrapper>
    )}
    {typeOfCard === 'knitting' && (
      <Wrapper typeOfCard={typeOfCard}>
        <InnerWrapper>
          <StyledImage src={imageUrl} alt="me" />
          <StyledHeading>{title}</StyledHeading>
        </InnerWrapper>
        <InnerWrapper flex>
          <StyledParagraph>Cena {price}</StyledParagraph>
          <StyledParagraph>{desc}</StyledParagraph>
          <StyledParagraph>{color}</StyledParagraph>
          <StyledParagraph>{createdTime}</StyledParagraph>
          <StyledButton>Zamów</StyledButton>
        </InnerWrapper>
      </Wrapper>
    )}
    {typeOfCard === 'about' && (
      <AboutStyledWrapper typeOfCard={typeOfCard}>
        <AboutStyledHeading>O Mnie</AboutStyledHeading>
        <AboutInnerWrapper>
          <AboutStyledParagraph>
            Szydełko to maja pasja. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo facere fuga harum minus? Eum vel, autem aliquam temporibus, eius natus in
            voluptas provident laudantium placeat rem sunt quam nostrum at? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Explicabo facere fuga harum minus? Eum vel, autem
            aliquam temporibus, eius natus in voluptas provident laudantium placeat rem sunt quam
            nostrum at?
          </AboutStyledParagraph>
        </AboutInnerWrapper>
      </AboutStyledWrapper>
    )}
  </>
);
Card.propTypes = {
  typeOfCard: PropTypes.oneOf(['products', 'knitting', 'about']),
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  color: PropTypes.string,
  createdTime: PropTypes.string,
  id: PropTypes.number.isRequired,
};

Card.defaultProps = {
  typeOfCard: 'products',
  imageUrl: null,
  color: null,
  createdTime: null,
};
