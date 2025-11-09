import { Controller, Body, Post } from '@nestjs/common';
import { CreateInteractionService } from '../service/create-interaction.service';
import { CreateInteractionInputDTO } from '../dto/io/create-interaction-input.dto';
import { CreateInteractionOutputDTO } from '../dto/io/create-interaction-output.dto';

@Controller('api/interactions/create')
export class CreateInteractionController {
  constructor(private readonly createInteractionService: CreateInteractionService) { }

  @Post()
  async createInteraction(@Body() createInteractionInputDTO: CreateInteractionInputDTO): Promise<CreateInteractionOutputDTO> {
    return this.createInteractionService.execute(createInteractionInputDTO);
  }
}