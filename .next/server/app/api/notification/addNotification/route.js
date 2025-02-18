/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/notification/addNotification/route";
exports.ids = ["app/api/notification/addNotification/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnotification%2FaddNotification%2Froute&page=%2Fapi%2Fnotification%2FaddNotification%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnotification%2FaddNotification%2Froute.js&appDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnotification%2FaddNotification%2Froute&page=%2Fapi%2Fnotification%2FaddNotification%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnotification%2FaddNotification%2Froute.js&appDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ASUS_TUF_library_management_app_api_notification_addNotification_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/notification/addNotification/route.js */ \"(rsc)/./app/api/notification/addNotification/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/notification/addNotification/route\",\n        pathname: \"/api/notification/addNotification\",\n        filename: \"route\",\n        bundlePath: \"app/api/notification/addNotification/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ASUS TUF\\\\library-management\\\\app\\\\api\\\\notification\\\\addNotification\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_ASUS_TUF_library_management_app_api_notification_addNotification_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZub3RpZmljYXRpb24lMkZhZGROb3RpZmljYXRpb24lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm5vdGlmaWNhdGlvbiUyRmFkZE5vdGlmaWNhdGlvbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm5vdGlmaWNhdGlvbiUyRmFkZE5vdGlmaWNhdGlvbiUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDbGlicmFyeS1tYW5hZ2VtZW50JTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDbGlicmFyeS1tYW5hZ2VtZW50JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMwQztBQUN2SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQVNVUyBUVUZcXFxcbGlicmFyeS1tYW5hZ2VtZW50XFxcXGFwcFxcXFxhcGlcXFxcbm90aWZpY2F0aW9uXFxcXGFkZE5vdGlmaWNhdGlvblxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbm90aWZpY2F0aW9uL2FkZE5vdGlmaWNhdGlvbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL25vdGlmaWNhdGlvbi9hZGROb3RpZmljYXRpb25cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL25vdGlmaWNhdGlvbi9hZGROb3RpZmljYXRpb24vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxBU1VTIFRVRlxcXFxsaWJyYXJ5LW1hbmFnZW1lbnRcXFxcYXBwXFxcXGFwaVxcXFxub3RpZmljYXRpb25cXFxcYWRkTm90aWZpY2F0aW9uXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnotification%2FaddNotification%2Froute&page=%2Fapi%2Fnotification%2FaddNotification%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnotification%2FaddNotification%2Froute.js&appDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/notification/addNotification/route.js":
/*!*******************************************************!*\
  !*** ./app/api/notification/addNotification/route.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _app_models_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/models/notification */ \"(rsc)/./app/models/notification.js\");\n\n\nasync function POST(req) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n        const { studentId, message, isRead, reason, titleBook, authorBook, borrowDuration } = await req.json();\n        const newNotification = new _app_models_notification__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            studentId,\n            message,\n            isRead,\n            reason,\n            titleBook,\n            authorBook,\n            borrowDuration\n        });\n        await newNotification.save();\n        return new Response(JSON.stringify({\n            message: \"Student has been notified\"\n        }), {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Error notifying student:\", error);\n        return new Response(JSON.stringify({\n            error: \"Failed to notify student\"\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL25vdGlmaWNhdGlvbi9hZGROb3RpZmljYXRpb24vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBQ0c7QUFFOUMsZUFBZUUsS0FBS0MsR0FBRztJQUM1QixJQUFJO1FBQ0YsTUFBTUgsK0RBQWlCQTtRQUV2QixNQUFNLEVBQ0pJLFNBQVMsRUFDVEMsT0FBTyxFQUNQQyxNQUFNLEVBQ05DLE1BQU0sRUFDTkMsU0FBUyxFQUNUQyxVQUFVLEVBQ1ZDLGNBQWMsRUFDZixHQUFHLE1BQU1QLElBQUlRLElBQUk7UUFFbEIsTUFBTUMsa0JBQWtCLElBQUlYLGdFQUFZQSxDQUFDO1lBQ3ZDRztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztRQUNGO1FBRUEsTUFBTUUsZ0JBQWdCQyxJQUFJO1FBQzFCLE9BQU8sSUFBSUMsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVYLFNBQVM7UUFBNEIsSUFDdEQ7WUFBRVksUUFBUTtRQUFJO0lBRWxCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtRQUMxQyxPQUFPLElBQUlKLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFRSxPQUFPO1FBQTJCLElBQUk7WUFDekVELFFBQVE7UUFDVjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQVNVUyBUVUZcXGxpYnJhcnktbWFuYWdlbWVudFxcYXBwXFxhcGlcXG5vdGlmaWNhdGlvblxcYWRkTm90aWZpY2F0aW9uXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCJAL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSBcIkAvYXBwL21vZGVscy9ub3RpZmljYXRpb25cIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgc3R1ZGVudElkLFxyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICBpc1JlYWQsXHJcbiAgICAgIHJlYXNvbixcclxuICAgICAgdGl0bGVCb29rLFxyXG4gICAgICBhdXRob3JCb29rLFxyXG4gICAgICBib3Jyb3dEdXJhdGlvbixcclxuICAgIH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IG5ld05vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24oe1xyXG4gICAgICBzdHVkZW50SWQsXHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICAgIGlzUmVhZCxcclxuICAgICAgcmVhc29uLFxyXG4gICAgICB0aXRsZUJvb2ssXHJcbiAgICAgIGF1dGhvckJvb2ssXHJcbiAgICAgIGJvcnJvd0R1cmF0aW9uLFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgbmV3Tm90aWZpY2F0aW9uLnNhdmUoKTtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJTdHVkZW50IGhhcyBiZWVuIG5vdGlmaWVkXCIgfSksXHJcbiAgICAgIHsgc3RhdHVzOiAyMDEgfVxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIG5vdGlmeWluZyBzdHVkZW50OlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IFwiRmFpbGVkIHRvIG5vdGlmeSBzdHVkZW50XCIgfSksIHtcclxuICAgICAgc3RhdHVzOiA1MDAsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiTm90aWZpY2F0aW9uIiwiUE9TVCIsInJlcSIsInN0dWRlbnRJZCIsIm1lc3NhZ2UiLCJpc1JlYWQiLCJyZWFzb24iLCJ0aXRsZUJvb2siLCJhdXRob3JCb29rIiwiYm9ycm93RHVyYXRpb24iLCJqc29uIiwibmV3Tm90aWZpY2F0aW9uIiwic2F2ZSIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImVycm9yIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/notification/addNotification/route.js\n");

