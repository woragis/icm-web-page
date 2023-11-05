import styled from "styled-components";

export const StyledLogin = styled.main`
  border: 1px red solid;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  align-items: center;
  * {
    /* border: 1px red solid; */
  }
  .login-form {
    height: 200px;
    width: 200px;
    margin: auto;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-rows: repeat(3, 1fr);

    .form-element {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      justify-content: center;
      align-items: center;
      label {
        text-align: center;
        display: block;
        font-size: 1rem;
        padding-top: 10px;
      }
      input {
        height: 20px;
        border-radius: 5px;
        outline: none;
      }
      button {
        height: 20px;
        width: 150px;
      }
    }
  }
`;
