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
/* harmony import */ var _show_complete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-complete.js */ "./src/show-complete.js");





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
        const grandparent = e.target.closest('.card');
        if (target) {
            const taskId = grandparent.id;
            console.log(taskId);
            (0,_complete_task_js__WEBPACK_IMPORTED_MODULE_2__["default"])(taskList, taskId);
            console.log(taskList);
            (0,_show_complete_js__WEBPACK_IMPORTED_MODULE_3__["default"])(grandparent);
            const check = document.createElement('img');
            check.src = ('./assets/check.svg');
            target.appendChild(check);
            
        }
    });


/***/ }),

/***/ "./src/show-complete.js":
/*!******************************!*\
  !*** ./src/show-complete.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showComplete)
/* harmony export */ });
function showComplete(target) {
    target.classList.toggle('done');
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1owQzs7QUFFM0I7QUFDZjtBQUNBLHVCQUF1QiwwREFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTHNDO0FBQ087QUFDQztBQUNBOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0JBQXNCLDZEQUFXO0FBQ2pDO0FBQ0EsUUFBUSx5REFBUTtBQUNoQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZEQUFZO0FBQ3hCO0FBQ0EsWUFBWSw2REFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7Ozs7Ozs7Ozs7Ozs7O0FDcENVO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLEdBQUc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBsZXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9nZXQtdGFzay1pbmZvLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZ2V0LXVuaXF1ZS1pZC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc2hvdy1jb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Nob3ctdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wbGV0ZVRhc2soYXJyLCBpZCkge1xuICAgIGNvbnN0IHRoaXNJZCA9IGlkO1xuICAgIGNvbnN0IHRoaXNUYXNrID0gYXJyLmZpbHRlcigodGFzaykgPT4gdGFzay50YXNrSWQgPT09IHRoaXNJZCk7XG4gICAgaWYgKHRoaXNUYXNrWzBdLmRvbmUgPT09IGZhbHNlKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzVGFza1swXSwgJ2RvbmUnLCB7XG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzVGFza1swXS5kb25lID09PSB0cnVlKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzVGFza1swXSwgJ2RvbmUnLCB7XG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgZ2V0VW5pcXVlSWQgZnJvbSBcIi4vZ2V0LXVuaXF1ZS1pZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUYXNrSW5mbygpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrICgpIHtcbiAgICAgICAgY29uc3QgdGFza0lkID0gZ2V0VW5pcXVlSWQoKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gdGl0bGUudmFsdWU7XG4gICAgICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVzJyk7XG4gICAgICAgIGNvbnN0IHRhc2tOb3RlcyA9IG5vdGVzLnZhbHVlO1xuICAgICAgICBjb25zdCBkb25lID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB7IHRhc2tJZCwgdGFza1RpdGxlLCB0YXNrTm90ZXMsIGRvbmV9O1xuICAgIH07XG4gICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2soKTtcbiAgICByZXR1cm4gdGFzaztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVbmlxdWVJZCgpIHtcbiAgICBjb25zdCB1bmlxdWUgPSAnaWQnICsgRGF0ZS5ub3coKSArIChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICBsZXQgdW5pcXVlSWQgPSB1bmlxdWUucmVwbGFjZSgnLicsICcnKTtcbiAgICByZXR1cm4gdW5pcXVlSWQ7XG4gICAgLyogZXhhbXBsZSBvdXRwdXQgPGRpdiBjbGFzcz1cImNhcmRcIiBpZD1cImlkMTcwODM1NjQ5MjkzOTM5MTQwMDMwNzA2NDYzNDFcIj48L2Rpdj4gKi9cbn0iLCJpbXBvcnQgc2hvd1Rhc2sgZnJvbSBcIi4vc2hvdy10YXNrLmpzXCI7XG5pbXBvcnQgZ2V0VGFza0luZm8gZnJvbSBcIi4vZ2V0LXRhc2staW5mby5qc1wiO1xuaW1wb3J0IGNvbXBsZXRlVGFzayBmcm9tIFwiLi9jb21wbGV0ZS10YXNrLmpzXCI7XG5pbXBvcnQgc2hvd0NvbXBsZXRlIGZyb20gXCIuL3Nob3ctY29tcGxldGUuanNcIjtcblxuY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzaycpO1xuICAgIGNvbnN0IHRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kaWFsb2cnKTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1pY29uJyk7XG4gICAgY29uc3Qgc3VibWl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtdGFzaycpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gW107XG4gICAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9KTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza0RpYWxvZy5jbG9zZSgpO1xuICAgIH0pO1xuICAgIHN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2tMaXN0LnB1c2goZ2V0VGFza0luZm8oKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcbiAgICAgICAgc2hvd1Rhc2sodGFza0xpc3RbdGFza0xpc3QubGVuZ3RoIC0gMV0udGFza0lkLCB0YXNrTGlzdFt0YXNrTGlzdC5sZW5ndGggLSAxXS50YXNrVGl0bGUsIHRhc2tMaXN0W3Rhc2tMaXN0Lmxlbmd0aCAtIDFdLnRhc2tOb3Rlcyk7XG4gICAgICAgIHRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jaGVjay1ib3gnKTtcbiAgICAgICAgY29uc3QgZ3JhbmRwYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2FyZCcpO1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrSWQgPSBncmFuZHBhcmVudC5pZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tJZCk7XG4gICAgICAgICAgICBjb21wbGV0ZVRhc2sodGFza0xpc3QsIHRhc2tJZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XG4gICAgICAgICAgICBzaG93Q29tcGxldGUoZ3JhbmRwYXJlbnQpO1xuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGNoZWNrLnNyYyA9ICgnLi9hc3NldHMvY2hlY2suc3ZnJyk7XG4gICAgICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoY2hlY2spO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dDb21wbGV0ZSh0YXJnZXQpIHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZG9uZScpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dUYXNrKGlkLCB0aXRsZSwgbm90ZXMpIHtcbiAgICBjb25zdCB0YXNrQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWFyZWEnKTtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLyogd2lsbCBuZWVkIHRvIGRldGVybWluZSBpZiBncmlkIG9yIGxpc3QgaXMgdG9nZ2xlZCBiZWZvcmUgc2V0dGluZyBhY3R1YWwgY2xhc3MgKi9cbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke2lkfWApO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC10aXRsZScpO1xuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIGNvbnN0IHRhc2tOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrTm90ZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLW5vdGVzJyk7XG4gICAgdGFza05vdGVzLnRleHRDb250ZW50ID0gbm90ZXM7XG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrLWJveCcpO1xuICAgIGNvbnN0IHRhc2tIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrSGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1oZWFkZXInKTtcbiAgICB0YXNrQXJlYS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tIZWFkZXIpO1xuICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tOb3Rlcyk7XG4gICAgXG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=