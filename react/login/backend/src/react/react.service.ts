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
      return this.LoginModel.create({
        name, uid, upw
      });
    } catch (err) {
      console.error(err);
    }
  }

  // 로그인
  async findId(login: LoginDTO): Promise<Login> {
    const { name, uid, upw } = login;
    return await this.LoginModel.findOne({ where: { uid } })
  }




}
