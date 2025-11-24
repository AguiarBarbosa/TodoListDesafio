// src/common/interceptors/response.interceptor.ts
import {Injectable,NestInterceptor,ExecutionContext,CallHandler,HttpStatus} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface StandardResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data?: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, StandardResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<StandardResponse<T>> {
    return next.handle().pipe(
      map(data => ({
        success: true,
        statusCode: context.switchToHttp().getResponse().statusCode,
        message: 'Sucesso',
        data: data,
      })),
    );
  }
}
