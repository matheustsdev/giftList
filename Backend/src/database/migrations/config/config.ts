import * as dotenv from "dotenv";
import { registerAs } from "@nestjs/config"
import { DataSource, DataSourceOptions } from "typeorm";

dotenv.config();

const config = {
  name: 'default',
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  schema: process.env.DB_SCHEMA,
  entities: ['src/../../Shared/entities/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  autoLoadEntities: true,
  cli: {
    migrationsDir: 'src/database/migrations',
    entitiesDir: 'src/../../Shared/entities',
  },
};

export default registerAs("typeorm", () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
