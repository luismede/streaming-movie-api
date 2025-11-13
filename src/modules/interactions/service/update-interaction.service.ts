import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/services/prisma.service';
import { UpdateInteractionInputDTO } from '../dto/io/update-interaction-input.dto';
import { UpdateInteractionOutputDTO } from '../dto/io/update-interaction-output.dto';

@Injectable()
export class UpdateInteractionService {
  constructor(private readonly prismaService: PrismaService) {}

  public async execute({
    ...data
  }: UpdateInteractionInputDTO): Promise<UpdateInteractionOutputDTO> {
    const id = Number(data.id);
    const interactionExists = await this.prismaService.interecao.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
      },
    });

    if (!interactionExists)
      throw new NotFoundException('Interação não encontrada');

    return await this.prismaService.interecao.update({
      data: {
        id: id,
        tipo: data.tipo || null || undefined,
        nota: data.nota || null || undefined,
        data: data.data || null || undefined,
      },
      where: {
        id: id,
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
