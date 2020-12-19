import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'w2bitback',
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
