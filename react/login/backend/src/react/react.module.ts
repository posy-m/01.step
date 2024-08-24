import { Module } from '@nestjs/common';
import { ReactService } from './react.service';
import { ReactController } from './react.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Login } from './model/login.model';

@Module({
  imports: [SequelizeModule.forFeature([Login])],
  controllers: [ReactController],
  providers: [ReactService],
})
export class ReactModule { }
