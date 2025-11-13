import { Controller, HttpCode, HttpStatus, Post, Body } from '@nestjs/common';
import { CreateMovieService } from '../service/create-movie.service';
import { CreateMovieInputDTO } from '../dto/io/create-movie-input.dto';
import { CreateMovieOutputDTO } from '../dto/io/create-movie-output.dto';

@Controller('api/movie/create')
export class CreateMovieController {
  constructor(private readonly createMovieService: CreateMovieService) { }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  public async handle(
    @Body() data: CreateMovieInputDTO,
  ): Promise<CreateMovieOutputDTO> {
    return await this.createMovieService.execute(data);
  }
}
