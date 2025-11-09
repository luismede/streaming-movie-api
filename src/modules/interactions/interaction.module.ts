import { FindByUserInteractionController } from "./controller";
import { CreateInteractionController } from "./controller/create-interaction.controller";
import { FindAllInteractionController } from "./controller/findAll-interaction.controller";
import { CreateInteractionService, FindAllInteractionService, FindByUserInteractionService } from "./service";
import { Module } from "@nestjs/common";

@Module({
  controllers: [
    CreateInteractionController,
    FindAllInteractionController,
    FindByUserInteractionController
  ],
  providers: [
    CreateInteractionService,
    FindAllInteractionService,
    FindByUserInteractionService
  ],
})
export class InteractionModule { }