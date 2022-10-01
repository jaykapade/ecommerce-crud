import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, LoginUserDto } from 'src/dto/user.dto';
import { UserDetails } from 'src/interface/user-details.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  }

  async register(user: CreateUserDto): Promise<UserDetails | null | string> {
    const { name, email, password } = user;

    const existingUser = await this.userService.findByEmail(email);
    if (existingUser) return 'Email Already taken';

    const hashedPassword = await this.hashPassword(password);

    const newUser = await this.userService.createUser({
      name,
      email,
      password: hashedPassword,
    });
    return this.userService._getUserDetails(newUser);
  }

  async doesPasswordMatch(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  async validateUser(userInfo: LoginUserDto): Promise<UserDetails | null> {
    const { email, password } = userInfo;
    const user = await this.userService.findByEmail(email);

    if (!!!user) return null;

    const passwordMatch = await this.doesPasswordMatch(password, user.password);
    if (!passwordMatch)
      throw new HttpException(
        { success: false, message: 'Email or Password do not match' },
        HttpStatus.UNAUTHORIZED,
      );

    return this.userService._getUserDetails(user);
  }

  async login(userInfo: LoginUserDto): Promise<{ token: string } | null> {
    // const { email, password } = userInfo;

    const user = await this.validateUser(userInfo);
    if (!user) return null;

    const jwt = await this.jwtService.signAsync({ user });
    return { token: jwt };
  }
}
