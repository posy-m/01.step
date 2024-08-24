import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LoginDTO } from './dto/login.dto';
import { Login } from './model/login.model';

@Injectable()
export class ReactService {
  constructor(
    @InjectModel(Login) private readonly LoginModel: typeof Login
  ) { }

  // login CRUD - C 로직
  async createlogin(login: LoginDTO): Promise<Login> {
    try {
      const { name, uid, upw } = login;
      console.log("데이터베이스에 저장할 데이터:", login);
      return this.LoginModel.create({
        name, uid, upw
      });
    } catch (err) {
      console.error("데이터베이스 저장 중 오류 발생:", err);
    }
  }




}
