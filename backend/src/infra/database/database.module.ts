import { Module } from '@nestjs/common';
import { AppDataSource, AppDataSourceLoja, databaseProvider } from './database.provider';

@Module({
  providers: [...databaseProvider, AppDataSourceLoja],
  exports: [...databaseProvider, AppDataSourceLoja],
})
export class DatabaseModule {}
