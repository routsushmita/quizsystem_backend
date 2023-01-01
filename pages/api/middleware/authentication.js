//import { httpConstants , apiFailureMessage} from "../app/common/constants";
import JWTService from "../services/jwt";
//import Utility from "../app/utils";

const authenticate = async (req, res, next) => {

    const bearerToken = req.headers['authorization'];
    if (!bearerToken) 
        return "INVALID TOKEN"   
     const token = bearerToken.split(" ");
          if (token.length < 2) {
            return "INVALID TOKEN"
          }      
    let decoded = JWTService.decodeJWT(token[1])
    if (!decoded) {
        return "INVALID TOKEN"
    }
    // next();
}

module.exports = {
    authenticate
}