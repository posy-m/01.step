import { Body, Controller, Post, Res } from '@nestjs/common';
import { LoginDTO } from 'src/dto/login.dto';
import { LoginService } from './login.service';
import { Response } from 'express';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  // login C 로직
  @Post('join')
  async Join(
    @Res() res: Response,
    @Body('uid') uid: string,
    @Body('upw') upw: string
  ) {
    const data = await this.loginService.createlogin({ uid, upw });
    res.json(data)
  }

  @Post('login')
  async findId(@Res() res: Response, @Body() login: LoginDTO) {
    const data = await this.loginService.findId(login);
    if (!data) {
      return res.status(409).send("계정없음")
    }

    // 토큰
    const dataValue = this.loginService.Tokenmake(data);
    const date = new Date();
    date.setTime(date.getTime() + (5 * 60 * 60 * 1000));
    res.cookie('token', dataValue, { httpOnly: true, expires: date, path: '/', domain: 'localhost' });
    res.json(data)
  }
}
