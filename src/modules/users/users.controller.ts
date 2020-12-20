import {
  BadRequestException,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  Response,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post(':id/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './photos',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  public async setPhoto(
    @Param('id') userId,
    @Response() res,
    @UploadedFile() file,
  ) {
    const user = await this.usersService.findById(userId);
    if (user === null) {
      throw new BadRequestException('User not found');
    }
    const result = this.usersService.setPhoto(Number(userId), `${file.path}`);
    return res.status(HttpStatus.OK).send(result);
  }

  @Get(':id/photo')
  async servePhoto(@Param('id') userId, @Res() res): Promise<any> {
    const user = await this.usersService.findById(userId);
    if (user === null) {
      throw new BadRequestException('User not found');
    }
    res.sendFile(user.photo, { root: './' });
  }
}
