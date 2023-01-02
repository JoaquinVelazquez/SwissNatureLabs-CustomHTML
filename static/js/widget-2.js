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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./templates/_shared/assets/scripts/cookie-disclaimer.js":
/*!***************************************************************!*\
  !*** ./templates/_shared/assets/scripts/cookie-disclaimer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var googleAnalyticsHandler = __webpack_require__(/*! ./utils/google-analytics */ \"./templates/_shared/assets/scripts/utils/google-analytics.js\");\n\nvar _require = __webpack_require__(/*! ./utils/constants/googleAnalytics */ \"./templates/_shared/assets/scripts/utils/constants/googleAnalytics/index.js\"),\n    EVENT = _require.EVENT,\n    TYPE = _require.TYPE,\n    EVENT_CATEGORY = _require.EVENT_CATEGORY,\n    EVENT_ACTION = _require.EVENT_ACTION;\n\nvar cookieDisclaimerHandler = function cookieDisclaimerHandler() {\n  var cookieDisclaimerBanner = document.querySelector(\"[data-js='cookieDisclaimerBanner']\");\n  var cookieDisclaimerButton = document.querySelector(\"[data-js='cookieDisclaimerButton']\");\n  var cookieDisclaimerMoreInfo = document.querySelector(\"[data-js='cookieDisclaimerMoreInfo']\");\n  var siteId = cookieDisclaimerButton.getAttribute(\"site-id\").toLowerCase();\n  var cookieName = \"_ml_cbanner_\".concat(siteId);\n\n  var setHideBanner = function setHideBanner() {\n    cookieDisclaimerBanner.style.display = \"none\";\n  };\n\n  var setShowBanner = function setShowBanner() {\n    cookieDisclaimerBanner.style.display = \"flex\";\n  };\n\n  var setDisclaimerCookie = function setDisclaimerCookie() {\n    var expirarionTime = 60 * 60 * 24 * 365 * 3; // Three years\n\n    var disclaimerCookie = \"\".concat(cookieName, \"=1; max-age=\").concat(expirarionTime, \"; path=/;\");\n    document.cookie = disclaimerCookie; // once the cookie is set, hide the banner\n\n    setHideBanner();\n  };\n\n  if (cookieDisclaimerButton) {\n    cookieDisclaimerButton.addEventListener(\"click\", function () {\n      setDisclaimerCookie();\n      googleAnalyticsHandler(EVENT.SEND, TYPE.EVENT, EVENT_CATEGORY.LGPD, EVENT_ACTION.ACCEPT);\n    });\n  }\n\n  if (cookieDisclaimerMoreInfo) {\n    cookieDisclaimerMoreInfo.addEventListener(\"click\", function () {\n      googleAnalyticsHandler(EVENT.SEND, TYPE.EVENT, EVENT_CATEGORY.LGPD, EVENT_ACTION.MORE_INFO);\n    });\n  }\n\n  if (document.cookie.indexOf(\"\".concat(cookieName, \"=\")) === -1) {\n    setShowBanner();\n  }\n};\n\nmodule.exports = cookieDisclaimerHandler;\n\n//# sourceURL=webpack:///./templates/_shared/assets/scripts/cookie-disclaimer.js?");

/***/ }),

/***/ "./templates/_shared/assets/scripts/utils/constants/googleAnalytics/index.js":
/*!***********************************************************************************!*\
  !*** ./templates/_shared/assets/scripts/utils/constants/googleAnalytics/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  EVENT: {\n    SEND: 'send',\n    SET: 'set'\n  },\n  TYPE: {\n    EVENT: 'event',\n    PAGE: 'page'\n  },\n  EVENT_CATEGORY: {\n    LGPD: 'LGPD'\n  },\n  EVENT_ACTION: {\n    ACCEPT: 'ACCEPT',\n    MORE_INFO: 'MORE_INFO'\n  }\n};\n\n//# sourceURL=webpack:///./templates/_shared/assets/scripts/utils/constants/googleAnalytics/index.js?");

/***/ }),

/***/ "./templates/_shared/assets/scripts/utils/google-analytics.js":
/*!********************************************************************!*\
  !*** ./templates/_shared/assets/scripts/utils/google-analytics.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var googleAnalyticsHandler = function googleAnalyticsHandler(event, hitType, eventCategory, eventAction) {\n  if (meli_ga && typeof meli_ga !== 'undefined') {\n    meli_ga(event, {\n      hitType: hitType,\n      eventCategory: eventCategory,\n      eventAction: eventAction\n    });\n  }\n};\n\nmodule.exports = googleAnalyticsHandler;\n\n//# sourceURL=webpack:///./templates/_shared/assets/scripts/utils/google-analytics.js?");

/***/ }),

