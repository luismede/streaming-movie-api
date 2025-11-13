import {
  BadRequestException,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { DeleteInteractionService } from '../service';
import { DeleteInteractionOutputDTO } from '../dto/io/delete-interaction-output.dto';

@Controller('api/interactions/delete')
export class DeleteInteractionController {
  constructor(
    private readonly deleteInteractionService: DeleteInteractionService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Delete('/:id')
  public async handle(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DeleteInteractionOutputDTO> {
    if (!id)
      throw new BadRequestException('Você deve informar o id para deletar');
    return await this.deleteInteractionService.execute({ id });
  }
}
