import { Request, Response } from "express";
import { loginUser, signUpUser } from "../Types/interface";

import { dbConnectService } from "../services/dbConnectService";
import { comparePassword, ecryptPassword } from "../utils/passwordEcryption";
import { generateToken, verifyToken } from "../utils/tokenUtility";

export async function signUPController(req: Request, res: Response) {
  let user: signUpUser = req.body;
  let { full_name, email, password } = user;

  let connectionPool = await dbConnectService();

  connectionPool?.connect(async (err) => {
    if (err) {
      console.log(err);
    } else {
      let encryptedPassword = await ecryptPassword(password);
      let queryString: string = `INSERT INTO users VALUES('${full_name}', '${encryptedPassword}', '${email}')`;
      let result = await connectionPool?.request().query(queryString);
      console.log(result);
      let success = result?.rowsAffected?.length;
      if (success || 0 > 0) {
        res.json({
          success: true,
          message: "user saved",
        });
      }
    }
  });
}

export async function loginController(req: Request, res: Response) {
  let user: loginUser = req.body;

  let connectionPool = await dbConnectService();

  connectionPool?.connect(async (err) => {
    if (err) {
      console.log(err);
    } else {
      let queryString = `SELECT * FROM users WHERE email='${user.email}'`;

      let results = await connectionPool?.request().query(queryString);
      let savedUser = results?.recordset[0];

      if (savedUser !== undefined) {
        let truePassword = await comparePassword(
          user.password,
          savedUser.password
        );
        let token = generateToken(savedUser)
        truePassword
          ? res.json({ success: true, message: "logged in successfully", token })
          : res.json({ success: false, message: "wrong credentials" });
      } else {
        res.json({
          succes: false,
          message: "user not found",
        });
      }
    }
  });
}


export function protectedController(req: Request, res: Response){

  let token: string = req.headers.authorization as string;
  let real_token = token?.split(" ")[1]
  

  let user = verifyToken(real_token)
  
  if(user !== undefined){
    res.send({success: true,
      user,
      message:"You are accessing protected route"})
    
  }else{
    res.json({
      success: false,
      message:"You can't access this protected route"})
  }
}