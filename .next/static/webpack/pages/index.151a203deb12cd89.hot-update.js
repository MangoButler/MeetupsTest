"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\n\nfunction HomePage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            meetups: props.meetups\n        }, void 0, false, {\n            fileName: \"/Users/hegichristian/Documents/ReactCompleteGuide/nextjs-project/pages/index.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/hegichristian/Documents/ReactCompleteGuide/nextjs-project/pages/index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = HomePage;\nvar __N_SSG = true;\n//always needs to return an object with a props property\n//this props item is an object that will be received by the Home page as props\n//if a function called getStaticProbs is defined in a page component (only in a page component),\n//then nex.js will execute the function during the built process\n//revalidate the page on the server ever n seconds so that static html content is repregenerated after deployment\n// all this code in the getStaticProps will never be excecuted on the client side, this is why it can also be used to connect to a data base\n// export async function getServerSideProps (context) {\n//     const req = context.req;\n//     const res = context.res;\n//     return {\n//         props: {\n//             meetups: dummyMeetups\n//         }\n//     }\n// };\n//!!!!!!Will run on the server after deployment, means you need to wait for the data before page is loaded, get static props is better if you dont need data that changes frequently\n//only should be used if access to the req and res object is needed, fe if auth is important\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFpQztBQUN5QjtBQUcxRCxTQUFTRSxRQUFRLENBQUNDLEtBQUssRUFBRTtJQUN2QixxQkFDRSw4REFBQ0gsMkNBQVE7a0JBQ1AsNEVBQUNDLHNFQUFVO1lBQUNHLE9BQU8sRUFBRUQsS0FBSyxDQUFDQyxPQUFPOzs7OztnQkFBSTs7Ozs7WUFDN0IsQ0FDWDtBQUNKLENBQUM7QUFOUUYsS0FBQUEsUUFBUTs7QUFnQ2pCLHdEQUF3RDtBQUN4RCw4RUFBOEU7QUFDOUUsZ0dBQWdHO0FBQ2hHLGdFQUFnRTtBQUNoRSxpSEFBaUg7QUFDakgsNElBQTRJO0FBRTVJLHVEQUF1RDtBQUN2RCwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsb0NBQW9DO0FBQ3BDLFlBQVk7QUFDWixRQUFRO0FBQ1IsS0FBSztBQUVMLG9MQUFvTDtBQUNwTCw0RkFBNEY7QUFFNUYsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL2NocmlzdGlhbmhlZ2k6blkwR0UxUXFCR3gzNUVUa0ByZWFjdGNsdXN0ZXIuZDdneHVscC5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXG4gICk7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcblxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcbiAgY2xpZW50LmNsb3NlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcbiAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4gICAgICB9KSksXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAzNjAwLFxuICB9O1xufVxuXG4vL2Fsd2F5cyBuZWVkcyB0byByZXR1cm4gYW4gb2JqZWN0IHdpdGggYSBwcm9wcyBwcm9wZXJ0eVxuLy90aGlzIHByb3BzIGl0ZW0gaXMgYW4gb2JqZWN0IHRoYXQgd2lsbCBiZSByZWNlaXZlZCBieSB0aGUgSG9tZSBwYWdlIGFzIHByb3BzXG4vL2lmIGEgZnVuY3Rpb24gY2FsbGVkIGdldFN0YXRpY1Byb2JzIGlzIGRlZmluZWQgaW4gYSBwYWdlIGNvbXBvbmVudCAob25seSBpbiBhIHBhZ2UgY29tcG9uZW50KSxcbi8vdGhlbiBuZXguanMgd2lsbCBleGVjdXRlIHRoZSBmdW5jdGlvbiBkdXJpbmcgdGhlIGJ1aWx0IHByb2Nlc3Ncbi8vcmV2YWxpZGF0ZSB0aGUgcGFnZSBvbiB0aGUgc2VydmVyIGV2ZXIgbiBzZWNvbmRzIHNvIHRoYXQgc3RhdGljIGh0bWwgY29udGVudCBpcyByZXByZWdlbmVyYXRlZCBhZnRlciBkZXBsb3ltZW50XG4vLyBhbGwgdGhpcyBjb2RlIGluIHRoZSBnZXRTdGF0aWNQcm9wcyB3aWxsIG5ldmVyIGJlIGV4Y2VjdXRlZCBvbiB0aGUgY2xpZW50IHNpZGUsIHRoaXMgaXMgd2h5IGl0IGNhbiBhbHNvIGJlIHVzZWQgdG8gY29ubmVjdCB0byBhIGRhdGEgYmFzZVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzIChjb250ZXh0KSB7XG4vLyAgICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XG4vLyAgICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcHJvcHM6IHtcbi8vICAgICAgICAgICAgIG1lZXR1cHM6IGR1bW15TWVldHVwc1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfTtcblxuLy8hISEhISFXaWxsIHJ1biBvbiB0aGUgc2VydmVyIGFmdGVyIGRlcGxveW1lbnQsIG1lYW5zIHlvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBkYXRhIGJlZm9yZSBwYWdlIGlzIGxvYWRlZCwgZ2V0IHN0YXRpYyBwcm9wcyBpcyBiZXR0ZXIgaWYgeW91IGRvbnQgbmVlZCBkYXRhIHRoYXQgY2hhbmdlcyBmcmVxdWVudGx5XG4vL29ubHkgc2hvdWxkIGJlIHVzZWQgaWYgYWNjZXNzIHRvIHRoZSByZXEgYW5kIHJlcyBvYmplY3QgaXMgbmVlZGVkLCBmZSBpZiBhdXRoIGlzIGltcG9ydGFudFxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsIk1lZXR1cExpc3QiLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});