import {Body, Controller, Delete, Get, Param, Post, Put, UseInterceptor} from 'routing-controllers';
import {LocationInterceptor} from '../interceptor/location.interceptor';

@Controller('/location')
@UseInterceptor(LocationInterceptor)
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
