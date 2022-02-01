import { css } from "styled-components";


// pass the functionality that you want to run on mobile device
export const Mobile = (props) => {
    return css`
    @media only screen and (max-width: 400px) {
      ${props}
    }
  `;
}