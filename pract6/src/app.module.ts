import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdiomaModule } from './idiomas/idiomas.module';
import { PalabraModule } from './palabras/palabras.module';
import { RegistrosModule } from './registros/registros.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'DESVELO4AM',
      autoLoadEntities: true,
      synchronize: true,
    }),
    IdiomaModule,
    PalabraModule,
    RegistrosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
