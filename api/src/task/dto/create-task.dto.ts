import { IsBoolean, IsOptional, IsString } from "class-validator"

export class CreateTaskDTO {
    @IsString()
    title: string

    @IsString()
    description: string

    @IsOptional()
    @IsBoolean()
    isDone?: boolean
}