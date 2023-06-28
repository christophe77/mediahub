import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


const whiteList = ["http://localhost:3001", "http://localhost:3001"]
const corsOptions = {
  origin: (origin:any, callback:any)=>{
      if (whiteList.indexOf(origin) !== -1) {
          callback(null, true)
      } else {
          callback(new Error('Not allowed by CORS'))
      }
  },credentials: true
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
