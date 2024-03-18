import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AutorModule } from './autor/autor.module';
import { StoreModule } from './infra/database/store.module';
import { CategoriaModule } from './categoria/categoria.module';
import { LivroModule } from './livro/livro.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AutorModule,
    CategoriaModule,
    LivroModule,
  ],
})
export class AppModule {}
