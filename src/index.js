import showTask from "./show-task";

const newTask = document.querySelector('#new-task');
    const taskDialog = document.querySelector('#task-dialog');
    const closeBtn = document.querySelector('#close-icon');
    const submitTask = document.querySelector('#submit-task');

    newTask.addEventListener('click', () => {
        taskDialog.showModal();
    });
    closeBtn.addEventListener('click', () => {
        taskDialog.close();
    });
    submitTask.addEventListener('click', () => {
        showTask();
    })