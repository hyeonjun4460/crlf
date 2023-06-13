import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('hi');
    console.log('lf?');
    console.log('lflfl??');
    console.log('crlf로 받아와도 에러가 안뜨나?');
    return this.appService.getHello();
  }
}
