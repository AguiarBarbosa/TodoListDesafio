import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
import { PrismaModule } from "prisma/prisma.module";
import { TaskIdCheckMiddleware } from "src/common/middlewares/task-id-check.middleware";

@Module({
  imports: [PrismaModule],
  controllers: [TaskController],
  providers: [TaskService],
  exports: [],
})
export class TaskModule{

    configure(consumer: MiddlewareConsumer){
        consumer.apply(TaskIdCheckMiddleware).forRoutes({
             method: RequestMethod.ALL,
             path: 'task/:id'
        })
    }
    
}