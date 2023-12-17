/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_assets_css_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/css/home.css */ \"./src/assets/css/home.css\");\n/* harmony import */ var _src_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/assets/images/logo.png */ \"./src/assets/images/logo.png\");\n\n\nvar footer = function footer() {\n  var footerContent = document.querySelector('footer');\n  footerContent.innerHTML = \" <div class=\\\"top-foot constraint\\\">\\n    <img id=\\\"logo\\\" src=\".concat(_src_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__, \" alt=\\\"TrustEnergy logo\\\">\\n    <div class=\\\"quick-links\\\">\\n        <p class=\\\"h3-l\\\">Quick Links</p>\\n        <nav class=\\\"\\\">\\n            <a href=\\\"\\\">About</a>\\n            <a href=\\\"\\\">Services</a>\\n            <a href=\\\"/OurTeam.html\\\">Team</a>\\n            <a href=\\\"\\\">Career</a>\\n            <a href=\\\"\\\">Sustainability</a>\\n        </nav>\\n    </div>\\n    <div class=\\\"other-links\\\">\\n        <p class=\\\"h3-l\\\">Other Links</p>\\n        <nav class=\\\"\\\">\\n            <a href=\\\"\\\">Privacy Policy</a>\\n            <a href=\\\"\\\">Terms & Consitions</a>\\n        </nav>\\n    </div>\\n    <div class=\\\"main-info\\\">\\n        <div class=\\\"info\\\">\\n            <span class=\\\"h3\\\">ADDRESS:</span>\\n            <p>Sicap sacr\\xE9-Coeur villa, villa 8569, Dakar, Senegal</p>\\n        </div>\\n        <div class=\\\"info\\\">\\n            <span class=\\\"h3\\\">TELEPHONE:</span>\\n            <p>+221 33 825 11 70</p>\\n        </div>\\n        <div class=\\\"info\\\">\\n            <span class=\\\"h3\\\">EMAIL:</span>\\n            <p>info@trustenergygroup.com</p>\\n        </div>\\n        <a class=\\\"button\\\" href=\\\"contact.html\\\">SEND US A MESSAGE</a>\\n    </div>\\n</div>\\n<div class=\\\"bottom-foot\\\">\\n    <p class=\\\"text-center\\\">&copy; 2023 TrustEnergy Group. All rights reserved.</p>\\n</div>\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://trustenergy/./src/footer.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_assets_css_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/css/home.css */ \"./src/assets/css/home.css\");\n/* harmony import */ var _src_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/assets/images/logo.png */ \"./src/assets/images/logo.png\");\n\n\nvar navigation = function navigation() {\n  var nav = document.querySelector('.top-bar');\n  nav.innerHTML = \"<nav class=\\\"nav-bar constraint\\\">\\n    <div class=\\\"logo\\\">\\n        <img id=\\\"logo\\\" src=\".concat(_src_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__, \" alt=\\\"TrustEnergy\\\">\\n    </div>\\n    <div class=\\\"mobile-nav\\\" data-state=\\\"collapsed\\\">\\n        <i class=\\\"fa-solid fa-bars\\\"></i>\\n    </div>\\n    <div class=\\\"primary-navigation\\\">\\n        <a href=\\\"/index.html\\\" class=\\\"active nav-item\\\">Home</a>\\n        <a href=\\\"/about.html\\\" class=\\\"nav-item\\\">About Us</a>\\n        <a href=\\\"#\\\" class=\\\"nav-item\\\">Our Services</a>\\n        <a href=\\\"/ourteam.html\\\" class=\\\"nav-item\\\">Our Team</a>\\n        <a href=\\\"/career.html\\\" class=\\\"nav-item\\\">Career</a>\\n        <a href=\\\"/sustainability.html\\\" class=\\\"nav-item\\\">Sustainability</a>\\n        <a href=\\\"contact.html\\\" class=\\\"nav-item mobile-contact\\\">Contact Us</a>\\n    </div>\\n    <a href=\\\"contact.html\\\" class=\\\"nav-item button\\\">Contact Us</a>\\n</nav>\");\n  var navButton = document.querySelector('.mobile-nav');\n  var navLinks = document.querySelector('.primary-navigation');\n  navButton.addEventListener('click', function () {\n    var state = navButton.getAttribute('data-state');\n    if (state === \"collapsed\") {\n      navButton.setAttribute(\"data-state\", \"expanded\");\n      navButton.children[0].classList.remove('fa-bars');\n      navButton.children[0].classList.add('fa-xmark');\n      navLinks.classList.add(\"visible\");\n    } else {\n      navButton.setAttribute(\"data-state\", \"collapsed\");\n      navButton.children[0].classList.remove('fa-xmark');\n      navButton.children[0].classList.add('fa-bars');\n      navLinks.classList.remove(\"visible\");\n    }\n  });\n\n  // Hero Section\n  var hero = document.querySelector('.hero');\n  var bgNavItems = document.querySelectorAll('.bg-nav-item');\n  bgNavItems.forEach(function (item) {\n    item.addEventListener('click', function () {\n      hero.style.backgroundImage = \"url('assets/images/hero-\".concat(item.id, \".jpg')\");\n      hero.style.backgroundPosition = 'center';\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigation);\n\n//# sourceURL=webpack://trustenergy/./src/navigation.js?");

