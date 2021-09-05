import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Rate } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { SET_MODAL_VISIBLE } from "../../redux/actions/types/CommentType";
import * as S from "./CommentElement";
export default function CommentRegister() {
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch({ type: SET_MODAL_VISIBLE });
  };

  return (
    <S.CommentRegisterContainer onClick={showModal}>
      <Col>
        <span>
          <Avatar icon={<UserOutlined />} size={36} /> What do you think?
        </span>
      </Col>
      <Col>
        <Rate allowHalf defaultValue={5} disabled />
      </Col>
    </S.CommentRegisterContainer>
  );
}
