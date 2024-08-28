import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import * as cookie from "cookie-parser";
import { SequelizeModule } from '@nestjs/sequelize';
import { Login } from './model/login.model';

@Module({
  imports: [LoginModule, SequelizeModule.forRoot({
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

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookie()).forRoutes("*")
  }
}
