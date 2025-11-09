import {
  BadRequestException,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { DeleteMovieService } from '../service';
import { DeleteMovieOutputDTO } from '../dto/io/delete-movie-output';

@Controller()
export class DeleteMovieController {
  constructor(private readonly deleteMovieService: DeleteMovieService) {}

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  public async handle(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DeleteMovieOutputDTO> {
    if (!id)
      throw new BadRequestException('Você deve informar o id para deletar');
    return await this.deleteMovieService.execute({ id });
  }
}
