import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusesModule } from './modules/buses/buses.module';
import { configService } from './config/config.service';
import { PassengersModule } from './modules/passengers/passengers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    AuthModule,
    UsersModule,
    BusesModule,
    PassengersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
