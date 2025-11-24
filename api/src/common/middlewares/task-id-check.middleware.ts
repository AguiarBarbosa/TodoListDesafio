import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TaskIdCheckMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {

        const id = Number(req.params.id)

        if (isNaN(id) || id <= 0) throw new BadRequestException("ID inválido")

        next();
    }
}
