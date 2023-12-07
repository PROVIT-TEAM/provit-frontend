import { atom } from "recoil";

const authAtom = atom({
  key: "auth",
  default: sessionStorage.getItem("jwt") ? true : false,
});

export { authAtom };
