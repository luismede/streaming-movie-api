import { Controller, HttpCode, HttpStatus, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FindByUserInteractionService } from '../service';
import { FindByUserInteractionOutputDTO } from '../dto/io/findByUser-interaction.output.dto';

@Controller()
export class FindByUserInteractionController {
  constructor(private readonly findByUserInteractionService: FindByUserInteractionService) { }

  @HttpCode(HttpStatus.OK)
  @Get()
  public async handle(@Param('idUsuario', ParseIntPipe) idUsuario: number): Promise<FindByUserInteractionOutputDTO> {
    return await this.findByUserInteractionService.execute({ idUsuario });
  }
}