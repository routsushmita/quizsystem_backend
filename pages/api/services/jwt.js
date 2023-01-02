import jwt from "jsonwebtoken";

export default class XdcService {
  static generateSessionToken(data) {
    return jwt.sign(data, process.env.JWT_TOKEN_KEY, {
      algorithm: "HS256",
      expiresIn:
        typeof process.env.JWT_EXPIRY_SECONDS === "string"
          ? parseInt(process.env.JWT_EXPIRY_SECONDS)
          : process.env.JWT_EXPIRY_SECONDS,
    });
  }
  static decodeJWT(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY);

      if (decoded) return decoded;
    } catch (err) {
      // err
      console.log("error", err);
      return false;
    }
  }
}
