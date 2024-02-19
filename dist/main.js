"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["main"],{

/***/ "./src/complete-task.js":
/*!******************************!*\
  !*** ./src/complete-task.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ completeTask)
/* harmony export */ });
function completeTask(arr, id) {
    const thisId = id;
    const thisTask = arr.filter(task => {
        return task.taskId === thisId
    });
    thisTask.done = true;
    return thisTask;
}

/***/ }),

/***/ "./src/get-task-info.js":
/*!******************************!*\
  !*** ./src/get-task-info.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTaskInfo)
/* harmony export */ });
/* harmony import */ var _get_unique_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-unique-id */ "./src/get-unique-id.js");


function getTaskInfo() {
    function createTask () {
        const taskId = (0,_get_unique_id__WEBPACK_IMPORTED_MODULE_0__["default"])();
        const title = document.querySelector('#title');
        const taskTitle = title.value;
        const notes = document.querySelector('#notes');
        const taskNotes = notes.value;
        const done = false;
        return { taskId, taskTitle, taskNotes, done};
    };
    const task = createTask();
    return task;
}

/***/ }),

/***/ "./src/get-unique-id.js":
/*!******************************!*\
  !*** ./src/get-unique-id.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUniqueId)
/* harmony export */ });
function getUniqueId() {
    const unique = 'id' + Date.now() + (Math.random() * 100);
    let uniqueId = unique.replace('.', '');
    return uniqueId;
    /* example output <div class="card" id="id17083564929393914003070646341"></div> */
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-task.js */ "./src/show-task.js");
/* harmony import */ var _get_task_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-task-info.js */ "./src/get-task-info.js");
/* harmony import */ var _complete_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complete-task.js */ "./src/complete-task.js");




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
        taskList.push((0,_get_task_info_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
        console.log(taskList);
        (0,_show_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])(taskList[taskList.length - 1].taskId, taskList[taskList.length - 1].taskTitle, taskList[taskList.length - 1].taskNotes);
        taskDialog.close();
    });
    document.addEventListener('click', (e) => {
        const target = e.target.closest('.check-box');
        const id = e.target.id;
        if (target) {
            (0,_complete_task_js__WEBPACK_IMPORTED_MODULE_2__["default"])(taskList, id);
        }
    });


/***/ }),

/***/ "./src/show-task.js":
/*!**************************!*\
  !*** ./src/show-task.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showTask)
/* harmony export */ });
function showTask(id, title, notes) {
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQMEM7O0FBRTNCO0FBQ2Y7QUFDQSx1QkFBdUIsMERBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNkZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTHNDO0FBQ087QUFDQzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHNCQUFzQiw2REFBVztBQUNqQztBQUNBLFFBQVEseURBQVE7QUFDaEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZEQUFZO0FBQ3hCO0FBQ0EsS0FBSzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JVO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsR0FBRztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvY29tcGxldGUtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2dldC10YXNrLWluZm8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9nZXQtdW5pcXVlLWlkLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zaG93LXRhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGxldGVUYXNrKGFyciwgaWQpIHtcbiAgICBjb25zdCB0aGlzSWQgPSBpZDtcbiAgICBjb25zdCB0aGlzVGFzayA9IGFyci5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgIHJldHVybiB0YXNrLnRhc2tJZCA9PT0gdGhpc0lkXG4gICAgfSk7XG4gICAgdGhpc1Rhc2suZG9uZSA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXNUYXNrO1xufSIsImltcG9ydCBnZXRVbmlxdWVJZCBmcm9tIFwiLi9nZXQtdW5pcXVlLWlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRhc2tJbmZvKCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2sgKCkge1xuICAgICAgICBjb25zdCB0YXNrSWQgPSBnZXRVbmlxdWVJZCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSB0aXRsZS52YWx1ZTtcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZXMnKTtcbiAgICAgICAgY29uc3QgdGFza05vdGVzID0gbm90ZXMudmFsdWU7XG4gICAgICAgIGNvbnN0IGRvbmUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHsgdGFza0lkLCB0YXNrVGl0bGUsIHRhc2tOb3RlcywgZG9uZX07XG4gICAgfTtcbiAgICBjb25zdCB0YXNrID0gY3JlYXRlVGFzaygpO1xuICAgIHJldHVybiB0YXNrO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVuaXF1ZUlkKCkge1xuICAgIGNvbnN0IHVuaXF1ZSA9ICdpZCcgKyBEYXRlLm5vdygpICsgKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIGxldCB1bmlxdWVJZCA9IHVuaXF1ZS5yZXBsYWNlKCcuJywgJycpO1xuICAgIHJldHVybiB1bmlxdWVJZDtcbiAgICAvKiBleGFtcGxlIG91dHB1dCA8ZGl2IGNsYXNzPVwiY2FyZFwiIGlkPVwiaWQxNzA4MzU2NDkyOTM5MzkxNDAwMzA3MDY0NjM0MVwiPjwvZGl2PiAqL1xufSIsImltcG9ydCBzaG93VGFzayBmcm9tIFwiLi9zaG93LXRhc2suanNcIjtcbmltcG9ydCBnZXRUYXNrSW5mbyBmcm9tIFwiLi9nZXQtdGFzay1pbmZvLmpzXCI7XG5pbXBvcnQgY29tcGxldGVUYXNrIGZyb20gXCIuL2NvbXBsZXRlLXRhc2suanNcIjtcblxuY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzaycpO1xuICAgIGNvbnN0IHRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kaWFsb2cnKTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1pY29uJyk7XG4gICAgY29uc3Qgc3VibWl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtdGFzaycpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gW107XG4gICAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9KTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza0RpYWxvZy5jbG9zZSgpO1xuICAgIH0pO1xuICAgIHN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2tMaXN0LnB1c2goZ2V0VGFza0luZm8oKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcbiAgICAgICAgc2hvd1Rhc2sodGFza0xpc3RbdGFza0xpc3QubGVuZ3RoIC0gMV0udGFza0lkLCB0YXNrTGlzdFt0YXNrTGlzdC5sZW5ndGggLSAxXS50YXNrVGl0bGUsIHRhc2tMaXN0W3Rhc2tMaXN0Lmxlbmd0aCAtIDFdLnRhc2tOb3Rlcyk7XG4gICAgICAgIHRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jaGVjay1ib3gnKTtcbiAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgY29tcGxldGVUYXNrKHRhc2tMaXN0LCBpZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dUYXNrKGlkLCB0aXRsZSwgbm90ZXMpIHtcbiAgICBjb25zdCB0YXNrQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWFyZWEnKTtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLyogd2lsbCBuZWVkIHRvIGRldGVybWluZSBpZiBncmlkIG9yIGxpc3QgaXMgdG9nZ2xlZCBiZWZvcmUgc2V0dGluZyBhY3R1YWwgY2xhc3MgKi9cbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke2lkfWApO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC10aXRsZScpO1xuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIGNvbnN0IHRhc2tOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrTm90ZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLW5vdGVzJyk7XG4gICAgdGFza05vdGVzLnRleHRDb250ZW50ID0gbm90ZXM7XG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrLWJveCcpO1xuICAgIGNvbnN0IHRhc2tIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrSGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1oZWFkZXInKTtcbiAgICB0YXNrQXJlYS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tIZWFkZXIpO1xuICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tOb3Rlcyk7XG4gICAgXG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=