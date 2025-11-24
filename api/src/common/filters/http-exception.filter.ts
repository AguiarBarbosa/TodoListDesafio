import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const status =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;

        const message =
            exception instanceof HttpException
                ? exception.getResponse()
                : 'Erro interno no Servidor';

        const errorMessage = typeof message === 'object' && message['message'] ? message['message'] : message;

        const errorResponse = {
            success: false,
            statusCode: status,
            path: request.url,
            message: Array.isArray(errorMessage) ? errorMessage.join(', ') : errorMessage,
            timestamp: new Date().toISOString(),
        };

        response.status(status).json(errorResponse);
    }
}
