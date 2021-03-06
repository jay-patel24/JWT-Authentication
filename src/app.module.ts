import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './Api/V1/Users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './Api/V1/Auth/auth.module';
import User from './Api/V1/Users/users.entity';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
