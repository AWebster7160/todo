import getTaskInfo from "./get-task-info";

const newTask = document.querySelector('#new-task');
    const taskDialog = document.querySelector('#task-dialog');
    newTask.addEventListener('click', () => {
        taskDialog.showModal();
    });