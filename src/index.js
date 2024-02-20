import showTask from "./show-task.js";
import getTaskInfo from "./get-task-info.js";
import completeTask from "./complete-task.js";
import showComplete from "./show-complete.js";
import getCompleteTasks from "./get-complete-tasks.js";

const newTask = document.querySelector('#new-task');
const taskDialog = document.querySelector('#task-dialog');
const closeBtn = document.querySelector('#close-icon');
const submitTask = document.querySelector('#submit-task');
const completTaskBtn = document.querySelector('#complete-task-btn')
const tagBtns = document.querySelector('#tag-btns');

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
    const grandparent = e.target.closest('.card');
        if (target) {
        const taskId = grandparent.id;
        console.log(taskId);
        completeTask(taskList, taskId);
        console.log(taskList);
        showComplete(grandparent);
        const viewBox = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        viewBox.setAttributeNS(null, "viewBox", "0 0 11 9");
        const check = document.createElementNS("http://www.w3.org/2000/svg",'path');
        check.setAttributeNS(null, "d", "M0.375,4.892l3.227,3.142l6.775,-7.659")
        check.setAttributeNS(null, "pathLength", "1");
        check.setAttribute('class', 'check');
        if (target.childNodes.length > 0) {
            target.removeChild(target.firstChild);
        } else {
            target.appendChild(viewBox)
            viewBox.appendChild(check);
        }
    }
});


completTaskBtn.addEventListener('click', () => {
    getCompleteTasks(taskList);
})