import { REQUEST } from '@nestjs/core';
import { Autor } from './autor.entity';
import { DataSource } from 'typeorm';
import { Request } from 'express';

export const AutorProvider = {
  provide: 'AutorRepository',
  useFactory: (ds: DataSource) => {
    return ds.getRepository(Autor);
  },
  inject: ['AppDataSource']
};
