import {Account} from "./account"

export const processAccount = (val) => {
    return new Account(val * 2);
}

