import {Body, Controller, Delete, Get, Param, Post, Put} from 'routing-controllers';

@Controller()
export class LocationController {

  @Get('/location')
  getAll() {
    return {message: 'This action returns all locations'};
  }

  @Get('/location/:id')
  getOne(@Param('id') id: number) {
    return {message: `This action returns location #${id}`};
  }

  @Post('/location')
  post(@Body() location: any) {
    return {message: 'Saving location...'};
  }

  @Put('/location/:id')
  put(@Param('id') id: number, @Body() location: any) {
    return {message: 'Updating a location...'};
  }

  @Delete('/location/:id')
  remove(@Param('id') id: number) {
    return {message: `Removing location #${id}`};
  }
}
