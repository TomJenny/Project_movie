import styled from "styled-components/macro";

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  filter: drop-shadow(0 0 2px ${({ theme }) => theme.colors.secondary});
`;

export const AdminUserForm = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.black1};
  padding: 30px 10px 0;
  border-radius: 5px;
`;
export const AdminUserInfo = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.black1};

  padding: 100px 20px 0;
  border-radius: 5px 0 0 0;
  height: 380px;

  & h1 {
    text-align: center;
    margin-top: 100px;
    color: white !important;
  }
`;

export const AdminUserAvatar = styled.img`
  display: block;
  position: absolute;

  top: 20px;
  left: 50%;
  transform: translate(-50%);
  width: 150px;
  height: 150px;
  filter: drop-shadow(0 0 1px white) contrast(1.2);
`;

export const AdminUserAvatar2 = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
  overflow: hidden;

  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    display: block;
    font-size: 5.5rem;
  }
  background-color: ${({ theme }) => theme.colors.white4};
`;
