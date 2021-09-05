// import {
//   Button,
//   Col,
//   DatePicker,
//   Form,
//   Image,
//   InputNumber,
//   Row,
//   Select,
// } from "antd";
// import moment from "moment";
// import React, { useEffect, useState } from "react";
// import { ButtonPrimaryStyled } from "../../../components/Styles/Button";
// import { FormItemStyled } from "../../../components/Styles/Form";
// import { HeadingH1Styled } from "../../../components/Styles/Heading";
// import { manageCinemaService } from "../../../services/ManageCinemaService";
// import { manageBoxOfficeService } from "../../../services/ManagerBoxOfficeService";
// import {
//   AdminShowtimesContainer,
//   AdminShowtimeFormContainer,
//   AdminShowtimeImage,
//   AdminShowTimeFilmName,
// } from "./ShowtimesElement";
// export default function Showtime(props) {
//   const [form] = Form.useForm();
//   const [state, setState] = useState({
//     heThongRapChieu: [],
//     cumRapChieu: [],
//   });
//   const onFinish = async (values) => {
//     console.log("values", values);
//     try {
//       const result = await manageBoxOfficeService.postCreateSchedule(values);
//       alert(result.data.content);
//     } catch (error) {
//       console.log("error", error.response?.data);
//     }
//   };
//   useEffect(async () => {
//     try {
//       let result = await manageCinemaService.getListCinemas();
//       setState({
//         ...state,
//         heThongRapChieu: result.data,
//       });
//     } catch (error) {
//       console.log("error", error.response?.data);
//     }
//   }, []);
//   const handleChangeCinema = async (value) => {
//      // try {
//     //   let result = await manageCinemaService.getListCinemaBranches(value);
//     //   setState({
//     //     ...state,
//     //     cumRapChieu: result.data,
//     //   });
//     // } catch (error) {
//     //   console.log("error", error.response?.data);
//     // }
//   };
//   const handleChangeCumRap = (value) => {
//     formik.setFieldValue("maRap", value);
//   };
//   // const onOk = (values) => {
//     formik.setFieldValue(
//       "ngayChieuGioChieu",
//       moment(values).format("DD/MM/YYYY hh:mm:ss")
//     );
//   };
//   const onChangeDate = (values) => {
//     formik.setFieldValue(
//       "ngayChieuGioChieu",
//       moment(values).format("DD/MM/YYYY hh:mm:ss")
//     );
//   };
//   const onchangeInputNumber = (value) => {
//     formik.setFieldValue("giaVe", value);
//   };
//   const convertSelectHTR = () => {
//     // state.heThongRapChieu?.map((htr, index) => ({ label: htr.tenHeThongRap, value: htr.tenHeThongRap }))
//     return state.heThongRapChieu?.map((htr, index) => {
//       return { label: htr.tenHeThongRap, value: htr.maHeThongRap };
//     });
//   };
//   console.log(props.match.params);
//   let film = {};
//   if (localStorage.getItem("filmParams")) {
//     film = JSON.parse(localStorage.getItem("filmParams"));
//   }
//   return (
//     <AdminShowtimesContainer>
//       <HeadingH1Styled>ADD SHOWTIMES</HeadingH1Styled>
//       <AdminShowtimeFormContainer>
//         <Row justify="center">
//           <Col span={4}>
//             <AdminShowTimeFilmName>{film.tenPhim}</AdminShowTimeFilmName>
//             <AdminShowtimeImage
//               src={film.hinhAnh}
//               alt="..."
//               onError={(e) => {
//                 e.target.onError = null;
//                 e.target.src = `https://picsum.photos/300/300`;
//               }}
//             />
//           </Col>
//           <Col span={15}>
//             <Form name="basic" onFinish={onFinish}>
//               <FloatLabel label="Name" value={labelValue.tenPhim}>
//                 <FormItemStyled label="Cinema">
//                   <Select
//                     options={convertSelectHTR()}
//                     onChange={handleChangeHeThongRap}
//                     placeholder="Choose Cinema"
//                   />
//                 </FormItemStyled>
//               </FloatLabel>
//               <Form.Item label="Cinema Branch">
//                 <Select
//                   options={state.cumRapChieu?.map((cumRap, index) => ({
//                     label: cumRap.tenCumRap,
//                     value: cumRap.maCumRap,
//                   }))}
//                   onChange={handleChangeCumRap}
//                   placeholder="Choose Cinema Branch"
//                 />
//               </Form.Item>
//               <Form.Item label="Time and Date">
//                 <DatePicker
//                   format="DD/MM/YYYY hh:mm:ss"
//                   showTime
//                   onChange={onChangeDate}
//                   onOk={onOk}
//                 />
//               </Form.Item>
//               <Form.Item label="Price Ticket">
//                 <InputNumber onChange={onchangeInputNumber} />
//               </Form.Item>
//               <Row justify="end">
//                 <Form.Item>
//                   <ButtonPrimaryStyled type="primary" htmlType="submit" danger>
//                     CREATE
//                   </ButtonPrimaryStyled>
//                 </Form.Item>
//               </Row>
//             </Form>
//           </Col>
//         </Row>
//       </AdminShowtimeFormContainer>
//     </AdminShowtimesContainer>
//   );
// }
"use strict";