import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/services/prisma.service';
import { UpdateMovieInputDTO } from '../dto/io/update-movie-input.dto';
import { UpdateMovieOutputDTO } from '../dto/io/update-movie-output.dto';

@Injectable()
export class UpdateMovieService {
  constructor(private readonly prismaService: PrismaService) {}

  public async execute({
    ...data
  }: UpdateMovieInputDTO): Promise<UpdateMovieOutputDTO> {
    const id = Number(data.id);
    const movieExists = await this.prismaService.filme.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
      },
    });

    if (!movieExists) throw new NotFoundException('Filme não encontrado');

    return await this.prismaService.filme.update({
      data: {
        id: id,
        nome: data.nome,
        descricao: data.descricao,
        ano: data.ano,
        imagem: data.imagem,
        link: data.link,
      },
      where: {
        id: id,
      },
      select: {
        id: true,
        nome: true,
        descricao: true,
        ano: true,
        imagem: true,
        link: true,
      },
    });
  }
}
