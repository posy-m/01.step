import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { ReactService } from './react.service';

@Controller('react')
export class ReactController {
  constructor(private readonly reactService: ReactService) { }
  // login C 로직
  @Post('login')
  async Login(
    @Res() res: Response,
    @Body('name') name: string,
    @Body('uid') uid: string,
    @Body('upw') upw: string
  ) {
    const data = await this.reactService.createlogin({ name, uid, upw });
    res.json(data);
  }

}