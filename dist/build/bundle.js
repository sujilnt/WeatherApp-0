"use strict";

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	"use strict";

	var _main = __webpack_require__(1);

	var a = _interopRequireWildcard(_main);

	var _main2 = __webpack_require__(5);

	var b = _interopRequireWildcard(_main2);

	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}newObj.default = obj;return newObj;
		}
	}

	console.log("modules imported successfully");

	/***/
},
/* 1 */
/***/function (module, exports) {

	// removed by extract-text-webpack-plugin

	/***/},,,,
/* 2 */
/* 3 */
/* 4 */
/* 5 */
/***/function (module, exports) {

	"use strict";

	var mainId = document.getElementById("card");
	var mainDes = document.getElementById("desc");
	var temperatuere = document.getElementById("temperature");
	var mainIcon = document.getElementById("iconDesc");

	var currentLocation = function currentLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				return CallingApi(position.coords.latitude, position.coords.longitude);
			});
		} else {
			console.log("Geolocation is not supported by this browser.");
		}
	};
	currentLocation();

	var CallingApi = function CallingApi(latitude, longitude) {
		fetch("https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude).then(function (response) {
			return response.json();
		}).then(function (data) {
			return appendingData(data);
		}).catch(function (error) {
			return console.log("error", error);
		});
	};

	var appendingData = function appendingData(data) {
		var weabtherObj = data.weather[0];
		var iconUrl = weabtherObj.icon;
		mainDes.innerHTML = weabtherObj.description;
		temperatuere.innerHTML = Math.round(data.main.temp * 10) / 10 + temperatuere.innerHTML;
		mainIcon.setAttribute("title", weabtherObj.description);
		mainIcon.src = weabtherObj.icon;
		console.log(mainIcon);
		console.log("waether value", data.weather, weabtherObj.icon);
	};

	/***/
}]
/******/);
//# sourceMappingURL=bundle.js.map