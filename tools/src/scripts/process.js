import Account from "./account";

export const processAccount = (name, balance) => {
    return new Account(name, balance * 20);
}