import { ConnectionOptions } from 'typeorm';
import 'dotenv/config';

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [`${__dirname}/**/*.entity.{ts,js}`],
  synchronize: false,
  dropSchema: false,
  migrationsRun: false,
  migrations: [getMigrationDirectory()],
  cli: {
    migrationsDir: 'migrations',
  },
};

function getMigrationDirectory() {
  const directory =
    process.env.NODE_ENV === 'migration' ? 'src' : `${__dirname}`;
  return `${directory}/migrations/**/*{.ts,.js}`;
}

export = connectionOptions;
