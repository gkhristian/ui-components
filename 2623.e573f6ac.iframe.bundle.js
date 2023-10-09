"use strict";(self.webpackChunk_dexma_ui_components=self.webpackChunk_dexma_ui_components||[]).push([[2623],{"./src/components/Chart.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,k:()=>Chart});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__),styled_components__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),lodash_omit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/omit.js"),lodash_omit__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__),highcharts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/highcharts/highcharts.js"),highcharts__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__),highcharts_react_official__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/highcharts-react-official/dist/highcharts-react.min.js"),highcharts_react_official__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(highcharts_react_official__WEBPACK_IMPORTED_MODULE_3__),highcharts_rounded_corners__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/highcharts-rounded-corners/rounded-corners.js"),highcharts_rounded_corners__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(highcharts_rounded_corners__WEBPACK_IMPORTED_MODULE_4__),highcharts_modules_heatmap__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/highcharts/modules/heatmap.js"),highcharts_modules_heatmap__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(highcharts_modules_heatmap__WEBPACK_IMPORTED_MODULE_5__),highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/highcharts/modules/solid-gauge.js"),highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_6__),highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/highcharts/modules/sankey.js"),highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_7__),highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/highcharts/modules/exporting.js"),highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_8__),highcharts_modules_offline_exporting__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/highcharts/modules/offline-exporting.js"),highcharts_modules_offline_exporting__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(highcharts_modules_offline_exporting__WEBPACK_IMPORTED_MODULE_9__),highcharts_modules_export_data__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/highcharts/modules/export-data.js"),highcharts_modules_export_data__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(highcharts_modules_export_data__WEBPACK_IMPORTED_MODULE_10__),highcharts_modules_boost__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/highcharts/modules/boost.js"),highcharts_modules_boost__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(highcharts_modules_boost__WEBPACK_IMPORTED_MODULE_11__),highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/highcharts/highcharts-more.js"),highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_12__),highcharts_modules_pattern_fill__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/highcharts/modules/pattern-fill.js"),highcharts_modules_pattern_fill__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(highcharts_modules_pattern_fill__WEBPACK_IMPORTED_MODULE_13__),_styles_theme__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/styles/theme.js"),_styles_components_StyledResult__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/styles/components/StyledResult.js"),_components_DataId_withDataId__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/components/DataId/withDataId.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}highcharts_modules_boost__WEBPACK_IMPORTED_MODULE_11___default()(highcharts__WEBPACK_IMPORTED_MODULE_2___default()),highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_7___default()(highcharts__WEBPACK_IMPORTED_MODULE_2___default()),highcharts_rounded_corners__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2___default()),highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_8___default()(highcharts__WEBPACK_IMPORTED_MODULE_2___default()),highcharts_modules_offline_exporting__WEBPACK_IMPORTED_MODULE_9___default()(highcharts__WEBPACK_IMPORTED_MODULE_2___default()),highcharts_modules_export_data__WEBPACK_IMPORTED_MODULE_10___default()(highcharts__WEBPACK_IMPORTED_MODULE_2___default()),highcharts_modules_heatmap__WEBPACK_IMPORTED_MODULE_5___default()(highcharts__WEBPACK_IMPORTED_MODULE_2___default()),highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_12___default()(highcharts__WEBPACK_IMPORTED_MODULE_2___default()),highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_6___default()(highcharts__WEBPACK_IMPORTED_MODULE_2___default()),highcharts_modules_pattern_fill__WEBPACK_IMPORTED_MODULE_13___default()(highcharts__WEBPACK_IMPORTED_MODULE_2___default());var propTypes={decimalPoint:prop_types__WEBPACK_IMPORTED_MODULE_18___default().string,thousandsSep:prop_types__WEBPACK_IMPORTED_MODULE_18___default().string,numericSymbols:prop_types__WEBPACK_IMPORTED_MODULE_18___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_18___default().string),months:prop_types__WEBPACK_IMPORTED_MODULE_18___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_18___default().string),shortMonths:prop_types__WEBPACK_IMPORTED_MODULE_18___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_18___default().string),weekdays:prop_types__WEBPACK_IMPORTED_MODULE_18___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_18___default().string),options:prop_types__WEBPACK_IMPORTED_MODULE_18___default().shape({}),callback:prop_types__WEBPACK_IMPORTED_MODULE_18___default().func,isLoading:prop_types__WEBPACK_IMPORTED_MODULE_18___default().bool,showError:prop_types__WEBPACK_IMPORTED_MODULE_18___default().bool,errorContent:prop_types__WEBPACK_IMPORTED_MODULE_18___default().node,dataId:prop_types__WEBPACK_IMPORTED_MODULE_18___default().string},defaultProps={decimalPoint:".",thousandsSep:" ",numericSymbols:["k","M","G","T","P","E"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],showError:!1,isLoading:!1,theme:_styles_theme__WEBPACK_IMPORTED_MODULE_14__.ZP,dataId:"chart"},StyledChartLoading=styled_components__WEBPACK_IMPORTED_MODULE_19__.ZP.div.withConfig({displayName:"Chart__StyledChartLoading"})(["display:flex;margin:0 auto;text-align:center;height:400px;align-items:center;justify-content:center;"]),ChartLoading=function ChartLoading(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(StyledChartLoading,{"data-testid":"chart-loading",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("svg",{width:"210",height:"210",preserveAspectRatio:"none",viewBox:"0 0 210 210",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("rect",{width:"100%",height:"100%",fill:'url("#fill")',clipPath:"url(#clip-path-chart)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("defs",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("clipPath",{id:"clip-path-chart",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("rect",{width:"1",height:"1",x:"156",y:"89",rx:"0",ry:"0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("rect",{width:"9",height:"27",x:"62",y:"103",rx:"0",ry:"0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("rect",{width:"9",height:"72",x:"89",y:"60",rx:"0",ry:"0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("rect",{width:"9",height:"43",x:"115",y:"87",rx:"0",ry:"0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("rect",{width:"9",height:"60",x:"140",y:"71",rx:"0",ry:"0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("rect",{width:"140",height:"9",x:"35",y:"153",rx:"0",ry:"0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("rect",{width:"184",height:"9",x:"14",y:"30",rx:"0",ry:"0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("rect",{width:"9",height:"154",x:"190",y:"30",rx:"0",ry:"0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("rect",{width:"184",height:"9",x:"14",y:"174",rx:"0",ry:"0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("rect",{width:"9",height:"154",x:"14",y:"30",rx:"0",ry:"0"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("linearGradient",{id:"fill",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("stop",{offset:"0.6",stopColor:"#f3f3f3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("animate",{attributeName:"offset",dur:"2s",keyTimes:"0; 0.25; 1",repeatCount:"indefinite",values:"-2; -2; 1"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("stop",{offset:"1.6",stopColor:"#ecebeb",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("animate",{attributeName:"offset",dur:"2s",keyTimes:"0; 0.25; 1",repeatCount:"indefinite",values:"-1; -1; 2"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("stop",{offset:"2.6",stopColor:"#f3f3f3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("animate",{attributeName:"offset",dur:"2s",keyTimes:"0; 0.25; 1",repeatCount:"indefinite",values:"0; 0; 3"})})]})]})]})})};ChartLoading.displayName="ChartLoading";var StyledChartError=styled_components__WEBPACK_IMPORTED_MODULE_19__.ZP.div.withConfig({displayName:"Chart__StyledChartError"})(["display:flex;margin:0 auto;text-align:center;height:400px;align-items:center;justify-content:center;","{margin:0;}"],_styles_components_StyledResult__WEBPACK_IMPORTED_MODULE_15__.O),ChartError=function ChartError(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(StyledChartError,_objectSpread({"data-testid":"chart-error"},props))};ChartError.displayName="ChartError";var StyledChart=styled_components__WEBPACK_IMPORTED_MODULE_19__.ZP.div.withConfig({displayName:"Chart__StyledChart"})([".highcharts-exporting-group{display:none !important;}.highcharts-pivot,.highcharts-data-label-box{visibility:hidden;}"]),Chart=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(props,ref){var options=props.options,isLoading=props.isLoading,showError=props.showError,errorContent=props.errorContent,dataId=props.dataId,dataTestId=props["data-testid"],decimalPoint=props.decimalPoint,thousandsSep=props.thousandsSep,numericSymbols=props.numericSymbols,months=props.months,shortMonths=props.shortMonths,weekdays=props.weekdays,loading=isLoading&&!showError,error=!isLoading&&showError&&errorContent,showChart=!loading&&!error&&options,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),2),aggregateOptions=_useState2[0],setAggregateOptions=_useState2[1],fontFamily=_styles_theme__WEBPACK_IMPORTED_MODULE_14__.ZP.fontFamily,backgroundColor=_styles_theme__WEBPACK_IMPORTED_MODULE_14__.ZP.backgroundColor,highchartsReactProps=lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(props,["isLoading","showError","dataId","data-testid","decimalPoint","thousandsSep","thousandsSeparator","numericSymbols","months","options","shortMonths","weekdays","options","theme"]);return highcharts__WEBPACK_IMPORTED_MODULE_2___default().setOptions({lang:{decimalPoint,thousandsSep,numericSymbols,months,shortMonths,weekdays}}),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var currentOptions=_objectSpread({},options);currentOptions.chart?currentOptions.chart.style||(currentOptions.chart.style={}):currentOptions.chart={style:{}},currentOptions.legend||(currentOptions.legend={}),currentOptions.tooltip||(currentOptions.tooltip={}),currentOptions.title?currentOptions.title.style||(currentOptions.title.style={}):currentOptions.title={text:""},setAggregateOptions(_objectSpread(_objectSpread({},options),{},{title:_objectSpread(_objectSpread({},currentOptions.title),{},{style:_objectSpread(_objectSpread({},currentOptions.title.style),{},{fontWeight:"bold"})}),tooltip:_objectSpread(_objectSpread({},currentOptions.tooltip),{},{backgroundColor,shadow:!1}),legend:_objectSpread(_objectSpread({},currentOptions.legend),{},{backgroundColor,itemStyle:{}}),credits:{enabled:!1},exporting:{enabled:!1},chart:_objectSpread(_objectSpread({},currentOptions.chart),{},{backgroundColor,style:_objectSpread(_objectSpread({},currentOptions.chart.style),{},{fontFamily})})}))}),[options,fontFamily,backgroundColor]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(StyledChart,{"data-id":dataId,"data-testid":dataTestId,children:[(loading||!aggregateOptions)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(ChartLoading,{}),error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(ChartError,{children:errorContent}),showChart&&aggregateOptions&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(highcharts_react_official__WEBPACK_IMPORTED_MODULE_3___default(),_objectSpread(_objectSpread({highcharts:highcharts__WEBPACK_IMPORTED_MODULE_2___default(),ref},highchartsReactProps),{},{options:aggregateOptions}))]})}));Chart.propTypes=propTypes,Chart.defaultProps=defaultProps,Chart.__docgenInfo={description:"",methods:[],displayName:"Chart",props:{decimalPoint:{defaultValue:{value:"'.'",computed:!1},description:"The default decimal point used in the Highcharts.numberFormat method unless otherwise specified in the function arguments.",type:{name:"string"},required:!1},thousandsSep:{defaultValue:{value:"' '",computed:!1},description:"The default thousands separator used in the Highcharts.numberFormat method unless otherwise specified in the function arguments. Defaults to a single space character, which is recommended in ISO 31-0 and works across Anglo-American and continental European languages",type:{name:"string"},required:!1},numericSymbols:{defaultValue:{value:"['k', 'M', 'G', 'T', 'P', 'E']",computed:!1},description:"Metric prefixes used to shorten high numbers in axis labels. Replacing any of the positions with null causes the full number to be written. Setting numericSymbols to null disables shortening altogether",type:{name:"arrayOf",value:{name:"string"}},required:!1},months:{defaultValue:{value:"[\n  'January',\n  'February',\n  'March',\n  'April',\n  'May',\n  'June',\n  'July',\n  'August',\n  'September',\n  'October',\n  'November',\n  'December',\n]",computed:!1},description:"An array containing the months names. Corresponds to the %B format in Highcharts.dateFormat()",type:{name:"arrayOf",value:{name:"string"}},required:!1},shortMonths:{defaultValue:{value:"[\n  'Jan',\n  'Feb',\n  'Mar',\n  'Apr',\n  'May',\n  'Jun',\n  'Jul',\n  'Aug',\n  'Sep',\n  'Oct',\n  'Nov',\n  'Dec',\n]",computed:!1},description:"Short week days, starting Sunday. If not specified, Highcharts uses the first three letters of the lang.weekdays option",type:{name:"arrayOf",value:{name:"string"}},required:!1},weekdays:{defaultValue:{value:"[\n  'Sunday',\n  'Monday',\n  'Tuesday',\n  'Wednesday',\n  'Thursday',\n  'Friday',\n  'Saturday',\n]",computed:!1},description:"An array containing the weekday names",type:{name:"arrayOf",value:{name:"string"}},required:!1},showError:{defaultValue:{value:"false",computed:!1},description:"State to show/hide error",type:{name:"bool"},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},description:"State to show/hide loading",type:{name:"bool"},required:!1},theme:{defaultValue:{value:"theme",computed:!0},required:!1},dataId:{defaultValue:{value:"'chart'",computed:!1},description:"data-id attribute to identfy the element in DOM",type:{name:"string"},required:!1},options:{description:'All the highcharts options you can see on the <a href="https://api.highcharts.com/highcharts/chart">documentation</a>',type:{name:"shape",value:{}},required:!1},callback:{description:"Call a function when the charts is mounted, helpful when use multiple ref",type:{name:"func"},required:!1},errorContent:{description:"The content of the error normally will be a Result component",type:{name:"node"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=(0,styled_components__WEBPACK_IMPORTED_MODULE_19__.Zz)((0,_components_DataId_withDataId__WEBPACK_IMPORTED_MODULE_16__.Z)(Chart))},"./src/styles/components/StyledResult.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>StyledResult});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_components_Grid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Grid.js"),_selectors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/selectors.js"),StyledResult=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(_components_Grid__WEBPACK_IMPORTED_MODULE_0__.r).withConfig({displayName:"StyledResult"})(["margin:70px auto;text-align:center;.result-row{justify-content:center;&.icon{padding-bottom:20px;}&.title{font-size:24px;font-weight:",";padding:10px 30px;color:",";}&.info{span{font-size:14px;font-weight:",";color:",";}}&.content{margin-top:25px;}}"],_selectors__WEBPACK_IMPORTED_MODULE_1__.o1,_selectors__WEBPACK_IMPORTED_MODULE_1__.fW,_selectors__WEBPACK_IMPORTED_MODULE_1__._N,_selectors__WEBPACK_IMPORTED_MODULE_1__.Xc)}}]);