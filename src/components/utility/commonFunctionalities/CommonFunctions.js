export const generateSalt = () => {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_+";
    let salt = "";
    const array = new Uint8Array(100);
    crypto.getRandomValues(array);
    array.forEach((byte) => (salt += characters[byte % characters.length]));
    return salt;
};