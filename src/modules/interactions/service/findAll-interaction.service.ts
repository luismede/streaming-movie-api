import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/services/prisma.service';
import { FindAllInteractionOutputDTO } from '../dto/io/findAll-interaction.output.dto';

@Injectable()
export class FindAllInteractionService {
  constructor(private readonly prismaService: PrismaService) { }
  public async execute(): Promise<FindAllInteractionOutputDTO> {
    const interactions = await this.prismaService.interecao.findMany({
      select: {
        tipo: true,
        nota: true,
        data: true,
        idFilme: true,
        idUsuario: true,
      },
    });

    return {
      data: interactions.map((interaction) => ({
        tipo: interaction.tipo,
        data: interaction.data || null,
        nota: interaction.nota || null,
        idFilme: interaction.idFilme,
        idUsuario: interaction.idUsuario,
      })),
    };
  }
}
