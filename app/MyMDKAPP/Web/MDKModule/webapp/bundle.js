(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/MyMDKAPP/i18n/i18n.properties":
/*!*********************************************************!*\
  !*** ./build.definitions/MyMDKAPP/i18n/i18n.properties ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ""

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Rules/AppUpdateFailure.js":
/*!**************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Rules/AppUpdateFailure.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
    let result = clientAPI.actionResults.AppUpdate.error.toString();
    var message;
    console.log(result);
    if (result.startsWith('Error: Uncaught app extraction failure:')) {
        result = 'Error: Uncaught app extraction failure:';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
        result = 'Application instance is not up or running';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
        result = 'Service instance not found.';
    }

    switch (result) {
        case 'Service instance not found.':
            message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
            message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
            message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
            break;
        case 'Error: Uncaught app extraction failure:':
            message = 'Error extracting metadata. Please redeploy and try again.';
            break;
        case 'Application instance is not up or running':
            message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
            break;
        default:
            message = result;
            break;
    }
    return clientAPI.getPageProxy().executeAction({
        "Name": "/MyMDKAPP/Actions/AppUpdateFailureMessage.action",
        "Properties": {
            "Duration": 0,
            "Message": message
        }
    });
}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Rules/AppUpdateSuccess.js":
/*!**************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Rules/AppUpdateSuccess.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
    return (new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    }));
}
function AppUpdateSuccess(clientAPI) {
    var message;
    // Force a small pause to let the progress banner show in case there is no new version available
    return sleep(500).then(function() {
        let result = clientAPI.actionResults.AppUpdate.data;
        console.log(result);

        let versionNum = result.split(': ')[1];
        if (result.startsWith('Current version is already up to date')) {
            return clientAPI.getPageProxy().executeAction({
                "Name": "/MyMDKAPP/Actions/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Message": `You are already using the latest version: ${versionNum}`,
                    "NumberOfLines": 2
                }
            });
        } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
            message = 'No Application metadata found. Please deploy your application and try again.';
            return clientAPI.getPageProxy().executeAction({
                "Name": "/MyMDKAPP/Actions/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Duration": 5,
                    "Message": message,
                    "NumberOfLines": 2
                }
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Rules/OnWillUpdate.js":
/*!**********************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Rules/OnWillUpdate.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/MyMDKAPP/Actions/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return Promise.resolve();
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Rules/ResetAppSettingsAndLogout.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Rules/ResetAppSettingsAndLogout.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
function ResetAppSettingsAndLogout(context) {
    let logger = context.getLogger();
    let platform = context.nativescript.platformModule;
    let appSettings = context.nativescript.appSettingsModule;
    var appId;
    if (platform && (platform.isIOS || platform.isAndroid)) {
        appId = context.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
    } else {
        appId = 'WindowsClient';
    }
    try {
        // Remove any other app specific settings
        appSettings.getAllKeys().forEach(key => {
            if (key.substring(0, appId.length) === appId) {
                appSettings.remove(key);
            }
        });
    } catch (err) {
        logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
    } finally {
        // Logout 
        return context.getPageProxy().executeAction('/MyMDKAPP/Actions/Logout.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Styles/Styles.json":
/*!*******************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Styles/Styles.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/MyMDKAPP/jsconfig.json":
/*!**************************************************!*\
  !*** ./build.definitions/MyMDKAPP/jsconfig.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let mymdkapp_actions_a_operationalacctgdocitemcube_navtoa_operationalacctgdocitemcube_detail_action = __webpack_require__(/*! ./MyMDKAPP/Actions/A_OperationalAcctgDocItemCube/NavToA_OperationalAcctgDocItemCube_Detail.action */ "./build.definitions/MyMDKAPP/Actions/A_OperationalAcctgDocItemCube/NavToA_OperationalAcctgDocItemCube_Detail.action")
