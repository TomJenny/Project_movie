import { Row } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { PUBLIC_URL } from "../../../utils/setting";
import { useBreakpoints } from "../../Styles/ResponsiveBreakpoints";
import FilmShowTimes from "../FilmShowTimes/FilmShowTimes";
import * as S from "../TabMenuElement";

export default function TabsCinema(props) {
  const { cinema } = props;
  const responsive = useBreakpoints();

  return (
    <S.TabMenuHomeCinemaBranches tabPosition={responsive.isSm ? "top" : "left"}>
      {cinema.lstCumRap?.map((cinemaBranches, indexCinemaBranches) => {
        const CinemaBranchName = cinemaBranches.tenCumRap.split("-");
        const CinemaBranchImage = CinemaBranchName[0]
          .trim()
          .replace(/\s+/g, "");
        return (
          <S.TabPanelMenuCinema
            animated={{ TabPanel: false }}
            tab={
              <S.TabsCinema>
                <Row>
                  <S.TabsImgCinema
                    src={PUBLIC_URL + `/img/Cinema/${CinemaBranchImage}.jpg`}
                    alt={cinemaBranches.tenCumRap}
                  />
                  <S.TabsCinemaContentInfo>
                    <p>
                      <S.CinemaBranchNamePrefix
                        branchName={CinemaBranchName[0].trim()}
                      >
                        {CinemaBranchName[0]}
                      </S.CinemaBranchNamePrefix>
                      <span> - {CinemaBranchName[1]}</span>
                    </p>
                    <p>
                      {cinemaBranches.diaChi.length > 25
                        ? cinemaBranches.diaChi.slice(0, 25) + "..."
                        : cinemaBranches.diaChi}
                    </p>
                    <NavLink
                      to={`/detailcinema/${cinema.maHeThongRap}/${cinemaBranches.maCumRap}`}
                    >
                      Detail
                    </NavLink>
                  </S.TabsCinemaContentInfo>
                </Row>
              </S.TabsCinema>
            }
            key={indexCinemaBranches}
          >
            {cinemaBranches.danhSachPhim ? (
              <FilmShowTimes
                CinemaBranches={cinemaBranches}
                isHomePage="true"
              />
            ) : (
              <h2>Comming Soon </h2>
            )}
          </S.TabPanelMenuCinema>
        );
      })}
    </S.TabMenuHomeCinemaBranches>
  );
}
