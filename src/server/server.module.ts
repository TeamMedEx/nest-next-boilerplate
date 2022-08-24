import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';

import { AppModule } from 'src/server/app/app.module';
import { ViewModule } from 'src/server/view/view.module';
import { routes } from './app/routes';

@Module({
  imports: [RouterModule.forRoutes(routes), AppModule, ViewModule],
})
export class ServerModule {}
