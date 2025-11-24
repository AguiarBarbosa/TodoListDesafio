import { Body, Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDTO } from "./dto/create-task.dto";
import { ParamId } from "src/common/decorators/param-id.decorator";
import { UpdateTaskDTO } from "./dto/update-task.dto";

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService){}

    @Post()
    async create(@Body() data: CreateTaskDTO){
        return this.taskService.create(data)
    }

    @Get()
    async list(){
        return this.taskService.list()
    }

    @Get(':id')
    async show(@ParamId() id:number){
        return this.taskService.show(id)
    }

    @Patch(':id')
    async update(@ParamId() id:number,@Body() {title, description, isDone}:UpdateTaskDTO){
        return this.taskService.update(id,{title, description, isDone})
    }

    @Delete(':id')
    async delete(@ParamId() id:number){
        return this.taskService.delete(id)
    }
}