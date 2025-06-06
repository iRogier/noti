import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationsModule } from './notifications/notifications.module';
import { Notification } from './notifications/notification.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'gjZgudwgLLZyWGCFxsgNMBbQPSiOmGOa',
    database: 'railway',
    entities: [Notification],
    synchronize: true,
  }), NotificationsModule],
})
export class AppModule {}