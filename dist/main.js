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
        }
        console.log(taskList)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1owQzs7QUFFM0I7QUFDZjtBQUNBLHVCQUF1QiwwREFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNMc0M7QUFDTztBQUNDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0JBQXNCLDZEQUFXO0FBQ2pDO0FBQ0EsUUFBUSx5REFBUTtBQUNoQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZEQUFZO0FBQ3hCO0FBQ0E7QUFDQSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7QUM5QlU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxHQUFHO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wbGV0ZS10YXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZ2V0LXRhc2staW5mby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2dldC11bmlxdWUtaWQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Nob3ctdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wbGV0ZVRhc2soYXJyLCBpZCkge1xuICAgIGNvbnN0IHRoaXNJZCA9IGlkO1xuICAgIGNvbnN0IHRoaXNUYXNrID0gYXJyLmZpbHRlcigodGFzaykgPT4gdGFzay50YXNrSWQgPT09IHRoaXNJZCk7XG4gICAgaWYgKHRoaXNUYXNrWzBdLmRvbmUgPT09IGZhbHNlKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzVGFza1swXSwgJ2RvbmUnLCB7XG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzVGFza1swXS5kb25lID09PSB0cnVlKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzVGFza1swXSwgJ2RvbmUnLCB7XG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgZ2V0VW5pcXVlSWQgZnJvbSBcIi4vZ2V0LXVuaXF1ZS1pZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUYXNrSW5mbygpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrICgpIHtcbiAgICAgICAgY29uc3QgdGFza0lkID0gZ2V0VW5pcXVlSWQoKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gdGl0bGUudmFsdWU7XG4gICAgICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVzJyk7XG4gICAgICAgIGNvbnN0IHRhc2tOb3RlcyA9IG5vdGVzLnZhbHVlO1xuICAgICAgICBjb25zdCBkb25lID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB7IHRhc2tJZCwgdGFza1RpdGxlLCB0YXNrTm90ZXMsIGRvbmV9O1xuICAgIH07XG4gICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2soKTtcbiAgICByZXR1cm4gdGFzaztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVbmlxdWVJZCgpIHtcbiAgICBjb25zdCB1bmlxdWUgPSAnaWQnICsgRGF0ZS5ub3coKSArIChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICBsZXQgdW5pcXVlSWQgPSB1bmlxdWUucmVwbGFjZSgnLicsICcnKTtcbiAgICByZXR1cm4gdW5pcXVlSWQ7XG4gICAgLyogZXhhbXBsZSBvdXRwdXQgPGRpdiBjbGFzcz1cImNhcmRcIiBpZD1cImlkMTcwODM1NjQ5MjkzOTM5MTQwMDMwNzA2NDYzNDFcIj48L2Rpdj4gKi9cbn0iLCJpbXBvcnQgc2hvd1Rhc2sgZnJvbSBcIi4vc2hvdy10YXNrLmpzXCI7XG5pbXBvcnQgZ2V0VGFza0luZm8gZnJvbSBcIi4vZ2V0LXRhc2staW5mby5qc1wiO1xuaW1wb3J0IGNvbXBsZXRlVGFzayBmcm9tIFwiLi9jb21wbGV0ZS10YXNrLmpzXCI7XG5cbmNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2snKTtcbiAgICBjb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGlhbG9nJyk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtaWNvbicpO1xuICAgIGNvbnN0IHN1Ym1pdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LXRhc2snKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IFtdO1xuICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfSk7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgICB9KTtcbiAgICBzdWJtaXRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrTGlzdC5wdXNoKGdldFRhc2tJbmZvKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XG4gICAgICAgIHNob3dUYXNrKHRhc2tMaXN0W3Rhc2tMaXN0Lmxlbmd0aCAtIDFdLnRhc2tJZCwgdGFza0xpc3RbdGFza0xpc3QubGVuZ3RoIC0gMV0udGFza1RpdGxlLCB0YXNrTGlzdFt0YXNrTGlzdC5sZW5ndGggLSAxXS50YXNrTm90ZXMpO1xuICAgICAgICB0YXNrRGlhbG9nLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2hlY2stYm94Jyk7XG4gICAgICAgIGNvbnN0IGdyYW5kcGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnLmNhcmQnKTtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgY29uc3QgdGFza0lkID0gZ3JhbmRwYXJlbnQuaWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrSWQpO1xuICAgICAgICAgICAgY29tcGxldGVUYXNrKHRhc2tMaXN0LCB0YXNrSWQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KVxuICAgIH0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd1Rhc2soaWQsIHRpdGxlLCBub3Rlcykge1xuICAgIGNvbnN0IHRhc2tBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stYXJlYScpO1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvKiB3aWxsIG5lZWQgdG8gZGV0ZXJtaW5lIGlmIGdyaWQgb3IgbGlzdCBpcyB0b2dnbGVkIGJlZm9yZSBzZXR0aW5nIGFjdHVhbCBjbGFzcyAqL1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XG4gICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aWR9YCk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLXRpdGxlJyk7XG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgY29uc3QgdGFza05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tOb3Rlcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtbm90ZXMnKTtcbiAgICB0YXNrTm90ZXMudGV4dENvbnRlbnQgPSBub3RlcztcbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2stYm94Jyk7XG4gICAgY29uc3QgdGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tIZWFkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWhlYWRlcicpO1xuICAgIHRhc2tBcmVhLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0hlYWRlcik7XG4gICAgdGFza0hlYWRlci5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgdGFza0hlYWRlci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza05vdGVzKTtcbiAgICBcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==