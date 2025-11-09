import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Put,
} from '@nestjs/common';
import { UpdateMovieService } from '../service';
import { UpdateMovieInputDTO } from '../dto/io/update-movie-input.dto';
import { UpdateMovieOutputDTO } from '../dto/io/update-movie-output.dto';

@Controller()
export class UpdateMovieController {
  constructor(private readonly updateMovieService: UpdateMovieService) {}

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  public async handle(
    @Param() { id },
    @Body() data: UpdateMovieInputDTO,
  ): Promise<UpdateMovieOutputDTO> {
    return this.updateMovieService.execute({ ...data, id });
  }
}
