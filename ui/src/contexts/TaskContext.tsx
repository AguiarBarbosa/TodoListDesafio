import { createContext, useContext, useState, type ReactNode } from "react";
import type { Task } from "../types/Task";
import { taskService } from "../api/task.service";
import type { CreateTaskDto, UpdateTaskDto } from "../types/dto/TaskDto";

interface TaskContextType {
    task: Task[]
    isOpen: boolean
    selectedTask: Task | null
    openTask: (task: Task) => void
    closeTask: () => void
    list: () => Promise<void>
    create: (data: CreateTaskDto) => Promise<void>
    update: (id: number, data: UpdateTaskDto,) => Promise<void>
    deleteTask: (id: number) => Promise<void>
}

export const TaskContext = createContext<TaskContextType>({} as TaskContextType)

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [task, setTask] = useState<Task[]>([])
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedTask, setSelectedTask] = useState<Task | null>(null)

    const openTask = (task: Task) => {
        setSelectedTask(task)
        setIsOpen(true)
    }

    const closeTask = () => {
        setSelectedTask(null)
        setIsOpen(false)
    }

    const list = async () => {
        const res = await taskService.list()
        setTask(res.data.data)
    }

    const create = async (data: CreateTaskDto) => {
        const res = await taskService.create(data);
        setTask(prev => [...prev, res.data.data]);
    }

    const update = async (id: number, data: UpdateTaskDto) => {
        const res = await taskService.update(id, data);
        setTask(prev => prev.map(t => t.id === id ? res.data.data : t));
    }

    const deleteTask = async (id: number) => {
        await taskService.delete(id);
        setTask(prev => prev.filter(t => t.id !== id));
    }

    return (
        <TaskContext.Provider value={{ task, isOpen, selectedTask, list, create, update, deleteTask, openTask, closeTask}}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTasks = () => {
    return useContext(TaskContext)
}