import { MovieModule } from './modules/movie/movie.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [MovieModule, DatabaseModule],
})
export class AppModule {}
