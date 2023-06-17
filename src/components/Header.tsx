import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyled = styled.div`
  background: #070915;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 152px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  color: #f82b2b;
  padding-top: 20px;

  font-family: "Inter";
  text-decoration: none;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 20px;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Title = styled.div`
  margin-top: 26px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default function Header(props: any) {
  return (
    <>
      <HeaderStyled>
        <Link to={"/"}>
          <Logo>Logo</Logo>
        </Link>
        <Title>{props.title}</Title>
      </HeaderStyled>
    </>
  );
}
