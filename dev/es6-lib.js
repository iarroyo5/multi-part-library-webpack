'use strict';

var _multiPartLibrary = require('@iarroyo/multi-part-library');

var lib = _interopRequireWildcard(_multiPartLibrary);

var _api = require('@iarroyo/multi-part-library/api');

var api = _interopRequireWildcard(_api);

var _path = require('@iarroyo/multi-part-library/path');

var path = _interopRequireWildcard(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var repeatedName = _multiPartLibrary.pathLib.repeatedFunctionName();

console.log('\n|************ LIBS CONTENT ******|\n');

console.log(lib);
console.log(api);
console.log(path);

console.log('\n|************ VALUES ************|');

console.log('\n__API LOGS__');
console.log('API_URL', _api.API_URL);
console.log('getApiUrl', (0, _api.getApiUrl)());
console.log('getApiSchema', (0, _api.getApiSchema)());
console.log('import_repeatedFunctionName', (0, _api.repeatedFunctionName)());

console.log('\n__PATH LOGS__');
console.log('getUserPath', (0, _path.getUserPath)({ id: 'dummy' }));
console.log('import_repeatedFunctionName', (0, _path.repeatedFunctionName)());
console.log('const_repeatedFunctionName', repeatedName);

console.log('\n|*******************************|\n');
