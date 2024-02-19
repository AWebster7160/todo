export default function showTask(id, title, notes) {
    const taskArea = document.querySelector('#task-area');
    const taskDiv = document.createElement('div');
    /* will need to determine if grid or list is toggled before setting actual class */
    taskDiv.setAttribute('class', 'card');
    taskDiv.setAttribute('id', `${id}`);
    const taskTitle = document.createElement('h3');
    taskTitle.setAttribute('class', 'card-title');
    taskTitle.textContent = title;
    const taskNotes = document.createElement('p');
    taskNotes.setAttribute('class', 'card-notes');
    taskNotes.textContent = notes;
    const checkBox = document.createElement('div');
    checkBox.setAttribute('class', 'check-box');
    const taskHeader = document.createElement('div');
    taskHeader.setAttribute('class', 'task-header');
    taskArea.appendChild(taskDiv);
    taskDiv.appendChild(taskHeader);
    taskHeader.appendChild(checkBox);
    taskHeader.appendChild(taskTitle);
    taskDiv.appendChild(taskNotes);
    

}