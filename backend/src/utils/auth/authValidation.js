import jsonwebtoken from 'jsonwebtoken';

export function createToken(data) {
    return jsonwebtoken.sign(
        data,
        process.env.SECRETKEY,
        { algorithm: 'HS256', expiresIn: 10 });
}
export function validTokenAdmin(data) {
    return jsonwebtoken.verify(
        data.token,
        process.env.SECRETKEY,
        { algorithm: 'HS256' });
}

