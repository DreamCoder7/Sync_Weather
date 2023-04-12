import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {

        --color-primary: #6d28d9;

        --dark--mode: #030712;
        --dark--mode-2: #111827;
        --dark--mode-3: #1f2937;
        
        
        --light--mode: #f9fafb;
        --light--mode-2: #f3f4f6;
        --light--mode-3: #e5e7eb;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) =>
          props.theme === "light" ? "var(--light--mode)" : "var(--dark--mode)"};
          transition: background-color .4s;
    }
`;
