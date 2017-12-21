//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

/* Package-scope variables */
var __extends, __decorate, __metadata, __param, __awaiter, __assign;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/barbatus_typescript-runtime/typescript-helpers.js                                               //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
// There is no no-global helpers available for TypeScript as now,                                           // 1
// check out this issue https://github.com/Microsoft/TypeScript/issues/3364.                                // 2
// In order to avoid generating them for each ts-file, they are added here                                  // 3
// while TypeScript always runs with noEmitHelpers = true.                                                  // 4
// It might be useful as well if we need to override some of them                                           // 5
// to support old browsers.                                                                                 // 6
                                                                                                            // 7
__extends = (this && this.__extends) || function (d, b) {                                                   // 8
  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];                                                    // 9
  function __() { this.constructor = d; }                                                                   // 10
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());                     // 11
};                                                                                                          // 12
                                                                                                            // 13
__decorate = (this && this.__decorate) || function (decorators, target, key, desc) {                        // 14
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;                                            // 18
};                                                                                                          // 19
                                                                                                            // 20
__metadata = (this && this.__metadata) || function (k, v) {                                                 // 21
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};                                                                                                          // 23
                                                                                                            // 24
__param = (this && this.__param) || function (paramIndex, decorator) {                                      // 25
  return function (target, key) { decorator(target, key, paramIndex); }                                     // 26
};                                                                                                          // 27
                                                                                                            // 28
__awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {                      // 29
  return new (P || (P = Promise))(function (resolve, reject) {                                              // 30
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }           // 31
      function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }           // 32
      function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments)).next());                                      // 34
  });                                                                                                       // 35
};                                                                                                          // 36
                                                                                                            // 37
__assign = (this && this.__assign) || Object.assign || function(t) {                                        // 38
    for (var s, i = 1, n = arguments.length; i < n; i++) {                                                  // 39
        s = arguments[i];                                                                                   // 40
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))                                    // 41
            t[p] = s[p];                                                                                    // 42
    }                                                                                                       // 43
    return t;                                                                                               // 44
};                                                                                                          // 45
                                                                                                            // 46
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['barbatus:typescript-runtime'] = {}, {
  __extends: __extends,
  __decorate: __decorate,
  __metadata: __metadata,
  __param: __param,
  __awaiter: __awaiter,
  __assign: __assign
});

})();
