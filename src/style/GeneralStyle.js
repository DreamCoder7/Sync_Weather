import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --dark--mode: #030712;
        --dark--mode-2: #111827;
        
        
        --light--mode: #f9fafb;
        --light--mode-2: #f3f4f6;
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
        background-color: var(--dark--mode);
    }
`;
