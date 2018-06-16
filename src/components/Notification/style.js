import styled, { css } from 'styled-components';



export const NotificationWrapper = styled.div`
  opacity: 0;
  position: absolute;

  ${props => props.status && css`

    opacity: 1;
    position: relative;
    transition: position 0ms, opacity 600ms 0ms;
  `}

`;