/***/ }),

/***/ "(rsc)/./app/models/notification.js":
/*!************************************!*\
  !*** ./app/models/notification.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NotificationSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    studentId: {\n        type: String,\n        required: true\n    },\n    message: {\n        type: String,\n        required: true\n    },\n    isRead: {\n        type: Boolean,\n        default: false\n    },\n    reason: {\n        type: String,\n        required: true\n    },\n    titleBook: {\n        type: String,\n        required: true\n    },\n    authorBook: {\n        type: String,\n        required: true\n    },\n    borrowDuration: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst Notification = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Notification || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Notification\", NotificationSchema); // Ensured consistent casing\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notification);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL25vdGlmaWNhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMscUJBQXFCLElBQUlELHdEQUFlLENBQzVDO0lBQ0VHLFdBQVc7UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQzFDQyxTQUFTO1FBQUVILE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN4Q0UsUUFBUTtRQUFFSixNQUFNSztRQUFTQyxTQUFTO0lBQU07SUFDeENDLFFBQVE7UUFBRVAsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3ZDTSxXQUFXO1FBQUVSLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUMxQ08sWUFBWTtRQUFFVCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDM0NRLGdCQUFnQjtRQUFFVixNQUFNQztRQUFRQyxVQUFVO0lBQUs7QUFDakQsR0FDQTtJQUFFUyxZQUFZO0FBQUs7QUFHckIsTUFBTUMsZUFDSmhCLHdEQUFlLENBQUNnQixZQUFZLElBQzVCaEIscURBQWMsQ0FBQyxnQkFBZ0JDLHFCQUFxQiw0QkFBNEI7QUFFbEYsaUVBQWVlLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQVNVUyBUVUZcXGxpYnJhcnktbWFuYWdlbWVudFxcYXBwXFxtb2RlbHNcXG5vdGlmaWNhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBOb3RpZmljYXRpb25TY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIHN0dWRlbnRJZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBtZXNzYWdlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGlzUmVhZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gICAgcmVhc29uOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHRpdGxlQm9vazogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBhdXRob3JCb29rOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGJvcnJvd0R1cmF0aW9uOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5jb25zdCBOb3RpZmljYXRpb24gPVxyXG4gIG1vbmdvb3NlLm1vZGVscy5Ob3RpZmljYXRpb24gfHxcclxuICBtb25nb29zZS5tb2RlbChcIk5vdGlmaWNhdGlvblwiLCBOb3RpZmljYXRpb25TY2hlbWEpOyAvLyBFbnN1cmVkIGNvbnNpc3RlbnQgY2FzaW5nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk5vdGlmaWNhdGlvblNjaGVtYSIsIlNjaGVtYSIsInN0dWRlbnRJZCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJpc1JlYWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsInJlYXNvbiIsInRpdGxlQm9vayIsImF1dGhvckJvb2siLCJib3Jyb3dEdXJhdGlvbiIsInRpbWVzdGFtcHMiLCJOb3RpZmljYXRpb24iLCJtb2RlbHMiLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/models/notification.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.ATLAS_DB_LINK;\n// if (!MONGODB_URI) {\n//   throw new Error(\n//     \"Please define the ATLAS_DB_LINK environment variable in .env.local\"\n//   );\n// }\n// Ensure global object exists for caching (important for Next.js and serverless)\nglobal.mongoose = global.mongoose || {\n    conn: null,\n    promise: null\n};\nasync function connectToDatabase() {\n    if (global.mongoose.conn) {\n        console.log(\"Using existing MongoDB connection\");\n        return global.mongoose.conn;\n    }\n    if (!global.mongoose.promise) {\n        console.log(\"Establishing new MongoDB connection...\");\n        global.mongoose.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            serverSelectionTimeoutMS: 30000,\n            connectTimeoutMS: 30000\n        }).then((mongoose)=>{\n            console.log(\"MongoDB connected successfully ✅\");\n            return mongoose;\n        }).catch((error)=>{\n            console.error(\"MongoDB connection error:\", error);\n            throw new Error(\"Failed to connect to MongoDB.\");\n        });\n    }\n    global.mongoose.conn = await global.mongoose.promise;\n    return global.mongoose.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDQyxhQUFhO0FBRTdDLHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckIsMkVBQTJFO0FBQzNFLE9BQU87QUFDUCxJQUFJO0FBRUosaUZBQWlGO0FBQ2pGQyxPQUFPTCxRQUFRLEdBQUdLLE9BQU9MLFFBQVEsSUFBSTtJQUFFTSxNQUFNO0lBQU1DLFNBQVM7QUFBSztBQUUxRCxlQUFlQztJQUNwQixJQUFJSCxPQUFPTCxRQUFRLENBQUNNLElBQUksRUFBRTtRQUN4QkcsUUFBUUMsR0FBRyxDQUFDO1FBQ1osT0FBT0wsT0FBT0wsUUFBUSxDQUFDTSxJQUFJO0lBQzdCO0lBRUEsSUFBSSxDQUFDRCxPQUFPTCxRQUFRLENBQUNPLE9BQU8sRUFBRTtRQUM1QkUsUUFBUUMsR0FBRyxDQUFDO1FBQ1pMLE9BQU9MLFFBQVEsQ0FBQ08sT0FBTyxHQUFHUCx1REFDaEIsQ0FBQ0MsYUFBYTtZQUNwQlcsaUJBQWlCO1lBQ2pCQyxvQkFBb0I7WUFDcEJDLDBCQUEwQjtZQUMxQkMsa0JBQWtCO1FBQ3BCLEdBQ0NDLElBQUksQ0FBQyxDQUFDaEI7WUFDTFMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBT1Y7UUFDVCxHQUNDaUIsS0FBSyxDQUFDLENBQUNDO1lBQ05ULFFBQVFTLEtBQUssQ0FBQyw2QkFBNkJBO1lBQzNDLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtJQUNKO0lBRUFkLE9BQU9MLFFBQVEsQ0FBQ00sSUFBSSxHQUFHLE1BQU1ELE9BQU9MLFFBQVEsQ0FBQ08sT0FBTztJQUNwRCxPQUFPRixPQUFPTCxRQUFRLENBQUNNLElBQUk7QUFDN0IiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQVNVUyBUVUZcXGxpYnJhcnktbWFuYWdlbWVudFxcbGliXFxtb25nb2RiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuQVRMQVNfREJfTElOSztcclxuXHJcbi8vIGlmICghTU9OR09EQl9VUkkpIHtcclxuLy8gICB0aHJvdyBuZXcgRXJyb3IoXHJcbi8vICAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIEFUTEFTX0RCX0xJTksgZW52aXJvbm1lbnQgdmFyaWFibGUgaW4gLmVudi5sb2NhbFwiXHJcbi8vICAgKTtcclxuLy8gfVxyXG5cclxuLy8gRW5zdXJlIGdsb2JhbCBvYmplY3QgZXhpc3RzIGZvciBjYWNoaW5nIChpbXBvcnRhbnQgZm9yIE5leHQuanMgYW5kIHNlcnZlcmxlc3MpXHJcbmdsb2JhbC5tb25nb29zZSA9IGdsb2JhbC5tb25nb29zZSB8fCB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcclxuICBpZiAoZ2xvYmFsLm1vbmdvb3NlLmNvbm4pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgZXhpc3RpbmcgTW9uZ29EQiBjb25uZWN0aW9uXCIpO1xyXG4gICAgcmV0dXJuIGdsb2JhbC5tb25nb29zZS5jb25uO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFnbG9iYWwubW9uZ29vc2UucHJvbWlzZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJFc3RhYmxpc2hpbmcgbmV3IE1vbmdvREIgY29ubmVjdGlvbi4uLlwiKTtcclxuICAgIGdsb2JhbC5tb25nb29zZS5wcm9taXNlID0gbW9uZ29vc2VcclxuICAgICAgLmNvbm5lY3QoTU9OR09EQl9VUkksIHtcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNlbGVjdGlvblRpbWVvdXRNUzogMzAwMDAsIC8vIDMwIHNlY29uZHNcclxuICAgICAgICBjb25uZWN0VGltZW91dE1TOiAzMDAwMCwgLy8gMzAgc2Vjb25kc1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigobW9uZ29vc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgY29ubmVjdGVkIHN1Y2Nlc3NmdWxseSDinIVcIik7XHJcbiAgICAgICAgcmV0dXJuIG1vbmdvb3NlO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1vbmdvREIgY29ubmVjdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjb25uZWN0IHRvIE1vbmdvREIuXCIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdsb2JhbC5tb25nb29zZS5jb25uID0gYXdhaXQgZ2xvYmFsLm1vbmdvb3NlLnByb21pc2U7XHJcbiAgcmV0dXJuIGdsb2JhbC5tb25nb29zZS5jb25uO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkFUTEFTX0RCX0xJTksiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVMiLCJjb25uZWN0VGltZW91dE1TIiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnotification%2FaddNotification%2Froute&page=%2Fapi%2Fnotification%2FaddNotification%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnotification%2FaddNotification%2Froute.js&appDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();