import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AutorModule } from './autor/autor.module';
import { CategoriaModule } from './categoria/categoria.module';
import { LivroModule } from './livro/livro.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { CompraModule } from './compra/compra.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AutorModule,
    CategoriaModule,
    LivroModule,
    UsuarioModule,
    CarrinhoModule,
    CompraModule,
  ],
})
export class AppModule {}
