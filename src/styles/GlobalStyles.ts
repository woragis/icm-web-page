import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    list-style-type: none;
}
main {
    min-height: 400px;
}
`;
