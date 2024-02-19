export default function getTaskInfo() {
    function createTask () {
        const title = document.querySelector('#title');
        const taskTitle = title.value;
        const notes = document.querySelector('#notes');
        const taskNotes = notes.value;
        const done = false;
        return { taskTitle, taskNotes, done};
    };
    const task = createTask();
    return task;
}