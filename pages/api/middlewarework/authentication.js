import JWTService from "../services/jwt";

const authenticate = async (req, res, next) => {
  console.log(req);
  const bearerToken = req.headers["authorization"];
  if (!bearerToken) return "INVALID TOKEN";
  const token = bearerToken.split(" ");
  if (token.length < 2) {
    return "INVALID TOKEN";
  }
  let decoded = JWTService.decodeJWT(token[1]);
  
  if (!decoded) {
    return "INVALID TOKEN";
  }
  // next();
};

module.exports = {
  authenticate,
};
