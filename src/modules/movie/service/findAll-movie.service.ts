import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/services/prisma.service';
import { FindAllMovieOutputDTO } from '../dto/io/findAll-movie.output.dto';

@Injectable()
export class FindAllMovieService {
  constructor(private readonly prismaService: PrismaService) { }
  public async execute(): Promise<FindAllMovieOutputDTO> {
    const movies = await this.prismaService.filme.findMany({
      select: {
        id: true,
        nome: true,
        descricao: true,
        ano: true,
        imagem: true,
        link: true,
      },
    });

    return {
      data: movies.map((movie) => ({
        id: movie.id,
        nome: movie.nome,
        descricao: movie.descricao || null,
        ano: movie.ano,
        imagem: movie.imagem || null,
        link: movie.link || null,
      })),
    };
  }
}
