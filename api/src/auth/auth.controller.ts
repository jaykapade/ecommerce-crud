import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from 'src/dto/user.dto';
import { UserDetails } from 'src/interface/user-details.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body() user: CreateUserDto,
  ): Promise<UserDetails | null | string> {
    return this.authService.register(user);
  }
  @Post('login')
  async login(@Body() user: LoginUserDto): Promise<{ token: string | null }> {
    return this.authService.login(user);
  }
}