let mymdkapp_actions_a_operationalacctgdocitemcube_navtoa_operationalacctgdocitemcube_list_action = __webpack_require__(/*! ./MyMDKAPP/Actions/A_OperationalAcctgDocItemCube/NavToA_OperationalAcctgDocItemCube_List.action */ "./build.definitions/MyMDKAPP/Actions/A_OperationalAcctgDocItemCube/NavToA_OperationalAcctgDocItemCube_List.action")
let mymdkapp_actions_appupdate_action = __webpack_require__(/*! ./MyMDKAPP/Actions/AppUpdate.action */ "./build.definitions/MyMDKAPP/Actions/AppUpdate.action")
let mymdkapp_actions_appupdatefailuremessage_action = __webpack_require__(/*! ./MyMDKAPP/Actions/AppUpdateFailureMessage.action */ "./build.definitions/MyMDKAPP/Actions/AppUpdateFailureMessage.action")
let mymdkapp_actions_appupdateprogressbanner_action = __webpack_require__(/*! ./MyMDKAPP/Actions/AppUpdateProgressBanner.action */ "./build.definitions/MyMDKAPP/Actions/AppUpdateProgressBanner.action")
let mymdkapp_actions_appupdatesuccessmessage_action = __webpack_require__(/*! ./MyMDKAPP/Actions/AppUpdateSuccessMessage.action */ "./build.definitions/MyMDKAPP/Actions/AppUpdateSuccessMessage.action")
let mymdkapp_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./MyMDKAPP/Actions/CloseModalPage_Cancel.action */ "./build.definitions/MyMDKAPP/Actions/CloseModalPage_Cancel.action")
let mymdkapp_actions_closemodalpage_complete_action = __webpack_require__(/*! ./MyMDKAPP/Actions/CloseModalPage_Complete.action */ "./build.definitions/MyMDKAPP/Actions/CloseModalPage_Complete.action")
let mymdkapp_actions_closepage_action = __webpack_require__(/*! ./MyMDKAPP/Actions/ClosePage.action */ "./build.definitions/MyMDKAPP/Actions/ClosePage.action")
let mymdkapp_actions_logout_action = __webpack_require__(/*! ./MyMDKAPP/Actions/Logout.action */ "./build.definitions/MyMDKAPP/Actions/Logout.action")
let mymdkapp_actions_logoutmessage_action = __webpack_require__(/*! ./MyMDKAPP/Actions/LogoutMessage.action */ "./build.definitions/MyMDKAPP/Actions/LogoutMessage.action")
let mymdkapp_actions_onwillupdate_action = __webpack_require__(/*! ./MyMDKAPP/Actions/OnWillUpdate.action */ "./build.definitions/MyMDKAPP/Actions/OnWillUpdate.action")
let mymdkapp_actions_service_initializeonline_action = __webpack_require__(/*! ./MyMDKAPP/Actions/Service/InitializeOnline.action */ "./build.definitions/MyMDKAPP/Actions/Service/InitializeOnline.action")
let mymdkapp_actions_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./MyMDKAPP/Actions/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/MyMDKAPP/Actions/Service/InitializeOnlineFailureMessage.action")
let mymdkapp_actions_service_initializeonlinesuccessmessage_action = __webpack_require__(/*! ./MyMDKAPP/Actions/Service/InitializeOnlineSuccessMessage.action */ "./build.definitions/MyMDKAPP/Actions/Service/InitializeOnlineSuccessMessage.action")
let mymdkapp_globals_appdefinition_version_global = __webpack_require__(/*! ./MyMDKAPP/Globals/AppDefinition_Version.global */ "./build.definitions/MyMDKAPP/Globals/AppDefinition_Version.global")
let mymdkapp_i18n_i18n_properties = __webpack_require__(/*! ./MyMDKAPP/i18n/i18n.properties */ "./build.definitions/MyMDKAPP/i18n/i18n.properties")
let mymdkapp_jsconfig_json = __webpack_require__(/*! ./MyMDKAPP/jsconfig.json */ "./build.definitions/MyMDKAPP/jsconfig.json")
let mymdkapp_pages_a_operationalacctgdocitemcube_a_operationalacctgdocitemcube_detail_page = __webpack_require__(/*! ./MyMDKAPP/Pages/A_OperationalAcctgDocItemCube/A_OperationalAcctgDocItemCube_Detail.page */ "./build.definitions/MyMDKAPP/Pages/A_OperationalAcctgDocItemCube/A_OperationalAcctgDocItemCube_Detail.page")
let mymdkapp_pages_a_operationalacctgdocitemcube_a_operationalacctgdocitemcube_list_page = __webpack_require__(/*! ./MyMDKAPP/Pages/A_OperationalAcctgDocItemCube/A_OperationalAcctgDocItemCube_List.page */ "./build.definitions/MyMDKAPP/Pages/A_OperationalAcctgDocItemCube/A_OperationalAcctgDocItemCube_List.page")
let mymdkapp_rules_appupdatefailure_js = __webpack_require__(/*! ./MyMDKAPP/Rules/AppUpdateFailure.js */ "./build.definitions/MyMDKAPP/Rules/AppUpdateFailure.js")
let mymdkapp_rules_appupdatesuccess_js = __webpack_require__(/*! ./MyMDKAPP/Rules/AppUpdateSuccess.js */ "./build.definitions/MyMDKAPP/Rules/AppUpdateSuccess.js")
let mymdkapp_rules_onwillupdate_js = __webpack_require__(/*! ./MyMDKAPP/Rules/OnWillUpdate.js */ "./build.definitions/MyMDKAPP/Rules/OnWillUpdate.js")
let mymdkapp_rules_resetappsettingsandlogout_js = __webpack_require__(/*! ./MyMDKAPP/Rules/ResetAppSettingsAndLogout.js */ "./build.definitions/MyMDKAPP/Rules/ResetAppSettingsAndLogout.js")
let mymdkapp_services_service1_service = __webpack_require__(/*! ./MyMDKAPP/Services/service1.service */ "./build.definitions/MyMDKAPP/Services/service1.service")
let mymdkapp_styles_styles_css = __webpack_require__(/*! ./MyMDKAPP/Styles/Styles.css */ "./build.definitions/MyMDKAPP/Styles/Styles.css")
let mymdkapp_styles_styles_json = __webpack_require__(/*! ./MyMDKAPP/Styles/Styles.json */ "./build.definitions/MyMDKAPP/Styles/Styles.json")
let mymdkapp_styles_styles_less = __webpack_require__(/*! ./MyMDKAPP/Styles/Styles.less */ "./build.definitions/MyMDKAPP/Styles/Styles.less")
let mymdkapp_styles_styles_nss = __webpack_require__(/*! ./MyMDKAPP/Styles/Styles.nss */ "./build.definitions/MyMDKAPP/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	mymdkapp_actions_a_operationalacctgdocitemcube_navtoa_operationalacctgdocitemcube_detail_action : mymdkapp_actions_a_operationalacctgdocitemcube_navtoa_operationalacctgdocitemcube_detail_action,
	mymdkapp_actions_a_operationalacctgdocitemcube_navtoa_operationalacctgdocitemcube_list_action : mymdkapp_actions_a_operationalacctgdocitemcube_navtoa_operationalacctgdocitemcube_list_action,
	mymdkapp_actions_appupdate_action : mymdkapp_actions_appupdate_action,
	mymdkapp_actions_appupdatefailuremessage_action : mymdkapp_actions_appupdatefailuremessage_action,
	mymdkapp_actions_appupdateprogressbanner_action : mymdkapp_actions_appupdateprogressbanner_action,
	mymdkapp_actions_appupdatesuccessmessage_action : mymdkapp_actions_appupdatesuccessmessage_action,
	mymdkapp_actions_closemodalpage_cancel_action : mymdkapp_actions_closemodalpage_cancel_action,
	mymdkapp_actions_closemodalpage_complete_action : mymdkapp_actions_closemodalpage_complete_action,
	mymdkapp_actions_closepage_action : mymdkapp_actions_closepage_action,
	mymdkapp_actions_logout_action : mymdkapp_actions_logout_action,
	mymdkapp_actions_logoutmessage_action : mymdkapp_actions_logoutmessage_action,
	mymdkapp_actions_onwillupdate_action : mymdkapp_actions_onwillupdate_action,
	mymdkapp_actions_service_initializeonline_action : mymdkapp_actions_service_initializeonline_action,
	mymdkapp_actions_service_initializeonlinefailuremessage_action : mymdkapp_actions_service_initializeonlinefailuremessage_action,
	mymdkapp_actions_service_initializeonlinesuccessmessage_action : mymdkapp_actions_service_initializeonlinesuccessmessage_action,
	mymdkapp_globals_appdefinition_version_global : mymdkapp_globals_appdefinition_version_global,
	mymdkapp_i18n_i18n_properties : mymdkapp_i18n_i18n_properties,
	mymdkapp_jsconfig_json : mymdkapp_jsconfig_json,
	mymdkapp_pages_a_operationalacctgdocitemcube_a_operationalacctgdocitemcube_detail_page : mymdkapp_pages_a_operationalacctgdocitemcube_a_operationalacctgdocitemcube_detail_page,
	mymdkapp_pages_a_operationalacctgdocitemcube_a_operationalacctgdocitemcube_list_page : mymdkapp_pages_a_operationalacctgdocitemcube_a_operationalacctgdocitemcube_list_page,
	mymdkapp_rules_appupdatefailure_js : mymdkapp_rules_appupdatefailure_js,
	mymdkapp_rules_appupdatesuccess_js : mymdkapp_rules_appupdatesuccess_js,
	mymdkapp_rules_onwillupdate_js : mymdkapp_rules_onwillupdate_js,
	mymdkapp_rules_resetappsettingsandlogout_js : mymdkapp_rules_resetappsettingsandlogout_js,
	mymdkapp_services_service1_service : mymdkapp_services_service1_service,
	mymdkapp_styles_styles_css : mymdkapp_styles_styles_css,
	mymdkapp_styles_styles_json : mymdkapp_styles_styles_json,
	mymdkapp_styles_styles_less : mymdkapp_styles_styles_less,
	mymdkapp_styles_styles_nss : mymdkapp_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"target":"es2015","module":"esnext","moduleResolution":"node","lib":["es2018","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Styles/Styles.css":
/*!******************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Styles/Styles.css ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "../../../../css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n", "",{"version":3,"sources":["webpack://./build.definitions/MyMDKAPP/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MyMDKAPP/Styles/Styles.less":
/*!*******************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Styles/Styles.less ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "../../../../css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/", "",{"version":3,"sources":["webpack://./build.definitions/MyMDKAPP/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MyMDKAPP/Styles/Styles.nss":
/*!******************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Styles/Styles.nss ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "../../../../css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/cssWithMappingToString.js":
/*!*********************************************************************!*\
  !*** ../../../../css-loader/dist/runtime/cssWithMappingToString.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Pages/A_OperationalAcctgDocItemCube/A_OperationalAcctgDocItemCube_Detail.page":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Pages/A_OperationalAcctgDocItemCube/A_OperationalAcctgDocItemCube_Detail.page ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"A_OperationalAcctgDocItemCube Detail","DesignTimeTarget":{"Service":"/MyMDKAPP/Services/service1.service","EntitySet":"A_OperationalAcctgDocItemCube","QueryOptions":""},"ActionBar":{"Items":[]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{CompanyCodeName}","Subhead":"{CompanyCode}","BodyText":"","Footnote":"{AccountingDocument}","Description":"{FiscalYear}","StatusText":"{AccountingDocumentItem}","StatusImage":"","SubstatusImage":"","SubstatusText":"{ChartOfAccounts}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"CompanyCode","Value":"{CompanyCode}"},{"KeyName":"FiscalYear","Value":"{FiscalYear}"},{"KeyName":"AccountingDocument","Value":"{AccountingDocument}"},{"KeyName":"AccountingDocumentItem","Value":"{AccountingDocumentItem}"},{"KeyName":"CompanyCodeName","Value":"{CompanyCodeName}"},{"KeyName":"ChartOfAccounts","Value":"{ChartOfAccounts}"},{"KeyName":"AccountingDocumentItemType","Value":"{AccountingDocumentItemType}"},{"KeyName":"ClearingDate","Value":"{ClearingDate}"},{"KeyName":"ClearingCreationDate","Value":"{ClearingCreationDate}"},{"KeyName":"ClearingAccountingDocument","Value":"{ClearingAccountingDocument}"},{"KeyName":"IsCleared","Value":"{IsCleared}"},{"KeyName":"PostingKey","Value":"{PostingKey}"},{"KeyName":"FinancialAccountType","Value":"{FinancialAccountType}"},{"KeyName":"SpecialGLCode","Value":"{SpecialGLCode}"},{"KeyName":"SpecialGLTransactionType","Value":"{SpecialGLTransactionType}"},{"KeyName":"DebitCreditCode","Value":"{DebitCreditCode}"},{"KeyName":"BusinessArea","Value":"{BusinessArea}"},{"KeyName":"BusinessAreaName","Value":"{BusinessAreaName}"},{"KeyName":"PartnerBusinessArea","Value":"{PartnerBusinessArea}"},{"KeyName":"TaxCode","Value":"{TaxCode}"},{"KeyName":"WithholdingTaxCode","Value":"{WithholdingTaxCode}"},{"KeyName":"TaxType","Value":"{TaxType}"},{"KeyName":"TransactionTypeDetermination","Value":"{TransactionTypeDetermination}"},{"KeyName":"ValueDate","Value":"{ValueDate}"},{"KeyName":"AssignmentReference","Value":"{AssignmentReference}"},{"KeyName":"DocumentItemText","Value":"{DocumentItemText}"},{"KeyName":"PartnerCompany","Value":"{PartnerCompany}"},{"KeyName":"FinancialTransactionType","Value":"{FinancialTransactionType}"},{"KeyName":"CorporateGroupAccount","Value":"{CorporateGroupAccount}"},{"KeyName":"PlanningLevel","Value":"{PlanningLevel}"},{"KeyName":"ControllingArea","Value":"{ControllingArea}"},{"KeyName":"ControllingAreaName","Value":"{ControllingAreaName}"},{"KeyName":"CostCenter","Value":"{CostCenter}"},{"KeyName":"CostCenterName","Value":"{CostCenterName}"},{"KeyName":"Project","Value":"{Project}"},{"KeyName":"OrderID","Value":"{OrderID}"},{"KeyName":"BillingDocument","Value":"{BillingDocument}"},{"KeyName":"SalesDocument","Value":"{SalesDocument}"},{"KeyName":"SalesDocumentItem","Value":"{SalesDocumentItem}"},{"KeyName":"ScheduleLine","Value":"{ScheduleLine}"},{"KeyName":"MasterFixedAsset","Value":"{MasterFixedAsset}"},{"KeyName":"FixedAsset","Value":"{FixedAsset}"},{"KeyName":"AssetTransactionType","Value":"{AssetTransactionType}"},{"KeyName":"AssetValueDate","Value":"{AssetValueDate}"},{"KeyName":"PersonnelNumber","Value":"{PersonnelNumber}"},{"KeyName":"IsSalesRelated","Value":"{IsSalesRelated}"},{"KeyName":"LineItemDisplayIsEnabled","Value":"{LineItemDisplayIsEnabled}"},{"KeyName":"IsOpenItemManaged","Value":"{IsOpenItemManaged}"},{"KeyName":"IsNotCashDiscountLiable","Value":"{IsNotCashDiscountLiable}"},{"KeyName":"IsAutomaticallyCreated","Value":"{IsAutomaticallyCreated}"},{"KeyName":"IsUsedInPaymentTransaction","Value":"{IsUsedInPaymentTransaction}"},{"KeyName":"OperationalGLAccount","Value":"{OperationalGLAccount}"},{"KeyName":"GLAccount","Value":"{GLAccount}"},{"KeyName":"GLAccountName","Value":"{GLAccountName}"},{"KeyName":"GLAccountLongName","Value":"{GLAccountLongName}"},{"KeyName":"Customer","Value":"{Customer}"},{"KeyName":"CustomerName","Value":"{CustomerName}"},{"KeyName":"Supplier","Value":"{Supplier}"},{"KeyName":"SupplierName","Value":"{SupplierName}"},{"KeyName":"BranchAccount","Value":"{BranchAccount}"},{"KeyName":"IsBalanceSheetAccount","Value":"{IsBalanceSheetAccount}"},{"KeyName":"ProfitLossAccountType","Value":"{ProfitLossAccountType}"},{"KeyName":"SpecialGLAccountAssignment","Value":"{SpecialGLAccountAssignment}"},{"KeyName":"DueCalculationBaseDate","Value":"{DueCalculationBaseDate}"},{"KeyName":"PaymentTerms","Value":"{PaymentTerms}"},{"KeyName":"CashDiscount1Days","Value":"{CashDiscount1Days}"},{"KeyName":"CashDiscount2Days","Value":"{CashDiscount2Days}"},{"KeyName":"NetPaymentDays","Value":"{NetPaymentDays}"},{"KeyName":"CashDiscount1Percent","Value":"{CashDiscount1Percent}"},{"KeyName":"CashDiscount2Percent","Value":"{CashDiscount2Percent}"},{"KeyName":"PaymentMethod","Value":"{PaymentMethod}"},{"KeyName":"PaymentBlockingReason","Value":"{PaymentBlockingReason}"},{"KeyName":"FixedCashDiscount","Value":"{FixedCashDiscount}"},{"KeyName":"HouseBank","Value":"{HouseBank}"},{"KeyName":"BPBankAccountInternalID","Value":"{BPBankAccountInternalID}"},{"KeyName":"TaxDistributionCode1","Value":"{TaxDistributionCode1}"},{"KeyName":"TaxDistributionCode2","Value":"{TaxDistributionCode2}"},{"KeyName":"TaxDistributionCode3","Value":"{TaxDistributionCode3}"},{"KeyName":"InvoiceReference","Value":"{InvoiceReference}"},{"KeyName":"InvoiceReferenceFiscalYear","Value":"{InvoiceReferenceFiscalYear}"},{"KeyName":"InvoiceItemReference","Value":"{InvoiceItemReference}"},{"KeyName":"FollowOnDocumentType","Value":"{FollowOnDocumentType}"},{"KeyName":"StateCentralBankPaymentReason","Value":"{StateCentralBankPaymentReason}"},{"KeyName":"SupplyingCountry","Value":"{SupplyingCountry}"},{"KeyName":"InvoiceList","Value":"{InvoiceList}"},{"KeyName":"BillOfExchangeUsage","Value":"{BillOfExchangeUsage}"},{"KeyName":"DunningKey","Value":"{DunningKey}"},{"KeyName":"DunningBlockingReason","Value":"{DunningBlockingReason}"},{"KeyName":"LastDunningDate","Value":"{LastDunningDate}"},{"KeyName":"DunningLevel","Value":"{DunningLevel}"},{"KeyName":"DunningArea","Value":"{DunningArea}"},{"KeyName":"WithholdingTaxCertificate","Value":"{WithholdingTaxCertificate}"},{"KeyName":"Material","Value":"{Material}"},{"KeyName":"Product","Value":"{Product}"},{"KeyName":"Plant","Value":"{Plant}"},{"KeyName":"PurchasingDocument","Value":"{PurchasingDocument}"},{"KeyName":"PurchasingDocumentItem","Value":"{PurchasingDocumentItem}"},{"KeyName":"AccountAssignmentNumber","Value":"{AccountAssignmentNumber}"},{"KeyName":"IsCompletelyDelivered","Value":"{IsCompletelyDelivered}"},{"KeyName":"MaterialPriceControl","Value":"{MaterialPriceControl}"},{"KeyName":"ValuationArea","Value":"{ValuationArea}"},{"KeyName":"InventoryValuationType","Value":"{InventoryValuationType}"},{"KeyName":"VATRegistration","Value":"{VATRegistration}"},{"KeyName":"DelivOfGoodsDestCountry","Value":"{DelivOfGoodsDestCountry}"},{"KeyName":"PaymentDifferenceReason","Value":"{PaymentDifferenceReason}"},{"KeyName":"ProfitCenter","Value":"{ProfitCenter}"},{"KeyName":"ProfitCenterName","Value":"{ProfitCenterName}"},{"KeyName":"JointVenture","Value":"{JointVenture}"},{"KeyName":"JointVentureCostRecoveryCode","Value":"{JointVentureCostRecoveryCode}"},{"KeyName":"JointVentureEquityGroup","Value":"{JointVentureEquityGroup}"},{"KeyName":"TreasuryContractType","Value":"{TreasuryContractType}"},{"KeyName":"AssetContract","Value":"{AssetContract}"},{"KeyName":"CashFlowType","Value":"{CashFlowType}"},{"KeyName":"TaxJurisdiction","Value":"{TaxJurisdiction}"},{"KeyName":"RealEstateObject","Value":"{RealEstateObject}"},{"KeyName":"SettlementReferenceDate","Value":"{SettlementReferenceDate}"},{"KeyName":"CommitmentItem","Value":"{CommitmentItem}"},{"KeyName":"CostObject","Value":"{CostObject}"},{"KeyName":"ProjectNetwork","Value":"{ProjectNetwork}"},{"KeyName":"OrderInternalBillOfOperations","Value":"{OrderInternalBillOfOperations}"},{"KeyName":"OrderIntBillOfOperationsItem","Value":"{OrderIntBillOfOperationsItem}"},{"KeyName":"WBSElementInternalID","Value":"{WBSElementInternalID}"},{"KeyName":"ProfitabilitySegment","Value":"{ProfitabilitySegment}"},{"KeyName":"JointVentureEquityType","Value":"{JointVentureEquityType}"},{"KeyName":"IsEUTriangularDeal","Value":"{IsEUTriangularDeal}"},{"KeyName":"CostOriginGroup","Value":"{CostOriginGroup}"},{"KeyName":"CompanyCodeCurrencyDetnMethod","Value":"{CompanyCodeCurrencyDetnMethod}"},{"KeyName":"ClearingIsReversed","Value":"{ClearingIsReversed}"},{"KeyName":"PaymentMethodSupplement","Value":"{PaymentMethodSupplement}"},{"KeyName":"AlternativeGLAccount","Value":"{AlternativeGLAccount}"},{"KeyName":"FundsCenter","Value":"{FundsCenter}"},{"KeyName":"Fund","Value":"{Fund}"},{"KeyName":"PartnerProfitCenter","Value":"{PartnerProfitCenter}"},{"KeyName":"Reference1IDByBusinessPartner","Value":"{Reference1IDByBusinessPartner}"},{"KeyName":"Reference2IDByBusinessPartner","Value":"{Reference2IDByBusinessPartner}"},{"KeyName":"IsNegativePosting","Value":"{IsNegativePosting}"},{"KeyName":"PaymentCardItem","Value":"{PaymentCardItem}"},{"KeyName":"PaymentCardPaymentSettlement","Value":"{PaymentCardPaymentSettlement}"},{"KeyName":"CreditControlArea","Value":"{CreditControlArea}"},{"KeyName":"Reference3IDByBusinessPartner","Value":"{Reference3IDByBusinessPartner}"},{"KeyName":"DataExchangeInstruction1","Value":"{DataExchangeInstruction1}"},{"KeyName":"DataExchangeInstruction2","Value":"{DataExchangeInstruction2}"},{"KeyName":"DataExchangeInstruction3","Value":"{DataExchangeInstruction3}"},{"KeyName":"DataExchangeInstruction4","Value":"{DataExchangeInstruction4}"},{"KeyName":"Region","Value":"{Region}"},{"KeyName":"HasPaymentOrder","Value":"{HasPaymentOrder}"},{"KeyName":"PaymentReference","Value":"{PaymentReference}"},{"KeyName":"TaxDeterminationDate","Value":"{TaxDeterminationDate}"},{"KeyName":"ClearingItem","Value":"{ClearingItem}"},{"KeyName":"BusinessPlace","Value":"{BusinessPlace}"},{"KeyName":"TaxSection","Value":"{TaxSection}"},{"KeyName":"CostCtrActivityType","Value":"{CostCtrActivityType}"},{"KeyName":"AccountsReceivableIsPledged","Value":"{AccountsReceivableIsPledged}"},{"KeyName":"BusinessProcess","Value":"{BusinessProcess}"},{"KeyName":"GrantID","Value":"{GrantID}"},{"KeyName":"FunctionalArea","Value":"{FunctionalArea}"},{"KeyName":"FunctionalAreaName","Value":"{FunctionalAreaName}"},{"KeyName":"CustomerIsInExecution","Value":"{CustomerIsInExecution}"},{"KeyName":"FundedProgram","Value":"{FundedProgram}"},{"KeyName":"ClearingDocFiscalYear","Value":"{ClearingDocFiscalYear}"},{"KeyName":"LedgerGLLineItem","Value":"{LedgerGLLineItem}"},{"KeyName":"Segment","Value":"{Segment}"},{"KeyName":"SegmentName","Value":"{SegmentName}"},{"KeyName":"PartnerSegment","Value":"{PartnerSegment}"},{"KeyName":"PartnerFunctionalArea","Value":"{PartnerFunctionalArea}"},{"KeyName":"HouseBankAccount","Value":"{HouseBankAccount}"},{"KeyName":"CostElement","Value":"{CostElement}"},{"KeyName":"SEPAMandate","Value":"{SEPAMandate}"},{"KeyName":"ReferenceDocumentType","Value":"{ReferenceDocumentType}"},{"KeyName":"OriginalReferenceDocument","Value":"{OriginalReferenceDocument}"},{"KeyName":"ReferenceDocumentLogicalSystem","Value":"{ReferenceDocumentLogicalSystem}"},{"KeyName":"AccountingDocumentItemRef","Value":"{AccountingDocumentItemRef}"},{"KeyName":"FiscalPeriod","Value":"{FiscalPeriod}"},{"KeyName":"AccountingDocumentCategory","Value":"{AccountingDocumentCategory}"},{"KeyName":"AccountingDocumentCategoryName","Value":"{AccountingDocumentCategoryName}"},{"KeyName":"PostingDate","Value":"{PostingDate}"},{"KeyName":"DocumentDate","Value":"{DocumentDate}"},{"KeyName":"AccountingDocumentType","Value":"{AccountingDocumentType}"},{"KeyName":"AccountingDocumentTypeName","Value":"{AccountingDocumentTypeName}"},{"KeyName":"NetDueDate","Value":"{NetDueDate}"},{"KeyName":"CashDiscount1DueDate","Value":"{CashDiscount1DueDate}"},{"KeyName":"CashDiscount2DueDate","Value":"{CashDiscount2DueDate}"},{"KeyName":"OffsettingAccount","Value":"{OffsettingAccount}"},{"KeyName":"OffsettingAccountType","Value":"{OffsettingAccountType}"},{"KeyName":"PartnerFund","Value":"{PartnerFund}"},{"KeyName":"PartnerGrant","Value":"{PartnerGrant}"},{"KeyName":"BudgetPeriod","Value":"{BudgetPeriod}"},{"KeyName":"PartnerBudgetPeriod","Value":"{PartnerBudgetPeriod}"},{"KeyName":"BranchCode","Value":"{BranchCode}"},{"KeyName":"CompanyCodeCurrency","Value":"{CompanyCodeCurrency}"},{"KeyName":"AmountInCompanyCodeCurrency","Value":"{AmountInCompanyCodeCurrency}"},{"KeyName":"TaxAmountInCoCodeCrcy","Value":"{TaxAmountInCoCodeCrcy}"},{"KeyName":"TaxBaseAmountInCoCodeCrcy","Value":"{TaxBaseAmountInCoCodeCrcy}"},{"KeyName":"ValuationDiffAmtInCoCodeCrcy","Value":"{ValuationDiffAmtInCoCodeCrcy}"},{"KeyName":"CashDiscountAmtInCoCodeCrcy","Value":"{CashDiscountAmtInCoCodeCrcy}"},{"KeyName":"InvoiceAmtInCoCodeCrcy","Value":"{InvoiceAmtInCoCodeCrcy}"},{"KeyName":"TransactionCurrency","Value":"{TransactionCurrency}"},{"KeyName":"AmountInTransactionCurrency","Value":"{AmountInTransactionCurrency}"},{"KeyName":"OriginalTaxBaseAmount","Value":"{OriginalTaxBaseAmount}"},{"KeyName":"TaxAmount","Value":"{TaxAmount}"},{"KeyName":"TaxBaseAmountInTransCrcy","Value":"{TaxBaseAmountInTransCrcy}"},{"KeyName":"WithholdingTaxBaseAmount","Value":"{WithholdingTaxBaseAmount}"},{"KeyName":"PlannedAmtInTransactionCrcy","Value":"{PlannedAmtInTransactionCrcy}"},{"KeyName":"CashDiscountBaseAmount","Value":"{CashDiscountBaseAmount}"},{"KeyName":"CashDiscountAmount","Value":"{CashDiscountAmount}"},{"KeyName":"NetPaymentAmount","Value":"{NetPaymentAmount}"},{"KeyName":"WithholdingTaxAmount","Value":"{WithholdingTaxAmount}"},{"KeyName":"WithholdingTaxExemptionAmt","Value":"{WithholdingTaxExemptionAmt}"},{"KeyName":"InvoiceAmountInFrgnCurrency","Value":"{InvoiceAmountInFrgnCurrency}"},{"KeyName":"BalanceTransactionCurrency","Value":"{BalanceTransactionCurrency}"},{"KeyName":"AmountInBalanceTransacCrcy","Value":"{AmountInBalanceTransacCrcy}"},{"KeyName":"AdditionalCurrency1","Value":"{AdditionalCurrency1}"},{"KeyName":"ValuationDiffAmtInAddlCrcy1","Value":"{ValuationDiffAmtInAddlCrcy1}"},{"KeyName":"AmountInAdditionalCurrency1","Value":"{AmountInAdditionalCurrency1}"},{"KeyName":"AdditionalCurrency2","Value":"{AdditionalCurrency2}"},{"KeyName":"AmountInAdditionalCurrency2","Value":"{AmountInAdditionalCurrency2}"},{"KeyName":"ValuationDiffAmtInAddlCrcy2","Value":"{ValuationDiffAmtInAddlCrcy2}"},{"KeyName":"PaymentCurrency","Value":"{PaymentCurrency}"},{"KeyName":"AmountInPaymentCurrency","Value":"{AmountInPaymentCurrency}"},{"KeyName":"CreditControlAreaCurrency","Value":"{CreditControlAreaCurrency}"},{"KeyName":"HedgedAmount","Value":"{HedgedAmount}"},{"KeyName":"BaseUnit","Value":"{BaseUnit}"},{"KeyName":"Quantity","Value":"{Quantity}"},{"KeyName":"GoodsMovementEntryUnit","Value":"{GoodsMovementEntryUnit}"},{"KeyName":"QuantityInEntryUnit","Value":"{QuantityInEntryUnit}"},{"KeyName":"PurchasingDocumentPriceUnit","Value":"{PurchasingDocumentPriceUnit}"},{"KeyName":"PurchaseOrderQty","Value":"{PurchaseOrderQty}"},{"KeyName":"MaterialPriceUnitQty","Value":"{MaterialPriceUnitQty}"},{"KeyName":"NumberOfItems","Value":"{NumberOfItems}"},{"KeyName":"AccountingDocumentCreationDate","Value":"{AccountingDocumentCreationDate}"},{"KeyName":"CreationTime","Value":"{CreationTime}"},{"KeyName":"LastChangeDate","Value":"{LastChangeDate}"},{"KeyName":"ExchangeRateDate","Value":"{ExchangeRateDate}"},{"KeyName":"AccountingDocCreatedByUser","Value":"{AccountingDocCreatedByUser}"},{"KeyName":"TransactionCode","Value":"{TransactionCode}"},{"KeyName":"IntercompanyTransaction","Value":"{IntercompanyTransaction}"},{"KeyName":"DocumentReferenceID","Value":"{DocumentReferenceID}"},{"KeyName":"RecurringAccountingDocument","Value":"{RecurringAccountingDocument}"},{"KeyName":"ReverseDocument","Value":"{ReverseDocument}"},{"KeyName":"ReverseDocumentFiscalYear","Value":"{ReverseDocumentFiscalYear}"},{"KeyName":"AccountingDocumentHeaderText","Value":"{AccountingDocumentHeaderText}"},{"KeyName":"ExchangeRate","Value":"{ExchangeRate}"},{"KeyName":"BusinessTransactionType","Value":"{BusinessTransactionType}"},{"KeyName":"BatchInputSession","Value":"{BatchInputSession}"},{"KeyName":"FinancialManagementArea","Value":"{FinancialManagementArea}"},{"KeyName":"ReversalIsPlanned","Value":"{ReversalIsPlanned}"},{"KeyName":"PlannedReversalDate","Value":"{PlannedReversalDate}"},{"KeyName":"TaxIsCalculatedAutomatically","Value":"{TaxIsCalculatedAutomatically}"},{"KeyName":"TaxBaseAmountIsNetAmount","Value":"{TaxBaseAmountIsNetAmount}"},{"KeyName":"SourceCompanyCode","Value":"{SourceCompanyCode}"},{"KeyName":"LogicalSystem","Value":"{LogicalSystem}"},{"KeyName":"TaxExchangeRate","Value":"{TaxExchangeRate}"},{"KeyName":"ReversalReason","Value":"{ReversalReason}"},{"KeyName":"Branch","Value":"{Branch}"},{"KeyName":"Reference1InDocumentHeader","Value":"{Reference1InDocumentHeader}"},{"KeyName":"Reference2InDocumentHeader","Value":"{Reference2InDocumentHeader}"},{"KeyName":"InvoiceReceiptDate","Value":"{InvoiceReceiptDate}"},{"KeyName":"Ledger","Value":"{Ledger}"},{"KeyName":"LedgerGroup","Value":"{LedgerGroup}"},{"KeyName":"AlternativeReferenceDocument","Value":"{AlternativeReferenceDocument}"},{"KeyName":"TaxReportingDate","Value":"{TaxReportingDate}"},{"KeyName":"AccountingDocumentClass","Value":"{AccountingDocumentClass}"},{"KeyName":"ExchangeRateType","Value":"{ExchangeRateType}"},{"KeyName":"LatePaymentReason","Value":"{LatePaymentReason}"},{"KeyName":"SalesDocumentCondition","Value":"{SalesDocumentCondition}"},{"KeyName":"IsReversal","Value":"{IsReversal}"},{"KeyName":"IsReversed","Value":"{IsReversed}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"A_OperationalAcctgDocItemCube_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Pages/A_OperationalAcctgDocItemCube/A_OperationalAcctgDocItemCube_List.page":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Pages/A_OperationalAcctgDocItemCube/A_OperationalAcctgDocItemCube_List.page ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"A_OperationalAcctgDocItemCube","ActionBar":{"Items":[]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{FiscalYear}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/MyMDKAPP/Actions/A_OperationalAcctgDocItemCube/NavToA_OperationalAcctgDocItemCube_Detail.action","StatusImage":"","Title":"{CompanyCodeName}","Footnote":"{AccountingDocument}","PreserveIconStackSpacing":false,"StatusText":"{AccountingDocumentItem}","Subhead":"{CompanyCode}","SubstatusText":"{ChartOfAccounts}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"A_OperationalAcctgDocItemCube","Service":"/MyMDKAPP/Services/service1.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","ToolBar":{"Items":[{"_Name":"LogoutToolbarItem","_Type":"Control.Type.ToolbarItem","Caption":"Logout","OnPress":"/MyMDKAPP/Actions/Logout.action"}]},"_Name":"A_OperationalAcctgDocItemCube_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"MyMDKAPP","Version":"/MyMDKAPP/Globals/AppDefinition_Version.global","MainPage":"/MyMDKAPP/Pages/A_OperationalAcctgDocItemCube/A_OperationalAcctgDocItemCube_List.page","OnLaunch":["/MyMDKAPP/Actions/Service/InitializeOnline.action"],"OnWillUpdate":"/MyMDKAPP/Rules/OnWillUpdate.js","OnDidUpdate":"/MyMDKAPP/Actions/Service/InitializeOnline.action","Styles":"/MyMDKAPP/Styles/Styles.less","Localization":"/MyMDKAPP/i18n/i18n.properties","_SchemaVersion":"6.3","StyleSheets":{"Styles":{"css":"/MyMDKAPP/Styles/Styles.css","ios":"/MyMDKAPP/Styles/Styles.nss","android":"/MyMDKAPP/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Actions/A_OperationalAcctgDocItemCube/NavToA_OperationalAcctgDocItemCube_Detail.action":
/*!***************************************************************************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Actions/A_OperationalAcctgDocItemCube/NavToA_OperationalAcctgDocItemCube_Detail.action ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/MyMDKAPP/Pages/A_OperationalAcctgDocItemCube/A_OperationalAcctgDocItemCube_Detail.page"}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Actions/A_OperationalAcctgDocItemCube/NavToA_OperationalAcctgDocItemCube_List.action":
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Actions/A_OperationalAcctgDocItemCube/NavToA_OperationalAcctgDocItemCube_List.action ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/MyMDKAPP/Pages/A_OperationalAcctgDocItemCube/A_OperationalAcctgDocItemCube_List.page"}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Actions/AppUpdate.action":
/*!*************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Actions/AppUpdate.action ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/MyMDKAPP/Rules/AppUpdateFailure.js","OnSuccess":"/MyMDKAPP/Rules/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Actions/AppUpdateFailureMessage.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Actions/AppUpdateFailureMessage.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Actions/AppUpdateProgressBanner.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Actions/AppUpdateProgressBanner.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/MyMDKAPP/Actions/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Actions/AppUpdateSuccessMessage.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Actions/AppUpdateSuccessMessage.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Actions/CloseModalPage_Cancel.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Actions/CloseModalPage_Cancel.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Actions/CloseModalPage_Complete.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Actions/CloseModalPage_Complete.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Actions/ClosePage.action":
/*!*************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Actions/ClosePage.action ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Actions/Logout.action":
/*!**********************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Actions/Logout.action ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = {"SkipReset":false,"_Type":"Action.Type.Logout"}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Actions/LogoutMessage.action":
/*!*****************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Actions/LogoutMessage.action ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"CancelCaption":"No","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","OKCaption":"Yes","OnOK":"/MyMDKAPP/Rules/ResetAppSettingsAndLogout.js","Title":"Logout","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Actions/OnWillUpdate.action":
/*!****************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Actions/OnWillUpdate.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Actions/Service/InitializeOnline.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Actions/Service/InitializeOnline.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/MyMDKAPP/Services/service1.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnSuccess":"/MyMDKAPP/Actions/Service/InitializeOnlineSuccessMessage.action","OnFailure":"/MyMDKAPP/Actions/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Actions/Service/InitializeOnlineFailureMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Actions/Service/InitializeOnlineFailureMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Actions/Service/InitializeOnlineSuccessMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Actions/Service/InitializeOnlineSuccessMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"NumberOfLines":2,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Globals/AppDefinition_Version.global":
/*!*************************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Globals/AppDefinition_Version.global ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MyMDKAPP/Services/service1.service":
/*!**************************************************************!*\
  !*** ./build.definitions/MyMDKAPP/Services/service1.service ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"../service/URLTest/","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"PathSuffix":"","SourceType":"Cloud","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "1.1\n"

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map