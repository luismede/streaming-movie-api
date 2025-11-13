import {
  DeleteInteractionController,
  FindByUserInteractionController,
  UpdateInteractionController,
} from './controller';
import { CreateInteractionController } from './controller/create-interaction.controller';
import { FindAllInteractionController } from './controller/findAll-interaction.controller';
import {
  CreateInteractionService,
  DeleteInteractionService,
  FindAllInteractionService,
  FindByUserInteractionService,
  UpdateInteractionService,
} from './service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [
    CreateInteractionController,
    FindAllInteractionController,
    FindByUserInteractionController,
    DeleteInteractionController,
    UpdateInteractionController,
  ],
  providers: [
    CreateInteractionService,
    FindAllInteractionService,
    FindByUserInteractionService,
    DeleteInteractionService,
    UpdateInteractionService,
  ],
})
export class InteractionModule {}
