import styled, { css } from "styled-components";
import { GlassEffect } from "../Styles/mixin";

const scrollBar = css`
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
`;
export const HistoryContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  max-height: 80vh;

  ${scrollBar}
`;
export const HistoryCard = styled.div`
  width: 100%;
  height: 200px;
  padding: 5px;

  ${GlassEffect({ trans: "0.3", blur: "4px" })}
  color: white;
`;
export const HistoryCardBody = styled.div`
  height: 190px;
  overflow-y: auto;

  ${scrollBar}
`;
export const HistoryHeader = styled.h2`
  color: white;
`;
export const HistoryTitle = styled.span`
  font-weight: bold;
  color: white;
`;

export const HistoryImage = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 90%;
  height: 90%;
  margin-top: 5px;
  border-radius: 5px;
`;

export const HistoryLoadingTitle = styled.h1`
  position: absolute;
  width: 100%;
  top: 0;

  color: white;
  text-align: center;
`;
