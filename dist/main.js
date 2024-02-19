"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["main"],{

/***/ "./src/get-task-info.js":
/*!******************************!*\
  !*** ./src/get-task-info.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTaskInfo)
/* harmony export */ });
function getTaskInfo() {
    function createTask () {
        const title = document.querySelector('#title');
        const taskTitle = title.value;
        const notes = document.querySelector('#notes');
        const taskNotes = notes.value;
        const done = false;
        return { taskTitle, taskNotes, done};
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
        (0,_show_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])(taskList[taskList.length - 1].taskTitle, taskList[taskList.length - 1].taskNotes);
        taskDialog.close();
    })

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
/* harmony import */ var _get_unique_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-unique-id */ "./src/get-unique-id.js");


function showTask(title, notes) {
    const taskArea = document.querySelector('#task-area');
    const taskDiv = document.createElement('div');
    /* will need to determine if grid or list is toggled before setting actual class */
    taskDiv.setAttribute('class', 'card');
    taskDiv.setAttribute('id', `${(0,_get_unique_id__WEBPACK_IMPORTED_MODULE_0__["default"])()}`);
    const taskTitle = document.createElement('h3');
    taskTitle.setAttribute('class', 'card-title');
    taskTitle.textContent = title;
    const taskNotes = document.createElement('p');
    taskNotes.setAttribute('class', 'card-notes');
    taskNotes.textContent = notes;
    const checkBox = document.createElement('div');
    checkBox.setAttribute('class', 'check-box');
    taskArea.appendChild(taskDiv);
    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskNotes);
    taskDiv.appendChild(checkBox);

}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTHNDO0FBQ087O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzQkFBc0IsNkRBQVc7QUFDakM7QUFDQSxRQUFRLHlEQUFRO0FBQ2hCO0FBQ0EsS0FBSzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJxQzs7QUFFM0I7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywwREFBVyxHQUFHO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvZ2V0LXRhc2staW5mby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2dldC11bmlxdWUtaWQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Nob3ctdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUYXNrSW5mbygpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrICgpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gdGl0bGUudmFsdWU7XG4gICAgICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVzJyk7XG4gICAgICAgIGNvbnN0IHRhc2tOb3RlcyA9IG5vdGVzLnZhbHVlO1xuICAgICAgICBjb25zdCBkb25lID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB7IHRhc2tUaXRsZSwgdGFza05vdGVzLCBkb25lfTtcbiAgICB9O1xuICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKCk7XG4gICAgcmV0dXJuIHRhc2s7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VW5pcXVlSWQoKSB7XG4gICAgY29uc3QgdW5pcXVlID0gJ2lkJyArIERhdGUubm93KCkgKyAoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgbGV0IHVuaXF1ZUlkID0gdW5pcXVlLnJlcGxhY2UoJy4nLCAnJyk7XG4gICAgcmV0dXJuIHVuaXF1ZUlkO1xuICAgIC8qIGV4YW1wbGUgb3V0cHV0IDxkaXYgY2xhc3M9XCJjYXJkXCIgaWQ9XCJpZDE3MDgzNTY0OTI5MzkzOTE0MDAzMDcwNjQ2MzQxXCI+PC9kaXY+ICovXG59IiwiaW1wb3J0IHNob3dUYXNrIGZyb20gXCIuL3Nob3ctdGFzay5qc1wiO1xuaW1wb3J0IGdldFRhc2tJbmZvIGZyb20gXCIuL2dldC10YXNrLWluZm8uanNcIjtcblxuY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzaycpO1xuICAgIGNvbnN0IHRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kaWFsb2cnKTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1pY29uJyk7XG4gICAgY29uc3Qgc3VibWl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtdGFzaycpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gW107XG4gICAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9KTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza0RpYWxvZy5jbG9zZSgpO1xuICAgIH0pO1xuICAgIHN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2tMaXN0LnB1c2goZ2V0VGFza0luZm8oKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcbiAgICAgICAgc2hvd1Rhc2sodGFza0xpc3RbdGFza0xpc3QubGVuZ3RoIC0gMV0udGFza1RpdGxlLCB0YXNrTGlzdFt0YXNrTGlzdC5sZW5ndGggLSAxXS50YXNrTm90ZXMpO1xuICAgICAgICB0YXNrRGlhbG9nLmNsb3NlKCk7XG4gICAgfSkiLCJpbXBvcnQgZ2V0VW5pcXVlSWQgZnJvbSBcIi4vZ2V0LXVuaXF1ZS1pZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93VGFzayh0aXRsZSwgbm90ZXMpIHtcbiAgICBjb25zdCB0YXNrQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWFyZWEnKTtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLyogd2lsbCBuZWVkIHRvIGRldGVybWluZSBpZiBncmlkIG9yIGxpc3QgaXMgdG9nZ2xlZCBiZWZvcmUgc2V0dGluZyBhY3R1YWwgY2xhc3MgKi9cbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke2dldFVuaXF1ZUlkKCl9YCk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLXRpdGxlJyk7XG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgY29uc3QgdGFza05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tOb3Rlcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtbm90ZXMnKTtcbiAgICB0YXNrTm90ZXMudGV4dENvbnRlbnQgPSBub3RlcztcbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2stYm94Jyk7XG4gICAgdGFza0FyZWEuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza05vdGVzKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==