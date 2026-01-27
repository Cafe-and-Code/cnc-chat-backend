import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Service } from "typedi";
import { SECRET_KEY } from "@/configs/env";
import { User } from "@/models/user.model";
import { HttpException } from "@/exceptions/httpException";

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" },
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" },
  );
};
@Service()
export class AuthService {
  // [POST] /register
  public async register(userData: User) {
    const { username, email, password, confirmPassword, fullName, dateOfBirth, avatarImageUrl } =
      userData;
    const checkExistEmail = await User.findOne({
      where: { email },
    });
    // check validate
    if (
      !username ||
      !email ||
      !password ||
      !confirmPassword ||
      !fullName ||
      !dateOfBirth ||
      !avatarImageUrl
    ) {
      throw new HttpException(400, "All fields are mandatory!");
    }
    if (checkExistEmail)
      throw new HttpException(409, `This email ${userData.email} already exists`);

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashPassword,
    });
    return newUser;
  }

  // [POST] /login
}
