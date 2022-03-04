import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { graphqlUploadExpress } from 'graphql-upload';
import { PrismaClientExceptionFilter, PrismaService } from 'nestjs-prisma';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 7000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  // enable shutdown hook
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  app.useGlobalPipes(new ValidationPipe());

  // Allow maximum file size of 2 Megabytes -
  // change based on your needs and
  // what your server can handle
  app.use(graphqlUploadExpress({ maxFileSize: 2 * 1000 * 1000 }));
  await app.listen(port);
  console.log(`App running at ${await app.getUrl()}`);
}
bootstrap();
