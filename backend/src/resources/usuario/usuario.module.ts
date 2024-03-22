import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { StoreModule } from '../../infra/database/store.module';
import { UsuarioProvider } from 'src/entities/usuario/usuario.provider';

@Module({
  imports: [StoreModule],
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioProvider],
})
export class UsuarioModule {}
