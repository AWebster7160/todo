export default function getTaskInfo() {
    function createTask () {
        const title = document.querySelector('#title');
        const taskTitle = title.value;
        const notes = document.querySelector('#notes');
        const taskNotes = notes.value;
        return { taskTitle, taskNotes };
    };
    const task = createTask();
    return task;
}