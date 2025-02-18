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
exports.id = "app/api/book/editBook/route";
exports.ids = ["app/api/book/editBook/route"];
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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbook%2FeditBook%2Froute&page=%2Fapi%2Fbook%2FeditBook%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbook%2FeditBook%2Froute.js&appDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbook%2FeditBook%2Froute&page=%2Fapi%2Fbook%2FeditBook%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbook%2FeditBook%2Froute.js&appDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ASUS_TUF_library_management_app_api_book_editBook_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/book/editBook/route.js */ \"(rsc)/./app/api/book/editBook/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/book/editBook/route\",\n        pathname: \"/api/book/editBook\",\n        filename: \"route\",\n        bundlePath: \"app/api/book/editBook/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ASUS TUF\\\\library-management\\\\app\\\\api\\\\book\\\\editBook\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_ASUS_TUF_library_management_app_api_book_editBook_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZib29rJTJGZWRpdEJvb2slMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmJvb2slMkZlZGl0Qm9vayUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmJvb2slMkZlZGl0Qm9vayUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDbGlicmFyeS1tYW5hZ2VtZW50JTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDbGlicmFyeS1tYW5hZ2VtZW50JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMyQjtBQUN4RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQVNVUyBUVUZcXFxcbGlicmFyeS1tYW5hZ2VtZW50XFxcXGFwcFxcXFxhcGlcXFxcYm9va1xcXFxlZGl0Qm9va1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYm9vay9lZGl0Qm9vay9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2Jvb2svZWRpdEJvb2tcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2Jvb2svZWRpdEJvb2svcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxBU1VTIFRVRlxcXFxsaWJyYXJ5LW1hbmFnZW1lbnRcXFxcYXBwXFxcXGFwaVxcXFxib29rXFxcXGVkaXRCb29rXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbook%2FeditBook%2Froute&page=%2Fapi%2Fbook%2FeditBook%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbook%2FeditBook%2Froute.js&appDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/book/editBook/route.js":
/*!****************************************!*\
  !*** ./app/api/book/editBook/route.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _app_models_books__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/models/books */ \"(rsc)/./app/models/books.js\");\n/* harmony import */ var _lib_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/cloudinaryConfig */ \"(rsc)/./lib/cloudinaryConfig.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/helpers */ \"(rsc)/./utils/helpers.js\");\n\n\n\n\nasync function POST(req) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n        // const { id, title, author, bookCode, description } = await req.json();\n        const formData = await req.formData();\n        const id = formData.get(\"id\");\n        let params = {};\n        if (formData.get(\"title\")) params.title = formData.get(\"title\");\n        if (formData.get(\"author\")) params.author = formData.get(\"author\");\n        if (formData.get(\"description\")) params.description = formData.get(\"description\");\n        if (formData.get(\"bookCode\")) params.bookCode = formData.get(\"bookCode\");\n        if (formData.get(\"category\")) params.category = formData.get(\"category\");\n        if (formData.get(\"quantity\")) params.quantity = formData.get(\"quantity\");\n        if (formData.get(\"available\")) params.available = formData.get(\"available\");\n        // Handle image upload if present\n        const picture = formData.get(\"picture\");\n        if (picture) {\n            try {\n                const buffer = Buffer.from(await picture.arrayBuffer()); // Ensure correct buffer conversion\n                const imageUrl = await new Promise((resolve, reject)=>{\n                    _lib_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].v2.uploader.upload_stream({\n                        folder: \"book_covers\"\n                    }, (error, result)=>{\n                        if (error) {\n                            console.error(\"Cloudinary upload failed:\", error);\n                            reject(new Error(\"Failed to upload image\"));\n                        } else {\n                            console.log(\"Cloudinary upload successful:\", result.secure_url);\n                            resolve(result.secure_url);\n                        }\n                    }).end(buffer);\n                });\n                await (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.replaceNewImagefromCurrentImage)(_app_models_books__WEBPACK_IMPORTED_MODULE_1__[\"default\"], id);\n                params.pictureUrl = imageUrl;\n            } catch (uploadError) {\n                console.error(\"Error uploading to Cloudinary:\", uploadError);\n                return new Response(JSON.stringify({\n                    error: \"Failed to upload image\",\n                    details: uploadError.message\n                }), {\n                    status: 500,\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n            }\n        }\n        if (!id) {\n            return new Response(JSON.stringify({\n                error: \"Book ID is required\"\n            }), {\n                status: 400\n            });\n        }\n        const updatedBook = await _app_models_books__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(id, params, {\n            new: true\n        });\n        if (!updatedBook) {\n            return new Response(JSON.stringify({\n                error: \"Book not found\"\n            }), {\n                status: 404\n            });\n        }\n        return new Response(JSON.stringify({\n            message: \"Edit Book Successfully\",\n            status: 200\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        return new Response(JSON.stringify({\n            error: error.message\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UztZQUNUQyxRQUFRO1FBQ1YsSUFDQTtZQUFFQSxRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPZCxPQUFPO1FBQ2QsT0FBTyxJQUFJUyxTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRVgsT0FBT0EsTUFBTWEsT0FBTztRQUFDLElBQUk7WUFDNURDLFFBQVE7UUFDVjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQVNVUyBUVUZcXGxpYnJhcnktbWFuYWdlbWVudFxcYXBwXFxhcGlcXGJvb2tcXGVkaXRCb29rXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCJAL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCBCb29rcyBmcm9tIFwiQC9hcHAvbW9kZWxzL2Jvb2tzXCI7XHJcbmltcG9ydCBjbG91ZGluYXJ5IGZyb20gXCJAL2xpYi9jbG91ZGluYXJ5Q29uZmlnXCI7XHJcbmltcG9ydCB7IHJlcGxhY2VOZXdJbWFnZWZyb21DdXJyZW50SW1hZ2UgfSBmcm9tIFwiQC91dGlscy9oZWxwZXJzXCI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4gICAgLy8gY29uc3QgeyBpZCwgdGl0bGUsIGF1dGhvciwgYm9va0NvZGUsIGRlc2NyaXB0aW9uIH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXEuZm9ybURhdGEoKTtcclxuICAgIGNvbnN0IGlkID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XHJcblxyXG4gICAgbGV0IHBhcmFtcyA9IHt9O1xyXG4gICAgaWYgKGZvcm1EYXRhLmdldChcInRpdGxlXCIpKSBwYXJhbXMudGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcclxuICAgIGlmIChmb3JtRGF0YS5nZXQoXCJhdXRob3JcIikpIHBhcmFtcy5hdXRob3IgPSBmb3JtRGF0YS5nZXQoXCJhdXRob3JcIik7XHJcbiAgICBpZiAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikpXHJcbiAgICAgIHBhcmFtcy5kZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xyXG4gICAgaWYgKGZvcm1EYXRhLmdldChcImJvb2tDb2RlXCIpKSBwYXJhbXMuYm9va0NvZGUgPSBmb3JtRGF0YS5nZXQoXCJib29rQ29kZVwiKTtcclxuICAgIGlmIChmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeVwiKSkgcGFyYW1zLmNhdGVnb3J5ID0gZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlcIik7XHJcbiAgICBpZiAoZm9ybURhdGEuZ2V0KFwicXVhbnRpdHlcIikpIHBhcmFtcy5xdWFudGl0eSA9IGZvcm1EYXRhLmdldChcInF1YW50aXR5XCIpO1xyXG4gICAgaWYgKGZvcm1EYXRhLmdldChcImF2YWlsYWJsZVwiKSkgcGFyYW1zLmF2YWlsYWJsZSA9IGZvcm1EYXRhLmdldChcImF2YWlsYWJsZVwiKTtcclxuICAgIC8vIEhhbmRsZSBpbWFnZSB1cGxvYWQgaWYgcHJlc2VudFxyXG4gICAgY29uc3QgcGljdHVyZSA9IGZvcm1EYXRhLmdldChcInBpY3R1cmVcIik7XHJcbiAgICBpZiAocGljdHVyZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IHBpY3R1cmUuYXJyYXlCdWZmZXIoKSk7IC8vIEVuc3VyZSBjb3JyZWN0IGJ1ZmZlciBjb252ZXJzaW9uXHJcbiAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBjbG91ZGluYXJ5LnYyLnVwbG9hZGVyXHJcbiAgICAgICAgICAgIC51cGxvYWRfc3RyZWFtKHsgZm9sZGVyOiBcImJvb2tfY292ZXJzXCIgfSwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDbG91ZGluYXJ5IHVwbG9hZCBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdXBsb2FkIGltYWdlXCIpKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDbG91ZGluYXJ5IHVwbG9hZCBzdWNjZXNzZnVsOlwiLCByZXN1bHQuc2VjdXJlX3VybCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5zZWN1cmVfdXJsKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5lbmQoYnVmZmVyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCByZXBsYWNlTmV3SW1hZ2Vmcm9tQ3VycmVudEltYWdlKEJvb2tzLCBpZCk7XHJcbiAgICAgICAgcGFyYW1zLnBpY3R1cmVVcmwgPSBpbWFnZVVybDtcclxuICAgICAgfSBjYXRjaCAodXBsb2FkRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBsb2FkaW5nIHRvIENsb3VkaW5hcnk6XCIsIHVwbG9hZEVycm9yKTtcclxuICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBlcnJvcjogXCJGYWlsZWQgdG8gdXBsb2FkIGltYWdlXCIsXHJcbiAgICAgICAgICAgIGRldGFpbHM6IHVwbG9hZEVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIHsgc3RhdHVzOiA1MDAsIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBcIkJvb2sgSUQgaXMgcmVxdWlyZWRcIiB9KSwge1xyXG4gICAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVkQm9vayA9IGF3YWl0IEJvb2tzLmZpbmRCeUlkQW5kVXBkYXRlKGlkLCBwYXJhbXMsIHtcclxuICAgICAgbmV3OiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF1cGRhdGVkQm9vaykge1xyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IFwiQm9vayBub3QgZm91bmRcIiB9KSwge1xyXG4gICAgICAgIHN0YXR1czogNDA0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgbWVzc2FnZTogXCJFZGl0IEJvb2sgU3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgIH0pLFxyXG4gICAgICB7IHN0YXR1czogMjAwIH1cclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KSwge1xyXG4gICAgICBzdGF0dXM6IDUwMCxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29ubmVjdFRvRGF0YWJhc2UiLCJCb29rcyIsImNsb3VkaW5hcnkiLCJyZXBsYWNlTmV3SW1hZ2Vmcm9tQ3VycmVudEltYWdlIiwiUE9TVCIsInJlcSIsImZvcm1EYXRhIiwiaWQiLCJnZXQiLCJwYXJhbXMiLCJ0aXRsZSIsImF1dGhvciIsImRlc2NyaXB0aW9uIiwiYm9va0NvZGUiLCJjYXRlZ29yeSIsInF1YW50aXR5IiwiYXZhaWxhYmxlIiwicGljdHVyZSIsImJ1ZmZlciIsIkJ1ZmZlciIsImZyb20iLCJhcnJheUJ1ZmZlciIsImltYWdlVXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ2MiIsInVwbG9hZGVyIiwidXBsb2FkX3N0cmVhbSIsImZvbGRlciIsImVycm9yIiwicmVzdWx0IiwiY29uc29sZSIsIkVycm9yIiwibG9nIiwic2VjdXJlX3VybCIsImVuZCIsInBpY3R1cmVVcmwiLCJ1cGxvYWRFcnJvciIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImRldGFpbHMiLCJtZXNzYWdlIiwic3RhdHVzIiwiaGVhZGVycyIsInVwZGF0ZWRCb29rIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJuZXciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/book/editBook/route.js\n");

