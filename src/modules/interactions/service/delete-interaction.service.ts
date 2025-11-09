import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/services/prisma.service';
import { DeleteInteractionInputDTO } from '../dto/io/delete-interaction-input.dto';
import { DeleteInteractionOutputDTO } from '../dto/io/delete-interaction-output.dto';

@Injectable()
export class DeleteInteractionService {
  constructor(private readonly prismaService: PrismaService) { }
  public async execute({
    id,
  }: DeleteInteractionInputDTO): Promise<DeleteInteractionOutputDTO> {
    const interactionExists = await this.prismaService.interecao.findFirst({
      where: {
        id,
      },
    });

    if (!interactionExists) throw new NotFoundException('Interação não encontrada');

    const result = await this.prismaService.interecao.delete({
      where: {
        id,
      },
    });

    return {
      id,
      tipo: result.tipo,
      nota: result.nota,
      data: result.data,
      mensagem: 'Interação deletada com sucesso',
    };
  }
}
