import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000); // you can change the port
  console.log(`Mock BPP running on http://localhost:3000`);
}
bootstrap();

