import styled from "@emotion/styled"

import { colors } from "../../styles/vars"
import { mq } from "../../styles/utils"

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  .c {
    animation: 1s alternate infinite loadingMobile ease-in;
    width: 20px;
    height: 20px;
    background: ${colors.blue};
    margin-right: 20px;
  }
  .c2 {
    animation-delay: 200ms;
  }
  .c3 {
    animation-delay: 400ms;
  }
  .c4 {
    animation-delay: 600ms;
  }

  ${mq.laptop} {
    .c {
      animation: 1s alternate infinite loadingDesktop ease-in;
      width: ${props =>
        props.component ? "20px" : props.big ? "50px" : "10px"};
      height: ${props =>
        props.component ? "20px" : props.big ? "50px" : "10px"};
      background: ${colors.blue};
      margin-right: ${props =>
        props.component ? "20px" : props.big ? "50px" : "10px"};
    }
    .c2 {
      animation-delay: 200ms;
    }
    .c3 {
      animation-delay: 400ms;
    }
    .c4 {
      animation-delay: 600ms;
    }
  }

  @keyframes loadingDesktop {
    0% {
      transform: ${props =>
        props.component
          ? "translateY(20px)"
          : props.big
          ? "translateY(50px)"
          : "translateY(10px)"};
    }
    100% {
      transform: ${props =>
        props.component
          ? "translateY(-20px)"
          : props.big
          ? "translateY(-50px)"
          : "translateY(-10px)"};
    }
  }

  @keyframes loadingMobile {
    0% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(-20px);
    }
  }
`
