import { atom, selector } from "recoil";
interface UserInfo {
  email: string;
  name: string;
}

export const UserInfoAtom = atom<UserInfo[]>({
  key: "UserInfoAtom",
  default: [],
});

export const getUserIsLogin = selector({
  key: "userLoginState",
  get: () => {
    const accessToken = localStorage.getItem("");
    return !!accessToken;
  },
});
