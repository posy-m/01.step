import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Login } from './react/model/login.model';
import { ReactModule } from './react/react.module';

@Module({
  imports: [ReactModule, SequelizeModule.forRoot({
    dialect: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "alswl;0113#",
    database: "reacttest",
    autoLoadModels: true,
    synchronize: true,
    sync: { force: false },
    models: [Login]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
