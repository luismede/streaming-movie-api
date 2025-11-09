import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/services/prisma.service';
import { FindByUserInteractionInputDTO } from '../dto/io/findByUser-interaction.input.dto';
import { FindByUserInteractionOutputDTO } from '../dto/io/findByUser-interaction.output.dto';

@Injectable()
export class FindByUserInteractionService {
  constructor(private readonly prismaService: PrismaService) { }
  public async execute({ idUsuario }: FindByUserInteractionInputDTO): Promise<FindByUserInteractionOutputDTO> {
    const interactions = await this.prismaService.interecao.findMany({
      select: {
        tipo: true,
        nota: true,
        data: true,
        idFilme: true,
        idUsuario: true,
      },
      where: {
        idUsuario: idUsuario,
      },
    });

    return {
      data: interactions.map((interaction) => ({
        tipo: interaction.tipo,
        data: interaction.data || null,
        nota: interaction.nota || null,
        idFilme: interaction.idFilme,
        idUsuario: interaction.idUsuario,
      }))
    };
  }
}
