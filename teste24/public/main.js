/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _teste__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teste */ \"./js/teste.js\");\n\n\nwindow.onload = function () {\n    var frase = \"Aprendendo Módulos em JS\";\n    var bloco = document.getElementById(\"bloco\");\n\n    var txt1 = document.createElement('p');\n    var txt2 = document.createElement('p'); \n    var txt3 = document.createElement('p');   \n\n    txt1.innerHTML = _teste__WEBPACK_IMPORTED_MODULE_0__[\"mensagem1\"](frase);\n    txt2.innerHTML = _teste__WEBPACK_IMPORTED_MODULE_0__[\"mensagem2\"](frase);\n    var objetoIMC = _teste__WEBPACK_IMPORTED_MODULE_0__[\"imc\"](103,1.77);\n    txt3.innerHTML = `Seu Imc é ${objetoIMC.valor} e vc está ${objetoIMC.condicao}`;\n\n    bloco.appendChild(txt1);\n    bloco.appendChild(txt2);\n    bloco.appendChild(txt3);\n\n    console.log(_teste__WEBPACK_IMPORTED_MODULE_0__[\"mensagem1\"](frase));\n    console.log(_teste__WEBPACK_IMPORTED_MODULE_0__[\"mensagem2\"](frase));\n}\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/teste.js":
/*!*********************!*\
  !*** ./js/teste.js ***!
  \*********************/
/*! exports provided: mensagem1, mensagem2, imc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mensagem1\", function() { return mensagem1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mensagem2\", function() { return mensagem2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"imc\", function() { return imc; });\nfunction mensagem1(msg1){\n  return `<h2>Olá Mundo</h2><h3>Você está ${msg1}</h3>`\n}\n\nfunction mensagem2(msg2){\n  return `<h2>Olá De Novo</h2><h3>Você DENOVO está ${msg2}</h3>`\n}\n\nfunction imc(peso, altura) {\n  let valor = 0;let condicao = \"\";\n  if ((peso >= 20 && peso <= 200) && (altura >= 1 && altura <= 2.5)) {\n      valor = (peso / (Math.pow(altura, 2))).toFixed(0);\n  } else { valor = 0; }\n  if      (valor >= 1 && valor <= 17) { condicao = \"Muito abaixo\"; }\n  else if (valor > 17 && valor <= 19) { condicao = \"Abaixo do peso\"; }\n  else if (valor > 19 && valor <= 25) { condicao = \"Peso Normal\"; }\n  else if (valor > 25 && valor <= 30) { condicao = \"Acima do peso\"; }\n  else if (valor > 30 && valor <= 35) { condicao = \"Obesidade Leve\"; }\n  else if (valor > 35 && valor <= 40) { condicao = \"Obesidade Severa\"; }\n  else if (valor > 40) { condicao = \"Obesidade Mórbida\"; }\n  else { condicao = \"Erro\"; }\n  return {valor:valor,condicao:condicao};\n}\n\n\n//# sourceURL=webpack:///./js/teste.js?");

/***/ })

/******/ });