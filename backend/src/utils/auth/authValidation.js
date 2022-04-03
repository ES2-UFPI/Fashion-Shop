import jsonwebtoken from 'jsonwebtoken';
import crypto from 'crypto';

export function createToken(data) {
    return jsonwebtoken.sign(
        data,
        process.env.SECRETKEY,
        { algorithm: 'HS256', expiresIn: Number(process.env.TTL) });
}

export function validTokenAdmin(data) {
    return jsonwebtoken.verify(
        data.token,
        process.env.SECRETKEY,
        { algorithm: 'HS256' });
}

export function createHmac(pwd) {
    const hmac = crypto.createHmac('sha256', process.env.SECRETKEYPWD);
    const hmacPwd = hmac.update(pwd);
    const hmacPwdHex = hmacPwd.digest('hex');
    return hmacPwdHex;
}


