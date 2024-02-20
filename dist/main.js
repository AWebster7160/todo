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
const tagBtns = document.querySelector('#tag-btns');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1owQzs7QUFFM0I7QUFDZjtBQUNBLHVCQUF1QiwwREFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTHNDO0FBQ087QUFDQztBQUNBOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxrQkFBa0IsNkRBQVc7QUFDN0I7QUFDQSxJQUFJLHlEQUFRO0FBQ1o7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkRBQVk7QUFDcEI7QUFDQSxRQUFRLDZEQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqRGM7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsR0FBRztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvY29tcGxldGUtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2dldC10YXNrLWluZm8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9nZXQtdW5pcXVlLWlkLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zaG93LWNvbXBsZXRlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc2hvdy10YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBsZXRlVGFzayhhcnIsIGlkKSB7XG4gICAgY29uc3QgdGhpc0lkID0gaWQ7XG4gICAgY29uc3QgdGhpc1Rhc2sgPSBhcnIuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRhc2tJZCA9PT0gdGhpc0lkKTtcbiAgICBpZiAodGhpc1Rhc2tbMF0uZG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXNUYXNrWzBdLCAnZG9uZScsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXNUYXNrWzBdLmRvbmUgPT09IHRydWUpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXNUYXNrWzBdLCAnZG9uZScsIHtcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbiIsImltcG9ydCBnZXRVbmlxdWVJZCBmcm9tIFwiLi9nZXQtdW5pcXVlLWlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRhc2tJbmZvKCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2sgKCkge1xuICAgICAgICBjb25zdCB0YXNrSWQgPSBnZXRVbmlxdWVJZCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSB0aXRsZS52YWx1ZTtcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZXMnKTtcbiAgICAgICAgY29uc3QgdGFza05vdGVzID0gbm90ZXMudmFsdWU7XG4gICAgICAgIGNvbnN0IGRvbmUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHsgdGFza0lkLCB0YXNrVGl0bGUsIHRhc2tOb3RlcywgZG9uZX07XG4gICAgfTtcbiAgICBjb25zdCB0YXNrID0gY3JlYXRlVGFzaygpO1xuICAgIHJldHVybiB0YXNrO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVuaXF1ZUlkKCkge1xuICAgIGNvbnN0IHVuaXF1ZSA9ICdpZCcgKyBEYXRlLm5vdygpICsgKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIGxldCB1bmlxdWVJZCA9IHVuaXF1ZS5yZXBsYWNlKCcuJywgJycpO1xuICAgIHJldHVybiB1bmlxdWVJZDtcbiAgICAvKiBleGFtcGxlIG91dHB1dCA8ZGl2IGNsYXNzPVwiY2FyZFwiIGlkPVwiaWQxNzA4MzU2NDkyOTM5MzkxNDAwMzA3MDY0NjM0MVwiPjwvZGl2PiAqL1xufSIsImltcG9ydCBzaG93VGFzayBmcm9tIFwiLi9zaG93LXRhc2suanNcIjtcbmltcG9ydCBnZXRUYXNrSW5mbyBmcm9tIFwiLi9nZXQtdGFzay1pbmZvLmpzXCI7XG5pbXBvcnQgY29tcGxldGVUYXNrIGZyb20gXCIuL2NvbXBsZXRlLXRhc2suanNcIjtcbmltcG9ydCBzaG93Q29tcGxldGUgZnJvbSBcIi4vc2hvdy1jb21wbGV0ZS5qc1wiO1xuXG5jb25zdCBuZXdUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrJyk7XG5jb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGlhbG9nJyk7XG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1pY29uJyk7XG5jb25zdCB0YWdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhZy1idG5zJyk7XG5jb25zdCBzdWJtaXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC10YXNrJyk7XG5jb25zdCB0YXNrTGlzdCA9IFtdO1xuXG5uZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG59KTtcblxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFza0RpYWxvZy5jbG9zZSgpO1xufSk7XG5cbnN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFza0xpc3QucHVzaChnZXRUYXNrSW5mbygpKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XG4gICAgc2hvd1Rhc2sodGFza0xpc3RbdGFza0xpc3QubGVuZ3RoIC0gMV0udGFza0lkLCB0YXNrTGlzdFt0YXNrTGlzdC5sZW5ndGggLSAxXS50YXNrVGl0bGUsIHRhc2tMaXN0W3Rhc2tMaXN0Lmxlbmd0aCAtIDFdLnRhc2tOb3Rlcyk7XG4gICAgdGFza0RpYWxvZy5jbG9zZSgpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2hlY2stYm94Jyk7XG4gICAgY29uc3QgZ3JhbmRwYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2FyZCcpO1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IGdyYW5kcGFyZW50LmlkO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrSWQpO1xuICAgICAgICBjb21wbGV0ZVRhc2sodGFza0xpc3QsIHRhc2tJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcbiAgICAgICAgc2hvd0NvbXBsZXRlKGdyYW5kcGFyZW50KTtcbiAgICAgICAgY29uc3Qgdmlld0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsICdzdmcnKTtcbiAgICAgICAgdmlld0JveC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcInZpZXdCb3hcIiwgXCIwIDAgMTEgOVwiKTtcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCdwYXRoJyk7XG4gICAgICAgIGNoZWNrLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiZFwiLCBcIk0wLjM3NSw0Ljg5MmwzLjIyNywzLjE0Mmw2Ljc3NSwtNy42NTlcIilcbiAgICAgICAgY2hlY2suc2V0QXR0cmlidXRlTlMobnVsbCwgXCJwYXRoTGVuZ3RoXCIsIFwiMVwiKTtcbiAgICAgICAgY2hlY2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVjaycpO1xuICAgICAgICBpZiAodGFyZ2V0LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKHRhcmdldC5maXJzdENoaWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZCh2aWV3Qm94KVxuICAgICAgICAgICAgdmlld0JveC5hcHBlbmRDaGlsZChjaGVjayk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dDb21wbGV0ZSh0YXJnZXQpIHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZG9uZScpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dUYXNrKGlkLCB0aXRsZSwgbm90ZXMpIHtcbiAgICBjb25zdCB0YXNrQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWFyZWEnKTtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLyogd2lsbCBuZWVkIHRvIGRldGVybWluZSBpZiBncmlkIG9yIGxpc3QgaXMgdG9nZ2xlZCBiZWZvcmUgc2V0dGluZyBhY3R1YWwgY2xhc3MgKi9cbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke2lkfWApO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC10aXRsZScpO1xuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIGNvbnN0IHRhc2tOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrTm90ZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLW5vdGVzJyk7XG4gICAgdGFza05vdGVzLnRleHRDb250ZW50ID0gbm90ZXM7XG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrLWJveCcpO1xuICAgIGNvbnN0IHRhc2tIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrSGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1oZWFkZXInKTtcbiAgICB0YXNrQXJlYS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tIZWFkZXIpO1xuICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tOb3Rlcyk7XG4gICAgXG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=