import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CategoryListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 25px;
  height: 75vh;
  margin-bottom: 25px;
`;

const Button = styled.div`
  font-family: "Inter";
  width: 90%;
  margin: 0 auto;
  border: 1px solid #000;
  padding: 50px 0;
  text-align: center;
  border-radius: 20px;
  font-size: 25px;
  font-weight: 700;
  color: #000;
  cursor: pointer;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default function CategoryList(props: any) {
  return (
    <CategoryListStyled>
      {props.categories.map((title: string) => {
        return (
          <Button key={title}>
            <Link to={"/" + title}>{title}</Link>
          </Button>
        );
      })}
    </CategoryListStyled>
  );
}
