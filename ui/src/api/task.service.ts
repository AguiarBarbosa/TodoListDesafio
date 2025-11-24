import type { ApiResponse } from "../types/ApiResponse"
import type { CreateTaskDto, UpdateTaskDto } from "../types/dto/TaskDto"
import type { Task } from "../types/Task"
import api from "./api"

export const taskService = {
    list: () => api.get<ApiResponse<Task[]>>("/task"),
    show: (id:number) => api.get<ApiResponse<Task>>(`/task/${id}`),
    create: (data: CreateTaskDto) => api.post<ApiResponse<Task>>("/task", data),
    delete: (id:number) => api.delete<ApiResponse<Task>>(`/task/${id}`),
    update: (id:number, data: UpdateTaskDto) => api.patch<ApiResponse<Task>>(`/task/${id}`, data)
}