import { atom } from "recoil";
interface UserInfo {
  email: string;
  password: string;
  name: string;
}

export const UserInfoAtom = atom<UserInfo[]>({
  key: "UserInfoAtom",
  default: [],
});
