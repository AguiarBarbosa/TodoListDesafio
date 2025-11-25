import { useEffect } from "react"
import { useTasks } from "../contexts/TaskContext"

export const TaskItem = () => {
    const { list, task, deleteTask, update, openTask } = useTasks()

    useEffect(() => {
        async function listTasks() {
            await list()
        }
        listTasks()
    }, [])

    const handleToggle = (t: any) => {
        update(t.id, {
            isDone: !t.isDone
        })
    }

    return (
        <>
            {task && task.length > 0 ? (
                <ul>
                    {task.map((t) => (
                        <div
                            key={t.id}
                            className="
                            flex items-center gap-2
                            my-1 p-2 rounded-xl 
                            min-h-12 sm:h-10 
                            hover:bg-primary-3
                            w-full
                            "
                        >

                            <input
                                type="checkbox"
                                checked={t.isDone}
                                onChange={() => handleToggle(t)}
                                className="
                                w-5 h-5
                                rounded-full border border-gray-400 
                                appearance-none checked:bg-primary-2 checked:border-none 
                                cursor-pointer
                            "
                            />

                            <span
                                className="
                                flex-1 min-w-0
                                truncate
                                cursor-pointer 
                                text-sm sm:text-base
                            "
                                onClick={() => openTask(t)}
                            >
                                {t.title}
                            </span>

                            <button
                                className="
                                text-primary-1 cursor-pointer 
                                text-sm sm:text-base
                            "
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
                                        deleteTask(t.id);
                                    }
                                }}
                            >
                                X
                            </button>

                        </div>


                    ))}


                </ul>
            ) : (
                <p>Nenhuma tarefa encontrada</p>
            )}
        </>
    )
}
