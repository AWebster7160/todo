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
    const submitTask = document.querySelector('#submit-task');
    submitTask
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_task_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-task-info */ "./src/get-task-info.js");


const newTask = document.querySelector('#new-task');
    const taskDialog = document.querySelector('#task-dialog');
    newTask.addEventListener('click', () => {
        taskDialog.showModal();
    });

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0gwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9nZXQtdGFzay1pbmZvLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGFza0luZm8oKSB7XG4gICAgY29uc3Qgc3VibWl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtdGFzaycpO1xuICAgIHN1Ym1pdFRhc2tcbn0iLCJpbXBvcnQgZ2V0VGFza0luZm8gZnJvbSBcIi4vZ2V0LXRhc2staW5mb1wiO1xuXG5jb25zdCBuZXdUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrJyk7XG4gICAgY29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRpYWxvZycpO1xuICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9