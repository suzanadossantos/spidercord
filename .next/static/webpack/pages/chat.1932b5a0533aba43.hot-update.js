"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(''), 2), mensagem = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    // Sua lógica vai aqui\n    // ./Sua lógica vai aqui\n    // Usuário\n    // usuário aperta enter para enviar\n    // tem que adicionar o texto na listagem \n    // Dev\n    // usar o onChange, useState\n    // lista de mensagens\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundImage: \"url(https://lh4.googleusercontent.com/proxy/nDfq9RW2EEZQ_taG57WMkIzk62mfEc7OWIBzVq2GaIK8l0T-X5vNRGzSpdy5sLTXsEmhKSmb6ofuD26BHxSgGdxQvTiBjeFcRksrQ8_TuGRNSV76NjP4EHxxVP8AKuxltGhSBEcNJx6eq5WnOe88XKDdYqZ-OpEUCyeZRYryi8zB1ZRO77QaNL-sGlVl=w1200-h630-p-k-no-nu)\",\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, this),\n                        listaDeMensagens,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                alignItems: 'center'\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem,\n                                onChange: function(event) {\n                                    console.log(event);\n                                    var valor = event.target.value;\n                                    setMensagem(valor);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === \"Enter\") {\n                                        console.log(event);\n                                        setMensagem('');\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: '100%',\n                                    border: '0',\n                                    resize: 'none',\n                                    borderRadius: '5px',\n                                    padding: '6px 8px',\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: '12px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this));\n};\n_s(ChatPage, \"TUh7UAFFqtouUCHTmXqiZHKdgTs=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                    lineNumber: 105,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                    lineNumber: 108,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n            lineNumber: 104,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'auto',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            tag: \"li\",\n            styleSheet: {\n                borderRadius: '5px',\n                padding: '6px',\n                marginBottom: '12px',\n                hover: {\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                }\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        marginBottom: '8px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                            styleSheet: {\n                                width: '20px',\n                                height: '20px',\n                                borderRadius: '50%',\n                                display: 'inline-block',\n                                marginRight: '8px'\n                            },\n                            src: \"https://github.com/vanessametonini.png\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                            lineNumber: 149,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            tag: \"strong\",\n                            children: \"vanessametonini\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                            lineNumber: 159,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            styleSheet: {\n                                fontSize: '10px',\n                                marginLeft: '8px',\n                                color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                            },\n                            tag: \"span\",\n                            children: new Date().toLocaleDateString()\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                            lineNumber: 162,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                    lineNumber: 144,\n                    columnNumber: 17\n                }, this),\n                \"Mensagem...\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n            lineNumber: 133,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n        lineNumber: 121,\n        columnNumber: 9\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFNO1FBQ3hCLENBQUM7OEZBR0FwRCxzREFBSTtZQUNEeUQsR0FBRyxFQUFDLENBQUk7WUFDUjdDLFVBQVUsRUFBRSxDQUFDO2dCQUNUZSxZQUFZLEVBQUUsQ0FBSztnQkFDbkJLLE9BQU8sRUFBRSxDQUFLO2dCQUNkb0IsWUFBWSxFQUFFLENBQU07Z0JBQ3BCTyxLQUFLLEVBQUUsQ0FBQztvQkFDSi9CLGVBQWUsRUFBRXZCLG9FQUFvQztnQkFDekQsQ0FBQztZQUNMLENBQUM7OzRGQUVBTixxREFBRztvQkFDQWEsVUFBVSxFQUFFLENBQUM7d0JBQ1R3QyxZQUFZLEVBQUUsQ0FBSztvQkFDdkIsQ0FBQzs7b0dBRUFsRCx1REFBSzs0QkFDRlUsVUFBVSxFQUFFLENBQUM7Z0NBQ1RvQyxLQUFLLEVBQUUsQ0FBTTtnQ0FDYm5CLE1BQU0sRUFBRSxDQUFNO2dDQUNkRixZQUFZLEVBQUUsQ0FBSztnQ0FDbkJkLE9BQU8sRUFBRSxDQUFjO2dDQUN2QnNDLFdBQVcsRUFBRSxDQUFLOzRCQUN0QixDQUFDOzRCQUNEUyxHQUFHLEVBQUcsQ0FBc0M7Ozs7OztvR0FFL0M1RCxzREFBSTs0QkFBQ3lELEdBQUcsRUFBQyxDQUFRO3NDQUFDLENBRW5COzs7Ozs7b0dBQ0N6RCxzREFBSTs0QkFDRFksVUFBVSxFQUFFLENBQUM7Z0NBQ1RpRCxRQUFRLEVBQUUsQ0FBTTtnQ0FDaEJDLFVBQVUsRUFBRSxDQUFLO2dDQUNqQjFDLEtBQUssRUFBRWYsb0VBQW9DOzRCQUMvQyxDQUFDOzRCQUNEb0QsR0FBRyxFQUFDLENBQU07c0NBRVIsR0FBRyxDQUFDTSxJQUFJLEdBQUdDLGtCQUFrQjs7Ozs7Ozs7Ozs7O2dCQUVqQyxDQUVWOzs7Ozs7Ozs7Ozs7QUFHWixDQUFDO01BMURRN0IsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0RmllbGQsIEltYWdlLCBCdXR0b24gfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XHJcbiAgICBjb25zdCBbbWVuc2FnZW0sIHNldE1lbnNhZ2VtXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsaXN0YURlTWVuc2FnZW5zLCBzZXRMaXN0YURlTWVuc2FnZW5zXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICAvLyBTdWEgbMOzZ2ljYSB2YWkgYXF1aVxyXG5cclxuICAgIC8vIC4vU3VhIGzDs2dpY2EgdmFpIGFxdWlcclxuXHJcbiAgICAvLyBVc3XDoXJpb1xyXG5cclxuICAgIC8vIHVzdcOhcmlvIGFwZXJ0YSBlbnRlciBwYXJhIGVudmlhclxyXG4gICAgLy8gdGVtIHF1ZSBhZGljaW9uYXIgbyB0ZXh0byBuYSBsaXN0YWdlbSBcclxuXHJcbiAgICAvLyBEZXZcclxuXHJcbiAgICAvLyB1c2FyIG8gb25DaGFuZ2UsIHVzZVN0YXRlXHJcbiAgICAvLyBsaXN0YSBkZSBtZW5zYWdlbnNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS9wcm94eS9uRGZxOVJXMkVFWlFfdGFHNTdXTWtJems2Mm1mRWM3T1dJQnpWcTJHYUlLOGwwVC1YNXZOUkd6U3BkeTVzTFRYc0VtaEtTbWI2b2Z1RDI2Qkh4U2dHZHhRdlRpQmplRmNSa3NyUThfVHVHUk5TVjc2TmpQNEVIeHhWUDhBS3V4bHRHaFNCRWNOSng2ZXE1V25PZTg4WEtEZFlxWi1PcEVVQ3llWlJZcnlpOHpCMVpSTzc3UWFOTC1zR2xWbD13MTIwMC1oNjMwLXAtay1uby1udSlgLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSknLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc5NSUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzk1dmgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczMnB4JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VMaXN0Lz5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdGFEZU1lbnNhZ2Vuc31cclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZW5zYWdlbSh2YWxvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZW5zYWdlbSgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHggOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCb3ggc3R5bGVTaGVldD17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5Cb3R0b206ICcxNnB4JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fSA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PSdoZWFkaW5nNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hhdFxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3RlcnRpYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yVmFyaWFudD0nbmV1dHJhbCdcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTG9nb3V0J1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlTGlzdCAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgICAgdGFnPVwidWxcIlxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcclxuICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICB0YWc9XCJsaVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc4cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tL3ZhbmVzc2FtZXRvbmluaS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgdGFnPVwic3Ryb25nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbmVzc2FtZXRvbmluaVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsobmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICBNZW5zYWdlbS4uLlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiQnV0dG9uIiwiUmVhY3QiLCJhcHBDb25maWciLCJDaGF0UGFnZSIsInVzZVN0YXRlIiwibWVuc2FnZW0iLCJzZXRNZW5zYWdlbSIsImxpc3RhRGVNZW5zYWdlbnMiLCJzZXRMaXN0YURlTWVuc2FnZW5zIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiY29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsIm5ldXRyYWxzIiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInBhZGRpbmciLCJIZWFkZXIiLCJwb3NpdGlvbiIsIk1lc3NhZ2VMaXN0IiwiYXMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidmFsb3IiLCJ0YXJnZXQiLCJvbktleVByZXNzIiwia2V5IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwid2lkdGgiLCJib3JkZXIiLCJyZXNpemUiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsInZhcmlhbnQiLCJjb2xvclZhcmlhbnQiLCJsYWJlbCIsImhyZWYiLCJ0YWciLCJvdmVyZmxvdyIsImhvdmVyIiwic3JjIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});