import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import History from "../../components/History/History";
import { TitleTabsStyled } from "../../components/Styles/Title";
import {
  displayLoadingAction,
  hideLoadingAction,
} from "../../redux/actions/LoadingAction";
import { getAccountInfo } from "../../redux/actions/UserAction";
import { USER_LOGIN } from "../../utils/setting";
import Profile from "./Profile";
import {
  ProfileContainer,
  ProfileTabPane,
  ProfileTabs,
} from "./UserProfileElement";

export default function UserProfile() {
  const dispatch = useDispatch();
  const { userLogin, accountInfo } = useSelector((state) => state.UserReducer);

  useEffect(() => {
    (async () => {
      await dispatch(displayLoadingAction);
      await dispatch(
        getAccountInfo({
          taiKhoan: userLogin.taiKhoan,
        })
      );
      await dispatch(hideLoadingAction);
    })();
  }, []);
  if (!localStorage.getItem(USER_LOGIN)) {
    alert("Please Login or Register to Access This Page");
    return <Redirect to="/login" />;
  }
  return (
    <ProfileContainer>
      <ProfileTabs defaultActiveKey="1" centered>
        <ProfileTabPane
          tab={<TitleTabsStyled>Profile</TitleTabsStyled>}
          key="1"
        >
          <Profile accountInfo={accountInfo} />
        </ProfileTabPane>
        <ProfileTabPane
          tab={<TitleTabsStyled> Booking History</TitleTabsStyled>}
          key="2"
        >
          <History userLogin={userLogin} />
        </ProfileTabPane>
      </ProfileTabs>
    </ProfileContainer>
  );
}
