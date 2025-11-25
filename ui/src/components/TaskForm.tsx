import { useState } from "react"
import { useTasks } from "../contexts/TaskContext"
import { ToastContainer, toast } from 'react-toastify';

export const TaskForm = () => {
    const { create } = useTasks()
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const notify = () => toast.warn("Digite um título antes de adicionar!", {
        autoClose: 2500
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (title.trim() === "") return notify()

        create({ title, description })

        setTitle("")
        setDescription("")
    }

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Título da task"
                className="bg-primary-3 h-8 px-2 focus:border-transparent focus:outline-none 
                w-full rounded-xl"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="Descrição (opcional)"
                className="bg-primary-3 h-8 px-2 focus:border-transparent focus:outline-none 
                w-full rounded-xl"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button
                type="submit"
                className="
                    bg-primary-1 h-8 
                    rounded-xl 
                    flex items-center justify-center 
                    text-xs sm:text-sm
                    cursor-pointer
                    w-full
                "
            >
                ADD
            </button>

            <ToastContainer />
        </form>
    )
}
