import { Tabs } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import History from "../../components/History/History";
import { getAPIListBoxOffice } from "../../redux/actions/BoxOfficeAction";
import {
  displayLoadingAction,
  hideLoadingAction,
} from "../../redux/actions/LoadingAction";
import {
  CHANGE_TAB_ACTIVE,
  DISPLAY_SIDEBAR,
} from "../../redux/actions/types/BoxOfficeType";
import { USER_LOGIN } from "../../utils/setting";
import BookTicket from "./BookTicket/BookTicket";
import BookTicketSideBar from "./BookTicketSideBar/SideBar";
import * as S from "./CheckoutELements";
import FooterCheckout from "./FooterCheckout/FooterCheckout";

const { TabPane } = Tabs;

export default function Checkout(props) {
  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.UserReducer);

  const { arrListBoxOffices, arrSeatIsBooking, tabActive, displaySidebar } =
    useSelector((state) => state.BoxOfficeReducer);

  const { danhSachGhe, thongTinPhim } = arrListBoxOffices;

  useEffect(() => {
    let scheduleId = props.match.params.id;
    (async () => {
      await dispatch(displayLoadingAction);
      await dispatch(getAPIListBoxOffice(scheduleId));

      await dispatch(hideLoadingAction);
    })();
    return async () => {
      await dispatch({
        type: DISPLAY_SIDEBAR,
        displaySidebar: false,
      });
      await dispatch({
        type: CHANGE_TAB_ACTIVE,
        tabActive: "1",
      });
    };
  }, []);

  if (!localStorage.getItem(USER_LOGIN)) {
    alert("Please Login in or Register to Booking Movie!");
    return <Redirect to="/login" />;
  }

  return (
    <S.CheckOutContainer>
      <S.CheckOutBackgroundOverlay />
      <S.CheckOutBackground
        src={thongTinPhim?.hinhAnh}
        alt={thongTinPhim?.tenPhim}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://picsum.photos/300/300";
        }}
      />

      <S.CheckoutTabs
        activeKey={tabActive}
        onChange={(activeKey) => {
          dispatch({
            type: CHANGE_TAB_ACTIVE,
            tabActive: activeKey,
          });
        }}
        displaysidebar={displaySidebar.toString()}
      >
        <TabPane tab="" key="1">
          <BookTicket
            danhSachGhe={danhSachGhe}
            thongTinPhim={thongTinPhim}
            userLogin={userLogin}
            arrSeatIsBooking={arrSeatIsBooking}
            scheduleId={props.match.params.id}
            displaySidebar={displaySidebar}
          />
        </TabPane>
        <TabPane tab="" key="2" forceRender={true}>
          <History tabActive={tabActive} />
        </TabPane>
      </S.CheckoutTabs>
      <BookTicketSideBar
        thongTinPhim={thongTinPhim}
        danhSachGhe={thongTinPhim}
        userLogin={userLogin}
        arrSeatIsBooking={arrSeatIsBooking}
        scheduleId={props.match.params.id}
        displaySidebar={displaySidebar}
        tabActive={tabActive}
      />
      {tabActive === "1" ? (
        <FooterCheckout
          arrSeatIsBooking={arrSeatIsBooking}
          scheduleId={props.match.params.id}
          userLogin={userLogin}
          displaySidebar={displaySidebar}
          tabActive={tabActive}
        />
      ) : null}
    </S.CheckOutContainer>
  );
}
