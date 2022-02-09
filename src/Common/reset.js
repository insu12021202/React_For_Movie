import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        box-sizing: border-box;
        text-decoration: none;
        color: #000000;
        }
    *::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
        }
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
          Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        background-color: #eff3f7;
        height: 100%;
    }
`;

export default GlobalStyle;
