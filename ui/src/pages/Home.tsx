import { TaskDescription } from "../components/TaskDescription"
import { TaskForm } from "../components/TaskForm"
import { TaskItem } from "../components/TaskItem"

export const Home = () => {
    return (
        <>
            <main className="flex justify-center px-3">
                <section className="flex flex-col w-full max-w-xl m-5 p-3 rounded-2xl bg-primary-4 shadow-xl">
                    <div className="flex items-center gap-2">
                        <img
                            src="src/assets/to-do-list.png"
                            alt="to-do icon"
                            className="w-8 h-8 object-contain"
                        />
                        <h1 className="text-3xl my-2">Minha To-Do List</h1>
                    </div>
                    <TaskForm />
                    <TaskItem />
                </section>
            </main>

            <TaskDescription />
        </>
    )
}

