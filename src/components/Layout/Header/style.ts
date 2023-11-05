import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  max-height: 60px;

  background-color: #fff;
  box-shadow: 1px 1px 10px blue;
  /* * {
    border: 1px solid red;
  } */

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5%;
`;

export const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-evenly;
    width: 400px;

    li {
      font-size: 1.2rem;
      font-weight: bold;
      font-family: Verdana, Geneva, Tahoma, sans-serif;

      a {
        color: black;
        text-decoration: none;
      }
    }
  }
`;
