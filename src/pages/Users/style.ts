import styled from "styled-components";

export const StyledUsersComponent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledUsers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-area: auto;
`;

export const StyledUser = styled.li`
  border: 1px black solid;
  max-width: 30vw;
  margin: 5px;
  overflow: scroll;
  .password {
    color: #fff;
    &:hover {
      color: #000;
    }
  }
`;
