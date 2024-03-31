import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioProvider } from '../entities/usuario/usuario.provider';
import { DatabaseModule } from '../infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioProvider],
})
export class UsuarioModule {}
