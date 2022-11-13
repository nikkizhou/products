"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./cart_redux/cart.slice.ts":
/*!**********************************!*\
  !*** ./cart_redux/cart.slice.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToCart\": function() { return /* binding */ addToCart; },\n/* harmony export */   \"cartReducer\": function() { return /* binding */ cartReducer; },\n/* harmony export */   \"decrementQuantity\": function() { return /* binding */ decrementQuantity; },\n/* harmony export */   \"incrementQuantity\": function() { return /* binding */ incrementQuantity; },\n/* harmony export */   \"removeFromCart\": function() { return /* binding */ removeFromCart; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\n\n\nvar cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState: [],\n    reducers: {\n        addToCart: function(state, action) {\n            var itemExists = state.find(function(item) {\n                return item.id === action.payload.id;\n            });\n            itemExists ? itemExists.quantity++ : state.push((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, action.payload), {\n                quantity: 1\n            }));\n        },\n        incrementQuantity: function(state, action) {\n            var item = state.find(function(item) {\n                return item.id === action.payload;\n            });\n            item.quantity++;\n        },\n        decrementQuantity: function(state, action) {\n            var item = state.find(function(item) {\n                return item.id === action.payload;\n            });\n            if ((item === null || item === void 0 ? void 0 : item.quantity) == 1) {\n                var index = state.findIndex(function(item) {\n                    return item.id === action.payload;\n                });\n                state.splice(index, 1);\n            } else {\n                item.quantity--;\n            }\n        },\n        removeFromCart: function(state, action) {\n            var index = state.findIndex(function(item) {\n                return item.id === action.payload;\n            });\n            state.splice(index, 1);\n        }\n    }\n});\nvar cartReducer = cartSlice.reducer;\nvar _actions = cartSlice.actions;\nvar addToCart = _actions.addToCart, incrementQuantity = _actions.incrementQuantity, decrementQuantity = _actions.decrementQuantity, removeFromCart = _actions.removeFromCart;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jYXJ0X3JlZHV4L2NhcnQuc2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0M7QUFHL0MsSUFBTUMsU0FBUyxHQUFHRCw2REFBVyxDQUFDO0lBQzVCRSxJQUFJLEVBQUUsTUFBTTtJQUNaQyxZQUFZLEVBQUUsRUFBRTtJQUNoQkMsUUFBUSxFQUFFO1FBQ1JDLFNBQVMsRUFBRSxTQUFDQyxLQUFlLEVBQUVDLE1BQU0sRUFBSztZQUN0QyxJQUFNQyxVQUFVLEdBQXdCRixLQUFLLENBQUNHLElBQUksQ0FBQyxTQUFDQyxJQUFhO3VCQUFLQSxJQUFJLENBQUNDLEVBQUUsS0FBS0osTUFBTSxDQUFDSyxPQUFPLENBQUNELEVBQUU7YUFBQSxDQUFDO1lBQ3BHSCxVQUFVLEdBQUdBLFVBQVUsQ0FBQ0ssUUFBUSxFQUFFLEdBQUdQLEtBQUssQ0FBQ1EsSUFBSSxDQUFDLHdLQUFLUCxNQUFNLENBQUNLLE9BQU87Z0JBQUVDLFFBQVEsRUFBRSxDQUFDO2NBQUUsQ0FBQztRQUNyRixDQUFDO1FBRURFLGlCQUFpQixFQUFFLFNBQUNULEtBQWdCLEVBQUVDLE1BQU0sRUFBSztZQUMvQyxJQUFNRyxJQUFJLEdBQXdCSixLQUFLLENBQUNHLElBQUksQ0FBQyxTQUFDQyxJQUFhO3VCQUFLQSxJQUFJLENBQUNDLEVBQUUsS0FBS0osTUFBTSxDQUFDSyxPQUFPO2FBQUEsQ0FBQztZQUMzRkYsSUFBSSxDQUFDRyxRQUFRLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBRURHLGlCQUFpQixFQUFFLFNBQUNWLEtBQWdCLEVBQUVDLE1BQU0sRUFBSztZQUMvQyxJQUFNRyxJQUFJLEdBQXNCSixLQUFLLENBQUNHLElBQUksQ0FBQyxTQUFDQyxJQUFhO3VCQUFLQSxJQUFJLENBQUNDLEVBQUUsS0FBS0osTUFBTSxDQUFDSyxPQUFPO2FBQUEsQ0FBQztZQUN6RixJQUFJRixDQUFBQSxJQUFJLGFBQUpBLElBQUksV0FBVSxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLElBQUksQ0FBRUcsUUFBUSxLQUFJLENBQUMsRUFBRTtnQkFDdkIsSUFBTUksS0FBSyxHQUFvQlgsS0FBSyxDQUFDWSxTQUFTLENBQUMsU0FBQ1IsSUFBSTsyQkFBS0EsSUFBSSxDQUFDQyxFQUFFLEtBQUtKLE1BQU0sQ0FBQ0ssT0FBTztpQkFBQSxDQUFDO2dCQUNwRk4sS0FBSyxDQUFDYSxNQUFNLENBQUNGLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QixPQUFPO2dCQUNMUCxJQUFJLENBQUNHLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLENBQUM7UUFDSCxDQUFDO1FBRURPLGNBQWMsRUFBRSxTQUFDZCxLQUFnQixFQUFFQyxNQUFNLEVBQUs7WUFDNUMsSUFBTVUsS0FBSyxHQUF1QlgsS0FBSyxDQUFDWSxTQUFTLENBQUMsU0FBQ1IsSUFBYTt1QkFBS0EsSUFBSSxDQUFDQyxFQUFFLEtBQUtKLE1BQU0sQ0FBQ0ssT0FBTzthQUFBLENBQUM7WUFDaEdOLEtBQUssQ0FBQ2EsTUFBTSxDQUFDRixLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQztLQUNGO0NBQ0YsQ0FBQztBQUVLLElBQU1JLFdBQVcsR0FBR3BCLFNBQVMsQ0FBQ3FCLE9BQU8sQ0FBQztJQU96Q3JCLFFBQWlCLEdBQWpCQSxTQUFTLENBQUNzQixPQUFPO0FBTGQsSUFDTGxCLFNBQVMsR0FJUEosUUFBaUIsQ0FKbkJJLFNBQVMsRUFDVFUsaUJBQWlCLEdBR2ZkLFFBQWlCLENBSG5CYyxpQkFBaUIsRUFDakJDLGlCQUFpQixHQUVmZixRQUFpQixDQUZuQmUsaUJBQWlCLEVBQ2pCSSxjQUFjLEdBQ1puQixRQUFpQixDQURuQm1CLGNBQWMsQ0FDTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jYXJ0X3JlZHV4L2NhcnQuc2xpY2UudHM/NDJkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gJy4uL2ludGVyZmFjZXMnXHJcblxyXG5jb25zdCBjYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2NhcnQnLFxyXG4gIGluaXRpYWxTdGF0ZTogW10sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGFkZFRvQ2FydDogKHN0YXRlOlByb2R1Y3RbXSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1FeGlzdHM6IFByb2R1Y3QgfCB1bmRlZmluZWQgPSBzdGF0ZS5maW5kKChpdGVtOiBQcm9kdWN0KSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCk7XHJcbiAgICAgIGl0ZW1FeGlzdHMgPyBpdGVtRXhpc3RzLnF1YW50aXR5KysgOiBzdGF0ZS5wdXNoKHsgLi4uYWN0aW9uLnBheWxvYWQsIHF1YW50aXR5OiAxIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIGluY3JlbWVudFF1YW50aXR5OiAoc3RhdGU6IFByb2R1Y3RbXSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW06IFByb2R1Y3QgfCB1bmRlZmluZWQgPSBzdGF0ZS5maW5kKChpdGVtOiBQcm9kdWN0KSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIGl0ZW0ucXVhbnRpdHkrKztcclxuICAgIH0sXHJcblxyXG4gICAgZGVjcmVtZW50UXVhbnRpdHk6IChzdGF0ZTogUHJvZHVjdFtdLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgaXRlbTpQcm9kdWN0fCB1bmRlZmluZWQgPSBzdGF0ZS5maW5kKChpdGVtOiBQcm9kdWN0KSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIGlmIChpdGVtPy5xdWFudGl0eSA9PSAxKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXg6bnVtYmVyfHVuZGVmaW5lZCA9IHN0YXRlLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgIHN0YXRlLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbS5xdWFudGl0eS0tO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbW92ZUZyb21DYXJ0OiAoc3RhdGU6IFByb2R1Y3RbXSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQgPSBzdGF0ZS5maW5kSW5kZXgoKGl0ZW06IFByb2R1Y3QpID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgc3RhdGUuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2FydFJlZHVjZXIgPSBjYXJ0U2xpY2UucmVkdWNlcjtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgYWRkVG9DYXJ0LFxyXG4gIGluY3JlbWVudFF1YW50aXR5LFxyXG4gIGRlY3JlbWVudFF1YW50aXR5LFxyXG4gIHJlbW92ZUZyb21DYXJ0LFxyXG59ID0gY2FydFNsaWNlLmFjdGlvbnM7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNhcnRTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImFkZFRvQ2FydCIsInN0YXRlIiwiYWN0aW9uIiwiaXRlbUV4aXN0cyIsImZpbmQiLCJpdGVtIiwiaWQiLCJwYXlsb2FkIiwicXVhbnRpdHkiLCJwdXNoIiwiaW5jcmVtZW50UXVhbnRpdHkiLCJkZWNyZW1lbnRRdWFudGl0eSIsImluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwicmVtb3ZlRnJvbUNhcnQiLCJjYXJ0UmVkdWNlciIsInJlZHVjZXIiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./cart_redux/cart.slice.ts\n"));

/***/ })

});