/***/ }),

/***/ "./src/sustainability.js":
/*!*******************************!*\
  !*** ./src/sustainability.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_assets_css_sustainability_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/css/sustainability.css */ \"./src/assets/css/sustainability.css\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//# sourceURL=webpack://trustenergy/./src/sustainability.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/home.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/home.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hero-3.jpg */ \"./src/assets/images/hero-3.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/engineer.jpg */ \"./src/assets/images/engineer.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\n@media (min-width: 1260px) {\r\n  .constraint {\r\n    max-width: 1240px;\r\n    margin-inline: auto;\r\n    padding-inline: 0;\r\n  }\r\n}\r\n\r\n.constraint-40 {\r\n  max-width: 40rem;\r\n}\r\n\r\n.constraint-30 {\r\n  max-width: 30rem;\r\n}\r\n\r\n.button {\r\n  padding: 0.6rem 0.9rem;\r\n  border-radius: 5px;\r\n  background-color: rgb(255, 0, 0);\r\n  display: block;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  color: #fff;\r\n}\r\n.button:hover {\r\n  background-color: rgb(0, 128, 0);\r\n}\r\n\r\n.underline {\r\n  position: relative;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin-bottom: 1rem;\r\n  padding-bottom: 0.2rem;\r\n}\r\n.underline::after {\r\n  content: \"\";\r\n  width: 70%;\r\n  height: 5px;\r\n  background-color: rgb(255, 0, 0);\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.h1 {\r\n  font-size: clamp(2rem, 1.2rem + 3.5vw, 4rem);\r\n  line-height: 1.2;\r\n}\r\n\r\n.h2 {\r\n  font-size: clamp(1rem, 1rem + 3vw, 2.5rem);\r\n  margin-bottom: 1rem;\r\n  line-height: 1;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.text-primary-1 {\r\n  color: rgb(255, 0, 0);\r\n}\r\n\r\n.text-primary-2 {\r\n  color: rgb(0, 128, 0);\r\n}\r\n\r\n.text-white {\r\n  color: #fff;\r\n}\r\n\r\n.mb-100 {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.mb-200 {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.mbk-100 {\r\n  margin-block: 1rem;\r\n}\r\n\r\n.top-bar {\r\n  width: 100vw;\r\n  position: fixed;\r\n  z-index: 999;\r\n  top: 0;\r\n  background-color: #fff;\r\n  border-bottom: 3px solid rgb(255, 0, 0);\r\n}\r\n\r\n#logo {\r\n  width: 150px;\r\n}\r\n\r\n.nav-bar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  padding: 0.5rem 2rem;\r\n}\r\n@media (max-width: 940px) {\r\n  .nav-bar {\r\n    justify-content: space-between;\r\n  }\r\n}\r\n@media (max-width: 1024px) {\r\n  .nav-bar {\r\n    justify-content: end;\r\n  }\r\n  .nav-bar .logo {\r\n    margin-right: auto;\r\n  }\r\n  .nav-bar .button {\r\n    margin-left: 2rem;\r\n  }\r\n}\r\n.nav-bar .mobile-nav {\r\n  display: none;\r\n}\r\n@media (max-width: 940px) {\r\n  .nav-bar .mobile-nav {\r\n    display: block;\r\n  }\r\n  .nav-bar .mobile-nav i {\r\n    font-size: 1.8rem;\r\n  }\r\n}\r\n.nav-bar .nav-item {\r\n  color: black;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n}\r\n.nav-bar .button {\r\n  color: white;\r\n}\r\n@media (max-width: 940px) {\r\n  .nav-bar .button {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.primary-navigation {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n.primary-navigation .mobile-contact {\r\n  display: none;\r\n}\r\n.primary-navigation .nav-item {\r\n  padding-block: 0.3rem;\r\n  border: 2px solid transparent;\r\n}\r\n.primary-navigation .nav-item.active {\r\n  border-bottom: 2px solid red;\r\n}\r\n.primary-navigation .nav-item:hover:not(.active) {\r\n  border-bottom: 2px solid rgb(0, 128, 0);\r\n}\r\n@media (max-width: 940px) {\r\n  .primary-navigation {\r\n    display: none;\r\n  }\r\n  .primary-navigation.visible {\r\n    width: 100%;\r\n    display: grid;\r\n    margin-block: 1rem 2rem;\r\n    overflow: scroll;\r\n  }\r\n  .primary-navigation.visible .nav-item {\r\n    text-align: center;\r\n    padding-block: 1rem;\r\n    font-size: 1rem;\r\n    border-radius: 1rem;\r\n  }\r\n  .primary-navigation.visible .nav-item:not(.active):not(.primary-navigation.visible .nav-item:last-child) {\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  }\r\n  .primary-navigation .mobile-contact {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.hero {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  display: grid;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n}\r\n.hero p {\r\n  color: #fff;\r\n  font-size: 1rem;\r\n  text-align: center;\r\n}\r\n@media (min-width: 600px) {\r\n  .hero p {\r\n    font-size: 1.2rem;\r\n  }\r\n}\r\n@media (min-width: 840px) {\r\n  .hero p {\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n.hero .main-content {\r\n  background-color: rgba(0, 0, 0, 0.25);\r\n  padding-block: 2rem;\r\n}\r\n@media (min-width: 1042px) {\r\n  .hero .main-content {\r\n    padding: 2.5rem;\r\n  }\r\n}\r\n\r\n.bg-nav-wrapper {\r\n  position: absolute;\r\n  bottom: 0;\r\n  display: grid;\r\n  width: 100vw;\r\n  justify-content: center;\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n.bg-nav {\r\n  display: none;\r\n}\r\n@media (min-width: 760px) {\r\n  .bg-nav {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n  }\r\n  .bg-nav .bg-nav-item {\r\n    background-color: #fff;\r\n    height: 0.3rem;\r\n    width: 2rem;\r\n    border-radius: 2rem;\r\n  }\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-align: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.welcome-wrapper {\r\n  background-color: #fff;\r\n}\r\n\r\n.welcome-section {\r\n  display: grid;\r\n  gap: 2rem;\r\n}\r\n.welcome-section div:last-child div:first-child {\r\n  margin-bottom: 2rem;\r\n}\r\n.welcome-section .button {\r\n  margin-block: 1rem;\r\n}\r\n.welcome-section .intro {\r\n  font-size: 18px;\r\n}\r\n@media (min-width: 960px) {\r\n  .welcome-section {\r\n    grid-template-columns: 1.5fr 1fr;\r\n    gap: 5rem;\r\n  }\r\n}\r\n\r\n.services {\r\n  display: grid;\r\n  justify-items: center;\r\n  gap: 3rem;\r\n  grid-auto-columns: -webkit-fit-content;\r\n  grid-auto-columns: fit-content;\r\n}\r\n.services .body-text {\r\n  max-width: 40rem;\r\n}\r\n\r\n.service-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 2rem 1.5rem;\r\n}\r\n@media (max-width: 911px) {\r\n  .service-container {\r\n    justify-content: center;\r\n  }\r\n}\r\n.service-container > * {\r\n  flex: 0 0 min(360px, 100%);\r\n}\r\n\r\n.service {\r\n  background-color: rgba(239, 241, 243, 0.7);\r\n  border-radius: 1rem;\r\n}\r\n.service .service__content {\r\n  padding: 1rem 1.5rem;\r\n}\r\n.service .service__text {\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n}\r\n.service .service__description {\r\n  margin-block: 0.5rem;\r\n}\r\n.service img {\r\n  border-radius: 1rem 1rem 0 0;\r\n}\r\n.service a {\r\n  color: rgb(255, 0, 0);\r\n  text-decoration: underline;\r\n  font-weight: 500;\r\n}\r\n\r\n.team-wrapper {\r\n  background-color: rgba(239, 241, 243, 0.7);\r\n}\r\n\r\n.team {\r\n  display: grid;\r\n  gap: 2rem;\r\n}\r\n.team .h2 {\r\n  margin-bottom: 0;\r\n  line-height: 1;\r\n}\r\n.team p {\r\n  font-size: 18px;\r\n}\r\n.team .position {\r\n  font-size: 18px;\r\n  line-height: 1;\r\n}\r\n.team .members {\r\n  display: grid;\r\n  gap: 2rem;\r\n}\r\n.team .members h3 {\r\n  line-height: 1.2;\r\n}\r\n@media (min-width: 1024px) {\r\n  .team {\r\n    grid-template-columns: 1fr 1.5fr;\r\n    align-items: center;\r\n  }\r\n  .team .h2 {\r\n    margin-bottom: 1rem;\r\n  }\r\n  .team .members {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n\r\n.form h2 {\r\n  margin-bottom: 0.5rem;\r\n}\r\n@media (min-width: 860px) {\r\n  .form {\r\n    display: flex;\r\n    gap: 3rem;\r\n  }\r\n  .form .contact-image {\r\n    flex: 1 1 auto;\r\n  }\r\n  .form .contact-form {\r\n    flex: 0 0 auto;\r\n  }\r\n}\r\n.form .contact-image {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n@media (max-width: 860px) {\r\n  .form .contact-image {\r\n    width: 100%;\r\n    aspect-ratio: 1/0.5;\r\n    margin-bottom: 3rem;\r\n  }\r\n}\r\n.form .contact-form {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: auto;\r\n}\r\n.form form {\r\n  display: grid;\r\n  gap: 1rem;\r\n  margin-top: 1.2rem;\r\n}\r\n.form label {\r\n  display: grid;\r\n  gap: 0.5rem;\r\n}\r\n.form input {\r\n  width: min(360px, 100%);\r\n  height: 3rem;\r\n  display: block;\r\n  font-size: 1.2rem;\r\n}\r\n.form [type=submit] {\r\n  border: 0;\r\n}\r\n.form textarea {\r\n  margin-top: 1rem;\r\n  width: min(360px, 100%);\r\n}\r\n\r\nfooter {\r\n  background-color: rgb(27, 26, 26);\r\n  color: #FFF;\r\n  padding: 5rem 2rem 0.5rem;\r\n}\r\nfooter a {\r\n  color: #FFF;\r\n}\r\nfooter nav {\r\n  display: grid;\r\n}\r\nfooter .top-foot {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 3rem;\r\n  margin-bottom: 4rem;\r\n  flex-wrap: wrap;\r\n}\r\nfooter .main-info {\r\n  display: grid;\r\n  gap: 1rem;\r\n}\r\nfooter .h3 {\r\n  display: block;\r\n  font-weight: 600;\r\n  color: rgb(255, 0, 0);\r\n}\r\nfooter .h3-l {\r\n  font-weight: 600;\r\n  margin-bottom: 0.5rem;\r\n  color: rgb(255, 0, 0);\r\n}\r\nfooter .button {\r\n  background-color: rgb(255, 255, 0);\r\n  color: #000;\r\n  border: 1px solid transparent;\r\n  margin-top: 1rem;\r\n}\r\nfooter .button:hover {\r\n  background-color: transparent;\r\n  border: 1px solid rgb(255, 255, 0);\r\n  color: #FFF;\r\n}\r\n\r\nsection {\r\n  padding: 3rem 2rem;\r\n}\r\n@media (min-width: 600px) {\r\n  section {\r\n    padding: 4rem;\r\n  }\r\n}\r\n@media (min-width: 960px) {\r\n  section {\r\n    padding-block: 6rem;\r\n  }\r\n}\r\n\r\nh3 {\r\n  font-size: clamp(1rem, 1rem + 1vw, 2rem);\r\n}\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://trustenergy/./src/assets/css/home.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/sustainability.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/sustainability.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/sus-3.jpg */ \"./src/assets/images/sus-3.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pol-9.jpg */ \"./src/assets/images/pol-9.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pol-2.jpg */ \"./src/assets/images/pol-2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pol-3.jpg */ \"./src/assets/images/pol-3.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pol-4.jpg */ \"./src/assets/images/pol-4.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pol-5.jpg */ \"./src/assets/images/pol-5.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pol-8.png */ \"./src/assets/images/pol-8.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pol-6.jpg */ \"./src/assets/images/pol-6.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\nbody{\r\n    font-family:'Poppins', sans-serif;\r\n}\r\n.header{\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    width: 100%;\r\n    height: 60vh;\r\n    background-repeat: no-repeat;\r\n    display: grid;\r\n    justify-content: center;\r\n    align-items: center;\r\n    object-fit: fill;\r\n    background-size: cover;\r\n    \r\n}\r\nh1{\r\n    font-size: 5rem;\r\n    color: white;\r\n    background-color: rgba(0, 0, 0, 0.288);\r\n    text-align: center;\r\n    padding: 30px 110px;\r\n    \r\n}\r\nh3{\r\n    font-size: 3rem;\r\n    font-family: 800;\r\n    color: red;\r\n    text-align: center;\r\n    padding-top: 30px;\r\n}\r\n.text1{\r\n    text-align: center;\r\n    font-size: 16px;\r\n    padding-inline: 180px ;\r\n    padding-top: 20px;\r\n    font-weight: 300;\r\n}\r\n.text2{\r\n    text-align: center;\r\n    font-size: 16px;\r\n    padding-inline: 180px ;\r\n    padding-top: 10px;\r\n    font-weight: 300;\r\n}\r\nb{\r\n    font-weight: 600;\r\n}\r\n.policy-info{\r\n    background-color: green;\r\n    color: white;\r\n    width: 30%;\r\n    height: 35vh;\r\n}\r\n.policyinfo-1{\r\n    background-color: red;\r\n    color: white;\r\n    width: 30%;\r\n    height: 35vh;\r\n}\r\n.text3{\r\n    font-size: 35px;\r\n    font-weight: 500;\r\n    padding-left: 40px;\r\n    padding-top: 30px;\r\n}\r\n.text4{\r\n    font-family: 300;\r\n    padding-left: 40px;\r\n    width: 90%;\r\n    font-size: 18px;\r\n    align-items: center;\r\n}\r\n.img1{\r\n    width: 30%;\r\n    height: 35vh;\r\n    background-color: aqua;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n    background-repeat: no-repeat;\r\n    justify-content: center;\r\n    align-items: center;\r\n    object-fit: fill;\r\n    background-size: cover;\r\n}\r\n.policy-1{\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-top: 50px;\r\n}\r\n.img2{\r\n    width: 30%;\r\n    height: 35vh;\r\n    background-color: aqua;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n    background-repeat: no-repeat;\r\n    justify-content: center;\r\n    align-items: center;\r\n    object-fit: fill;\r\n    background-size: cover;\r\n}\r\n.img3{\r\n    width: 30%;\r\n    height: 35vh;\r\n    background-color: aqua;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\r\n    background-repeat: no-repeat;\r\n    justify-content: center;\r\n    align-items: center;\r\n    object-fit: fill;\r\n    background-size: cover;\r\n}\r\n.img4{\r\n    width: 30%;\r\n    height: 35vh;\r\n    background-color: aqua;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\r\n    background-repeat: no-repeat;\r\n    justify-content: center;\r\n    align-items: center;\r\n    object-fit: fill;\r\n    background-size: cover;\r\n}\r\n.img5{\r\n    width: 30%;\r\n    height: 35vh;\r\n    background-color: aqua;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\r\n    background-repeat: no-repeat;\r\n    justify-content: center;\r\n    align-items: center;\r\n    object-fit: fill;\r\n    background-size: cover;\r\n}\r\n.SUSTAINABILITY{\r\n    padding: 0;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n}\r\n@media (max-width:1491px){\r\n    .img1{\r\n        width: 30%;\r\n        height: 50vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: contain;\r\n        background-position: center;\r\n    }\r\n    .policy-info{\r\n        background-color: green;\r\n        color: white;\r\n        width: 30%;\r\n        height: 50vh;\r\n    }\r\n    .text1{\r\n        text-align: center;\r\n        font-size: 16px;\r\n        padding-inline: 180px ;\r\n        padding-top: 20px;\r\n        font-weight: 300;\r\n    }\r\n    .text2{\r\n        text-align: center;\r\n        font-size: 16px;\r\n        padding-inline: 180px ;\r\n        padding-top: 10px;\r\n        font-weight: 300;\r\n    }\r\n    b{\r\n        font-weight: 600;\r\n    }\r\n    .policyinfo-1{\r\n        background-color: red;\r\n        color: white;\r\n        width: 30%;\r\n        height: 50vh;\r\n    }\r\n    .text3{\r\n        font-size: 35px;\r\n        font-weight: 500;\r\n        padding-left: 40px;\r\n        padding-top: 30px;\r\n    }\r\n    .text4{\r\n        font-family: 300;\r\n        padding-left: 40px;\r\n        width: 90%;\r\n        font-size: 18px;\r\n        align-items: center;\r\n    }\r\n    .img2{\r\n        width: 30%;\r\n        height: 50vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n    .img3{\r\n        width: 30%;\r\n        height: 50vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n    .img4{\r\n        width: 30%;\r\n        height: 50vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n    .img5{\r\n        width: 30%;\r\n        height: 50vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n\r\n}\r\n@media (max-width:1391px){\r\n    .img1{\r\n        width: 39%;\r\n        height: 43vh;\r\n        background-color: rgb(0, 255, 255);\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n        background-position: center;\r\n    }\r\n    .policy-info{\r\n        background-color: green;\r\n        color: white;\r\n        width: 39%;\r\n        height: 43vh;\r\n    }\r\n    .text1{\r\n        text-align: center;\r\n        font-size: 16px;\r\n        padding-inline: 180px ;\r\n        padding-top: 20px;\r\n        font-weight: 300;\r\n    }\r\n    .text2{\r\n        text-align: center;\r\n        font-size: 16px;\r\n        padding-inline: 180px ;\r\n        padding-top: 10px;\r\n        font-weight: 300;\r\n    }\r\n    b{\r\n        font-weight: 600;\r\n    }\r\n    .policyinfo-1{\r\n        background-color: red;\r\n        color: white;\r\n        width: 39%;\r\n        height: 43vh;\r\n    }\r\n    .text3{\r\n        font-size: 35px;\r\n        font-weight: 500;\r\n        padding-left: 40px;\r\n        padding-top: 20px;\r\n    }\r\n    .text4{\r\n        font-family: 300;\r\n        padding-left: 40px;\r\n        width: 90%;\r\n        font-size: 18px;\r\n        align-items: center;\r\n    }\r\n    .img2{\r\n        width: 39%;\r\n        height: 43vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n    .img3{\r\n        width: 39%;\r\n        height: 43vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n    .img4{\r\n        width: 39%;\r\n        height: 43vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n    .img5{\r\n        width: 39%;\r\n        height: 43vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n\r\n}\r\n@media (max-width:860px){\r\n    .img1{\r\n        width: 55%;\r\n        height: 27vh;\r\n        background-color: rgb(0, 255, 255);\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n        background-position: center;\r\n    }\r\n    .policy-info{\r\n        background-color: green;\r\n        color: white;\r\n        width: 55%;\r\n        height: 29vh;\r\n        align-content: center;\r\n    }\r\n    .text1{\r\n        text-align: center;\r\n        font-size: 16px;\r\n        padding-inline: 180px ;\r\n        padding-top: 20px;\r\n        font-weight: 300;\r\n    }\r\n    .text2{\r\n        text-align: center;\r\n        font-size: 16px;\r\n        padding-inline: 180px ;\r\n        padding-top: 10px;\r\n        font-weight: 300;\r\n    }\r\n    b{\r\n        font-weight: 600;\r\n    }\r\n    .policyinfo-1{\r\n        background-color: red;\r\n        color: white;\r\n        width: 55%;\r\n        height: 27vh;\r\n    }\r\n    .text3{\r\n        font-size: 35px;\r\n        font-weight: 500;\r\n        padding-left: 40px;\r\n        padding-top: 20px;\r\n    }\r\n    .text4{\r\n        font-family: 300;\r\n        padding-left: 40px;\r\n        width: 90%;\r\n        font-size: 18px;\r\n        align-items: center;\r\n    }\r\n    .img2{\r\n        width: 55%;\r\n        height: 27vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n    .img3{\r\n        width: 55%;\r\n        height: 27vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n    .img4{\r\n        width: 55%;\r\n        height: 27vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n    .img5{\r\n        width: 55%;\r\n        height: 27vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n    .header{\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n        width: 100%;\r\n        height: 35vh;\r\n        background-repeat: no-repeat;\r\n        display: grid;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n        \r\n    }\r\n    h1{\r\n        font-size: 5rem;\r\n        color: white;\r\n        background-color: rgba(0, 0, 0, 0.288);\r\n        text-align: center;\r\n        padding: 30px 110px;\r\n        \r\n    }\r\n    h3{\r\n        font-size: 2.6rem;\r\n        font-family: 800;\r\n        color: red;\r\n        text-align: center;\r\n        padding-top: 30px;\r\n    }\r\n    .text1{\r\n        text-align: center;\r\n        font-size: 16px;\r\n        padding-inline: 70px ;\r\n        padding-top: 20px;\r\n        font-weight: 300;\r\n    }\r\n    .text2{\r\n        text-align: center;\r\n        font-size: 16px;\r\n        padding-inline: 70px ;\r\n        padding-top: 10px;\r\n        font-weight: 300;\r\n    }\r\n    b{\r\n        font-weight: 600;\r\n    }\r\n    .policy-1{\r\n        display: flex;\r\n        flex-direction: column;\r\n        padding-top: 50px;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n    .policies{\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n}\r\n@media (max-width:400px){\r\n    .header{\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n        width: 100%;\r\n        height: 40vh;\r\n        background-repeat: no-repeat;\r\n        display: grid;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n        \r\n    }\r\n    h1{\r\n        font-size: 2.5rem;\r\n        color: white;\r\n        background-color: rgba(0, 0, 0, 0.288);\r\n        text-align: center;\r\n        padding: 3px 10px;\r\n        \r\n    }\r\n    h3{\r\n        font-size: 2.5rem;\r\n        font-family: 800;\r\n        color: red;\r\n        text-align: center;\r\n        padding-top: 30px;\r\n        line-height: 50px;\r\n    }\r\n    .text1{\r\n        text-align: left;\r\n        font-size: 16px;\r\n        padding-top: 10px;\r\n        font-weight: 300;\r\n    }\r\n    .text2{\r\n        text-align: left;\r\n        font-size: 16px;\r\n        padding-top: 10px;\r\n        font-weight: 300;\r\n    }\r\n    b{\r\n        font-weight: 600;\r\n    }\r\n    .policy-info{\r\n        background-color: green;\r\n        color: white;\r\n        width: 80%;\r\n        height: 50vh;\r\n    }\r\n    .policyinfo-1{\r\n        background-color: red;\r\n        color: white;\r\n        width: 80%;\r\n        height: 59vh;\r\n    }\r\n    .text3{\r\n        font-size: 35px;\r\n        font-weight: 500;\r\n        padding-left: 20px;\r\n        padding-top: 20px;\r\n    }\r\n    .text4{\r\n        font-family: 300;\r\n        padding-left: 20px;\r\n        width: 90%;\r\n        font-size: 18px;\r\n        align-items: center;\r\n    }\r\n    .img1{\r\n        width: 80%;\r\n        height: 35vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n    .policy-1{\r\n        display: flex;\r\n        justify-content: center;\r\n        padding-top: 50px;\r\n    }\r\n    .img2{\r\n        width: 80%;\r\n        height: 35vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n    .img3{\r\n        width: 80%;\r\n        height: 35vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n    .img4{\r\n        width: 80%;\r\n        height: 35vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n    .img5{\r\n        width: 80%;\r\n        height: 35vh;\r\n        background-color: aqua;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\r\n        background-repeat: no-repeat;\r\n        justify-content: center;\r\n        align-items: center;\r\n        object-fit: fill;\r\n        background-size: cover;\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://trustenergy/./src/assets/css/sustainability.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://trustenergy/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://trustenergy/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://trustenergy/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/css/home.css":
