import {Body, Controller, Delete, Get, Param, Post, Put} from 'routing-controllers';

@Controller('/user')
export class UserController {

  @Get('/')
  getAll() {
    return {message: 'This action returns all users'};
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return {message: `This action returns user #${id}`};
  }

  @Post('/')
  post(@Body() user: any) {
    return {message: 'Saving user...'};
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() user: any) {
    return {message: 'Updating a user...'};
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return {message: `Removing user #${id}`};
  }
}
