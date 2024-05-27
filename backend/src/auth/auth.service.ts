import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService
    ) {}
    async signIn(id: string, pass: string): Promise<{access_token: string}> {
      const user = await this.usuarioService.findOne(id);
      const salt = process.env.salt_probooks;
      const hash = await bcrypt.hash(pass, salt);
      if (user?.senha !== hash) {
        throw new UnauthorizedException();
      }
      const payload = { sub: user.id, username: user.nome };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }      
}
