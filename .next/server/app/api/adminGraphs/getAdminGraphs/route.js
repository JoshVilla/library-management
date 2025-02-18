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
exports.id = "app/api/adminGraphs/getAdminGraphs/route";
exports.ids = ["app/api/adminGraphs/getAdminGraphs/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FadminGraphs%2FgetAdminGraphs%2Froute&page=%2Fapi%2FadminGraphs%2FgetAdminGraphs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FadminGraphs%2FgetAdminGraphs%2Froute.js&appDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FadminGraphs%2FgetAdminGraphs%2Froute&page=%2Fapi%2FadminGraphs%2FgetAdminGraphs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FadminGraphs%2FgetAdminGraphs%2Froute.js&appDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ASUS_TUF_library_management_app_api_adminGraphs_getAdminGraphs_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/adminGraphs/getAdminGraphs/route.js */ \"(rsc)/./app/api/adminGraphs/getAdminGraphs/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/adminGraphs/getAdminGraphs/route\",\n        pathname: \"/api/adminGraphs/getAdminGraphs\",\n        filename: \"route\",\n        bundlePath: \"app/api/adminGraphs/getAdminGraphs/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ASUS TUF\\\\library-management\\\\app\\\\api\\\\adminGraphs\\\\getAdminGraphs\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_ASUS_TUF_library_management_app_api_adminGraphs_getAdminGraphs_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbkdyYXBocyUyRmdldEFkbWluR3JhcGhzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbkdyYXBocyUyRmdldEFkbWluR3JhcGhzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW5HcmFwaHMlMkZnZXRBZG1pbkdyYXBocyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDbGlicmFyeS1tYW5hZ2VtZW50JTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDbGlicmFyeS1tYW5hZ2VtZW50JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN3QztBQUNySDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQVNVUyBUVUZcXFxcbGlicmFyeS1tYW5hZ2VtZW50XFxcXGFwcFxcXFxhcGlcXFxcYWRtaW5HcmFwaHNcXFxcZ2V0QWRtaW5HcmFwaHNcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkbWluR3JhcGhzL2dldEFkbWluR3JhcGhzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW5HcmFwaHMvZ2V0QWRtaW5HcmFwaHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FkbWluR3JhcGhzL2dldEFkbWluR3JhcGhzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQVNVUyBUVUZcXFxcbGlicmFyeS1tYW5hZ2VtZW50XFxcXGFwcFxcXFxhcGlcXFxcYWRtaW5HcmFwaHNcXFxcZ2V0QWRtaW5HcmFwaHNcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FadminGraphs%2FgetAdminGraphs%2Froute&page=%2Fapi%2FadminGraphs%2FgetAdminGraphs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FadminGraphs%2FgetAdminGraphs%2Froute.js&appDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/adminGraphs/getAdminGraphs/route.js":
/*!*****************************************************!*\
  !*** ./app/api/adminGraphs/getAdminGraphs/route.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _app_models_monthlyBorrowedBooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/models/monthlyBorrowedBooks */ \"(rsc)/./app/models/monthlyBorrowedBooks.js\");\n\n\nasync function POST(req) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n        const graphs = await _app_models_monthlyBorrowedBooks__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n        return new Response(JSON.stringify({\n            data: graphs.length ? graphs : \"No data available\"\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error fetching data graphs:\", error);\n        return new Response(JSON.stringify({\n            error: \"Failed to fetch data graphs. Please try again later.\"\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluR3JhcGhzL2dldEFkbWluR3JhcGhzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRDtBQUNtQjtBQUU5RCxlQUFlRSxLQUFLQyxHQUFHO0lBQzVCLElBQUk7UUFDRixNQUFNSCwrREFBaUJBO1FBRXZCLE1BQU1JLFNBQVMsTUFBTUgsd0VBQW9CQSxDQUFDSSxJQUFJLENBQUMsQ0FBQztRQUVoRCxPQUFPLElBQUlDLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztZQUNiQyxNQUFNTCxPQUFPTSxNQUFNLEdBQUdOLFNBQVM7UUFDakMsSUFDQTtZQUFFTyxRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywrQkFBK0JBO1FBQzdDLE9BQU8sSUFBSU4sU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQ2JJLE9BQU87UUFDVCxJQUNBO1lBQUVELFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFTVVMgVFVGXFxsaWJyYXJ5LW1hbmFnZW1lbnRcXGFwcFxcYXBpXFxhZG1pbkdyYXBoc1xcZ2V0QWRtaW5HcmFwaHNcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IE1vbnRobHlCb3Jyb3dlZEJvb2tzIGZyb20gXCJAL2FwcC9tb2RlbHMvbW9udGhseUJvcnJvd2VkQm9va3NcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG5cclxuICAgIGNvbnN0IGdyYXBocyA9IGF3YWl0IE1vbnRobHlCb3Jyb3dlZEJvb2tzLmZpbmQoe30pO1xyXG5cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBkYXRhOiBncmFwaHMubGVuZ3RoID8gZ3JhcGhzIDogXCJObyBkYXRhIGF2YWlsYWJsZVwiLFxyXG4gICAgICB9KSxcclxuICAgICAgeyBzdGF0dXM6IDIwMCB9XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YSBncmFwaHM6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YSBncmFwaHMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsIk1vbnRobHlCb3Jyb3dlZEJvb2tzIiwiUE9TVCIsInJlcSIsImdyYXBocyIsImZpbmQiLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwibGVuZ3RoIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/adminGraphs/getAdminGraphs/route.js\n");

