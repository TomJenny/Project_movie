import { SearchOutlined, UserAddOutlined } from "@ant-design/icons";
import { Col, Row, Tooltip } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { history } from "../../../App";
import { ButtonPrimaryStyled } from "../../../components/Styles/Button";
import FloatLabel from "../../../components/Styles/FloatLabel/FloatLabel";
import { HeadingH1Styled } from "../../../components/Styles/Heading";
import { SearchStyled } from "../../../components/Styles/Input";
import { TableStyled } from "../../../components/Styles/Table";
import {
  deleteAPIUser,
  getAPIFindUserById,
  getListUsers,
} from "../../../redux/actions/UserAction";
import { PUBLIC_URL } from "../../../utils/setting";
import { DeleteIcon, EditIcon } from "../Films/FilmElement";
import { UserAvatar } from "./UserElement";

export default function Users() {
  const { arrayUsers } = useSelector((state) => state.UserReducer);
  let [filteredInfo, setFilteredInfo] = useState(null);
  filteredInfo = filteredInfo || {};
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListUsers());
  }, []);

  const columns = [
    {
      title: "SN",
      dataIndex: "taiKhoan",
      render: (text, object, index) => {
        return index + 1;
      },
      width: "5%",
      align: "center",
    },
    {
      title: "Account",
      dataIndex: "taiKhoan",
      sorter: (a, b) => {
        let AccountA = a.taiKhoan.toLowerCase().trim();
        let AccountB = b.taiKhoan.toLowerCase().trim();
        return AccountA.localeCompare(AccountB);
      },
      sortDirections: ["descend", "ascend"],

      width: "20%",
    },
    {
      title: "Avatar",
      dataIndex: "taiKhoan",
      render: (text, object, index) => {
        return (
          <Fragment>
            <UserAvatar src={PUBLIC_URL + "/img/Charactor.svg"} alt="avatar" />
          </Fragment>
        );
      },
      width: "5%",
      align: "center",
    },
    {
      title: "Full Name",
      dataIndex: "hoTen",
      sorter: (a, b) => {
        let FullNameA = a.hoTen.toLowerCase().trim();
        let FullNameB = b.hoTen.toLowerCase().trim();
        return FullNameA.localeCompare(FullNameB);
      },
      sortDirections: ["descend", "ascend"],
      width: "20%",
    },

    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => {
        let EmailA = a.email.toLowerCase().trim();
        let EmailB = b.email.toLowerCase().trim();
        return EmailA.localeCompare(EmailB);
      },
      sortDirections: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "TYPE",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (text, index) => {
        return (
          <Fragment>
            <p>{text === "KhachHang" ? "Khách Hàng" : "Quản Trị"}</p>
          </Fragment>
        );
      },
      filters: [
        { text: "Quản Trị", value: "QuanTri" },
        { text: "Khách Hàng", value: "KhachHang" },
      ],
      filteredValue: filteredInfo.maLoaiNguoiDung || null,
      onFilter: (value, record) => record.maLoaiNguoiDung.includes(value),
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => {
        let typeA = a.maLoaiNguoiDung.toLowerCase().trim();
        let typeB = b.maLoaiNguoiDung.toLowerCase().trim();
        return typeA.localeCompare(typeB);
      },
      width: "15%",
    },
    {
      title: "Action",
      align: "center",
      dataIndex: "taiKhoan",
      render: (text, account) => {
        return (
          <Fragment>
            <NavLink key={1} to={`/admin/users/edit/${account.taiKhoan}`}>
              <Tooltip placement="top" title={"Edit"} color={"red"}>
                <EditIcon />
              </Tooltip>
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              onClick={() => {
                Swal.fire({
                  position: "center",
                  icon: "warning",
                  title: "Delete User Warning",
                  text: `Do you want to delete User: ${account.taiKhoan} `,
                  showConfirmButton: true,
                  showCancelButton: true,
                }).then(() => {
                  dispatch(deleteAPIUser(account.taiKhoan));
                });
              }}
            >
              <Tooltip placement="top" title={"Delete"} color={"red"}>
                <DeleteIcon />
              </Tooltip>
            </span>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
  ];
  const data = arrayUsers;

  const onSearch = (value) => {
    console.log(value);
    if (value) {
      dispatch(getAPIFindUserById(value));
    } else {
      dispatch(getListUsers());
    }
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
    setFilteredInfo(filters);
  }

  return (
    <Fragment>
      <HeadingH1Styled>MANAGEMENT USER</HeadingH1Styled>
      <Row justify="end" align="bottom">
        <Col span={6}>
          <FloatLabel search="true">
            <SearchStyled
              placeholder="input name of account"
              className="mb-5"
              enterButton={<SearchOutlined />}
              size="large"
              onSearch={onSearch}
            />
          </FloatLabel>
        </Col>
        <Col>
          <ButtonPrimaryStyled
            type="primary"
            danger
            onClick={() => {
              history.push("/admin/users/addnew");
            }}
            style={{ marginLeft: "20px" }}
          >
            <UserAddOutlined />
          </ButtonPrimaryStyled>
        </Col>
      </Row>
      <TableStyled
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"taiKhoan"}
      />
    </Fragment>
  );
}
