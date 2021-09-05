import { between, down } from "styled-breakpoints";
import styled, { css } from "styled-components";

export const BookTicketContainer = styled.div`
  height: 100%;
  width: 70%;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ${down("sm")} {
    width: 100%;
  }
`;
export const BookTicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  ${down("md")} {
    flex-direction: column;
  }
`;
export const BookTicketCinemaImg = styled.img`
  display: block;
  margin-left: 10px;
  width: 50px;
  height: 50px;

  border-radius: 5px;
  filter: drop-shadow(0 0 3px ${({ theme }) => theme.colors.secondary});
`;

const seatIsBookedUser = css`
  background-color: rgba(255, 136, 0);
  box-shadow: 0 0 5px rgba(255, 136, 0), 0 0 25px rgba(255, 136, 0),
    0 0 50px rgba(255, 136, 0), 0 0 100px rgba(255, 136, 0);
  cursor: not-allowed;
  color: white;
  font-size: 1.1rem;
  &:hover {
    background-color: rgba(255, 136, 0);
    box-shadow: 0 0 5px rgba(255, 136, 0), 0 0 25px rgba(255, 136, 0),
      0 0 50px rgba(255, 136, 0), 0 0 100px rgba(255, 136, 0);
  }
  ${between("xs", "sm")} {
    box-shadow: 0 0 5px rgba(255, 136, 0);
  }
`;

const seatVip = css`
  border-bottom-left-radius: 20px !important;
  border-bottom-right-radius: 20px !important;
`;

const seatIsBooking = css`
  background-color: rgb(247, 8, 8);
  box-shadow: 0 0 5px rgb(247, 8, 8), 0 0 25px rgb(247, 8, 8),
    0 0 50px rgb(247, 8, 8);
  color: white;
  ${between("xs", "sm")} {
    box-shadow: 0 0 5px rgb(247, 8, 8);
  }
`;

const seatIsBooked = css`
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  color: white;
  font-size: 1.1rem;

  cursor: not-allowed;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    box-shadow: none;
  }
`;

export const Seats = styled.button`
  cursor: pointer;

  margin: 5px 10px;

  width: 35px;
  height: 35px;

  text-align: center;
  font-size: 12px;
  color: white;
  line-height: 32px;

  border-radius: 5px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(209, 213, 219, 0.3);

  &:hover {
    ${seatIsBooking}
  }
  ${(props) => (props.seatIsBookedUser ? `${seatIsBookedUser}` : null)};
  ${(props) => (props.seatIsVip ? `${seatVip}` : null)};
  ${(props) => (props.seatIsBooking ? `${seatIsBooking}` : null)};
  ${(props) => (props.seatIsBooked ? `${seatIsBooked}` : null)};

  ${down("sm")} {
    width: 30px;
    height: 30px;
  }
  ${down("xs")} {
    width: 20px;
    height: 20px;
  }
`;

export const BookTicketAddress = styled.h4`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
  margin: 0 0 0 10px;
`;
export const BookTicketName = styled.h5`
  color: white;
  font-size: 1rem;
  margin: 0 0 0 10px;

  text-transform: uppercase;
`;

export const BookTiketAlphabetText = styled.p`
  display: inline-block;
  text-align: center;

  color: white;
  width: 100%;
  height: 100%;
  line-height: 34px;
  margin: 0;
`;
export const BookTicketScreen = styled.div`
  position: relative;
  margin-top: 20px;
  width: 700px;

  ${down("sm")} {
    min-width: 100% !important;
  }
`;
export const BookTicketBorderScreen = styled.div`
  position: absolute;

  height: 200px;
  width: 110%;

  left: 50%;
  transform: translateX(-50%);

  border: solid 5px transparent;
  border-color: red transparent transparent transparent;
  border-radius: 50% 50% 0 0;
`;
export const BookTicketBackgroundScreen = styled.div`
  position: absolute;

  height: 200px;

  width: 110%;

  left: 50%;
  transform: translateX(-50%);

  border: solid 20px transparent;
  border-color: rgba(247, 154, 154, 0.2) transparent transparent transparent;
  border-radius: 100% 100% 0 0;
  & p {
    text-align: center;
    margin-top: 10px;
    letter-spacing: 8px;
  }
  ${down("sm")} {
    min-width: 100% !important;
    padding: 0 10px;
    & p {
      font-size: 13px;
    }
  }
`;

export const BookTicketContainerSeats = styled.div`
  padding-top: 100px;
  height: auto;
  max-height: auto;
  width: 100%;
  min-width: 550px;

  ${down("sm")} {
    padding-top: 70px;
    min-width: 100% !important;
  }
`;

export const BookTicketDescribleSeats = styled.div`
  width: 700px;
  min-width: 550px;
  padding-top: 30px;
  text-align: center;
  ${down("sm")} {
    min-width: 100% !important;
    & span {
      font-size: 12px;
    }
  }
  ${down("xs")} {
    padding-top: 20px;
  }
`;

export const BookTicketCountDown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-right: 80px;
  & p {
    margin: 0;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  width: 100%;
  ${down("sm")} {
    justify-content: middle !important;

    margin: 10px 0 0 0;
  }
`;

export const BookTicketCountDownMin = styled.span`
  display: inline-block;
  margin: 2px;

  width: 35px;
  height: 35px;

  text-align: center;
  font-size: 18px;
  color: white;
  line-height: 35px;

  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border: 1px solid rgba(209, 213, 219, 0.3);
`;

export const BookTicketCountDownSec = styled(BookTicketCountDownMin)``;
