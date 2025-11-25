import { useEffect, useRef, useState } from "react";
import { useTasks } from "../contexts/TaskContext";

export const TaskDescription = () => {
    const { isOpen, selectedTask, closeTask, update } = useTasks();

    const dialogRef = useRef<HTMLDialogElement>(null);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (selectedTask) {
            setTitle(selectedTask.title);
            setDescription(selectedTask.description);
        }
    }, [selectedTask]);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const handleClickOutside = (e: MouseEvent) => {
            if (e.target === dialog) {
                closeTask();
            }
        };

        dialog.addEventListener("click", handleClickOutside);
        return () => dialog.removeEventListener("click", handleClickOutside);
    }, [closeTask]);

    const handleSave = async () => {
        if (!selectedTask) return;

        await update(selectedTask.id, { title, description });
        closeTask();
    };

    return (
        <dialog
            ref={dialogRef}
            className="
                p-6 rounded-xl bg-white max-w-md w-full text-black
                fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                shadow-xl backdrop:bg-black/50
            "
        >
            <h2 className="text-xl font-bold mb-4">Editar Task</h2>

            {selectedTask ? (
                <div className="flex flex-col gap-3">

                    <label className="flex flex-col">
                        <span className="font-semibold">Título:</span>
                        <input
                            className="border rounded p-2 mt-1"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="font-semibold">Descrição:</span>
                        <textarea
                            className="border rounded p-2 mt-1 h-24 resize-none"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>

                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            className="px-3 py-2 bg-gray-300 rounded-md hover:bg-gray-200 cursor-pointer"
                            onClick={closeTask}
                        >
                            Cancelar
                        </button>

                        <button
                            className="px-3 py-2 bg-primary-1 text-white rounded-md hover:bg-primary-2 cursor-pointer"
                            onClick={handleSave}
                        >
                            Salvar
                        </button>
                    </div>

                </div>
            ) : (
                <p>Nenhuma task selecionada.</p>
            )}
        </dialog>
    );
};
