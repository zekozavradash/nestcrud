import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExpenceService } from './expence.service';
import { ExpenceDto } from './dto/expence.dto';

@Controller('/expence')
export class expenceController {
  constructor(private expenceService: ExpenceService) {}
  @Get()
  allExpences(): ExpenceDto[] {
    return this.expenceService.allExpences();
  }

  @Post()
  createExpence(@Body() expence: ExpenceDto): ExpenceDto {
    return this.expenceService.createExpence(expence);
  }

  @Delete('/:id')
  deleteExpence(@Param('id') paramId: string) {
    return this.expenceService.deleteExpence(parseInt(paramId));
  }

  @Put('/:id')
  updateExpence(@Body() expence: ExpenceDto, @Param('id') paramID: string) {
    return this.expenceService.updateExpence(expence, +paramID);
  }
}
