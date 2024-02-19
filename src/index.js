import showTask from "./show-task.js";
import getTaskInfo from "./get-task-info.js";
import completeTask from "./complete-task.js";

const newTask = document.querySelector('#new-task');
    const taskDialog = document.querySelector('#task-dialog');
    const closeBtn = document.querySelector('#close-icon');
    const submitTask = document.querySelector('#submit-task');
    const taskList = [];
    newTask.addEventListener('click', () => {
        taskDialog.showModal();
    });
    closeBtn.addEventListener('click', () => {
        taskDialog.close();
    });
    submitTask.addEventListener('click', () => {
        taskList.push(getTaskInfo());
        console.log(taskList);
        showTask(taskList[taskList.length - 1].taskId, taskList[taskList.length - 1].taskTitle, taskList[taskList.length - 1].taskNotes);
        taskDialog.close();
    });
    document.addEventListener('click', (e) => {
        const target = e.target.closest('.check-box');
        const targetId = e.target.closest('.card');
        if (target) {
            const taskId = targetId.id;
            console.log(taskId);
            completeTask(taskList, taskId);
        }
    });
