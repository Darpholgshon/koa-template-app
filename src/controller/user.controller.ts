import {Body, Controller, Delete, Get, HeaderParam, Param, Post, Put, QueryParam, UseInterceptor} from 'routing-controllers';
import {UserInterceptor} from '../interceptor/user.interceptor';

@Controller('/user')
@UseInterceptor(UserInterceptor)
export class UserController {

  @Get('/')
  getAll(@QueryParam('limit') limit: number, @HeaderParam('authorization') token: string) {
    return {message: 'This action returns all users', limit};
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
