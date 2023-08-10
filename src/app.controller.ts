import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post()
  async getHello(@UploadedFile() file) {
    console.log(file);
    try {
      await axios.put('url', file.buffer);
      return this.appService.getHello();
    } catch (err) {
      console.log(err);
    }
  }
}
