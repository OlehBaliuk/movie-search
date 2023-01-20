import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

*,
*::before,
*::after {
    box-sizing: border-box;
}

ul,
ol {
    padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
    margin: 0;
    box-sizing: border-box;
}

ul,
ol {
    list-style: none;
}

a {
    text-decoration: none;
    color: black;
}

img {
    max-width: 100%;
    display: block;
}

article > * + * {
    margin-top: 1em;
}

input,
button,
textarea,
select {
    font: inherit;
}


body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
        'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
`;
