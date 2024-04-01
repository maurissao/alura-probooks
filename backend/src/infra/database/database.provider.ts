import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';
import { ConfigService } from '@nestjs/config';
import { Injector } from '@nestjs/core/injector/injector';
import { Inject, Injectable } from '@nestjs/common';
import { CustomNamingStrategy } from './CustomNamingStrategy';

const customNamingStrategy = new CustomNamingStrategy();

const PgOptions: DataSourceOptions = {
    type: 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    migrationsRun: false,
    subscribers: [],
    logging: false,
    namingStrategy: customNamingStrategy
}

export const AppDataSource = new DataSource(PgOptions);

export const databaseProviders = [
  {
    provide: 'AppDataSource',    
    useFactory: async () => AppDataSource.initialize(),
  },
];
