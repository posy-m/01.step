import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { Login } from 'src/model/login.model';

@Module({
  imports: [SequelizeModule.forFeature([Login]), JwtModule.register({ secret: "mykey", signOptions: { expiresIn: "60m" } })],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule { }
