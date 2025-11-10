import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'https://meusite.com'],
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('API de Filmes')
    .setDescription('API de Filmes')
    .setVersion('1.0')
    .addTag('filmes')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
