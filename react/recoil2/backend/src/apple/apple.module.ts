import { Module } from '@nestjs/common';
import { AppleService } from './apple.service';
import { AppleController } from './apple.controller';
import { JwtModule } from '@nestjs/jwt';
import { Login } from 'src/model/apple.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Login]), JwtModule.register({ secret: "mykey", signOptions: { expiresIn: "60m" } })],
  controllers: [AppleController],
  providers: [AppleService],
})
export class AppleModule { }
