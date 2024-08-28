import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { LoginDTO } from 'src/dto/login.dto';
import { Login } from 'src/model/login.model';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(Login) private readonly LoginModel: typeof Login,
    private readonly jwtService: JwtService,
  ) { }

  // login CRUD - C 로직
  async createlogin(login: LoginDTO) {
    try {
      const { uid, upw } = login;
      return await this.LoginModel.create({
        uid, upw
      });
    } catch (err) {
      console.error(err);
      return null
    }
  }

  // 로그인
  async findId(login: LoginDTO) {
    const { uid, upw } = login
    const data = await this.LoginModel.findOne({ where: { uid, upw } })
    if (!data)
      return null
    return data
  }

  // 토큰
  async Tokenmake(token: any) {
    console.log(token.dataValues);
    const { uid, upw } = token.dataValues;
    const payload = { uid, upw }
    return this.jwtService.sign(payload);

    // return await this.LoginModel.findOne({ where: { uid, upw } })
  }

}
