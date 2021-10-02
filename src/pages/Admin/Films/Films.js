import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Row, Tooltip } from "antd";
import getVideoId from "get-video-id";
import React, { Fragment, useEffect } from "react";
import { GiFilmStrip } from "react-icons/gi";
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
  deleteAPIFilm,
  getAPIFilmAction,
} from "../../../redux/actions/FilmAction";
import { SET_STATUS } from "../../../redux/actions/types/ModalVideo";
import {
  AdminFilmImage,
  DeleteIcon,
  EditIcon,
  ShowTimeIcon,
} from "./FilmElement";
const { Search, TextArea } = Input;

export default function Films() {
  const { arrayFilm } = useSelector((state) => state.FilmReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAPIFilmAction());
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
      width: "8%",
      align: "center",

      // sortOrder:'descend'
    },
    {
      title: "Picture",
      dataIndex: "hinhAnh",
      align: "center",
      render: (text, film, index) => {
        return (
          <Fragment>
            <AdminFilmImage
              width={80}
              height={100}
              src={film.hinhAnh}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50`;
              }}
              alt="film image"
            />
          </Fragment>
        );
      },
      width: "15%",
    },
    {
      title: "Name",
      dataIndex: "tenPhim",

      sorter: (a, b) => {
        let filmNameA = a.tenPhim.toLowerCase().trim();
        let filmNameB = b.tenPhim.toLowerCase().trim();
        return filmNameA.localeCompare(filmNameB);
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Trailer",
      dataIndex: "trailer",
      render: (text, film, index) => {
        return (
          <Fragment>
            <ButtonPrimaryStyled
              type="primary"
              danger
              onClick={() => {
                const action = {
                  type: SET_STATUS,
                  status: {
                    isOpen: true,
                    videoId: getVideoId(film.trailer).id,
                  },
                };

                dispatch(action);
              }}
            >
              Play Trailer
            </ButtonPrimaryStyled>
          </Fragment>
        );
      },

      sortDirections: ["descend", "ascend"],
      width: "5%",
    },
    {
      title: "Rate",
      dataIndex: "danhGia",
      align: "center",
      sorter: (a, b) => a.danhGia - b.danhGia,
      sortDirections: ["descend", "ascend"],
      width: "5%",
    },
    {
      title: "Description",
      dataIndex: "moTa",

      sorter: (a, b) => {
        let DescA = a.moTa.toLowerCase().trim();
        let DescB = b.moTa.toLowerCase().trim();
        if (DescA > DescB) {
          return 1;
        }
        return -1;
      },
      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 100) + " ..."
              : film.moTa}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "35%",
    },
    {
      title: "Action",
      align: "center",
      dataIndex: "maPhim",
      render: (text, film) => {
        return (
          <Fragment>
            <NavLink key={1} to={`/admin/films/edit/${film.maPhim}`}>
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
                  text: `Do you want to delete User: ${film.tenPhim}`,
                  showConfirmButton: true,
                  showCancelButton: true,
                }).then(() => {
                  dispatch(deleteAPIFilm(film.maPhim));
                });
              }}
            >
              <Tooltip placement="top" title={"Delete"} color={"red"}>
                <DeleteIcon />
              </Tooltip>
            </span>

            <NavLink
              key={1}
              to={`/admin/films/showtime/${film.maPhim}/${film.tenPhim}`}
              onClick={() => {
                localStorage.setItem("filmParams", JSON.stringify(film));
              }}
            >
              <Tooltip placement="top" title={"Add ShowTime"} color={"red"}>
                <ShowTimeIcon />
              </Tooltip>
            </NavLink>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
  ];
  const data = arrayFilm;

  const onSearch = (value) => {
    dispatch(getAPIFilmAction(value));
  };

  function onChange(pagination, filters, sorter, extra) {
    // console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <Fragment>
      <HeadingH1Styled>MANAGEMENT FILMS</HeadingH1Styled>
      <Row justify="end" align="middle">
        <Col span={8}>
          <FloatLabel search="true">
            <SearchStyled
              className="mb-5"
              placeholder="input search text"
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
              history.push("/admin/films/addnew");
            }}
            style={{ marginLeft: "20px" }}
          >
            <GiFilmStrip />+
          </ButtonPrimaryStyled>
        </Col>
      </Row>
      <TableStyled
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"maPhim"}
      />
    </Fragment>
  );
}
