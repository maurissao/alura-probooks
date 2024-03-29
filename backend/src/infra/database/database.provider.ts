import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';

const PgOptions: DataSourceOptions = {
    type: 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
    migrationsRun: false,
    subscribers: [],
    logging: false,    
}

export const AppDataSource = new DataSource(PgOptions);

export const databaseProviders = [
  {
    provide: 'AppDataSource',    
    useFactory: async () => AppDataSource.initialize(),
  },
];
