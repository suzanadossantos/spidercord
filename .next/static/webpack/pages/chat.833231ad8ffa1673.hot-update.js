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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var handleNovaMensagem = // Sua lógica vai aqui\n    // ./Sua lógica vai aqui\n    /* Usuário\r\n\r\n    // usuário aperta enter para enviar\r\n    // tem que adicionar o texto na listagem \r\n\r\n    // Dev\r\n\r\n    // usar o onChange, useState\r\n    // lista de mensagens */ function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            id: listaDeMensagens.length + 1,\n            de: 'SuzanadosSantos',\n            texto: novaMensagem\n        };\n        // Chamada de um backend\n        setListaDeMensagens([\n            mensagem, \n        ].concat(_toConsumableArray(listaDeMensagens)));\n        setMensagem('');\n    };\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(''), 2), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundImage: \"url(https://lh4.googleusercontent.com/proxy/nDfq9RW2EEZQ_taG57WMkIzk62mfEc7OWIBzVq2GaIK8l0T-X5vNRGzSpdy5sLTXsEmhKSmb6ofuD26BHxSgGdxQvTiBjeFcRksrQ8_TuGRNSV76NjP4EHxxVP8AKuxltGhSBEcNJx6eq5WnOe88XKDdYqZ-OpEUCyeZRYryi8zB1ZRO77QaNL-sGlVl=w1200-h630-p-k-no-nu)\",\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaDeMensagens\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                alignItems: 'center'\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem1,\n                                onChange: function(event) {\n                                    console.log(event);\n                                    var valor = event.target.value;\n                                    setMensagem(valor);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === \"Enter\") {\n                                        event.preventDefault();\n                                        handleNovaMensagem(mensagem1);\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: '100%',\n                                    border: '0',\n                                    resize: 'none',\n                                    borderRadius: '5px',\n                                    padding: '6px 8px',\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: '12px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                                lineNumber: 91,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this));\n};\n_s(ChatPage, \"TUh7UAFFqtouUCHTmXqiZHKdgTs=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                    lineNumber: 129,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                    lineNumber: 132,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n            lineNumber: 128,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    console.log(props.listaDeMensagens);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'auto',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: '5px',\n                    padding: '6px',\n                    marginBottom: '12px',\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: '20px',\n                                    height: '20px',\n                                    borderRadius: '50%',\n                                    display: 'inline-block',\n                                    marginRight: '8px'\n                                },\n                                src: \"https://github.com/vanessametonini.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                                lineNumber: 176,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                                lineNumber: 186,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: '10px',\n                                    marginLeft: '8px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                                lineNumber: 189,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                        lineNumber: 171,\n                        columnNumber: 25\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n                lineNumber: 159,\n                columnNumber: 21\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Suzana\\\\OneDrive\\\\Documentos\\\\programacao\\\\spidercord\\\\pages\\\\chat.js\",\n        lineNumber: 146,\n        columnNumber: 9\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1FBMkMxQixDQUFDOzs7Ozs7QUFHYixDQUFDO01BL0RRK0IsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0RmllbGQsIEltYWdlLCBCdXR0b24gfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XHJcbiAgICBjb25zdCBbbWVuc2FnZW0sIHNldE1lbnNhZ2VtXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsaXN0YURlTWVuc2FnZW5zLCBzZXRMaXN0YURlTWVuc2FnZW5zXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICAvLyBTdWEgbMOzZ2ljYSB2YWkgYXF1aVxyXG5cclxuICAgIC8vIC4vU3VhIGzDs2dpY2EgdmFpIGFxdWlcclxuXHJcbiAgICAvKiBVc3XDoXJpb1xyXG5cclxuICAgIC8vIHVzdcOhcmlvIGFwZXJ0YSBlbnRlciBwYXJhIGVudmlhclxyXG4gICAgLy8gdGVtIHF1ZSBhZGljaW9uYXIgbyB0ZXh0byBuYSBsaXN0YWdlbSBcclxuXHJcbiAgICAvLyBEZXZcclxuXHJcbiAgICAvLyB1c2FyIG8gb25DaGFuZ2UsIHVzZVN0YXRlXHJcbiAgICAvLyBsaXN0YSBkZSBtZW5zYWdlbnMgKi9cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVOb3ZhTWVuc2FnZW0obm92YU1lbnNhZ2VtKSB7XHJcbiAgICAgICAgY29uc3QgbWVuc2FnZW0gPSB7XHJcbiAgICAgICAgICAgIGlkOiBsaXN0YURlTWVuc2FnZW5zLmxlbmd0aCArIDEsXHJcbiAgICAgICAgICAgIGRlOiAnU3V6YW5hZG9zU2FudG9zJyxcclxuICAgICAgICAgICAgdGV4dG86IG5vdmFNZW5zYWdlbSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBDaGFtYWRhIGRlIHVtIGJhY2tlbmRcclxuXHJcbiAgICAgICAgc2V0TGlzdGFEZU1lbnNhZ2VucyhbXHJcbiAgICAgICAgICAgIG1lbnNhZ2VtLFxyXG4gICAgICAgICAgICAuLi5saXN0YURlTWVuc2FnZW5zLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBdKTtcclxuICAgICAgICBzZXRNZW5zYWdlbSgnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vcHJveHkvbkRmcTlSVzJFRVpRX3RhRzU3V01rSXprNjJtZkVjN09XSUJ6VnEyR2FJSzhsMFQtWDV2TlJHelNwZHk1c0xUWHNFbWhLU21iNm9mdUQyNkJIeFNnR2R4UXZUaUJqZUZjUmtzclE4X1R1R1JOU1Y3Nk5qUDRFSHh4VlA4QUt1eGx0R2hTQkVjTkp4NmVxNVduT2U4OFhLRGRZcVotT3BFVUN5ZVpSWXJ5aTh6QjFaUk83N1FhTkwtc0dsVmw9dzEyMDAtaDYzMC1wLWstbm8tbnUpYCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZEJsZW5kTW9kZTogJ211bHRpcGx5JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWycwMDAnXVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnOTUlJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICc5NXZoJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMzJweCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlTGlzdCBtZW5zYWdlbnM9e2xpc3RhRGVNZW5zYWdlbnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHtsaXN0YURlTWVuc2FnZW5zLm1hcCgobWVuc2FnZW1BdHVhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bWVuc2FnZW1BdHVhbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhZ2VtQXR1YWwuZGV9OnttZW5zYWdlbUF0dWFsLnRleHRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfSovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVuc2FnZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lbnNhZ2VtKHZhbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU5vdmFNZW5zYWdlbShtZW5zYWdlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHggOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCb3ggc3R5bGVTaGVldD17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5Cb3R0b206ICcxNnB4JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fSA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PSdoZWFkaW5nNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hhdFxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3RlcnRpYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yVmFyaWFudD0nbmV1dHJhbCdcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTG9nb3V0J1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlTGlzdChwcm9wcykge1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMubGlzdGFEZU1lbnNhZ2Vucyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgICAgdGFnPVwidWxcIlxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcclxuICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLm1lbnNhZ2Vucy5tYXAoKG1lbnNhZ2VtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWVuc2FnZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZz1cImxpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc4cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tL3ZhbmVzc2FtZXRvbmluaS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHRhZz1cInN0cm9uZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW5zYWdlbS5kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZz1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsobmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVuc2FnZW0udGV4dG99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiQnV0dG9uIiwiUmVhY3QiLCJhcHBDb25maWciLCJDaGF0UGFnZSIsImhhbmRsZU5vdmFNZW5zYWdlbSIsIm5vdmFNZW5zYWdlbSIsIm1lbnNhZ2VtIiwiaWQiLCJsaXN0YURlTWVuc2FnZW5zIiwibGVuZ3RoIiwiZGUiLCJ0ZXh0byIsInNldExpc3RhRGVNZW5zYWdlbnMiLCJzZXRNZW5zYWdlbSIsInVzZVN0YXRlIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiY29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsIm5ldXRyYWxzIiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInBhZGRpbmciLCJIZWFkZXIiLCJwb3NpdGlvbiIsIk1lc3NhZ2VMaXN0IiwibWVuc2FnZW5zIiwiYXMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidmFsb3IiLCJ0YXJnZXQiLCJvbktleVByZXNzIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ3aWR0aCIsImJvcmRlciIsInJlc2l6ZSIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImNvbG9yVmFyaWFudCIsImxhYmVsIiwiaHJlZiIsInByb3BzIiwidGFnIiwib3ZlcmZsb3ciLCJtYXAiLCJob3ZlciIsInNyYyIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});