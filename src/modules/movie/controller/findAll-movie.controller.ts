import { Controller, HttpCode, HttpStatus, Get } from '@nestjs/common';
import { FindAllMovieService } from '../service';
import { FindAllMovieOutputDTO } from '../dto/io/findAll-movie.output.dto';

@Controller()
export class FindAllMovieController {
  constructor(private readonly findAllMovieService: FindAllMovieService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  public async handle(): Promise<FindAllMovieOutputDTO> {
    return await this.findAllMovieService.execute();
  }
}
