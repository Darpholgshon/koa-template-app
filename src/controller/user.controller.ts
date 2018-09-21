import {Controller, Param, Body, Get, Post, Put, Delete} from 'routing-controllers';

@Controller()
export class UserController {

  @Get('/user')
  getAll() {
    return {message: 'This action returns all users'};
  }

  @Get('/user/:id')
  getOne(@Param('id') id: number) {
    return {message: `This action returns user #${id}`};
  }

  @Post('/user')
  post(@Body() user: any) {
    return {message: 'Saving user...'};
  }

  @Put('/user/:id')
  put(@Param('id') id: number, @Body() user: any) {
    return {message: 'Updating a user...'};
  }

  @Delete('/user/:id')
  remove(@Param('id') id: number) {
    return {message: `Removing user #${id}`};
  }
}