/***/ }),

/***/ "(rsc)/./app/models/books.js":
/*!*****************************!*\
  !*** ./app/models/books.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst booksSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true\n    },\n    author: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    bookCode: {\n        type: Number,\n        required: true,\n        unique: true\n    },\n    category: {\n        type: String,\n        required: true\n    },\n    pictureUrl: {\n        type: String,\n        default: null\n    },\n    numberOfBooksBorrowed: {\n        type: Number,\n        default: 0\n    },\n    totalOfBooksBorrowed: {\n        type: Number,\n        default: 0\n    },\n    available: {\n        type: Number,\n        default: 1\n    },\n    quantity: {\n        type: Number,\n        default: 1\n    }\n}, {\n    timestamps: true\n});\nconst Books = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Books || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Books\", booksSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Books);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL2Jvb2tzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjLElBQUlELHdEQUFlLENBQ3JDO0lBQ0VHLE9BQU87UUFDTEMsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FDLFFBQVE7UUFDTkgsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FFLGFBQWE7UUFDWEosTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FHLFVBQVU7UUFDUkwsTUFBTU07UUFDTkosVUFBVTtRQUNWSyxRQUFRO0lBQ1Y7SUFDQUMsVUFBVTtRQUNSUixNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQU8sWUFBWTtRQUNWVCxNQUFNQztRQUNOUyxTQUFTO0lBQ1g7SUFDQUMsdUJBQXVCO1FBQ3JCWCxNQUFNTTtRQUNOSSxTQUFTO0lBQ1g7SUFDQUUsc0JBQXNCO1FBQ3BCWixNQUFNTTtRQUNOSSxTQUFTO0lBQ1g7SUFDQUcsV0FBVztRQUNUYixNQUFNTTtRQUNOSSxTQUFTO0lBQ1g7SUFDQUksVUFBVTtRQUNSZCxNQUFNTTtRQUNOSSxTQUFTO0lBQ1g7QUFDRixHQUNBO0lBQ0VLLFlBQVk7QUFDZDtBQUdGLE1BQU1DLFFBQVFwQix3REFBZSxDQUFDb0IsS0FBSyxJQUFJcEIscURBQWMsQ0FBQyxTQUFTQztBQUUvRCxpRUFBZW1CLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQVNVUyBUVUZcXGxpYnJhcnktbWFuYWdlbWVudFxcYXBwXFxtb2RlbHNcXGJvb2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IGJvb2tzU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGF1dGhvcjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgYm9va0NvZGU6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgcGljdHVyZVVybDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgbnVtYmVyT2ZCb29rc0JvcnJvd2VkOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgZGVmYXVsdDogMCxcclxuICAgIH0sXHJcbiAgICB0b3RhbE9mQm9va3NCb3Jyb3dlZDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDAsXHJcbiAgICB9LFxyXG4gICAgYXZhaWxhYmxlOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgZGVmYXVsdDogMSxcclxuICAgIH0sXHJcbiAgICBxdWFudGl0eToge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcblxyXG5jb25zdCBCb29rcyA9IG1vbmdvb3NlLm1vZGVscy5Cb29rcyB8fCBtb25nb29zZS5tb2RlbChcIkJvb2tzXCIsIGJvb2tzU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tzO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJib29rc1NjaGVtYSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiYXV0aG9yIiwiZGVzY3JpcHRpb24iLCJib29rQ29kZSIsIk51bWJlciIsInVuaXF1ZSIsImNhdGVnb3J5IiwicGljdHVyZVVybCIsImRlZmF1bHQiLCJudW1iZXJPZkJvb2tzQm9ycm93ZWQiLCJ0b3RhbE9mQm9va3NCb3Jyb3dlZCIsImF2YWlsYWJsZSIsInF1YW50aXR5IiwidGltZXN0YW1wcyIsIkJvb2tzIiwibW9kZWxzIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/models/books.js\n");

/***/ }),

