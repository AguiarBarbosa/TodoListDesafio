import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { CreateTaskDTO } from "./dto/create-task.dto";
import { UpdateTaskDTO } from "./dto/update-task.dto";

@Injectable()
export class TaskService {
    constructor(private readonly prisma: PrismaService) { }

    async create({ title, description, isDone = false }: CreateTaskDTO) {


        return this.prisma.tasks.create({
            data: {
                title,
                description,
                isDone
            }
        });
    }

    async list() {
        return this.prisma.tasks.findMany()
    }

    async show(id: number) {

        await this.exists(id)

        return this.prisma.tasks.findUnique({
            where: {
                id
            }
        })
    }

    async update(id: number, { title, description, isDone }: UpdateTaskDTO) {

        await this.exists(id)

        return this.prisma.tasks.update({
            data: {
                title,
                description,
                isDone
            },
            where: {
                id
            }
        })
    }

    async delete(id: number) {

        await this.exists(id)

        return this.prisma.tasks.delete({
            where: {
                id
            }
        })
    }

    async exists(id: number) {
        if (!(await this.prisma.tasks.count({
            where: {
                id
            }
        }))) {
            throw new NotFoundException(`usuário ${id} não encontrado`)
        }
    }
}