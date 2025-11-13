import { MovieModule } from './modules/movie/movie.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/database/database.module';
import { InteractionModule } from './modules/interactions/interaction.module';

@Module({
  imports: [MovieModule, InteractionModule, DatabaseModule],
})
export class AppModule {}
