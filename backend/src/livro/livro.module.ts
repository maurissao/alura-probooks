import { Module } from '@nestjs/common';
import { LivroService } from './livro.service';
import { LivroController } from './livro.controller';
import { LivroProvider } from '../entities/livro/livro.provider';
import { DatabaseModule } from '../infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LivroController],
  providers: [LivroService, LivroProvider],
})
export class LivroModule {}
