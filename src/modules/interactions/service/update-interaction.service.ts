import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/services/prisma.service';
import { UpdateInteractionInputDTO } from '../dto/io/update-interaction-input.dto';
import { UpdateInteractionOutputDTO } from '../dto/io/update-interaction-output.dto';

@Injectable()
export class UpdateInteractionService {
  constructor(private readonly prismaService: PrismaService) {}

  public async execute({
    id,
    tipo,
    nota,
    data,
  }: UpdateInteractionInputDTO): Promise<UpdateInteractionOutputDTO> {
    const interactionExists = await this.prismaService.interecao.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

    if (!interactionExists)
      throw new NotFoundException('Interação não encontrada');

    return await this.prismaService.interecao.update({
      data: {
        tipo: tipo ?? undefined,
        nota: nota ?? undefined,
        data: data ?? undefined,
      },
      where: {
        id,
      },
      select: {
        id: true,
        tipo: true,
        nota: true,
        data: true,
        idFilme: true,
        idUsuario: true,
      },
    });
  }
}
