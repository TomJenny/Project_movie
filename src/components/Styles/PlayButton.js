import { CaretRightOutlined } from "@ant-design/icons";
import styled from "styled-components/macro";
//Play button overlay
export const PlayButtonStyled = styled(CaretRightOutlined)`
  background-color: rgba(0, 0, 0, 0.5);

  position: absolute;
  z-index: 9999999999;
  top: 50%;
  left: 50%;

  font-size: 25px;
  color: rgba(255, 255, 255, 0.8);

  padding: 15px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);

  transform: translate(-50%, -50%);
  opacity: 1;
  transition: all 0.5 ease-in-out;
`;