/***/ "./templates/fashion/assets/scripts/menu/src/index.js":
/*!************************************************************!*\
  !*** ./templates/fashion/assets/scripts/menu/src/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cookieDisclaimerHandler = __webpack_require__(/*! ../../../../../_shared/assets/scripts/cookie-disclaimer */ \"./templates/_shared/assets/scripts/cookie-disclaimer.js\");\n\n!function () {\n  var setLocationValue = function setLocationValue(url) {\n    window.location = \"/\" + encodeURIComponent(url);\n  };\n\n  var submitElement;\n  submitElement = document.getElementById(\"search-form\");\n\n  if (submitElement) {\n    submitElement.onsubmit = function (event) {\n      event.preventDefault();\n      var searchInput = document.getElementById(\"search-input\");\n\n      if (searchInput.value) {\n        setLocationValue(searchInput.value);\n      }\n    };\n  }\n\n  submitElement = document.getElementById(\"search-form-responsive\");\n\n  if (submitElement) {\n    submitElement.onsubmit = function (event) {\n      event.preventDefault();\n      var searchInput = document.getElementById(\"search-input-responsive\");\n\n      if (searchInput.value) {\n        setLocationValue(searchInput.value);\n      }\n    };\n  }\n\n  ;\n  cookieDisclaimerHandler();\n}();\nvar navSearchInput = document.getElementsByClassName(\"nav-search-input\")[0];\nvar navSearchButton = document.getElementById(\"nav-search-button\");\n\nif (navSearchButton && navSearchInput) {\n  navSearchButton.addEventListener(\"click\", function (event) {\n    var visibility = navSearchInput.style.visibility;\n\n    if (!visibility) {\n      event.preventDefault();\n      navSearchInput.style.visibility = \"visible\";\n      navSearchInput.style.opacity = \"1\";\n    }\n\n    ;\n  });\n} // Menu actions\n\n\n(function () {\n  var displayHide = \"none\";\n  var displayShow = \"block\";\n  var displayShowFlex = \"flex\";\n  var menuButton = document.getElementById(\"hamburguer-menu\");\n  var navList = document.getElementById(\"nav-list\");\n  var navListChildren = navList.children;\n  var navPopover = document.getElementById(\"popover-menu\");\n  var navPopoverList = document.getElementById(\"nav-popover-list\");\n  var navPopoverListChildren = navPopoverList.children;\n  var popoverSeeMoreCategories = [];\n  var sidebarCloseButton = document.getElementById(\"close-sidebar-button\");\n  var switchButton = document.getElementById(\"mobile-categories-menu-switch\");\n  var listItemArray = document.getElementsByClassName(\"nav-fashion-list__item\");\n\n  for (var elementIndex = 0; elementIndex < listItemArray.length; elementIndex++) {\n    listItemArray[elementIndex].style.visibility = \"visible\";\n    listItemArray[elementIndex].style.opacity = \"1\";\n  }\n\n  function toggle() {\n    var body = document.body;\n    var navVerticalList = document.getElementById(\"nav-vertical-list\");\n    var responsiveMenu = document.getElementById(\"responsive-menu\");\n    var visibility = \"visibility\";\n    var transition = \"0.2s\";\n    var opacityHidden = \"0\";\n    var opacityVisible = \"1\";\n    var leftResponsiveSidebarHidden = \"-95vw\";\n    var leftResponisveSidebarVisible = \"0\";\n    var leftSidebarHidden = \"-350px\";\n    var leftSidebarVisible = \"0\";\n    var visibilityHidden = \"hidden\";\n    var visibilityVisible = \"visible\";\n    var pointerEventsAuto = \"auto\";\n    var pointerEventsNone = \"none\";\n    var bodyBlockScroll = \"body--block-scroll\";\n    var navVerticalListVisibility = window.getComputedStyle(navVerticalList, null).getPropertyValue(visibility);\n    var responsiveMenuVisibility = window.getComputedStyle(responsiveMenu, null).getPropertyValue(visibility);\n    navVerticalList.style.transition = transition;\n    responsiveMenu.style.transition = transition;\n\n    if (navVerticalListVisibility === visibilityHidden || responsiveMenuVisibility === visibilityHidden) {\n      navVerticalList.style.visibility = visibilityVisible;\n      responsiveMenu.style.visibility = visibilityVisible;\n      navVerticalList.style.opacity = opacityVisible;\n      responsiveMenu.style.opacity = opacityVisible;\n      responsiveMenu.style.left = leftResponisveSidebarVisible;\n      navVerticalList.style.left = leftSidebarVisible;\n      navVerticalList.style.pointerEvents = pointerEventsAuto;\n      body.classList.add(bodyBlockScroll);\n    } else {\n      navVerticalList.style.visibility = visibilityHidden;\n      responsiveMenu.style.visibility = visibilityHidden;\n      navVerticalList.style.opacity = opacityHidden;\n      responsiveMenu.style.opacity = opacityHidden;\n      responsiveMenu.style.left = leftResponsiveSidebarHidden;\n      navVerticalList.style.left = leftSidebarHidden;\n      navVerticalList.style.pointerEvents = pointerEventsNone;\n      body.classList.remove(bodyBlockScroll);\n    }\n  }\n\n  function showHamburgerMenu() {\n    var maxWidthNavList = 400;\n    var totalWidth = 0;\n\n    for (var i = 0; i < navListChildren.length; i++) {\n      totalWidth = totalWidth + navListChildren[i].offsetWidth;\n    }\n\n    return totalWidth > maxWidthNavList;\n  }\n\n  function seeMoreCategoriesHandler() {\n    var moreCategoriesButton = document.getElementById('nav-fashion__see-more');\n    var saleButton = document.getElementById('nav-fashion__sale-link');\n    var howBuyButton = document.querySelector('.how-buy__button');\n    var navListChildren = navList.children;\n    var countWidth = 0;\n    var saleButtonWidth = saleButton ? saleButton.clientWidth : 0;\n    var howBuyButtonWidth = howBuyButton ? howBuyButton.clientWidth : 0;\n    var searchInputWidth = parseInt(document.querySelector('#search-form .nav-search-input').clientWidth);\n    var menuMaxSize = navList.clientWidth - (saleButtonWidth + moreCategoriesButton.clientWidth + howBuyButtonWidth + searchInputWidth / 2);\n    var seeMoreCategoriesStart = 0;\n    var visible_style = 'display: inline !important; visibility: visible; opacity: 1;';\n    var invisible_style = 'display: none !important';\n    var exceptions = [\"nav-fashion__hamburger-button\", \"nav-fashion__see-more\", \"nav-fashion__sale-link\", \"how-buy__button\"];\n\n    var verifyExceptions = function verifyExceptions(index) {\n      return exceptions.indexOf(navListChildren[index].id) === -1;\n    };\n\n    var verifySizeOfChildrens = function verifySizeOfChildrens(index) {\n      return index === 0 && navListChildren.length === exceptions.length;\n    };\n\n    for (var i = 0; i < navListChildren.length; i++) {\n      if (verifyExceptions(i)) {\n        var menuMaxSizeCondition;\n\n        if (verifySizeOfChildrens(i)) {\n          menuMaxSizeCondition = navListChildren[i].clientWidth <= menuMaxSize;\n        } else {\n          menuMaxSizeCondition = navListChildren[i].clientWidth + countWidth <= menuMaxSize;\n        }\n\n        if (menuMaxSizeCondition) {\n          countWidth += navListChildren[i].clientWidth;\n        } else {\n          if (!seeMoreCategoriesStart) {\n            seeMoreCategoriesStart = i;\n          }\n\n          popoverSeeMoreCategories.push(navListChildren[i].textContent);\n          navListChildren[i].setAttribute('style', invisible_style);\n        }\n      }\n    }\n\n    if (!popoverSeeMoreCategories.length) {\n      moreCategoriesButton.setAttribute('style', invisible_style);\n    }\n\n    if (popoverSeeMoreCategories.length === 1) {\n      if (navList.clientWidth < menuMaxSize + moreCategoriesButton.clientWidth) {\n        navListChildren[seeMoreCategoriesStart].setAttribute('style', visible_style);\n        moreCategoriesButton.setAttribute('style', invisible_style);\n      }\n    }\n  } // Popover methods\n\n\n  function showPopover() {\n    navPopover.style.display = displayShow;\n  }\n\n  function hidePopover() {\n    navPopover.style.display = displayHide;\n  }\n\n  function cleanPopoverData() {\n    var popoverData = [].slice.call(document.getElementsByClassName(\"nav-fashion-list--horizontal__item\"));\n    popoverData.forEach(function (item) {\n      item.style.display = displayHide;\n    });\n  }\n\n  function setPopoverData(item, popoverSeeMoreCategories) {\n    var popoverCategories = document.querySelectorAll('[data-toggle=\"' + item.dataset.js + '\"]');\n\n    if (item.id === \"nav-fashion__see-more\") {\n      for (var e = 0; e < popoverSeeMoreCategories.length; e++) {\n        for (var j = 0; j < navPopoverListChildren.length; j++) {\n          if (navPopoverListChildren[j].textContent.replace(/\\s/g, '').indexOf(popoverSeeMoreCategories[e].replace(/\\s/g, '')) !== -1) {\n            navPopoverListChildren[j].setAttribute('style', 'display: block !important');\n          }\n        }\n      }\n    }\n\n    if (popoverCategories.length) {\n      popoverCategories[0].style.display = displayShowFlex;\n    }\n  }\n\n  function hoverStylesHandler(item) {\n    for (var i = 0; i < navListChildren.length; i++) {\n      navListChildren[i].style.boxShadow = \"none\";\n    }\n\n    if (item) {\n      var popoverCategories = document.querySelectorAll('[data-toggle=\"' + item.dataset.js + '\"]');\n      var customTextColor = getComputedStyle(document.querySelector(\"#nav-list > li:nth-child(2) > a > span\")).color;\n\n      if (item.getAttribute('has-childs') !== '[]' && (popoverCategories[0] || item.id === \"nav-fashion__see-more\" || item.getAttribute('data-js') === 'how-buy__button')) {\n        item.style.boxShadow = 'inset 0 -2px 0 ' + customTextColor;\n      }\n    }\n  }\n\n  function popoverHandler(popoverSeeMoreCategories) {\n    var navListArray = [].slice.call(navList.children);\n    navListArray.forEach(function (item) {\n      item.addEventListener(\"mouseover\", function () {\n        cleanPopoverData();\n        showPopover();\n        setPopoverData(this, popoverSeeMoreCategories);\n        hoverStylesHandler(this);\n      });\n    }, this);\n    navPopover.addEventListener(\"mouseleave\", function () {\n      hidePopover();\n      hoverStylesHandler();\n    });\n  }\n\n  if (switchButton.checked) {\n    toggle();\n  }\n\n  window.addEventListener('resize', function () {\n    showHamburgerMenu();\n    seeMoreCategoriesHandler();\n  });\n  menuButton.addEventListener(\"click\", toggle);\n  sidebarCloseButton.addEventListener(\"click\", toggle);\n  seeMoreCategoriesHandler();\n  popoverHandler(popoverSeeMoreCategories); //Mobile menu actions\n\n  var categoriesOption = document.querySelectorAll('[data-js=\"categories-toggle\"]'); // this conditional fix chrome 43 version warning\n\n  if (categoriesOption && categoriesOption.length > 0) {\n    categoriesOption.forEach(function (item) {\n      item.addEventListener(\"click\", toggleSubItems);\n    }, this);\n  }\n\n  function toggleSubItems() {\n    var subItemes = document.querySelectorAll('[data-toggle=\"' + this.id + '\"]');\n    subItemes.forEach(function (item) {\n      item.style.display = this.checked ? displayShow : displayHide;\n    }, this);\n  }\n\n  ;\n  var menuElement = document.querySelector('.nav-fashion-header__bounds');\n  var logoElement = document.querySelector('.nav-fashion-header__title');\n  var navIconsElement = document.querySelector('.nav-fashion-header__nav-icons');\n  var navlistElement = document.querySelector('.nav-fashion-list');\n\n  var hideFirstMenuItem = function hideFirstMenuItem() {\n    document.querySelector('.nav-fashion-list .nav-fashion-list__item:not(.nav-fashion__hamburger-button)').classList.add(\"d-none\");\n  };\n\n  var showFirstMenuItem = function showFirstMenuItem() {\n    document.querySelector('.nav-fashion-list .nav-fashion-list__item:not(.nav-fashion__hamburger-button)').classList.remove(\"d-none\");\n  };\n\n  window.addEventListener(\"resize\", function () {\n    var menuSize = parseInt(window.getComputedStyle(menuElement, null).getPropertyValue(\"width\").replace('px', ''));\n    var logoSize = parseInt(window.getComputedStyle(logoElement, null).getPropertyValue(\"width\").replace('px', ''));\n    var navIconsSize = parseInt(window.getComputedStyle(navIconsElement, null).getPropertyValue(\"width\").replace('px', ''));\n    var navlistSize = parseInt(window.getComputedStyle(navlistElement, null).getPropertyValue(\"width\").replace('px', ''));\n\n    if (menuSize < logoSize + navIconsSize + navlistSize) {\n      hideFirstMenuItem();\n    } else {\n      showFirstMenuItem();\n    }\n  });\n})();\n\n//# sourceURL=webpack:///./templates/fashion/assets/scripts/menu/src/index.js?");

/***/ }),

/***/ 0:
/*!******************************************************************!*\
  !*** multi ./templates/fashion/assets/scripts/menu/src/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./templates/fashion/assets/scripts/menu/src/index.js */\"./templates/fashion/assets/scripts/menu/src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./templates/fashion/assets/scripts/menu/src/index.js?");

/***/ })

/******/ });