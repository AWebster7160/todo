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
        return { taskTitle, taskNotes };
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
    const unique = 'id' + Date.now() + (Math.random() * 10);
    return unique;
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
        (0,_show_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])(taskList[0].title);
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


function showTask(title) {
    const taskArea = document.querySelector('#task-area');
    const taskDiv = document.createElement('div');
    /* will need to determine if grid or list is toggled before setting actual class */
    taskDiv.setAttribute('class', 'card');
    taskDiv.setAttribute('id', `${(0,_get_unique_id__WEBPACK_IMPORTED_MODULE_0__["default"])()}`);
    taskDiv.textContent = title;
    taskArea.appendChild(taskDiv);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1ZlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSHNDO0FBQ087O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzQkFBc0IsNkRBQVc7QUFDakM7QUFDQSxRQUFRLHlEQUFRO0FBQ2hCLEtBQUs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcUM7O0FBRTNCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMERBQVcsR0FBRztBQUNoRDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2dldC10YXNrLWluZm8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9nZXQtdW5pcXVlLWlkLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zaG93LXRhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGFza0luZm8oKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzayAoKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRpdGxlLnZhbHVlO1xuICAgICAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlcycpO1xuICAgICAgICBjb25zdCB0YXNrTm90ZXMgPSBub3Rlcy52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHsgdGFza1RpdGxlLCB0YXNrTm90ZXMgfTtcbiAgICB9O1xuICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKCk7XG4gICAgcmV0dXJuIHRhc2s7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VW5pcXVlSWQoKSB7XG4gICAgY29uc3QgdW5pcXVlID0gJ2lkJyArIERhdGUubm93KCkgKyAoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICByZXR1cm4gdW5pcXVlO1xufSIsImltcG9ydCBzaG93VGFzayBmcm9tIFwiLi9zaG93LXRhc2suanNcIjtcbmltcG9ydCBnZXRUYXNrSW5mbyBmcm9tIFwiLi9nZXQtdGFzay1pbmZvLmpzXCI7XG5cbmNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2snKTtcbiAgICBjb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGlhbG9nJyk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtaWNvbicpO1xuICAgIGNvbnN0IHN1Ym1pdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LXRhc2snKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IFtdO1xuICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfSk7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgICB9KTtcbiAgICBzdWJtaXRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrTGlzdC5wdXNoKGdldFRhc2tJbmZvKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XG4gICAgICAgIHNob3dUYXNrKHRhc2tMaXN0WzBdLnRpdGxlKTtcbiAgICB9KSIsImltcG9ydCBnZXRVbmlxdWVJZCBmcm9tIFwiLi9nZXQtdW5pcXVlLWlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dUYXNrKHRpdGxlKSB7XG4gICAgY29uc3QgdGFza0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1hcmVhJyk7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8qIHdpbGwgbmVlZCB0byBkZXRlcm1pbmUgaWYgZ3JpZCBvciBsaXN0IGlzIHRvZ2dsZWQgYmVmb3JlIHNldHRpbmcgYWN0dWFsIGNsYXNzICovXG4gICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQnKTtcbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtnZXRVbmlxdWVJZCgpfWApO1xuICAgIHRhc2tEaXYudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICB0YXNrQXJlYS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=