(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],{11:function(e,_,r){},13:function(e,_,r){},5:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_tsitokhtsev_Projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__),numbers={zero:"0",one:"1",two:"2",three:"3",four:"4",five:"5",six:"6",seven:"7",eight:"8",nine:"9"},operations={add:"+",subtract:"-",multiply:"*",divide:"/"},App=function App(){var renderedButtons=function(e,_){return Object.keys(e).map((function(r){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{className:"button ".concat(_),id:r,style:{gridArea:r},onClick:function(e){return handleClick(e)},children:e[r]},r)}))},_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState2=Object(_home_tsitokhtsev_Projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),currentNumber=_useState2[0],setCurrentNumber=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(),_useState4=Object(_home_tsitokhtsev_Projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),previousNumber=_useState4[0],setPreviousNumber=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState6=Object(_home_tsitokhtsev_Projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),expression=_useState6[0],setExpression=_useState6[1],isOperation=function(e){return-1!==Object.values(operations).indexOf(e)},handleClick=function handleClick(e){var value=e.target.innerHTML;if("."===value)currentNumber.includes(".")||isOperation(currentNumber)||(setCurrentNumber(currentNumber+value),setExpression(expression+value));else if("="===value){if(isOperation(currentNumber))setExpression(expression.slice(0,-1)+value+previousNumber),setCurrentNumber(previousNumber);else{var answer=Math.round(1e12*eval(expression))/1e12;setExpression(expression+value+answer),setCurrentNumber(answer)}setPreviousNumber(value)}else isOperation(value)?("."===currentNumber[currentNumber.length-1]||isOperation(currentNumber)?setExpression("-"!==value?expression.replace(/[+*/]-?$/,value):expression+value):setExpression("="===previousNumber?currentNumber+value:expression+value),setPreviousNumber(currentNumber),setCurrentNumber(value)):(isOperation(currentNumber)||expression.includes("=")?setCurrentNumber(value):setCurrentNumber("0"===currentNumber?value:currentNumber+value),setExpression(expression.includes("=")?value:"0"===currentNumber||"0"===expression?expression.slice(0,-1)+value:expression+value))},clear=function(){setCurrentNumber("0"),setPreviousNumber(void 0),setExpression("0")};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"screen",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{id:"expression",children:expression}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{id:"display",children:currentNumber})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"buttons",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{className:"button",id:"clear",onClick:function(){return clear()},children:"ac"}),renderedButtons(numbers,"number"),renderedButtons(operations,"operation"),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{className:"button",id:"decimal",onClick:function(e){return handleClick(e)},children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{className:"button operation",id:"equals",onClick:function(e){return handleClick(e)},children:"="})]})]})};__webpack_exports__.a=App},6:function(e,_,r){"use strict";r.r(_);r(1);var t=r(4),s=r.n(t),u=r(5),n=(r(13),r(0));s.a.render(Object(n.jsx)(u.a,{}),document.getElementById("root"))}},[[6,1,2]]]);
//# sourceMappingURL=main.e6d8219b.chunk.js.map