/***/ "(rsc)/./lib/cloudinaryConfig.js":
/*!*********************************!*\
  !*** ./lib/cloudinaryConfig.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"(rsc)/./node_modules/cloudinary/cloudinary.js\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n\n// Configure Cloudinary\ncloudinary__WEBPACK_IMPORTED_MODULE_0___default().v2.config({\n    cloud_name: process.env.CLOUD_NAME,\n    api_key: process.env.CLOUD_API_KEY,\n    api_secret: process.env.CLOUD_API_SECRET\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((cloudinary__WEBPACK_IMPORTED_MODULE_0___default()));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY2xvdWRpbmFyeUNvbmZpZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFFcEMsdUJBQXVCO0FBQ3ZCQSxvREFBYSxDQUFDRSxNQUFNLENBQUM7SUFDbkJDLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUNsQ0MsU0FBU0gsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO0lBQ2xDQyxZQUFZTCxRQUFRQyxHQUFHLENBQUNLLGdCQUFnQjtBQUMxQztBQUVBLGlFQUFlVixtREFBVUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxBU1VTIFRVRlxcbGlicmFyeS1tYW5hZ2VtZW50XFxsaWJcXGNsb3VkaW5hcnlDb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsb3VkaW5hcnkgZnJvbSBcImNsb3VkaW5hcnlcIjtcclxuXHJcbi8vIENvbmZpZ3VyZSBDbG91ZGluYXJ5XHJcbmNsb3VkaW5hcnkudjIuY29uZmlnKHtcclxuICBjbG91ZF9uYW1lOiBwcm9jZXNzLmVudi5DTE9VRF9OQU1FLFxyXG4gIGFwaV9rZXk6IHByb2Nlc3MuZW52LkNMT1VEX0FQSV9LRVksXHJcbiAgYXBpX3NlY3JldDogcHJvY2Vzcy5lbnYuQ0xPVURfQVBJX1NFQ1JFVCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbG91ZGluYXJ5O1xyXG4iXSwibmFtZXMiOlsiY2xvdWRpbmFyeSIsInYyIiwiY29uZmlnIiwiY2xvdWRfbmFtZSIsInByb2Nlc3MiLCJlbnYiLCJDTE9VRF9OQU1FIiwiYXBpX2tleSIsIkNMT1VEX0FQSV9LRVkiLCJhcGlfc2VjcmV0IiwiQ0xPVURfQVBJX1NFQ1JFVCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/cloudinaryConfig.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.ATLAS_DB_LINK;\n// if (!MONGODB_URI) {\n//   throw new Error(\n//     \"Please define the ATLAS_DB_LINK environment variable in .env.local\"\n//   );\n// }\n// Ensure global object exists for caching (important for Next.js and serverless)\nglobal.mongoose = global.mongoose || {\n    conn: null,\n    promise: null\n};\nasync function connectToDatabase() {\n    if (global.mongoose.conn) {\n        console.log(\"Using existing MongoDB connection\");\n        return global.mongoose.conn;\n    }\n    if (!global.mongoose.promise) {\n        console.log(\"Establishing new MongoDB connection...\");\n        global.mongoose.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            serverSelectionTimeoutMS: 30000,\n            connectTimeoutMS: 30000\n        }).then((mongoose)=>{\n            console.log(\"MongoDB connected successfully ✅\");\n            return mongoose;\n        }).catch((error)=>{\n            console.error(\"MongoDB connection error:\", error);\n            throw new Error(\"Failed to connect to MongoDB.\");\n        });\n    }\n    global.mongoose.conn = await global.mongoose.promise;\n    return global.mongoose.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDQyxhQUFhO0FBRTdDLHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckIsMkVBQTJFO0FBQzNFLE9BQU87QUFDUCxJQUFJO0FBRUosaUZBQWlGO0FBQ2pGQyxPQUFPTCxRQUFRLEdBQUdLLE9BQU9MLFFBQVEsSUFBSTtJQUFFTSxNQUFNO0lBQU1DLFNBQVM7QUFBSztBQUUxRCxlQUFlQztJQUNwQixJQUFJSCxPQUFPTCxRQUFRLENBQUNNLElBQUksRUFBRTtRQUN4QkcsUUFBUUMsR0FBRyxDQUFDO1FBQ1osT0FBT0wsT0FBT0wsUUFBUSxDQUFDTSxJQUFJO0lBQzdCO0lBRUEsSUFBSSxDQUFDRCxPQUFPTCxRQUFRLENBQUNPLE9BQU8sRUFBRTtRQUM1QkUsUUFBUUMsR0FBRyxDQUFDO1FBQ1pMLE9BQU9MLFFBQVEsQ0FBQ08sT0FBTyxHQUFHUCx1REFDaEIsQ0FBQ0MsYUFBYTtZQUNwQlcsaUJBQWlCO1lBQ2pCQyxvQkFBb0I7WUFDcEJDLDBCQUEwQjtZQUMxQkMsa0JBQWtCO1FBQ3BCLEdBQ0NDLElBQUksQ0FBQyxDQUFDaEI7WUFDTFMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBT1Y7UUFDVCxHQUNDaUIsS0FBSyxDQUFDLENBQUNDO1lBQ05ULFFBQVFTLEtBQUssQ0FBQyw2QkFBNkJBO1lBQzNDLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtJQUNKO0lBRUFkLE9BQU9MLFFBQVEsQ0FBQ00sSUFBSSxHQUFHLE1BQU1ELE9BQU9MLFFBQVEsQ0FBQ08sT0FBTztJQUNwRCxPQUFPRixPQUFPTCxRQUFRLENBQUNNLElBQUk7QUFDN0IiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQVNVUyBUVUZcXGxpYnJhcnktbWFuYWdlbWVudFxcbGliXFxtb25nb2RiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuQVRMQVNfREJfTElOSztcclxuXHJcbi8vIGlmICghTU9OR09EQl9VUkkpIHtcclxuLy8gICB0aHJvdyBuZXcgRXJyb3IoXHJcbi8vICAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIEFUTEFTX0RCX0xJTksgZW52aXJvbm1lbnQgdmFyaWFibGUgaW4gLmVudi5sb2NhbFwiXHJcbi8vICAgKTtcclxuLy8gfVxyXG5cclxuLy8gRW5zdXJlIGdsb2JhbCBvYmplY3QgZXhpc3RzIGZvciBjYWNoaW5nIChpbXBvcnRhbnQgZm9yIE5leHQuanMgYW5kIHNlcnZlcmxlc3MpXHJcbmdsb2JhbC5tb25nb29zZSA9IGdsb2JhbC5tb25nb29zZSB8fCB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcclxuICBpZiAoZ2xvYmFsLm1vbmdvb3NlLmNvbm4pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgZXhpc3RpbmcgTW9uZ29EQiBjb25uZWN0aW9uXCIpO1xyXG4gICAgcmV0dXJuIGdsb2JhbC5tb25nb29zZS5jb25uO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFnbG9iYWwubW9uZ29vc2UucHJvbWlzZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJFc3RhYmxpc2hpbmcgbmV3IE1vbmdvREIgY29ubmVjdGlvbi4uLlwiKTtcclxuICAgIGdsb2JhbC5tb25nb29zZS5wcm9taXNlID0gbW9uZ29vc2VcclxuICAgICAgLmNvbm5lY3QoTU9OR09EQl9VUkksIHtcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNlbGVjdGlvblRpbWVvdXRNUzogMzAwMDAsIC8vIDMwIHNlY29uZHNcclxuICAgICAgICBjb25uZWN0VGltZW91dE1TOiAzMDAwMCwgLy8gMzAgc2Vjb25kc1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigobW9uZ29vc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgY29ubmVjdGVkIHN1Y2Nlc3NmdWxseSDinIVcIik7XHJcbiAgICAgICAgcmV0dXJuIG1vbmdvb3NlO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1vbmdvREIgY29ubmVjdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjb25uZWN0IHRvIE1vbmdvREIuXCIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdsb2JhbC5tb25nb29zZS5jb25uID0gYXdhaXQgZ2xvYmFsLm1vbmdvb3NlLnByb21pc2U7XHJcbiAgcmV0dXJuIGdsb2JhbC5tb25nb29zZS5jb25uO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkFUTEFTX0RCX0xJTksiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVMiLCJjb25uZWN0VGltZW91dE1TIiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteCloudinaryImage: () => (/* binding */ deleteCloudinaryImage),\n/* harmony export */   getCloudinaryPublicId: () => (/* binding */ getCloudinaryPublicId),\n/* harmony export */   isExpired: () => (/* binding */ isExpired),\n/* harmony export */   renderDate: () => (/* binding */ renderDate),\n/* harmony export */   replaceNewImagefromCurrentImage: () => (/* binding */ replaceNewImagefromCurrentImage)\n/* harmony export */ });\n/* harmony import */ var _lib_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/cloudinaryConfig */ \"(rsc)/./lib/cloudinaryConfig.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=format!=!date-fns */ \"(rsc)/./node_modules/date-fns/format.mjs\");\n// helpers.js\n\n\n\nconst getCloudinaryPublicId = (url)=>{\n    if (!url) return null;\n    try {\n        const urlParts = url.split(\"/\");\n        const filenameWithExtension = urlParts.pop();\n        const folder = urlParts.pop();\n        if (!folder || !filenameWithExtension) return null;\n        const filename = filenameWithExtension.split(\".\")[0];\n        return `${folder}/${filename}`;\n    } catch (error) {\n        console.error(\"Error parsing Cloudinary URL:\", error);\n        return null;\n    }\n};\nconst deleteCloudinaryImage = async (publicId)=>{\n    if (!publicId) return null;\n    try {\n        const result = await _lib_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_0__[\"default\"].v2.uploader.destroy(publicId);\n        return result;\n    } catch (error) {\n        console.error(\"Error deleting from Cloudinary:\", error);\n        throw error;\n    }\n};\nconst replaceNewImagefromCurrentImage = async (collection, id)=>{\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n        const res = await collection.findById(id); // Use findById instead of find\n        console.log(res, \"from\");\n        if (res) {\n            const publicId = getCloudinaryPublicId(res.pictureUrl);\n            if (publicId) {\n                await deleteCloudinaryImage(publicId);\n            }\n        }\n    } catch (error) {\n        console.log(error);\n    }\n};\nconst renderDate = (date = \"\")=>{\n    if (!date) return \"\";\n    const newDate = new Date(date);\n    return (0,_barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(newDate, \"MMM dd, yyyy\");\n};\nconst isExpired = (fromDate)=>{\n    return new Date(fromDate).getTime() < new Date().setHours(0, 0, 0, 0);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9oZWxwZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsYUFBYTtBQUNtQztBQUNFO0FBQ2hCO0FBRTNCLE1BQU1HLHdCQUF3QixDQUFDQztJQUNwQyxJQUFJLENBQUNBLEtBQUssT0FBTztJQUVqQixJQUFJO1FBQ0YsTUFBTUMsV0FBV0QsSUFBSUUsS0FBSyxDQUFDO1FBQzNCLE1BQU1DLHdCQUF3QkYsU0FBU0csR0FBRztRQUMxQyxNQUFNQyxTQUFTSixTQUFTRyxHQUFHO1FBRTNCLElBQUksQ0FBQ0MsVUFBVSxDQUFDRix1QkFBdUIsT0FBTztRQUU5QyxNQUFNRyxXQUFXSCxzQkFBc0JELEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNwRCxPQUFPLEdBQUdHLE9BQU8sQ0FBQyxFQUFFQyxVQUFVO0lBQ2hDLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsaUNBQWlDQTtRQUMvQyxPQUFPO0lBQ1Q7QUFDRixFQUFFO0FBRUssTUFBTUUsd0JBQXdCLE9BQU9DO0lBQzFDLElBQUksQ0FBQ0EsVUFBVSxPQUFPO0lBRXRCLElBQUk7UUFDRixNQUFNQyxTQUFTLE1BQU1mLDZEQUFVQSxDQUFDZ0IsRUFBRSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0o7UUFDcEQsT0FBT0M7SUFDVCxFQUFFLE9BQU9KLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLG1DQUFtQ0E7UUFDakQsTUFBTUE7SUFDUjtBQUNGLEVBQUU7QUFFSyxNQUFNUSxrQ0FBa0MsT0FBT0MsWUFBWUM7SUFDaEUsSUFBSTtRQUNGLE1BQU1wQiwrREFBaUJBO1FBQ3ZCLE1BQU1xQixNQUFNLE1BQU1GLFdBQVdHLFFBQVEsQ0FBQ0YsS0FBSywrQkFBK0I7UUFDMUVULFFBQVFZLEdBQUcsQ0FBQ0YsS0FBSztRQUNqQixJQUFJQSxLQUFLO1lBQ1AsTUFBTVIsV0FBV1gsc0JBQXNCbUIsSUFBSUcsVUFBVTtZQUNyRCxJQUFJWCxVQUFVO2dCQUNaLE1BQU1ELHNCQUFzQkM7WUFDOUI7UUFDRjtJQUNGLEVBQUUsT0FBT0gsT0FBTztRQUNkQyxRQUFRWSxHQUFHLENBQUNiO0lBQ2Q7QUFDRixFQUFFO0FBRUssTUFBTWUsYUFBYSxDQUFDQyxPQUFPLEVBQUU7SUFDbEMsSUFBSSxDQUFDQSxNQUFNLE9BQU87SUFDbEIsTUFBTUMsVUFBVSxJQUFJQyxLQUFLRjtJQUN6QixPQUFPekIsOEVBQU1BLENBQUMwQixTQUFTO0FBQ3pCLEVBQUU7QUFFSyxNQUFNRSxZQUFZLENBQUNDO0lBQ3hCLE9BQU8sSUFBSUYsS0FBS0UsVUFBVUMsT0FBTyxLQUFLLElBQUlILE9BQU9JLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRztBQUNyRSxFQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFTVVMgVFVGXFxsaWJyYXJ5LW1hbmFnZW1lbnRcXHV0aWxzXFxoZWxwZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGhlbHBlcnMuanNcclxuaW1wb3J0IGNsb3VkaW5hcnkgZnJvbSBcIkAvbGliL2Nsb3VkaW5hcnlDb25maWdcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDbG91ZGluYXJ5UHVibGljSWQgPSAodXJsKSA9PiB7XHJcbiAgaWYgKCF1cmwpIHJldHVybiBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmwuc3BsaXQoXCIvXCIpO1xyXG4gICAgY29uc3QgZmlsZW5hbWVXaXRoRXh0ZW5zaW9uID0gdXJsUGFydHMucG9wKCk7XHJcbiAgICBjb25zdCBmb2xkZXIgPSB1cmxQYXJ0cy5wb3AoKTtcclxuXHJcbiAgICBpZiAoIWZvbGRlciB8fCAhZmlsZW5hbWVXaXRoRXh0ZW5zaW9uKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBmaWxlbmFtZSA9IGZpbGVuYW1lV2l0aEV4dGVuc2lvbi5zcGxpdChcIi5cIilbMF07XHJcbiAgICByZXR1cm4gYCR7Zm9sZGVyfS8ke2ZpbGVuYW1lfWA7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIENsb3VkaW5hcnkgVVJMOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ2xvdWRpbmFyeUltYWdlID0gYXN5bmMgKHB1YmxpY0lkKSA9PiB7XHJcbiAgaWYgKCFwdWJsaWNJZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbG91ZGluYXJ5LnYyLnVwbG9hZGVyLmRlc3Ryb3kocHVibGljSWQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGZyb20gQ2xvdWRpbmFyeTpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcGxhY2VOZXdJbWFnZWZyb21DdXJyZW50SW1hZ2UgPSBhc3luYyAoY29sbGVjdGlvbiwgaWQpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZEJ5SWQoaWQpOyAvLyBVc2UgZmluZEJ5SWQgaW5zdGVhZCBvZiBmaW5kXHJcbiAgICBjb25zb2xlLmxvZyhyZXMsIFwiZnJvbVwiKTtcclxuICAgIGlmIChyZXMpIHtcclxuICAgICAgY29uc3QgcHVibGljSWQgPSBnZXRDbG91ZGluYXJ5UHVibGljSWQocmVzLnBpY3R1cmVVcmwpO1xyXG4gICAgICBpZiAocHVibGljSWQpIHtcclxuICAgICAgICBhd2FpdCBkZWxldGVDbG91ZGluYXJ5SW1hZ2UocHVibGljSWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyRGF0ZSA9IChkYXRlID0gXCJcIikgPT4ge1xyXG4gIGlmICghZGF0ZSkgcmV0dXJuIFwiXCI7XHJcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gIHJldHVybiBmb3JtYXQobmV3RGF0ZSwgXCJNTU0gZGQsIHl5eXlcIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNFeHBpcmVkID0gKGZyb21EYXRlKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKGZyb21EYXRlKS5nZXRUaW1lKCkgPCBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiY2xvdWRpbmFyeSIsImNvbm5lY3RUb0RhdGFiYXNlIiwiZm9ybWF0IiwiZ2V0Q2xvdWRpbmFyeVB1YmxpY0lkIiwidXJsIiwidXJsUGFydHMiLCJzcGxpdCIsImZpbGVuYW1lV2l0aEV4dGVuc2lvbiIsInBvcCIsImZvbGRlciIsImZpbGVuYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiZGVsZXRlQ2xvdWRpbmFyeUltYWdlIiwicHVibGljSWQiLCJyZXN1bHQiLCJ2MiIsInVwbG9hZGVyIiwiZGVzdHJveSIsInJlcGxhY2VOZXdJbWFnZWZyb21DdXJyZW50SW1hZ2UiLCJjb2xsZWN0aW9uIiwiaWQiLCJyZXMiLCJmaW5kQnlJZCIsImxvZyIsInBpY3R1cmVVcmwiLCJyZW5kZXJEYXRlIiwiZGF0ZSIsIm5ld0RhdGUiLCJEYXRlIiwiaXNFeHBpcmVkIiwiZnJvbURhdGUiLCJnZXRUaW1lIiwic2V0SG91cnMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./utils/helpers.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/lodash","vendor-chunks/date-fns","vendor-chunks/cloudinary","vendor-chunks/q"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbook%2FeditBook%2Froute&page=%2Fapi%2Fbook%2FeditBook%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbook%2FeditBook%2Froute.js&appDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5Clibrary-management&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();