import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-header: hsl(240, 6%, 14%);
    --color-ice: hsl(176, 76%, 80%);
    --font-heading: 'Press Start 2P', cursive;
    --font-body: 'IBM Plex Mono', monospace;
    --font-light: hsl(240, 50%, 95%);
    --padding-page: 24px;
  }

  /* http://meyerweb.com/eric/tools/css/reset/
      v2.0 | 20110126
      License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-size: 100%;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
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
  input {
        text-align: center;
        font-family: var(--font-body);
        color: var(--font-light);
        background: var(--color-header);
        padding: 10px;
        margin: 10px;
        width: 260px;
  }
  select {
        text-align: center;
        font-family: var(--font-body);
        color: var(--font-light);
        background: var(--color-header);
        padding: 10px;
        margin: 10px;
        width: 284px;
  }


`;