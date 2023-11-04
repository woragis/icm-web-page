import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100vw;
  min-height: 100px;

  background-color: #111;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  /* text-align: center; */
  color: #fff;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.8rem;

  position: relative;
  small {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
  }
  .container {
    display: flex;
    /* grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 100px; */
    justify-content: space-between;
    height: inherit;
    width: inherit;
    align-items: center;
    padding: 5%;
  }
  a {
    color: #fff;
    text-decoration: none;
  }

  #about {
    max-width: 300px;
    font-size: 0.8rem;
    text-align: left;
    & > .icm {
      color: rgba(255, 150, 150, 1);
    }
    & > .cidade-verde {
      color: rgba(200, 255, 200, 1);
    }
  }
`;

export const StyledSocialMedia = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    text-align: left;
    padding: 2px;
    width: 90px;
  }
`;
