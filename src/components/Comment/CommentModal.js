import { Col, Form, Modal, Rate, Row } from "antd";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAPIAddCommentAction } from "../../redux/actions/CommentAction";
import { SET_MODAL_INVISIBLE } from "../../redux/actions/types/CommentType";
import { ButtonPrimaryStyled } from "../Styles/Button";
import { TextAreaStyled } from "../Styles/Input";
import { CommentObj } from "../_core/models/Comment";
import {
  ButtonComment,
  CommentRateNumber,
  FormComment,
} from "./CommentElement";

export default function CommentModal(props) {
  const { id } = props;
  const dispatch = useDispatch();
  const { isModalVisible } = useSelector((state) => state.CommentReducer);
  const { userLogin } = useSelector((state) => state.UserReducer);
  const [rateValues, setRateValues] = useState(5);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleOk = () => {
    form.resetFields(["text", "rate"]);
    dispatch({ type: SET_MODAL_INVISIBLE });
  };

  const handleCancel = () => {
    form.resetFields(["text", "rate"]);
    dispatch({ type: SET_MODAL_INVISIBLE });
  };
  const onFinish = async (values) => {
    const comment = new CommentObj();
    comment.userId = userLogin.hoTen;
    comment.comments = values.text;
    comment.rate = values.rate;
    comment.generalId = id;
    await setLoading(true);
    await dispatch(postAPIAddCommentAction(comment));
    await setLoading(false);
    await handleOk();
  };

  return (
    <Fragment>
      {userLogin.taiKhoan ? (
        <Modal
          zIndex={99999999999}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer=""
        >
          <Row justify="center">
            <FormComment
              form={form}
              onFinish={onFinish}
              initialValues={{
                rate: rateValues,
                text: "",
              }}
            >
              <Col span={24}>
                <Row justify="center">
                  <Form.Item
                    name="rate"
                    rules={[
                      {
                        type: "number",
                        min: 0.5,
                        max: 5,
                        message: "Please Choose Rate",
                      },
                    ]}
                  >
                    <Rate
                      allowHalf
                      onChange={(value) => {
                        setRateValues(value);
                      }}
                    />
                  </Form.Item>
                  <CommentRateNumber> {rateValues * 2}/10</CommentRateNumber>
                </Row>
                <Form.Item
                  name="text"
                  rules={[
                    {
                      required: true,
                      message: "Please input your comment!",
                      whitespace: true,
                    },
                  ]}
                >
                  <TextAreaStyled
                    rows={4}
                    iscomment="true"
                    placeholder="Type comment here"
                  />
                </Form.Item>
                <ButtonComment
                  danger
                  type="primary"
                  loading={loading}
                  htmlType="submit"
                >
                  ADD COMMENT
                </ButtonComment>
              </Col>
            </FormComment>
          </Row>
        </Modal>
      ) : (
        <Modal
          zIndex={99999999999}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer=""
          width={250}
        >
          <Col>
            <Row justify="center">
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                You have to Login
              </p>
            </Row>
            <Row justify="center">
              <ButtonPrimaryStyled type="primary" danger href="/login">
                Login
              </ButtonPrimaryStyled>
            </Row>
          </Col>
        </Modal>
      )}
    </Fragment>
  );
}