/***/ }),

/***/ "(rsc)/./app/models/monthlyBorrowedBooks.js":
/*!********************************************!*\
  !*** ./app/models/monthlyBorrowedBooks.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MonthlyBorrowedBooksSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    monthYear: {\n        type: String,\n        unique: true\n    },\n    totalApproved: {\n        type: Number,\n        default: 0\n    },\n    totalBorrowingInProgress: {\n        type: Number,\n        default: 0\n    },\n    totalPending: {\n        type: Number,\n        default: 0\n    },\n    totalReturned: {\n        type: Number,\n        default: 0\n    },\n    totalNotReturned: {\n        type: Number,\n        default: 0\n    },\n    totalCancelled: {\n        type: Number,\n        default: 0\n    },\n    totalFailed: {\n        type: Number,\n        default: 0\n    }\n});\n// Ensure the model is not compiled multiple times\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).MonthlyBorrowedBooksStats || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"MonthlyBorrowedBooksStats\", MonthlyBorrowedBooksSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL21vbnRobHlCb3Jyb3dlZEJvb2tzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyw2QkFBNkIsSUFBSUQsd0RBQWUsQ0FBQztJQUNyREcsV0FBVztRQUFFQyxNQUFNQztRQUFRQyxRQUFRO0lBQUs7SUFDeENDLGVBQWU7UUFBRUgsTUFBTUk7UUFBUUMsU0FBUztJQUFFO0lBQzFDQywwQkFBMEI7UUFBRU4sTUFBTUk7UUFBUUMsU0FBUztJQUFFO0lBQ3JERSxjQUFjO1FBQUVQLE1BQU1JO1FBQVFDLFNBQVM7SUFBRTtJQUN6Q0csZUFBZTtRQUFFUixNQUFNSTtRQUFRQyxTQUFTO0lBQUU7SUFDMUNJLGtCQUFrQjtRQUFFVCxNQUFNSTtRQUFRQyxTQUFTO0lBQUU7SUFDN0NLLGdCQUFnQjtRQUFFVixNQUFNSTtRQUFRQyxTQUFTO0lBQUU7SUFDM0NNLGFBQWE7UUFBRVgsTUFBTUk7UUFBUUMsU0FBUztJQUFFO0FBQzFDO0FBRUEsa0RBQWtEO0FBQ2xELGlFQUFlVCx3REFBZSxDQUFDaUIseUJBQXlCLElBQ3REakIscURBQWMsQ0FBQyw2QkFBNkJDLDJCQUEyQkEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxBU1VTIFRVRlxcbGlicmFyeS1tYW5hZ2VtZW50XFxhcHBcXG1vZGVsc1xcbW9udGhseUJvcnJvd2VkQm9va3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgTW9udGhseUJvcnJvd2VkQm9va3NTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBtb250aFllYXI6IHsgdHlwZTogU3RyaW5nLCB1bmlxdWU6IHRydWUgfSxcclxuICB0b3RhbEFwcHJvdmVkOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxyXG4gIHRvdGFsQm9ycm93aW5nSW5Qcm9ncmVzczogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDAgfSxcclxuICB0b3RhbFBlbmRpbmc6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXHJcbiAgdG90YWxSZXR1cm5lZDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDAgfSxcclxuICB0b3RhbE5vdFJldHVybmVkOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxyXG4gIHRvdGFsQ2FuY2VsbGVkOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxyXG4gIHRvdGFsRmFpbGVkOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxyXG59KTtcclxuXHJcbi8vIEVuc3VyZSB0aGUgbW9kZWwgaXMgbm90IGNvbXBpbGVkIG11bHRpcGxlIHRpbWVzXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Nb250aGx5Qm9ycm93ZWRCb29rc1N0YXRzIHx8XHJcbiAgbW9uZ29vc2UubW9kZWwoXCJNb250aGx5Qm9ycm93ZWRCb29rc1N0YXRzXCIsIE1vbnRobHlCb3Jyb3dlZEJvb2tzU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTW9udGhseUJvcnJvd2VkQm9va3NTY2hlbWEiLCJTY2hlbWEiLCJtb250aFllYXIiLCJ0eXBlIiwiU3RyaW5nIiwidW5pcXVlIiwidG90YWxBcHByb3ZlZCIsIk51bWJlciIsImRlZmF1bHQiLCJ0b3RhbEJvcnJvd2luZ0luUHJvZ3Jlc3MiLCJ0b3RhbFBlbmRpbmciLCJ0b3RhbFJldHVybmVkIiwidG90YWxOb3RSZXR1cm5lZCIsInRvdGFsQ2FuY2VsbGVkIiwidG90YWxGYWlsZWQiLCJtb2RlbHMiLCJNb250aGx5Qm9ycm93ZWRCb29rc1N0YXRzIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/models/monthlyBorrowedBooks.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FadminGraphs%2FgetAdminGraphs%2Froute&page=%2Fapi%2FadminGraphs%2FgetAdminGraphs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FadminGraphs%2FgetAdminGraphs%2Froute.js&appDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();