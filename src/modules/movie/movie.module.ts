import { Module } from '@nestjs/common';
import { CreateMovieController } from './controller/create-movie.controller';
import {
  CreateMovieService,
  DeleteMovieService,
  FindAllMovieService,
  UpdateMovieService,
} from './service';
import {
  DeleteMovieController,
  FindAllMovieController,
  UpdateMovieController,
} from './controller';
import { FindAllMovieOutputDTO } from './dto/io/findAll-movie.output.dto';

@Module({
  controllers: [
    CreateMovieController,
    DeleteMovieController,
    UpdateMovieController,
    FindAllMovieController,
  ],
  providers: [
    CreateMovieService,
    DeleteMovieService,
    UpdateMovieService,
    FindAllMovieService,
  ],
})
export class MovieModule {}
