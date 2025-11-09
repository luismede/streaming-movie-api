import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/services/prisma.service';
import { CreateInteractionInputDTO } from '../dto/io/create-interaction-input.dto';
import { CreateInteractionOutputDTO } from '../dto/io/create-interaction-output.dto';

@Injectable()
export class CreateInteractionService {
  constructor(private readonly prismaService: PrismaService) { }

  public async execute({
    ...data
  }: CreateInteractionInputDTO): Promise<CreateInteractionOutputDTO> {
    const result = this.prismaService.interecao.create({
      data: {
        tipo: data.tipo,
        nota: data.nota || 0,
        data: data.data || new Date(),
        idFilme: data.idFilme,
        idUsuario: data.idUsuario,
      },
      select: {
        tipo: true,
        nota: true,
        data: true,
        idFilme: true,
        idUsuario: true,
      }
    });

    return result;
  }
}
