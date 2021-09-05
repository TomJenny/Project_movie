import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GiFilmStrip } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoTicketOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getAPIListCinemaShowTimeAction } from "../../../redux/actions/CinemaAction";
import { getAPIFilmAction } from "../../../redux/actions/FilmAction";
import {
  displayLoadingAction,
  hideLoadingAction,
} from "../../../redux/actions/LoadingAction";
import { SET_TOTAL_CUSTOMER } from "../../../redux/actions/types/UserType";
import { getListUsers } from "../../../redux/actions/UserAction";
import BarChart from "./Chart/BarChart";
import DoughnutChart from "./Chart/DoughnutChart";
import * as S from "./DashboardElement";

export default function Dashboard() {
  // const [percent, setPercent] = useState({});
  const dispatch = useDispatch();
  const { arrayFilm } = useSelector((state) => state.FilmReducer);
  const { totalCustomers } = useSelector((state) => state.UserReducer);

  useEffect(() => {
    (async () => {
      const action = {
        type: SET_TOTAL_CUSTOMER,
      };
      await dispatch(displayLoadingAction);

      await dispatch(getAPIFilmAction());
      await dispatch(getListUsers());
      await dispatch(getAPIListCinemaShowTimeAction());

      await dispatch(action);

      await dispatch(hideLoadingAction);
    })();
  }, []);

  return (
    <S.DashboardContainer>
      <Row gutter={[16, 16]}>
        <Col span={24 / 4}>
          <S.DashBoardInfoRevenue>
            <S.DashBoardIcon revenue="true">
              <RiMoneyDollarCircleLine />
            </S.DashBoardIcon>
            <S.DashBoardTitle>Revenue</S.DashBoardTitle>
            <S.DashBoardContent>$209.4K USD</S.DashBoardContent>
            <S.DashboardDivider />
            <S.DashboardProgress
              revenue="true"
              percent={50}
              status="active"
              showInfo={false}
            />
            <S.DashboardStatus>
              <span>
                <IoIosArrowUp />
                50%
              </span>
              /Last Week
            </S.DashboardStatus>
          </S.DashBoardInfoRevenue>
        </Col>
        <Col span={24 / 4}>
          <S.DashBoardInfoTicket>
            <S.DashBoardIcon ticket="true">
              <IoTicketOutline />
            </S.DashBoardIcon>
            <S.DashBoardTitle>Ticket</S.DashBoardTitle>
            <S.DashBoardContent>203 pcs</S.DashBoardContent>
            <S.DashboardDivider />
            <S.DashboardProgress
              ticket="true"
              percent={83}
              status="active"
              showInfo={false}
            />
            <S.DashboardStatus>
              <span>
                <IoIosArrowUp />
                83%
              </span>
              /Last Week
            </S.DashboardStatus>
          </S.DashBoardInfoTicket>
        </Col>
        <Col span={24 / 4}>
          <S.DashBoardInfoMovie>
            <S.DashBoardIcon movie="true">
              <GiFilmStrip />
            </S.DashBoardIcon>
            <S.DashBoardTitle>Movie</S.DashBoardTitle>
            <S.DashBoardContent>{arrayFilm.length}</S.DashBoardContent>
            <S.DashboardDivider />
            <S.DashboardProgress
              movie="true"
              percent={87}
              status="active"
              showInfo={false}
            />
            <S.DashboardStatus>
              <span>
                <IoIosArrowDown />
                87%
              </span>
              /Last Month
            </S.DashboardStatus>
          </S.DashBoardInfoMovie>
        </Col>
        <Col span={24 / 4}>
          <S.DashBoardInfoAccount>
            <S.DashBoardIcon account="true">
              <AiOutlineUsergroupAdd />
            </S.DashBoardIcon>
            <S.DashBoardTitle>Customer</S.DashBoardTitle>
            <S.DashBoardContent>{totalCustomers}</S.DashBoardContent>
            <S.DashboardDivider />
            <S.DashboardProgress
              account="true"
              percent={67}
              status="active"
              showInfo={false}
            />
            <S.DashboardStatus>
              <span>
                <IoIosArrowDown />
                67%
              </span>
              /Last Month
            </S.DashboardStatus>
          </S.DashBoardInfoAccount>
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <S.DashBoardChartContainer barchart="true">
            <S.DashboardHeaderChart>Ticket</S.DashboardHeaderChart>
            <BarChart />
          </S.DashBoardChartContainer>
        </Col>
        <Col span={7} push={1}>
          <S.DashBoardChartContainer>
            <S.DashboardHeaderChart>Revenue</S.DashboardHeaderChart>
            <DoughnutChart />
          </S.DashBoardChartContainer>
        </Col>
      </Row>
    </S.DashboardContainer>
  );
}
