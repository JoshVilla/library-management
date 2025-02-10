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
exports.id = "app/api/announcement/addAnnouncement/route";
exports.ids = ["app/api/announcement/addAnnouncement/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fannouncement%2FaddAnnouncement%2Froute&page=%2Fapi%2Fannouncement%2FaddAnnouncement%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fannouncement%2FaddAnnouncement%2Froute.js&appDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fannouncement%2FaddAnnouncement%2Froute&page=%2Fapi%2Fannouncement%2FaddAnnouncement%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fannouncement%2FaddAnnouncement%2Froute.js&appDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ASUS_TUF_library_management_app_api_announcement_addAnnouncement_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/announcement/addAnnouncement/route.js */ \"(rsc)/./app/api/announcement/addAnnouncement/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/announcement/addAnnouncement/route\",\n        pathname: \"/api/announcement/addAnnouncement\",\n        filename: \"route\",\n        bundlePath: \"app/api/announcement/addAnnouncement/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ASUS TUF\\\\library-management\\\\app\\\\api\\\\announcement\\\\addAnnouncement\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_ASUS_TUF_library_management_app_api_announcement_addAnnouncement_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhbm5vdW5jZW1lbnQlMkZhZGRBbm5vdW5jZW1lbnQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFubm91bmNlbWVudCUyRmFkZEFubm91bmNlbWVudCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFubm91bmNlbWVudCUyRmFkZEFubm91bmNlbWVudCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDbGlicmFyeS1tYW5hZ2VtZW50JTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDbGlicmFyeS1tYW5hZ2VtZW50JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMwQztBQUN2SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQVNVUyBUVUZcXFxcbGlicmFyeS1tYW5hZ2VtZW50XFxcXGFwcFxcXFxhcGlcXFxcYW5ub3VuY2VtZW50XFxcXGFkZEFubm91bmNlbWVudFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYW5ub3VuY2VtZW50L2FkZEFubm91bmNlbWVudC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2Fubm91bmNlbWVudC9hZGRBbm5vdW5jZW1lbnRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2Fubm91bmNlbWVudC9hZGRBbm5vdW5jZW1lbnQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxBU1VTIFRVRlxcXFxsaWJyYXJ5LW1hbmFnZW1lbnRcXFxcYXBwXFxcXGFwaVxcXFxhbm5vdW5jZW1lbnRcXFxcYWRkQW5ub3VuY2VtZW50XFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fannouncement%2FaddAnnouncement%2Froute&page=%2Fapi%2Fannouncement%2FaddAnnouncement%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fannouncement%2FaddAnnouncement%2Froute.js&appDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/announcement/addAnnouncement/route.js":
/*!*******************************************************!*\
  !*** ./app/api/announcement/addAnnouncement/route.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _app_models_announcement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/models/announcement */ \"(rsc)/./app/models/announcement.js\");\n // Your connection helper\n\nasync function POST(req) {\n    try {\n        // Ensure the database connection is established\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n        const { announcement, isPinned } = await req.json();\n        const newAnnouncement = new _app_models_announcement__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            announcement,\n            isPinned\n        });\n        await newAnnouncement.save();\n        return new Response(JSON.stringify({\n            message: \"Announcement added successfully\"\n        }), {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Error adding Announcement:\", error);\n        return new Response(JSON.stringify({\n            error: \"Failed to add Announcement\"\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Fubm91bmNlbWVudC9hZGRBbm5vdW5jZW1lbnQvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtELENBQUMseUJBQXlCO0FBQ3ZCO0FBRTlDLGVBQWVFLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLGdEQUFnRDtRQUNoRCxNQUFNSCwrREFBaUJBO1FBRXZCLE1BQU0sRUFBRUksWUFBWSxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNRixJQUFJRyxJQUFJO1FBRWpELE1BQU1DLGtCQUFrQixJQUFJTixnRUFBWUEsQ0FBQztZQUN2Q0c7WUFDQUM7UUFDRjtRQUVBLE1BQU1FLGdCQUFnQkMsSUFBSTtRQUUxQixPQUFPLElBQUlDLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTO1FBQWtDLElBQzVEO1lBQUVDLFFBQVE7UUFBSTtJQUVsQixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUMsT0FBTyxJQUFJTCxTQUNUQyxLQUFLQyxTQUFTLENBQUM7WUFBRUcsT0FBTztRQUE2QixJQUNyRDtZQUNFRCxRQUFRO1FBQ1Y7SUFFSjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFTVVMgVFVGXFxsaWJyYXJ5LW1hbmFnZW1lbnRcXGFwcFxcYXBpXFxhbm5vdW5jZW1lbnRcXGFkZEFubm91bmNlbWVudFxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiQC9saWIvbW9uZ29kYlwiOyAvLyBZb3VyIGNvbm5lY3Rpb24gaGVscGVyXHJcbmltcG9ydCBBbm5vdW5jZW1lbnQgZnJvbSBcIkAvYXBwL21vZGVscy9hbm5vdW5jZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBFbnN1cmUgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb24gaXMgZXN0YWJsaXNoZWRcclxuICAgIGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcblxyXG4gICAgY29uc3QgeyBhbm5vdW5jZW1lbnQsIGlzUGlubmVkIH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IG5ld0Fubm91bmNlbWVudCA9IG5ldyBBbm5vdW5jZW1lbnQoe1xyXG4gICAgICBhbm5vdW5jZW1lbnQsXHJcbiAgICAgIGlzUGlubmVkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgbmV3QW5ub3VuY2VtZW50LnNhdmUoKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiQW5ub3VuY2VtZW50IGFkZGVkIHN1Y2Nlc3NmdWxseVwiIH0pLFxyXG4gICAgICB7IHN0YXR1czogMjAxIH1cclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgQW5ub3VuY2VtZW50OlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBcIkZhaWxlZCB0byBhZGQgQW5ub3VuY2VtZW50XCIgfSksXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IDUwMCxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiQW5ub3VuY2VtZW50IiwiUE9TVCIsInJlcSIsImFubm91bmNlbWVudCIsImlzUGlubmVkIiwianNvbiIsIm5ld0Fubm91bmNlbWVudCIsInNhdmUiLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/announcement/addAnnouncement/route.js\n");

