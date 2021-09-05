import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Collapse, Divider, Rate, Row, Tooltip } from "antd";
import moment from "moment";
import React, { createElement, useState } from "react";
import { Container } from "../Styles/GlobalStyles";
import * as S from "./CommentElement";
import CommentModal from "./CommentModal";
import CommentRegister from "./CommentRegister";
export default function Comment(props) {
  const { arrayCommentById, id } = props;
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const [limitPages, setLimitPages] = useState(1);
  const maxPages = Math.ceil(arrayCommentById?.length / 5);
  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };
  const renderCommentHeader = (comment) => {
    return (
      <S.CommentHeaderContainer>
        <Col>
          <Row align="middle">
            <Col>
              <Avatar size={32} src={comment?.avatar} />
            </Col>
            <Col>
              <Row>
                <S.CommentHeaderUserName>
                  {comment?.userId}
                </S.CommentHeaderUserName>
              </Row>
              <Row>
                <Tooltip
                  title={moment(comment?.createdAt).format(
                    "YYYY-MM-DD HH:mm:ss"
                  )}
                >
                  <S.CommentHeaderTime>
                    {moment(comment?.createdAt).fromNow()}
                  </S.CommentHeaderTime>
                </Tooltip>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <S.CommentRate>{comment?.rate * 2}</S.CommentRate>

          <Rate allowHalf defaultValue={comment?.rate} disabled />
        </Col>
      </S.CommentHeaderContainer>
    );
  };

  const renderFooterComment = () => {
    return (
      <S.FooterCommentContainer>
        <Tooltip title="Like">
          <span onClick={like}>
            {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
            <span className="comment-action">{likes}</span>
          </span>
        </Tooltip>

        <Tooltip title="Dislike">
          <span onClick={dislike}>
            {createElement(
              action === "disliked" ? DislikeFilled : DislikeOutlined
            )}
            <span>{dislikes}</span>
          </span>
        </Tooltip>

        <span>Reply to</span>
      </S.FooterCommentContainer>
    );
  };
  return (
    <Container>
      <S.CommentContainer>
        <CommentRegister />
        <Collapse
          defaultActiveKey={[...Array(limitPages * 5 + 1).keys()]}
          ghost
        >
          {arrayCommentById?.slice(0, limitPages * 5).map((comment, index) => {
            return (
              <S.CommentItemContainer
                showArrow={false}
                header={renderCommentHeader(comment)}
                key={index + 1}
              >
                {comment.comments}
                <Divider />
                {renderFooterComment()}
              </S.CommentItemContainer>
            );
          })}
        </Collapse>
      </S.CommentContainer>
      <Row justify="center">
        {maxPages >= 2 ? (
          <S.CommentButton
            type="primary"
            danger
            onClick={() => {
              setLimitPages(
                limitPages < maxPages ? limitPages + 1 : limitPages
              );
            }}
          >
            More
          </S.CommentButton>
        ) : null}
        {limitPages >= 2 ? (
          <S.CommentButton
            type="primary"
            danger
            onClick={() => {
              setLimitPages(limitPages - 1);
            }}
          >
            Less
          </S.CommentButton>
        ) : null}
      </Row>
      <CommentModal id={id} />
    </Container>
  );
}
