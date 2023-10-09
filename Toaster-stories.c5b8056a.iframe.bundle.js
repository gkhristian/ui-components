"use strict";(self.webpackChunk_dexma_ui_components=self.webpackChunk_dexma_ui_components||[]).push([[768],{"./src/stories/Toaster.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,toaster:()=>toaster});__webpack_require__("./node_modules/react/index.js");var _toaster$parameters,_toaster$parameters2,_toaster$parameters2$,_components_Grid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Grid.js"),_components_Row__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Row.js"),_components_Cell__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Cell.js"),_components_Paragraph__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Paragraph.js"),_components_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Button.js"),_components_Toaster_Toaster__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Toaster/Toaster.js"),_components_Toaster_ToasterContext__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Toaster/ToasterContext.js"),_components_Toaster_Toast__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Toaster/Toast.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Toaster",component:_components_Toaster_Toaster__WEBPACK_IMPORTED_MODULE_6__.x};var toaster=function toaster(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_1__.Z,{fluid:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Row__WEBPACK_IMPORTED_MODULE_2__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Cell__WEBPACK_IMPORTED_MODULE_3__.Z,{xs:12,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Paragraph__WEBPACK_IMPORTED_MODULE_4__.Z,{margin:"1rem 0 1rem 0",children:"We present a series of toasters that appear on the top area of the view. In order to make it work it is necessary to inject our custom provider wrapping all components you want to be able to display it. You will then be able to operate the toaster via this provider."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Cell__WEBPACK_IMPORTED_MODULE_3__.Z,{xs:12,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Toaster_Toaster__WEBPACK_IMPORTED_MODULE_6__.x,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Toaster_ToasterContext__WEBPACK_IMPORTED_MODULE_7__.Z.Consumer,{children:function children(context){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_5__.zx,{variant:"outline",text:"Information",onClick:function onClick(){context.toast({text:"INFORMATION TOAST! This is an example of a notification message toast.",type:_components_Toaster_Toast__WEBPACK_IMPORTED_MODULE_8__.pC.INFO})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_5__.zx,{variant:"outline",text:"Success",onClick:function onClick(){context.toast({text:"SUCCESS TOAST! This is an example of a success message toast.",type:_components_Toaster_Toast__WEBPACK_IMPORTED_MODULE_8__.pC.SUCCESS})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_5__.zx,{variant:"outline",text:"Warning",onClick:function onClick(){context.toast({text:"WARNING TOAST! This is an example of a warning message toast.",type:_components_Toaster_Toast__WEBPACK_IMPORTED_MODULE_8__.pC.WARNING})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_5__.zx,{variant:"outline",text:"Error",onClick:function onClick(){context.toast({text:"ERROR TOAST! This is an example of an error message toast.",type:_components_Toaster_Toast__WEBPACK_IMPORTED_MODULE_8__.pC.ERROR})}})]})}})})})]})})};toaster.displayName="toaster",toaster.parameters=_objectSpread(_objectSpread({},toaster.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_toaster$parameters=toaster.parameters)||void 0===_toaster$parameters?void 0:_toaster$parameters.docs),{},{source:_objectSpread({originalSource:'() => <Grid fluid>\n    <Row>\n      <Cell xs={12}>\n        <Paragraph margin="1rem 0 1rem 0">\n          We present a series of toasters that appear on the top area of the\n          view. In order to make it work it is necessary to inject our custom\n          provider wrapping all components you want to be able to display it.\n          You will then be able to operate the toaster via this provider.\n        </Paragraph>\n      </Cell>\n      <Cell xs={12}>\n        <Toaster>\n          <ToasterContext.Consumer>\n            {context => <>\n                <Button variant="outline" text="Information" onClick={() => {\n              context.toast({\n                text: \'INFORMATION TOAST! This is an example of a notification message toast.\',\n                type: ToastType.INFO\n              });\n            }} />\n                <Button variant="outline" text="Success" onClick={() => {\n              context.toast({\n                text: \'SUCCESS TOAST! This is an example of a success message toast.\',\n                type: ToastType.SUCCESS\n              });\n            }} />\n                <Button variant="outline" text="Warning" onClick={() => {\n              context.toast({\n                text: \'WARNING TOAST! This is an example of a warning message toast.\',\n                type: ToastType.WARNING\n              });\n            }} />\n                <Button variant="outline" text="Error" onClick={() => {\n              context.toast({\n                text: \'ERROR TOAST! This is an example of an error message toast.\',\n                type: ToastType.ERROR\n              });\n            }} />\n              </>}\n          </ToasterContext.Consumer>\n        </Toaster>\n      </Cell>\n    </Row>\n  </Grid>'},null===(_toaster$parameters2=toaster.parameters)||void 0===_toaster$parameters2||null===(_toaster$parameters2$=_toaster$parameters2.docs)||void 0===_toaster$parameters2$?void 0:_toaster$parameters2$.source)})});var __namedExportsOrder=["toaster"];toaster.__docgenInfo={description:"",methods:[],displayName:"toaster"}},"./src/components/Alert.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Alert,Z:()=>components_Alert});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/styles/theme.js"),StyledIcon=__webpack_require__("./src/styles/components/StyledIcon.js"),selectors=__webpack_require__("./src/styles/selectors.js"),StyledAlert=styled_components_browser_esm.ZP.div.withConfig({displayName:"StyledAlert"})(["",";box-sizing:border-box;margin:0;font-variant:tabular-nums;list-style:none;font-feature-settings:'tnum';position:relative;word-wrap:break-word;border-radius:",";display:flex;align-content:center;align-items:flex-start;flex-direction:column;padding:0 20px;height:40px;line-height:40px;justify-content:center;"," .icon{left:0px;margin-right:10px;}.icon-close{position:absolute;top:10px;right:20px;overflow:hidden;background-color:transparent;border:none;outline:none;cursor:pointer;}.message{display:flex;align-items:center;font-weight:",";font-weight:",";font-size:",";}",""],(function getAlertTypeColor(props){var bgColor="";switch(props.type){case"basic":bgColor=selectors.AF;break;case"outline":bgColor=selectors.ix;break;case"success":bgColor=selectors.nq;break;case"info":bgColor=selectors.bE;break;case"warning":bgColor=selectors.nI;break;case"error":bgColor=selectors.S_}return(0,styled_components_browser_esm.iv)(["background-color:",";"],bgColor)}),selectors.E0,(function(props){var iconColor,textColor,borderColor;switch(props.type){case"basic":textColor=selectors.Xc,iconColor=selectors.Xc,borderColor=selectors.AF;break;case"outline":textColor=selectors.fW,iconColor=selectors.fW,borderColor=selectors.pN;break;case"success":textColor=selectors.ix,iconColor=selectors.ix,borderColor=selectors.nq;break;case"info":textColor=selectors.Tg,iconColor=selectors.Tg,borderColor=selectors.bE;break;case"warning":textColor=selectors.pP,iconColor=selectors.pP,borderColor=selectors.nI;break;case"error":textColor=selectors.ix,iconColor=selectors.ix,borderColor=selectors.S_}return(0,styled_components_browser_esm.iv)(["color:",";border:1px solid ",";","{fill:",";}"],textColor,borderColor,StyledIcon.x,iconColor)}),selectors.o1,(function(props){return!props.message&&props.description?(0,selectors._N)(props):(0,selectors.o1)(props)}),selectors.e5,(function(props){return props.description&&(0,styled_components_browser_esm.iv)(["height:auto;line-height:normal;padding:",";.description{position:relative;padding:",";padding-left:",";padding-top:",";line-height:1.5;border-radius:",";flex-direction:column;align-items:start;font-size:",";.alert-icon{position:absolute;top:10px;left:20px;}}.icon-close{top:17px;}"],(function(props){return props.message?"20px 15px":"10px 15px"}),(function(props){return props.showIcon?"0px 0px 0px 30px":"0px 0px 0px 0px"}),(function(props){return!props.message&&"0px"}),(function(props){return props.message&&"10px"}),selectors.E0,selectors.NG)})),Icon=__webpack_require__("./src/components/Icon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var propTypes={type:prop_types_default().oneOf(["basic","outline","warning","info","success","error"]).isRequired,message:prop_types_default().string.isRequired,closable:prop_types_default().bool,showIcon:prop_types_default().bool,description:prop_types_default().string,onClose:prop_types_default().func,theme:prop_types_default().shape({})},defaultProps={closable:!1,showIcon:!1,type:"warning",theme:theme.ZP},Alert=function Alert(props){var type=props.type,closable=props.closable,message=props.message,description=props.description,showIcon=props.showIcon,onClose=props.onClose,_useState2=_slicedToArray((0,react.useState)(!1),2),closed=_useState2[0],setClosed=_useState2[1],renderIcon=null;switch(type){case"basic":case"outline":case"warning":renderIcon="alert_sign";break;case"info":renderIcon="circle_info_outline";break;case"success":renderIcon="circle_check_outline";break;case"error":renderIcon="circle_delete_outline"}var getDescription=function getDescription(description){return(0,jsx_runtime.jsx)("span",{"data-testid":"alert-description",className:"description",children:description})};return closed?null:(0,jsx_runtime.jsxs)(StyledAlert,_objectSpread(_objectSpread({"data-testid":"alert",role:"alert"},props),{},{children:[(0,jsx_runtime.jsxs)("span",{"data-testid":"alert-message",className:"message",children:[showIcon&&(0,jsx_runtime.jsx)(Icon.ZP,{name:renderIcon,size:"medium",className:"icon","data-testid":"alert-icon-".concat(type)}),message,!message&&description&&getDescription(description)]}),message&&description&&getDescription(description),closable?(0,jsx_runtime.jsx)(Icon.ZP,{onClick:function handleClose(e){setClosed(!0),onClose&&onClose(e)},name:"close",size:"medium",className:"icon-close","data-testid":"alert-icon-close"}):null]}))};StyledAlert.displayName="StyledAlert",Alert.propTypes=propTypes,Alert.defaultProps=defaultProps,Alert.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{closable:{defaultValue:{value:"false",computed:!1},description:"Whether Alert can be closed",type:{name:"bool"},required:!1},showIcon:{defaultValue:{value:"false",computed:!1},description:"Show the icon of the type you passed: `success`, `info`, `warning`, `error`",type:{name:"bool"},required:!1},type:{defaultValue:{value:"'warning'",computed:!1},description:"Type of Alert styles",type:{name:"enum",value:[{value:"'basic'",computed:!1},{value:"'outline'",computed:!1},{value:"'warning'",computed:!1},{value:"'info'",computed:!1},{value:"'success'",computed:!1},{value:"'error'",computed:!1}]},required:!1},theme:{defaultValue:{value:"theme",computed:!0},description:"Theme json based",type:{name:"shape",value:{}},required:!1},message:{description:"Content of Alert",type:{name:"string"},required:!0},description:{description:"Additional content description of Alert",type:{name:"string"},required:!1},onClose:{description:"Callback when Alert is closed",type:{name:"func"},required:!1}}};const components_Alert=(0,styled_components_browser_esm.Zz)(Alert)},"./src/components/Toaster/Toast.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FN:()=>Toast,pC:()=>ToastType});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/styles/theme.js"),StyledToast=styled_components_browser_esm.ZP.div.withConfig({displayName:"StyledToast"})(["position:fixed;z-index:100000;top:0;right:0;display:flex;align-items:center;"]),Alert=__webpack_require__("./src/components/Alert.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ToastType=Object.freeze({INFO:"INFO",SUCCESS:"SUCCESS",WARNING:"WARNING",ERROR:"ERROR"}),propTypes={theme:prop_types_default().shape({}),text:prop_types_default().string.isRequired,type:prop_types_default().oneOf(Object.keys(ToastType)).isRequired},defaultProps={theme:theme.ZP},Toast=function Toast(_ref){var _ToastType$INFO$Toast,text=_ref.text,type=_ref.type,theme=_ref.theme,alertType=(_ToastType$INFO$Toast={},_defineProperty(_ToastType$INFO$Toast,ToastType.INFO,"info"),_defineProperty(_ToastType$INFO$Toast,ToastType.SUCCESS,"success"),_defineProperty(_ToastType$INFO$Toast,ToastType.WARNING,"warning"),_defineProperty(_ToastType$INFO$Toast,ToastType.ERROR,"error"),_ToastType$INFO$Toast)[type];return(0,jsx_runtime.jsx)(StyledToast,{theme,type,children:(0,jsx_runtime.jsx)(Alert.Z,{type:alertType,description:text,showIcon:!0})})};Toast.displayName="Toast",StyledToast.displayName="StyledToast",Toast.propTypes=propTypes,Toast.defaultProps=defaultProps,Toast.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{theme:{defaultValue:{value:"theme",computed:!0},description:"",type:{name:"shape",value:{}},required:!1},text:{description:"",type:{name:"string"},required:!0},type:{description:"",type:{name:"enum",computed:!0,value:"Object.keys(ToastType)"},required:!0}}};(0,styled_components_browser_esm.Zz)(Toast)},"./src/components/Toaster/Toaster.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Toaster});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styles_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/theme.js"),_ToasterContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Toaster/ToasterContext.js"),_Toast__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Toaster/Toast.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var propTypes={theme:prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({}),children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node},defaultProps={theme:_styles_theme__WEBPACK_IMPORTED_MODULE_1__.ZP},Toaster=function(_PureComponent){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Toaster,_PureComponent);var _super=_createSuper(Toaster);function Toaster(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Toaster),_defineProperty(_assertThisInitialized(_this=_super.call(this,props)),"showToast",(function(_ref){var text=_ref.text,type=_ref.type;clearTimeout(_this.state.timeout),_this.setState({visible:!0,toastConfig:{text,type},timeout:setTimeout((function(){_this.setState({visible:!1})}),5e3)})})),_defineProperty(_assertThisInitialized(_this),"render",(function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ToasterContext__WEBPACK_IMPORTED_MODULE_2__.Z.Provider,{value:{toast:_this.showToast},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:_this.props.children}),_this.state.visible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_3__.FN,_objectSpread(_objectSpread({},_this.props),_this.state.toastConfig))]})})})),_this.state={visible:!1,toastConfig:{},timeout:null},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Toaster)}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);Toaster.propTypes=propTypes,Toaster.defaultProps=defaultProps,Toaster.__docgenInfo={description:"",methods:[{name:"showToast",docblock:null,modifiers:[],params:[{name:"{ text, type }",type:null}],returns:null},{name:"render",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Toaster",props:{theme:{defaultValue:{value:"theme",computed:!0},description:"",type:{name:"shape",value:{}},required:!1},children:{description:"",type:{name:"node"},required:!1}}};(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.Zz)(Toaster)},"./src/components/Toaster/ToasterContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext()}}]);