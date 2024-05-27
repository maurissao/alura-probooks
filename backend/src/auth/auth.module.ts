import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuarioModule } from '../usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioProvider } from '../entities/usuario/usuario.provider';
import { DatabaseModule } from '../infra/database/database.module';

@Module({
  imports: [UsuarioModule, DatabaseModule,
    JwtModule.register({
      global: true,
      secret: process.env.jwt_secret,
      signOptions: { expiresIn: '60s' },
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, UsuarioService, UsuarioProvider]
})
export class AuthModule {}
