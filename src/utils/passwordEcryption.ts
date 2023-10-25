import bcrypt from 'bcrypt';

export async function ecryptPassword(plaintextPassword: string){
      let encryptedPassword: string = await bcrypt.hash(plaintextPassword, 8);
      return encryptedPassword;

      // bcrypt.genSalt(8)  bcrypt.hash(password, salt)
}


export async function comparePassword(loginPassword: string, userPassword: string){
      return await bcrypt.compare(loginPassword, userPassword);
}