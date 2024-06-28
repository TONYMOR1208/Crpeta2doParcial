import { DataSource } from 'typeorm';
import { join } from 'path';
import { Idioma } from 'src/idioma/entities/idioma.entity';
import { Palabra } from 'src/palabra/entities/palabra.entity';
import { Registro } from 'src/registro/entities/registro.entity';


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'pruebapract7',
  entities: [Idioma, Palabra, Registro],
  migrations: [join(__dirname, 'src/migration/**/*.ts')],
  synchronize: false,
});

