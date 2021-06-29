import { Body, UseGuards, Request } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from '../Auth/auth.service';
import { LocalAuthGuard } from '../Auth/local-auth.guard';
import { JwtAuthGuard } from '../Auth/jwt-auth.guard';
import { UserDto } from './dto/users.dto';
import User from './users.entity';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('users')
  getUsers(): Promise<User[]> {
    console.log('users++++++++++++++++++++++++++++++');
    return this.userService.getUsers();
  }

  @Post('register')
  registerUser(@Body() user: UserDto): Promise<User | String> {
    return this.userService.registerUser(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
