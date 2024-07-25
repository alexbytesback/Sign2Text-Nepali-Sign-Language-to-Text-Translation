"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-resolve-all@1.1.0";
exports.ids = ["vendor-chunks/micromark-util-resolve-all@1.1.0"];
exports.modules = {

/***/ "../../node_modules/.pnpm/micromark-util-resolve-all@1.1.0/node_modules/micromark-util-resolve-all/index.js":
/*!******************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/micromark-util-resolve-all@1.1.0/node_modules/micromark-util-resolve-all/index.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveAll: () => (/* binding */ resolveAll)\n/* harmony export */ });\n/**\n * @typedef {import('micromark-util-types').Event} Event\n * @typedef {import('micromark-util-types').Resolver} Resolver\n * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext\n */\n\n/**\n * Call all `resolveAll`s.\n *\n * @param {Array<{resolveAll?: Resolver | undefined}>} constructs\n *   List of constructs, optionally with `resolveAll`s.\n * @param {Array<Event>} events\n *   List of events.\n * @param {TokenizeContext} context\n *   Context used by `tokenize`.\n * @returns {Array<Event>}\n *   Changed events.\n */\nfunction resolveAll(constructs, events, context) {\n  /** @type {Array<Resolver>} */\n  const called = []\n  let index = -1\n\n  while (++index < constructs.length) {\n    const resolve = constructs[index].resolveAll\n\n    if (resolve && !called.includes(resolve)) {\n      events = resolve(events, context)\n      called.push(resolve)\n    }\n  }\n\n  return events\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21pY3JvbWFyay11dGlsLXJlc29sdmUtYWxsQDEuMS4wL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1yZXNvbHZlLWFsbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQSxhQUFhLHNDQUFzQztBQUNuRCxhQUFhLHlDQUF5QztBQUN0RCxhQUFhLGdEQUFnRDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU8sa0NBQWtDLEdBQUc7QUFDdkQ7QUFDQSxXQUFXLGNBQWM7QUFDekI7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2lnbjJ0ZXh0LXNpdGUvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21pY3JvbWFyay11dGlsLXJlc29sdmUtYWxsQDEuMS4wL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1yZXNvbHZlLWFsbC9pbmRleC5qcz82YmYxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FdmVudH0gRXZlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuUmVzb2x2ZXJ9IFJlc29sdmVyXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKi9cblxuLyoqXG4gKiBDYWxsIGFsbCBgcmVzb2x2ZUFsbGBzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8e3Jlc29sdmVBbGw/OiBSZXNvbHZlciB8IHVuZGVmaW5lZH0+fSBjb25zdHJ1Y3RzXG4gKiAgIExpc3Qgb2YgY29uc3RydWN0cywgb3B0aW9uYWxseSB3aXRoIGByZXNvbHZlQWxsYHMuXG4gKiBAcGFyYW0ge0FycmF5PEV2ZW50Pn0gZXZlbnRzXG4gKiAgIExpc3Qgb2YgZXZlbnRzLlxuICogQHBhcmFtIHtUb2tlbml6ZUNvbnRleHR9IGNvbnRleHRcbiAqICAgQ29udGV4dCB1c2VkIGJ5IGB0b2tlbml6ZWAuXG4gKiBAcmV0dXJucyB7QXJyYXk8RXZlbnQ+fVxuICogICBDaGFuZ2VkIGV2ZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVBbGwoY29uc3RydWN0cywgZXZlbnRzLCBjb250ZXh0KSB7XG4gIC8qKiBAdHlwZSB7QXJyYXk8UmVzb2x2ZXI+fSAqL1xuICBjb25zdCBjYWxsZWQgPSBbXVxuICBsZXQgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgY29uc3RydWN0cy5sZW5ndGgpIHtcbiAgICBjb25zdCByZXNvbHZlID0gY29uc3RydWN0c1tpbmRleF0ucmVzb2x2ZUFsbFxuXG4gICAgaWYgKHJlc29sdmUgJiYgIWNhbGxlZC5pbmNsdWRlcyhyZXNvbHZlKSkge1xuICAgICAgZXZlbnRzID0gcmVzb2x2ZShldmVudHMsIGNvbnRleHQpXG4gICAgICBjYWxsZWQucHVzaChyZXNvbHZlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/.pnpm/micromark-util-resolve-all@1.1.0/node_modules/micromark-util-resolve-all/index.js\n");

/***/ })

};
;