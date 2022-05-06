import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import HannaPro from "./assets/fonts/BMHANNAPro.otf";
import HannaAir from "./assets/fonts/BMHANNAAir.otf";
import NanumSquareRound from "./assets/fonts/NanumSquareRoundR.ttf";
import NanumBarunGothic from "./assets/fonts/NanumBarunGothic.otf";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "HannaPro";
  src: url(${HannaPro}) format("opentype");
}
@font-face {
  font-family: "HannaAir";
  src: url(${HannaAir});
}
@font-face {
  font-family: "NanumSquareRound";
  src: url(${NanumSquareRound});
}
@font-face {
  font-family: "NanumBarunGothic";
  src: url(${NanumBarunGothic});
}
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    );
}

export default App;
