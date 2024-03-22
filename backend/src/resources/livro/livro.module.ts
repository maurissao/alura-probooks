import { Module } from '@nestjs/common';
import { LivroService } from './livro.service';
import { LivroController } from './livro.controller';
import { LivroProvider } from '../../entities/livro/livro.provider';
import { StoreModule } from '../../infra/database/store.module';

@Module({
  imports: [StoreModule],
  controllers: [LivroController],
  providers: [LivroService, LivroProvider],
})
export class LivroModule {}
