import { createGlobalStyle } from 'styled-components';
import { brand, fontText, grayDarker } from '../../../../constants';

export const ResetCSS = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    line-height: 1.3;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd,
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

body {
  background-color: ${brand};
  color: ${grayDarker};
  font-size: 16px;
  line-height: 1.7rem;
  text-rendering: optimizeSpeed;
  min-width: 320px;
}

  /* Set core body defaults */
  body, body * {
    box-sizing: border-box;
    font-family: ${fontText};
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  b {
    font-weight: 700;
  }

  p {
    margin-bottom: 20px;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Storybook patches */
  body {
    &.sb-show-main.sb-main-padded {
      padding: 0;

      &,
      & > div#storybook-root
      & > div#storybook-root > div#StorybookWrapper {
        height: 100vh;
        height: 100svh; // Safari
        overflow: hidden;
        width: 100vw;
        width: 100svw; // Safari
      }
      
      &:not(.no-padding) > div#storybook-root > div#StorybookWrapper {
        overflow-y: auto;
        padding: 1rem;
      }
    }
  }
`;
ResetCSS.displayName = 'ResetCSS';
