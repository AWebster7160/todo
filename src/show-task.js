import getUniqueId from "./get-unique-id";

export default function showTask(title) {
    const taskArea = document.querySelector('#task-area');
    const taskDiv = document.createElement('div');
    /* will need to determine if grid or list is toggled before setting actual class */
    taskDiv.setAttribute('class', 'card');
    taskDiv.setAttribute('id', `${getUniqueId()}`);
    taskDiv.textContent = title;
    taskArea.appendChild(taskDiv);
}