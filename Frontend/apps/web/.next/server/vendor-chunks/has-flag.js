"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-flag";
exports.ids = ["vendor-chunks/has-flag"];
exports.modules = {

/***/ "(ssr)/./node_modules/has-flag/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-flag/index.js ***!
  \****************************************/
/***/ ((module) => {

eval("\nmodule.exports = function(flag, argv) {\n    argv = argv || process.argv;\n    var terminatorPos = argv.indexOf(\"--\");\n    var prefix = /^-{1,2}/.test(flag) ? \"\" : \"--\";\n    var pos = argv.indexOf(prefix + flag);\n    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzLWZsYWcvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQUEsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLElBQUksRUFBRUMsSUFBSTtJQUNwQ0EsT0FBT0EsUUFBUUMsUUFBUUQsSUFBSTtJQUUzQixJQUFJRSxnQkFBZ0JGLEtBQUtHLE9BQU8sQ0FBQztJQUNqQyxJQUFJQyxTQUFTLFVBQVVDLElBQUksQ0FBQ04sUUFBUSxLQUFLO0lBQ3pDLElBQUlPLE1BQU1OLEtBQUtHLE9BQU8sQ0FBQ0MsU0FBU0w7SUFFaEMsT0FBT08sUUFBUSxDQUFDLEtBQU1KLENBQUFBLGtCQUFrQixDQUFDLElBQUksT0FBT0ksTUFBTUosYUFBWTtBQUN2RSIsInNvdXJjZXMiOlsid2VicGFjazovL3NpZ24ydGV4dC1zaXRlLy4vbm9kZV9tb2R1bGVzL2hhcy1mbGFnL2luZGV4LmpzP2YzZjYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZmxhZywgYXJndikge1xuXHRhcmd2ID0gYXJndiB8fCBwcm9jZXNzLmFyZ3Y7XG5cblx0dmFyIHRlcm1pbmF0b3JQb3MgPSBhcmd2LmluZGV4T2YoJy0tJyk7XG5cdHZhciBwcmVmaXggPSAvXi17MSwyfS8udGVzdChmbGFnKSA/ICcnIDogJy0tJztcblx0dmFyIHBvcyA9IGFyZ3YuaW5kZXhPZihwcmVmaXggKyBmbGFnKTtcblxuXHRyZXR1cm4gcG9zICE9PSAtMSAmJiAodGVybWluYXRvclBvcyA9PT0gLTEgPyB0cnVlIDogcG9zIDwgdGVybWluYXRvclBvcyk7XG59O1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJmbGFnIiwiYXJndiIsInByb2Nlc3MiLCJ0ZXJtaW5hdG9yUG9zIiwiaW5kZXhPZiIsInByZWZpeCIsInRlc3QiLCJwb3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/has-flag/index.js\n");

/***/ })

};
;