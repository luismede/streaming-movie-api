import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/services/prisma.service';
import { DeleteMovieInputDTO } from '../dto/io/delete-movie-input.dto';
import { DeleteMovieOutputDTO } from '../dto/io/delete-movie-output.dto';

@Injectable()
export class DeleteMovieService {
  constructor(private readonly prismaService: PrismaService) { }
  public async execute({
    id,
  }: DeleteMovieInputDTO): Promise<DeleteMovieOutputDTO> {
    const movieExists = await this.prismaService.filme.findFirst({
      where: {
        id,
      },
      select: {},
    });

    if (!movieExists) throw new NotFoundException('Filme não encontrado');

    await this.prismaService.filme.delete({
      where: {
        id,
      },
      select: {
        id: true,
        nome: true,
      },
    });

    return {
      id,
      mensagem: 'Filme deletado com sucesso',
    };
  }
}
