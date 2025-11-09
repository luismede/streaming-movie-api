export class FindAllInteractionOutputDTO {
  data: Array<{
    tipo: string;
    nota?: number | null;
    data?: Date | null;
    idFilme: number;
    idUsuario: number;
  }>;
}
