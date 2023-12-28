import { atom } from "recoil";
import { User, Auth } from "../types";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  storage: sessionStorage,
});

const authAtom = atom<Auth>({
  key: "auth",
  default: { auth: false },
  effects_UNSTABLE: [persistAtom],
});

const userAtom = atom<User>({
  key: "user",
  default: { email: "" },
});

export { authAtom, userAtom };
