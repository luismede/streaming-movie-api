import { IsNumber, IsNotEmpty } from "class-validator";

export class FindByUserInteractionInputDTO {
  @IsNumber()
  @IsNotEmpty()
  idUsuario: number;
}