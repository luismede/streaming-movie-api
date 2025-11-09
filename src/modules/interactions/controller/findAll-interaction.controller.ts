import { Controller, HttpCode, HttpStatus, Get } from '@nestjs/common';
import { FindAllInteractionService } from '../service';
import { FindAllInteractionOutputDTO } from '../dto/io/findAll-interaction.output.dto';

@Controller('api/interactions')
export class FindAllInteractionController {
  constructor(private readonly findAllInteractionService: FindAllInteractionService) { }

  @HttpCode(HttpStatus.OK)
  @Get()
  public async handle(): Promise<FindAllInteractionOutputDTO> {
    return await this.findAllInteractionService.execute();
  }
}
