import jsonwebtoken from 'jsonwebtoken';
import crypto from 'crypto';

export function createToken(data) {
    return jsonwebtoken.sign(
        data,
        process.env.SECRETKEY,
        { expiresIn: Number(process.env.TTL) });
}

export function validToken(data) {
    try {
        const valid = jsonwebtoken.verify(
            data,
            process.env.SECRETKEY);
        return valid ? true : false;
    } catch {
        return false;
    }
}
export function validTokenAdmin(data) {
    try {
        const valid = jsonwebtoken.verify(
            data,
            process.env.SECRETKEY);
        return valid ? true : false;
    } catch {
        return false;
    }
}
export function createHmac(pwd) {
    const hmac = crypto.createHmac('sha256', process.env.SECRETKEYPWD);
    const hmacPwd = hmac.update(pwd);
    const hmacPwdHex = hmacPwd.digest('hex');
    return hmacPwdHex;
}