/***/ }),

/***/ "(rsc)/./app/models/announcement.js":
/*!************************************!*\
  !*** ./app/models/announcement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AnnouncementSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    announcement: {\n        type: String,\n        required: true\n    },\n    isPinned: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst Announcement = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Announcement || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Announcement\", AnnouncementSchema); // Ensured consistent casing\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Announcement);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL2Fubm91bmNlbWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMscUJBQXFCLElBQUlELHdEQUFlLENBQzVDO0lBQ0VHLGNBQWM7UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQzdDQyxVQUFVO1FBQUVILE1BQU1JO1FBQVNDLFNBQVM7SUFBTTtBQUM1QyxHQUNBO0lBQUVDLFlBQVk7QUFBSztBQUdyQixNQUFNQyxlQUNKWCx3REFBZSxDQUFDVyxZQUFZLElBQzVCWCxxREFBYyxDQUFDLGdCQUFnQkMscUJBQXFCLDRCQUE0QjtBQUVsRixpRUFBZVUsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxBU1VTIFRVRlxcbGlicmFyeS1tYW5hZ2VtZW50XFxhcHBcXG1vZGVsc1xcYW5ub3VuY2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IEFubm91bmNlbWVudFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgYW5ub3VuY2VtZW50OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGlzUGlubmVkOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5cclxuY29uc3QgQW5ub3VuY2VtZW50ID1cclxuICBtb25nb29zZS5tb2RlbHMuQW5ub3VuY2VtZW50IHx8XHJcbiAgbW9uZ29vc2UubW9kZWwoXCJBbm5vdW5jZW1lbnRcIiwgQW5ub3VuY2VtZW50U2NoZW1hKTsgLy8gRW5zdXJlZCBjb25zaXN0ZW50IGNhc2luZ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5ub3VuY2VtZW50O1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJBbm5vdW5jZW1lbnRTY2hlbWEiLCJTY2hlbWEiLCJhbm5vdW5jZW1lbnQiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJpc1Bpbm5lZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIkFubm91bmNlbWVudCIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/models/announcement.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fannouncement%2FaddAnnouncement%2Froute&page=%2Fapi%2Fannouncement%2FaddAnnouncement%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fannouncement%2FaddAnnouncement%2Froute.js&appDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();