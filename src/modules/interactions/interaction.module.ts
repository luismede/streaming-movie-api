import { DeleteInteractionController, FindByUserInteractionController } from "./controller";
import { CreateInteractionController } from "./controller/create-interaction.controller";
import { FindAllInteractionController } from "./controller/findAll-interaction.controller";
import { CreateInteractionService, DeleteInteractionService, FindAllInteractionService, FindByUserInteractionService } from "./service";
import { Module } from "@nestjs/common";

@Module({
  controllers: [
    CreateInteractionController,
    FindAllInteractionController,
    FindByUserInteractionController,
    DeleteInteractionController
  ],
  providers: [
    CreateInteractionService,
    FindAllInteractionService,
    FindByUserInteractionService,
    DeleteInteractionService
  ],
})
export class InteractionModule { }