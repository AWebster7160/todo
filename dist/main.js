"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_task_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-task-dialog */ "./src/show-task-dialog.js");


const newTask = document.querySelector('#new-task');
    const taskDialog = document.querySelector('#task-dialog');
    newTask.addEventListener('click', () => {
        taskDialog.showModal();
    });

/***/ }),

/***/ "./src/show-task-dialog.js":
/*!*********************************!*\
  !*** ./src/show-task-dialog.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showTaskDialog)
/* harmony export */ });
function showTaskDialog() {
    
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7Ozs7Ozs7Ozs7OztBQ05VO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zaG93LXRhc2stZGlhbG9nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG93VGFza0RpYWxvZyBmcm9tIFwiLi9zaG93LXRhc2stZGlhbG9nXCI7XG5cbmNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2snKTtcbiAgICBjb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGlhbG9nJyk7XG4gICAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93VGFza0RpYWxvZygpIHtcbiAgICBcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=