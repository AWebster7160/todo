export default function completeTask(arr, id) {
    const thisId = id;
    const thisTask = arr.filter((task) => task.taskId === thisId);
    if (thisTask[0].done === false) {
        Object.defineProperty(thisTask[0], 'done', {
            value: true,
        });
    } else if (thisTask[0].done === true) {
        Object.defineProperty(thisTask[0], 'done', {
            value: false,
        });
    }
}


