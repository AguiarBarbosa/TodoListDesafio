import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogInterceptor<T> implements NestInterceptor<T> {
    intercept(ctx: ExecutionContext, next: CallHandler): Observable<T> {

        const dt = Date.now()

        return next.handle().pipe(tap(() => {
            const req = ctx.switchToHttp().getRequest<Request>()

            console.log(`URL: ${req.url}`)
            console.log(`Method: ${req.method}`)
            console.log(`Execução levou: ${Date.now() - dt} milisegundos`)
        }))
    }
}
