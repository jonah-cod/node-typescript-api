import jwt, {Secret} from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

let secretString: Secret  = "ourlittlesecret"


export function generateToken(userInfo: string){
      let token = jwt.sign(userInfo, secretString, {expiresIn: "1h"});

      return token;
}

export function verifyToken(token: string){
      try {
           let user =  jwt.verify(token, secretString);
           return user;
      } catch (error) {
            console.log(error)
      }
      
}