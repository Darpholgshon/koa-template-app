import {Body, Controller, Delete, Get, Param, Post, Put} from 'routing-controllers';

@Controller('/location')
export class LocationController {

  @Get('/')
  getAll() {
    return {message: 'This action returns all locations'};
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return {message: `This action returns location #${id}`};
  }

  @Post('/')
  post(@Body() location: any) {
    return {message: 'Saving location...'};
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() location: any) {
    return {message: 'Updating a location...'};
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return {message: `Removing location #${id}`};
  }
}