/*!*********************************!*\
  !*** ./src/assets/css/home.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./home.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/css/home.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://trustenergy/./src/assets/css/home.css?");

/***/ }),

/***/ "./src/assets/css/sustainability.css":
/*!*******************************************!*\
  !*** ./src/assets/css/sustainability.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sustainability_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./sustainability.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/css/sustainability.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sustainability_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sustainability_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_sustainability_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_sustainability_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://trustenergy/./src/assets/css/sustainability.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://trustenergy/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://trustenergy/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://trustenergy/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://trustenergy/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://trustenergy/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://trustenergy/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/images/engineer.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/engineer.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"src/assets/images/engineer.jpg\";\n\n//# sourceURL=webpack://trustenergy/./src/assets/images/engineer.jpg?");

/***/ }),

/***/ "./src/assets/images/hero-3.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/hero-3.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"src/assets/images/hero-3.jpg\";\n\n//# sourceURL=webpack://trustenergy/./src/assets/images/hero-3.jpg?");

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"src/assets/images/logo.png\";\n\n//# sourceURL=webpack://trustenergy/./src/assets/images/logo.png?");

/***/ }),

/***/ "./src/assets/images/pol-2.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/pol-2.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"src/assets/images/pol-2.jpg\";\n\n//# sourceURL=webpack://trustenergy/./src/assets/images/pol-2.jpg?");

