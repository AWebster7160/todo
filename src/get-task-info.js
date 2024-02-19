import getUniqueId from "./get-unique-id";

export default function getTaskInfo() {
    function createTask () {
        const taskId = getUniqueId();
        const title = document.querySelector('#title');
        const taskTitle = title.value;
        const notes = document.querySelector('#notes');
        const taskNotes = notes.value;
        const done = false;
        return { taskId, taskTitle, taskNotes, done};
    };
    const task = createTask();
    return task;
}