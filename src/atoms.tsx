import { atom } from "recoil";

export const loginState = atom({
    key: "isLoggedIn",
    default: false,
});
