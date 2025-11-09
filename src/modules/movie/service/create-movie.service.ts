import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/services/prisma.service';
import { CreateMovieInputDTO } from '../dto/io/create-movie-input.dto';

@Injectable()
export class CreateMovieService {
  constructor(private readonly prismaService: PrismaService) {}

  public async execute({
    ...data
  }: CreateMovieInputDTO): Promise<CreateMovieInputDTO> {
    const result = this.prismaService.filme.create({
      data: {
        nome: data.nome,
        descricao: data.descricao,
        ano: data.ano,
        imagem: data.imagem,
        link: data.link,
      },
      select: {
        nome: true,
        descricao: true,
        ano: true,
        imagem: true,
        link: true,
      },
    });

    return result;
  }
}
