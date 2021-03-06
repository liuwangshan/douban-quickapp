(function(){
      
  var createAppHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var $app_script$ = __webpack_require__(34)
	
	$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	})
	
	$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ },

/***/ 12:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 显示菜单
	 */
	function showMenu() {
	  var prompt = $app_require$('@app-module/system.prompt');
	  var router = $app_require$('@app-module/system.router');
	  var appInfo = $app_require$('@app-module/system.app').getInfo();
	  prompt.showContextMenu({
	    itemList: ['保存桌面', '关于', '取消'],
	    success: function success(ret) {
	      switch (ret.index) {
	        case 0:
	          // 保存桌面
	          createShortcut();
	          break;
	        case 1:
	          // 关于
	          router.push({
	            uri: '/About',
	            params: { name: appInfo.name, icon: appInfo.icon }
	          });
	          break;
	        case 2:
	          // 取消
	          break;
	        default:
	          prompt.showToast({ message: 'error' });
	      }
	    }
	  });
	}
	
	/**
	 * 创建桌面图标
	 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
	 */
	function createShortcut() {
	  var prompt = $app_require$('@app-module/system.prompt');
	  var shortcut = $app_require$('@app-module/system.shortcut');
	  shortcut.hasInstalled({
	    success: function success(ret) {
	      if (ret) {
	        prompt.showToast({ message: '已创建桌面图标' });
	      } else {
	        shortcut.install({
	          success: function success() {
	            prompt.showToast({ message: '成功创建桌面图标' });
	          },
	          fail: function fail(errmsg, errcode) {
	            prompt.showToast({ message: 'error: ' + errcode + '---' + errmsg });
	          }
	        });
	      }
	    }
	  });
	}
	
	/**
	 * http get请求
	 */
	function http(url, callBack) {
	  _system2.default.fetch({
	    url: url,
	    method: 'GET',
	    success: function success(data) {
	      callBack(JSON.parse(data.data));
	    },
	    fail: function fail(data, code) {
	      console.log("http fail, code=" + code);
	    }
	  });
	}
	
	exports.default = {
	  showMenu: showMenu,
	  createShortcut: createShortcut,
	  http: http
	};

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(12);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  showMenu: _util2.default.showMenu,
	  createShortcut: _util2.default.createShortcut,
	
	  gData: {
	    dbBaseUrl: 'https://api.douban.com'
	  }
	};
	(exports.default || module.exports).manifest = {"package":"com.jimaowo.demo","name":"JmwDy","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"101","icon":"/Common/images/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.fetch"},{"name":"system.webview"},{"name":"system.shortcut"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"Home","pages":{"Home":{"component":"index"},"Topic":{"component":"index"},"Detail":{"component":"index"},"More":{"component":"index"},"About":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#35AA53","titleBarTextColor":"#ffffff","menu":true,"pages":{"Home":{"titleBarText":"鸡毛窝","menu":false},"Topic":{"titleBarText":"电影专题"},"Detail":{"titleBarText":"电影详情"},"About":{"menu":false}}}};
	}

/***/ }

/******/ });
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"com.jimaowo.demo","name":"JmwDy","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"101","icon":"/Common/images/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.fetch"},{"name":"system.webview"},{"name":"system.shortcut"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"Home","pages":{"Home":{"component":"index"},"Topic":{"component":"index"},"Detail":{"component":"index"},"More":{"component":"index"},"About":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#35AA53","titleBarTextColor":"#ffffff","menu":true,"pages":{"Home":{"titleBarText":"鸡毛窝","menu":false},"Topic":{"titleBarText":"电影专题"},"Detail":{"titleBarText":"电影详情"},"About":{"menu":false}}}};
  }
})();
//# sourceMappingURL=app.js.map