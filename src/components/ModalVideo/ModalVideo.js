import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_STATUS } from "../../redux/actions/types/ModalVideo";
import ModalVideo from "react-modal-video";
import { Fragment } from "react";
export default function ModalVideoComponent() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.ModalVideoReducer);
  return (
    <Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={status.isOpen}
        videoId={status.videoId}
        onClose={() => {
          const action = {
            type: SET_STATUS,
            status: { ...status, isOpen: false },
          };
          dispatch(action);
        }}
      />
    </Fragment>
  );
}
