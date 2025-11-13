import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { UpdateInteractionService } from '../service';
import { UpdateInteractionInputDTO } from '../dto/io/update-interaction-input.dto';
import { UpdateInteractionOutputDTO } from '../dto/io/update-interaction-output.dto';

@Controller('api/interactions/update')
export class UpdateInteractionController {
  constructor(
    private readonly updateInteractionService: UpdateInteractionService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Put('/:id')
  public async handle(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateInteractionInputDTO,
  ): Promise<UpdateInteractionOutputDTO> {
    return this.updateInteractionService.execute({ ...data, id });
  }
}
