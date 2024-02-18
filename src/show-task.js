import getTaskInfo from "./get-task-info";

export default function showTask() {
    getTaskInfo();
    const taskArea = document.querySelector('#task-area');
    const task = document.createElement('div');
    /* will need to determine if grid or list is toggled before setting actual class */
    task.setAttribute('class', 'card');
    task.textContent = toString(taskTitle);
    taskArea.appendChild(task);

}