import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RegisterUserDto } from 'src/auth/dto/register-user.dto';
import { AuthService } from './auth.service';
import { User } from 'src/user/entities/user.entity';
import { LoginUserDto } from 'src/auth/dto/login-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register') //đăng kí tài khoản
  register(@Body() registerUserDto: RegisterUserDto): Promise<User> {
    console.log('register log');
    console.log(registerUserDto);
    return this.authService.register(registerUserDto);
  }

  @Post('login') // đăng nhập
  @ApiResponse({ status: 201, description: 'Login successfully!' })
  @ApiResponse({ status: 401, description: 'Login fail!' })
  @UsePipes(ValidationPipe)
  login(@Body() loginUserDto: LoginUserDto): Promise<any> {
    console.log('login api');
    console.log(loginUserDto);
    return this.authService.login(loginUserDto);
  }

  @Post('refresh-token')
  refreshToken(@Body() { refresh_token }): Promise<any> {
    console.log('refresh token api');
    return this.authService.refreshToken(refresh_token);
  }
}
