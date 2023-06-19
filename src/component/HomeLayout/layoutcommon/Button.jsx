import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Button1 = styled.a`
  display: flex;
  position: absolute;
  height: 80px;
  width: 302px;
  top: 24%;
  background: rgb(251, 115, 105);
  border-radius: 7px;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
`;

const P1 = styled.p`
  position: absolute;
  width: 60px;
  height: 24px;
  left: calc(50% - 60px/2 + 1.5px);
  top: calc(50% - 24px/2 - 4px);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #F5F8F9;
`;

const Button2 = styled.a`
  display: flex;
  position: absolute;
  height: 54px;
  width: 172px;
  top: 44%;
  background: #FB7369;
  border-radius: 7px;
`;

const P2 = styled.p`
  position: absolute;
  display: block;
  width: 31px;
  height: 24px;
  left: calc(40% - 31px/2 + 2px);
  top: calc(50% - 24px/2 - 4px);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  color: #F5F8F9;
`;

const Button = () => {
  return (
    <React.Fragment>
      <Container>
        <Button1 href="#">
          <P1>Button1</P1>
        </Button1>
        <Button2>
          <P2>Button2</P2>
        </Button2>
      </Container>
    </React.Fragment>
  );
};

export default Button;
