import { Body, Controller, Post, Res } from '@nestjs/common';
import { AppleService } from './apple.service';
import { Response } from 'express';
import { LoginDTO } from 'src/dto/apple.dto';

@Controller('apple')
export class AppleController {
  constructor(private readonly appleService: AppleService) { }

  // create 회원가입
  @Post('join')
  async Join(
    @Res() res: Response,
    @Body('uid') uid: string,
    @Body('upw') upw: string
  ) {
    const data = await this.appleService.createlogin({ uid, upw });
    res.json(data)
  }

  @Post('login')
  async findId(@Res() res: Response, @Body() login: LoginDTO) {
    const data = await this.appleService.findId(login);
    if (!data) {
      return res.status(409).send("계정없음")
    }

    // 토큰
    const dataValue = this.appleService.Tokenmake(data);
    const date = new Date();
    date.setTime(date.getTime() + (5 * 60 * 60 * 1000));
    res.cookie('token', dataValue, { httpOnly: true, expires: date, path: '/', domain: 'localhost' });
    res.json(data)
  }
}
