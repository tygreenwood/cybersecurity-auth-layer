const jwt = require("jsonwebtoken");

export const secretKey = "SuperSecret";

export function verifyToken(information: Object, token) {
    try {
        const data = jwt.verify(token, secretKey);
        Object.keys(information).forEach((key) => {
            if (!information[key] || !data[key] || information[key] != data[key]) {
                throw new Error();
            }
        });
        return true;
    } catch(e) {
        console.error(e);
        return false;
    }
}