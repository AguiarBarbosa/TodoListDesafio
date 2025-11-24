export interface CreateTaskDto {
    title: string,
    description: string
}
export interface UpdateTaskDto extends Partial<CreateTaskDto>{
    isDone?: boolean
}