import styled, { keyframes } from "styled-components";
import { PUBLIC_URL } from "../../utils/setting";

const fadeout = keyframes` 
    from { opacity: 1; }
    to   { opacity: 0; }
`;

export const LoadingImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 110px;
`;

export const LoadingContainer = styled.div`
  position: fixed;
  overflow: hidden;

  width: 100vw;
  height: 100vh;
  z-index: 9999999999;
  background: ${({ theme }) => theme.colors.black1}};
  background: url(${PUBLIC_URL}"/img/galaxy3.jpg");
  background-size: contain;
  transition: all 0.2s linear;
  opacity: 0;
    -webkit-animation: ${fadeout} 4s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: ${fadeout} 4s; /* Firefox < 16 */
        -ms-animation: ${fadeout} 4s; /* Internet Explorer */
         -o-animation: ${fadeout} 4s; /* Opera < 12.1 */
            animation: ${fadeout} 4s;
`;

const rotateLoader = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
    filter: hue-rotate(0deg);
  }
  
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
    filter: hue-rotate(360deg);
  }
`;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: linear-gradient(45deg, transparent, transparent 40%, red);
  animation: ${rotateLoader} 2s linear infinite;

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    background-color: #000;
    border-radius: 50%;
    z-index: 100;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-image: linear-gradient(45deg, transparent, transparent 40%, red);
    border-radius: 50%;
    z-index: 1;
    filter: blur(30px);
  }
`;
