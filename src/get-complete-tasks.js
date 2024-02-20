export default function getCompleteTasks (arr) {
    const completeTasks = arr.filter((task) => task.done === true);
    console.log(completeTasks);
}
