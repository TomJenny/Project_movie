import { CalendarFilled, DeleteFilled, EditFilled } from "@ant-design/icons";
import { Image } from "antd";
import styled, { css } from "styled-components/macro";
import { ButtonPrimaryStyled } from "../../../components/Styles/Button";

export const AdminFilmEditContainer = styled.div`
  position: relative;
  height: 480px;
  padding: 30px 20px 0;
  background: ${({ theme }) => theme.colors.black1};

  & label {
    color: white !important;
  }
`;

export const AdminFilmImage = styled(Image)`
  border-radius: 5px;
  filter: drop-shadow(0 0 1px ${({ theme }) => theme.colors.secondary});
`;

const ActionIcon = css`
  font-size: 25px;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.white2};
  filter: drop-shadow(0 0 2px ${({ theme }) => theme.colors.secondary});

  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 3px ${({ theme }) => theme.colors.white1});

    color: ${({ theme }) => theme.colors.white1};
  }
`;
export const EditIcon = styled(EditFilled)`
  ${ActionIcon}
`;
export const DeleteIcon = styled(DeleteFilled)`
  ${ActionIcon}
`;
export const ShowTimeIcon = styled(CalendarFilled)`
  ${ActionIcon}
`;

export const AdminFilmButtonSubmit = styled(ButtonPrimaryStyled)`
  margin: 20px;
  position: absolute;
  bottom: 18px;
  right: 138px;
`;