/***/ }),

/***/ "./src/assets/images/pol-3.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/pol-3.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"src/assets/images/pol-3.jpg\";\n\n//# sourceURL=webpack://trustenergy/./src/assets/images/pol-3.jpg?");

/***/ }),

/***/ "./src/assets/images/pol-4.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/pol-4.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"src/assets/images/pol-4.jpg\";\n\n//# sourceURL=webpack://trustenergy/./src/assets/images/pol-4.jpg?");

/***/ }),

/***/ "./src/assets/images/pol-5.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/pol-5.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"src/assets/images/pol-5.jpg\";\n\n//# sourceURL=webpack://trustenergy/./src/assets/images/pol-5.jpg?");

/***/ }),

/***/ "./src/assets/images/pol-6.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/pol-6.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"src/assets/images/pol-6.jpg\";\n\n//# sourceURL=webpack://trustenergy/./src/assets/images/pol-6.jpg?");

/***/ }),

/***/ "./src/assets/images/pol-8.png":
/*!*************************************!*\
  !*** ./src/assets/images/pol-8.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"src/assets/images/pol-8.png\";\n\n//# sourceURL=webpack://trustenergy/./src/assets/images/pol-8.png?");

/***/ }),

/***/ "./src/assets/images/pol-9.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/pol-9.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"src/assets/images/pol-9.jpg\";\n\n//# sourceURL=webpack://trustenergy/./src/assets/images/pol-9.jpg?");

/***/ }),

/***/ "./src/assets/images/sus-3.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/sus-3.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"src/assets/images/sus-3.jpg\";\n\n//# sourceURL=webpack://trustenergy/./src/assets/images/sus-3.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"sustainability": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sustainability.js");
/******/ 	
/******/ })()
;