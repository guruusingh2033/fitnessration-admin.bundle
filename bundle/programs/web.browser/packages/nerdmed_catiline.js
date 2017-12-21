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

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/nerdmed_catiline/packages/nerdmed_catiline.js                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                             //     // 4
// packages/nerdmed:catiline/catiline.js                                                                       //     // 5
//                                                                                                             //     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                               //     // 8
/*! catiline 2.9.3 2013-10-25*/                                                                                // 1   // 9
/*!©2013 Calvin Metcalf @license MIT https://github.com/calvinmetcalf/catiline */                              // 2   // 10
if (typeof document === 'undefined') {                                                                         // 3   // 11
	self._noTransferable=true;                                                                                    // 4   // 12
	self.onmessage=function(e){                                                                                   // 5   // 13
		/*jslint evil: true */                                                                                       // 6   // 14
		eval(e.data);                                                                                                // 7   // 15
	};                                                                                                            // 8   // 16
} else {                                                                                                       // 9   // 17
(function(global){                                                                                             // 10  // 18
	'use strict';                                                                                                 // 11  // 19
//overall structure based on when                                                                              // 12  // 20
//https://github.com/cujojs/when/blob/master/when.js#L805-L852                                                 // 13  // 21
var nextTick;                                                                                                  // 14  // 22
var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;                               // 15  // 23
/*if (typeof setImmediate === 'function') {                                                                    // 16  // 24
	nextTick = setImmediate.bind(global,drainQueue);                                                              // 17  // 25
}else */if(MutationObserver){                                                                                  // 18  // 26
	//based on RSVP                                                                                               // 19  // 27
	//https://github.com/tildeio/rsvp.js/blob/master/lib/rsvp/async.js                                            // 20  // 28
	var observer = new MutationObserver(drainQueue);                                                              // 21  // 29
	var element = document.createElement('div');                                                                  // 22  // 30
	observer.observe(element, { attributes: true });                                                              // 23  // 31
                                                                                                               // 24  // 32
	// Chrome Memory Leak: https://bugs.webkit.org/show_bug.cgi?id=93661                                          // 25  // 33
	addEventListener('unload', function () {                                                                      // 26  // 34
		observer.disconnect();                                                                                       // 27  // 35
		observer = null;                                                                                             // 28  // 36
	}, false);                                                                                                    // 29  // 37
	nextTick =   function () {                                                                                    // 30  // 38
		element.setAttribute('drainQueue', 'drainQueue');                                                            // 31  // 39
	};                                                                                                            // 32  // 40
}else{                                                                                                         // 33  // 41
	var codeWord = 'com.catiline.setImmediate' + Math.random();                                                   // 34  // 42
	addEventListener('message', function (event) {                                                                // 35  // 43
		// This will catch all incoming messages (even from other windows!), so we need to try reasonably hard to    // 36  // 44
		// avoid letting anyone else trick us into firing off. We test the origin is still this window, and that a   // 37  // 45
		// (randomly generated) unpredictable identifying prefix is present.                                         // 38  // 46
		if (event.source === window && event.data === codeWord) {                                                    // 39  // 47
			drainQueue();                                                                                               // 40  // 48
		}                                                                                                            // 41  // 49
	}, false);                                                                                                    // 42  // 50
	nextTick =  function() {                                                                                      // 43  // 51
		postMessage(codeWord, '*');                                                                                  // 44  // 52
	};                                                                                                            // 45  // 53
}                                                                                                              // 46  // 54
var mainQueue = [];                                                                                            // 47  // 55
                                                                                                               // 48  // 56
/**                                                                                                            // 49  // 57
 * Enqueue a task. If the queue is not currently scheduled to be                                               // 50  // 58
 * drained, schedule it.                                                                                       // 51  // 59
 * @param {function} task                                                                                      // 52  // 60
 */                                                                                                            // 53  // 61
catiline.nextTick = function(task) {                                                                           // 54  // 62
	if (mainQueue.push(task) === 1) {                                                                             // 55  // 63
		nextTick();                                                                                                  // 56  // 64
	}                                                                                                             // 57  // 65
};                                                                                                             // 58  // 66
                                                                                                               // 59  // 67
/**                                                                                                            // 60  // 68
 * Drain the handler queue entirely, being careful to allow the                                                // 61  // 69
 * queue to be extended while it is being processed, and to continue                                           // 62  // 70
 * processing until it is truly empty.                                                                         // 63  // 71
 */                                                                                                            // 64  // 72
function drainQueue() {                                                                                        // 65  // 73
	var i = 0;                                                                                                    // 66  // 74
	var task;                                                                                                     // 67  // 75
	var innerQueue = mainQueue;                                                                                   // 68  // 76
	mainQueue = [];                                                                                               // 69  // 77
	/*jslint boss: true */                                                                                        // 70  // 78
	while (task = innerQueue[i++]) {                                                                              // 71  // 79
		task();                                                                                                      // 72  // 80
	}                                                                                                             // 73  // 81
                                                                                                               // 74  // 82
}                                                                                                              // 75  // 83
                                                                                                               // 76  // 84
var func = 'function';                                                                                         // 77  // 85
// Creates a deferred: an object with a promise and corresponding resolve/reject methods                       // 78  // 86
function Deferred() {                                                                                          // 79  // 87
	// The `handler` variable points to the function that will                                                    // 80  // 88
	// 1) handle a .then(onFulfilled, onRejected) call                                                            // 81  // 89
	// 2) handle a .resolve or .reject call (if not fulfilled)                                                    // 82  // 90
	// Before 2), `handler` holds a queue of callbacks.                                                           // 83  // 91
	// After 2), `handler` is a simple .then handler.                                                             // 84  // 92
	// We use only one function to save memory and complexity.                                                    // 85  // 93
	var handler = function(onFulfilled, onRejected, value) {                                                      // 86  // 94
		// Case 1) handle a .then(onFulfilled, onRejected) call                                                      // 87  // 95
		if (onFulfilled !== handler) {                                                                               // 88  // 96
			var createdDeffered = createDeferred();                                                                     // 89  // 97
			handler.queue.push({                                                                                        // 90  // 98
				deferred: createdDeffered,                                                                                 // 91  // 99
				resolve: onFulfilled,                                                                                      // 92  // 100
				reject: onRejected                                                                                         // 93  // 101
			});                                                                                                         // 94  // 102
			return createdDeffered.promise;                                                                             // 95  // 103
		}                                                                                                            // 96  // 104
                                                                                                               // 97  // 105
		// Case 2) handle a .resolve or .reject call                                                                 // 98  // 106
		// (`onFulfilled` acts as a sentinel)                                                                        // 99  // 107
		// The actual function signature is                                                                          // 100
		// .re[ject|solve](sentinel, success, value)                                                                 // 101
		var action = onRejected ? 'resolve' : 'reject';                                                              // 102
		for (var i = 0, l = handler.queue.length; i < l; i++) {                                                      // 103
			var queue = handler.queue[i];                                                                               // 104
			var deferred = queue.deferred;                                                                              // 105
			var callback = queue[action];                                                                               // 106
			if (typeof callback !== func) {                                                                             // 107
				deferred[action](value);                                                                                   // 108
			}                                                                                                           // 109
			else {                                                                                                      // 110
				execute(callback, value, deferred);                                                                        // 111
			}                                                                                                           // 112
		}                                                                                                            // 113
		// Replace this handler with a simple resolved or rejected handler                                           // 114
		handler = createHandler(promise, value, onRejected);                                                         // 115
	};                                                                                                            // 116
                                                                                                               // 117
	function Promise() {                                                                                          // 118
		this.then = function(onFulfilled, onRejected) {                                                              // 119
			return handler(onFulfilled, onRejected);                                                                    // 120
		};                                                                                                           // 121
	}                                                                                                             // 122
	var promise = new Promise();                                                                                  // 123
	this.promise = promise;                                                                                       // 124
	// The queue of deferreds                                                                                     // 125
	handler.queue = [];                                                                                           // 126
                                                                                                               // 127
	this.resolve = function(value) {                                                                              // 128
		if (handler.queue) {                                                                                         // 129
			handler(handler, true, value);                                                                              // 130
		}                                                                                                            // 131
	};                                                                                                            // 132
                                                                                                               // 133
	this.fulfill = this.resolve;                                                                                  // 134
                                                                                                               // 135
	this.reject = function(reason) {                                                                              // 136
		if (handler.queue) {                                                                                         // 137
			handler(handler, false, reason);                                                                            // 138
		}                                                                                                            // 139
	};                                                                                                            // 140
}                                                                                                              // 141
                                                                                                               // 142
function createDeferred() {                                                                                    // 143
	return new Deferred();                                                                                        // 144
}                                                                                                              // 145
                                                                                                               // 146
// Creates a fulfilled or rejected .then function                                                              // 147
function createHandler(promise, value, success) {                                                              // 148
	return function(onFulfilled, onRejected) {                                                                    // 149
		var callback = success ? onFulfilled : onRejected;                                                           // 150
		if (typeof callback !== func) {                                                                              // 151
			return promise;                                                                                             // 152
		}                                                                                                            // 153
		var result = createDeferred();                                                                               // 154
		execute(callback, value, result);                                                                            // 155
		return result.promise;                                                                                       // 156
	};                                                                                                            // 157
}                                                                                                              // 158
                                                                                                               // 159
// Executes the callback with the specified value,                                                             // 160
// resolving or rejecting the deferred                                                                         // 161
function execute(callback, value, deferred) {                                                                  // 162
	catiline.nextTick(function() {                                                                                // 163
		try {                                                                                                        // 164
			var result = callback(value);                                                                               // 165
			if (result && typeof result.then === func) {                                                                // 166
				result.then(deferred.resolve, deferred.reject);                                                            // 167
			}                                                                                                           // 168
			else {                                                                                                      // 169
				deferred.resolve(result);                                                                                  // 170
			}                                                                                                           // 171
		}                                                                                                            // 172
		catch (error) {                                                                                              // 173
			deferred.reject(error);                                                                                     // 174
		}                                                                                                            // 175
	});                                                                                                           // 176
}                                                                                                              // 177
catiline.deferred = createDeferred;                                                                            // 178
// Returns a resolved promise                                                                                  // 179
catiline.resolve = function(value) {                                                                           // 180
	var promise = {};                                                                                             // 181
	promise.then = createHandler(promise, value, true);                                                           // 182
	return promise;                                                                                               // 183
};                                                                                                             // 184
// Returns a rejected promise                                                                                  // 185
catiline.reject = function(reason) {                                                                           // 186
	var promise = {};                                                                                             // 187
	promise.then = createHandler(promise, reason, false);                                                         // 188
	return promise;                                                                                               // 189
};                                                                                                             // 190
// Returns a deferred                                                                                          // 191
                                                                                                               // 192
catiline.all = function(array) {                                                                               // 193
	var promise = createDeferred();                                                                               // 194
	var len = array.length;                                                                                       // 195
	var resolved = 0;                                                                                             // 196
	var out = [];                                                                                                 // 197
	var onSuccess = function(n) {                                                                                 // 198
		return function(v) {                                                                                         // 199
			out[n] = v;                                                                                                 // 200
			resolved++;                                                                                                 // 201
			if (resolved === len) {                                                                                     // 202
				promise.resolve(out);                                                                                      // 203
			}                                                                                                           // 204
		};                                                                                                           // 205
	};                                                                                                            // 206
	array.forEach(function(v, i) {                                                                                // 207
		v.then(onSuccess(i), function(a) {                                                                           // 208
			promise.reject(a);                                                                                          // 209
		});                                                                                                          // 210
	});                                                                                                           // 211
	return promise.promise;                                                                                       // 212
};                                                                                                             // 213
catiline._hasWorker = typeof Worker !== 'undefined'&&typeof fakeLegacy === 'undefined';                        // 214
catiline.URL = window.URL || window.webkitURL;                                                                 // 215
catiline._noTransferable=!catiline.URL;                                                                        // 216
//regex out the importScript call and move it up to the top out of the function.                               // 217
function regexImports(string){                                                                                 // 218
	var rest=string;                                                                                              // 219
	var match = true;                                                                                             // 220
	var matches = {};                                                                                             // 221
	var loopFunc = function(a,b){                                                                                 // 222
		if(b){                                                                                                       // 223
			'importScripts('+b.split(',').forEach(function(cc){                                                         // 224
				matches[catiline.makeUrl(cc.match(/\s*[\'\"](\S*)[\'\"]\s*/)[1])]=true; // trim whitespace, add to matches // 225
			})+');\n';                                                                                                  // 226
		}                                                                                                            // 227
	};                                                                                                            // 228
	while(match){                                                                                                 // 229
		match = rest.match(/(importScripts\(.*?\);?)/);                                                              // 230
		rest = rest.replace(/(importScripts\(\s*(?:[\'\"].*?[\'\"])?\s*\);?)/,'\n');                                 // 231
		if(match){                                                                                                   // 232
			match[0].replace(/importScripts\(\s*([\'\"].*?[\'\"])?\s*\);?/g,loopFunc);                                  // 233
		}                                                                                                            // 234
	}                                                                                                             // 235
	matches = Object.keys(matches);                                                                               // 236
	return [matches,rest];                                                                                        // 237
}                                                                                                              // 238
                                                                                                               // 239
function moveImports(string,after){                                                                            // 240
	var str = regexImports(string);                                                                               // 241
	var matches = str[0];                                                                                         // 242
	var rest = str[1];                                                                                            // 243
	if(matches.length>0){                                                                                         // 244
		return 'importScripts(\''+matches.join('\',\'')+after+rest;                                                  // 245
	}else{                                                                                                        // 246
		return rest;                                                                                                 // 247
	}                                                                                                             // 248
}                                                                                                              // 249
function getPath(){                                                                                            // 250
	if(typeof SHIM_WORKER_PATH !== 'undefined'){                                                                  // 251
		return SHIM_WORKER_PATH;                                                                                     // 252
	}else if('SHIM_WORKER_PATH' in catiline){                                                                     // 253
		return catiline.SHIM_WORKER_PATH;                                                                            // 254
	}                                                                                                             // 255
	var scripts = document.getElementsByTagName('script');                                                        // 256
	var len = scripts.length;                                                                                     // 257
	var i = 0;                                                                                                    // 258
	while(i<len){                                                                                                 // 259
		if(/catiline(\.min)?\.js/.test(scripts[i].src)){                                                             // 260
			return scripts[i].src;                                                                                      // 261
		}                                                                                                            // 262
		i++;                                                                                                         // 263
	}                                                                                                             // 264
}                                                                                                              // 265
function appendScript(iDoc,text){                                                                              // 266
	var iScript = iDoc.createElement('script');                                                                   // 267
	if (typeof iScript.text !== 'undefined') {                                                                    // 268
		iScript.text = text;                                                                                         // 269
	} else {                                                                                                      // 270
		iScript.innerHTML = text;                                                                                    // 271
	}                                                                                                             // 272
	if(iDoc.readyState==='complete'){                                                                             // 273
		iDoc.documentElement.appendChild(iScript);                                                                   // 274
	}else{                                                                                                        // 275
		iDoc.onreadystatechange=function(){                                                                          // 276
			if(iDoc.readyState==='complete'){                                                                           // 277
				iDoc.documentElement.appendChild(iScript);                                                                 // 278
			}                                                                                                           // 279
		};                                                                                                           // 280
	}                                                                                                             // 281
}                                                                                                              // 282
//much of the iframe stuff inspired by https://github.com/padolsey/operative                                   // 283
//most things besides the names have since been changed                                                        // 284
function actualMakeI(script,codeword){                                                                         // 285
	var iFrame = document.createElement('iframe');                                                                // 286
	iFrame.style.display = 'none';                                                                                // 287
	document.body.appendChild(iFrame);                                                                            // 288
	var iDoc = iFrame.contentWindow.document;                                                                     // 289
	var text=['try{ ',                                                                                            // 290
	'var __scripts__=\'\';function importScripts(scripts){',                                                      // 291
	'	if(Array.isArray(scripts)&&scripts.length>0){',                                                             // 292
	'		scripts.forEach(function(url){',                                                                           // 293
	'			var ajax = new XMLHttpRequest();',                                                                        // 294
	'			ajax.open(\'GET\',url,false);',                                                                           // 295
	'			ajax.send();__scripts__+=ajax.responseText;',                                                             // 296
	'			__scripts__+=\'\\n;\';',                                                                                  // 297
	'		});',                                                                                                      // 298
	'	}',                                                                                                         // 299
	'};',                                                                                                         // 300
	script,                                                                                                       // 301
	'}catch(e){',                                                                                                 // 302
	'	window.parent.postMessage([\''+codeword+'\',\'error\'],\'*\')',                                             // 303
	'}'].join('\n');                                                                                              // 304
	appendScript(iDoc,text);                                                                                      // 305
	return iFrame;                                                                                                // 306
}                                                                                                              // 307
function makeIframe(script,codeword){                                                                          // 308
	var promise = catiline.deferred();                                                                            // 309
	if(document.readyState==='complete'){                                                                         // 310
		promise.resolve(actualMakeI(script,codeword));                                                               // 311
	}else{                                                                                                        // 312
		window.addEventListener('load',function(){                                                                   // 313
			promise.resolve(actualMakeI(script,codeword));                                                              // 314
		},false);                                                                                                    // 315
	}                                                                                                             // 316
	return promise.promise;                                                                                       // 317
}                                                                                                              // 318
catiline.makeIWorker = function (strings,codeword){                                                            // 319
	var script =moveImports(strings.join(''),'\');eval(__scripts__);\n');                                         // 320
	var worker = {onmessage:function(){}};                                                                        // 321
	var ipromise = makeIframe(script,codeword);                                                                   // 322
	window.addEventListener('message',function(e){                                                                // 323
		if(e.data.slice && e.data.slice(0,codeword.length) === codeword){                                            // 324
			worker.onmessage({data:JSON.parse(e.data.slice(codeword.length))});                                         // 325
		}                                                                                                            // 326
	});                                                                                                           // 327
	worker.postMessage=function(data){                                                                            // 328
		ipromise.then(function(iFrame){                                                                              // 329
			iFrame.contentWindow.postMessage(JSON.stringify(data),'*');                                                 // 330
		});                                                                                                          // 331
	};                                                                                                            // 332
	worker.terminate=function(){                                                                                  // 333
		ipromise.then(function(iFrame){                                                                              // 334
			document.body.removeChild(iFrame);                                                                          // 335
		});                                                                                                          // 336
	};                                                                                                            // 337
	return worker;                                                                                                // 338
	                                                                                                              // 339
};                                                                                                             // 340
                                                                                                               // 341
function makeFallbackWorker(script){                                                                           // 342
	catiline._noTransferable=true;                                                                                // 343
	var worker = new Worker(getPath());                                                                           // 344
	worker.postMessage(script);                                                                                   // 345
	return worker;                                                                                                // 346
}                                                                                                              // 347
//accepts an array of strings, joins them, and turns them into a worker.                                       // 348
catiline.makeWorker = function (strings, codeword){                                                            // 349
	if(!catiline._hasWorker){                                                                                     // 350
		return catiline.makeIWorker(strings,codeword);                                                               // 351
	}                                                                                                             // 352
	var worker;                                                                                                   // 353
	var script = moveImports(strings.join('\n'),'\');\n');                                                        // 354
	if(catiline._noTransferable){                                                                                 // 355
		return makeFallbackWorker(script);                                                                           // 356
	}                                                                                                             // 357
	try{                                                                                                          // 358
		worker= new Worker(catiline.URL.createObjectURL(new Blob([script],{type: 'text/javascript'})));              // 359
	}catch(e){                                                                                                    // 360
		try{                                                                                                         // 361
			worker=makeFallbackWorker(script);                                                                          // 362
		}catch(ee){                                                                                                  // 363
			worker = catiline.makeIWorker(strings,codeword);                                                            // 364
		}                                                                                                            // 365
	}finally{                                                                                                     // 366
		return worker;                                                                                               // 367
	}                                                                                                             // 368
};                                                                                                             // 369
                                                                                                               // 370
catiline.makeUrl = function (fileName) {                                                                       // 371
	var link = document.createElement('link');                                                                    // 372
	link.href = fileName;                                                                                         // 373
	return link.href;                                                                                             // 374
};                                                                                                             // 375
                                                                                                               // 376
function stringifyObject(obj){                                                                                 // 377
	var out = '{';                                                                                                // 378
	var first = true;                                                                                             // 379
	for(var key in obj){                                                                                          // 380
		if(first){                                                                                                   // 381
			first = false;                                                                                              // 382
		}else{                                                                                                       // 383
			out+=',';                                                                                                   // 384
		}                                                                                                            // 385
		out += key;                                                                                                  // 386
		out += ':';                                                                                                  // 387
		out += catiline.stringify(obj[key]);                                                                         // 388
	}                                                                                                             // 389
	out += '}';                                                                                                   // 390
	return out;                                                                                                   // 391
}                                                                                                              // 392
function stringifyArray(array){                                                                                // 393
	if(array.length){                                                                                             // 394
		var out = '[';                                                                                               // 395
		out += catiline.stringify(array[0]);                                                                         // 396
		var i = 0;                                                                                                   // 397
		var len = array.length;                                                                                      // 398
		while(++i<len){                                                                                              // 399
			out += ',';                                                                                                 // 400
			out += catiline.stringify(array[i]);                                                                        // 401
		}                                                                                                            // 402
		out += ']';                                                                                                  // 403
		return out;                                                                                                  // 404
	}else{                                                                                                        // 405
		return '[]';                                                                                                 // 406
	}                                                                                                             // 407
}                                                                                                              // 408
catiline.stringify = function(thing){                                                                          // 409
	if(Array.isArray(thing)){                                                                                     // 410
		return stringifyArray(thing);                                                                                // 411
	}else if(typeof thing === 'function'||typeof thing === 'number'||typeof thing === 'boolean'){                 // 412
		return thing.toString();                                                                                     // 413
	}else if(typeof thing === 'string'){                                                                          // 414
		return '"' + thing + '"';                                                                                    // 415
	}else if(thing.toString() === '[object Object]'){                                                             // 416
		return stringifyObject(thing);                                                                               // 417
	}                                                                                                             // 418
};                                                                                                             // 419
                                                                                                               // 420
var workerSetup = function(context) {                                                                          // 421
	self.__iFrame__ = typeof document !== 'undefined';                                                            // 422
	self.__self__ = {                                                                                             // 423
		onmessage: function(e) {                                                                                     // 424
			context.trigger('messege', e.data[1]);                                                                      // 425
			if (e.data[0][0] === context.__codeWord__) {                                                                // 426
				return regMsg(e);                                                                                          // 427
			}                                                                                                           // 428
			else {                                                                                                      // 429
				context.trigger(e.data[0][0], e.data[1]);                                                                  // 430
			}                                                                                                           // 431
		}                                                                                                            // 432
	};                                                                                                            // 433
	if (__iFrame__) {                                                                                             // 434
		window.onmessage = function(e) {                                                                             // 435
			if (typeof e.data === 'string') {                                                                           // 436
				e = {                                                                                                      // 437
					data: JSON.parse(e.data)                                                                                  // 438
				};                                                                                                         // 439
			}                                                                                                           // 440
			__self__.onmessage(e);                                                                                      // 441
		};                                                                                                           // 442
	}                                                                                                             // 443
	else {                                                                                                        // 444
		self.onmessage = __self__.onmessage;                                                                         // 445
	}                                                                                                             // 446
	__self__.postMessage = function(rawData, transfer) {                                                          // 447
		if (!self._noTransferable && !__iFrame__) {                                                                  // 448
			self.postMessage(rawData, transfer);                                                                        // 449
		}                                                                                                            // 450
		else if (__iFrame__) {                                                                                       // 451
			var data = context.__codeWord__ + JSON.stringify(rawData);                                                  // 452
			window.parent.postMessage(data, '*');                                                                       // 453
		}                                                                                                            // 454
		else if (self._noTransferable) {                                                                             // 455
			self.postMessage(rawData);                                                                                  // 456
		}                                                                                                            // 457
	};                                                                                                            // 458
	self.console = {};                                                                                            // 459
	var regMsg = function(e) {                                                                                    // 460
		var cb = function(data, transfer) {                                                                          // 461
			__self__.postMessage([e.data[0], data], transfer);                                                          // 462
		};                                                                                                           // 463
		var result;                                                                                                  // 464
		if (__iFrame__) {                                                                                            // 465
			try {                                                                                                       // 466
				result = context[e.data[1]](e.data[2], cb, context);                                                       // 467
			}                                                                                                           // 468
			catch (ee) {                                                                                                // 469
				context.fire('error', JSON.stringify(ee));                                                                 // 470
			}                                                                                                           // 471
		}                                                                                                            // 472
		else {                                                                                                       // 473
			result = context[e.data[1]](e.data[2], cb, context);                                                        // 474
		}                                                                                                            // 475
		if (typeof result !== 'undefined') {                                                                         // 476
			cb(result);                                                                                                 // 477
		}                                                                                                            // 478
	};                                                                                                            // 479
};                                                                                                             // 480
function addEvents(context, msg) {                                                                             // 481
	var listeners = {};                                                                                           // 482
	var sendMessage;                                                                                              // 483
	if(typeof __self__ !== 'undefined'){                                                                          // 484
		sendMessage = __self__.postMessage;                                                                          // 485
	}else if (msg) {                                                                                              // 486
		sendMessage = msg;                                                                                           // 487
	}                                                                                                             // 488
	context.on = function(eventName, func, scope) {                                                               // 489
		scope = scope || context;                                                                                    // 490
		if (eventName.indexOf(' ') > 0) {                                                                            // 491
			eventName.split(' ').map(function(v) {                                                                      // 492
				return context.on(v, func, scope);                                                                         // 493
			}, this);                                                                                                   // 494
			return context;                                                                                             // 495
		}                                                                                                            // 496
		if (!(eventName in listeners)) {                                                                             // 497
			listeners[eventName] = [];                                                                                  // 498
		}                                                                                                            // 499
		var newFunc = function(a) {                                                                                  // 500
			func.call(scope, a, scope);                                                                                 // 501
		};                                                                                                           // 502
		newFunc.orig = func;                                                                                         // 503
		listeners[eventName].push(newFunc);                                                                          // 504
		return context;                                                                                              // 505
	};                                                                                                            // 506
	context.one = function(eventName, func, scope) {                                                              // 507
		scope = scope || context;                                                                                    // 508
                                                                                                               // 509
		function ourFunc(a) {                                                                                        // 510
			context.off(eventName, ourFunc);                                                                            // 511
			func.call(scope, a, scope);                                                                                 // 512
		}                                                                                                            // 513
		return context.on(eventName, ourFunc);                                                                       // 514
	};                                                                                                            // 515
                                                                                                               // 516
	context.trigger = function(eventName, data) {                                                                 // 517
		if (eventName.indexOf(' ') > 0) {                                                                            // 518
			eventName.split(' ').forEach(function(v) {                                                                  // 519
				context.trigger(v, data);                                                                                  // 520
			});                                                                                                         // 521
			return context;                                                                                             // 522
		}                                                                                                            // 523
		if (!(eventName in listeners)) {                                                                             // 524
			return context;                                                                                             // 525
		}                                                                                                            // 526
		listeners[eventName].forEach(function(v) {                                                                   // 527
			v(data);                                                                                                    // 528
		});                                                                                                          // 529
		return context;                                                                                              // 530
	};                                                                                                            // 531
	context.fire = function(eventName, data, transfer) {                                                          // 532
		sendMessage([[eventName],data],transfer);                                                                    // 533
		return context;                                                                                              // 534
	};                                                                                                            // 535
	context.off = function(eventName, func) {                                                                     // 536
		if (eventName.indexOf(' ') > 0) {                                                                            // 537
			eventName.split(' ').map(function(v) {                                                                      // 538
				return context.off(v, func);                                                                               // 539
			});                                                                                                         // 540
			return context;                                                                                             // 541
		}                                                                                                            // 542
		if (!(eventName in listeners)) {                                                                             // 543
			return context;                                                                                             // 544
		}                                                                                                            // 545
		else {                                                                                                       // 546
			if (func) {                                                                                                 // 547
				listeners[eventName] = listeners[eventName].map(function(a) {                                              // 548
					if (a.orig === func) {                                                                                    // 549
						return false;                                                                                            // 550
					}                                                                                                         // 551
					else {                                                                                                    // 552
						return a;                                                                                                // 553
					}                                                                                                         // 554
				}).filter(function(a) {                                                                                    // 555
					return a;                                                                                                 // 556
				});                                                                                                        // 557
			}                                                                                                           // 558
			else {                                                                                                      // 559
				delete listeners[eventName];                                                                               // 560
			}                                                                                                           // 561
		}                                                                                                            // 562
		return context;                                                                                              // 563
	};                                                                                                            // 564
}                                                                                                              // 565
function makeConsole(msg) {                                                                                    // 566
	if (typeof console !== 'undefined') {                                                                         // 567
		var method = console[msg[0]] ? msg[0] : 'log';                                                               // 568
		if (typeof console[method].apply === 'undefined') {                                                          // 569
			console[method](msg[1].join(' '));                                                                          // 570
		}                                                                                                            // 571
		else {                                                                                                       // 572
			console[method].apply(console, msg[1]);                                                                     // 573
		}                                                                                                            // 574
	}                                                                                                             // 575
}                                                                                                              // 576
function makeWorkerConsole(context){                                                                           // 577
	function makeConsole(method) {                                                                                // 578
		return function() {                                                                                          // 579
			var len = arguments.length;                                                                                 // 580
			var out = [];                                                                                               // 581
			var i = 0;                                                                                                  // 582
			while (i < len) {                                                                                           // 583
				out.push(arguments[i]);                                                                                    // 584
				i++;                                                                                                       // 585
			}                                                                                                           // 586
			context.fire('console', [method, out]);                                                                     // 587
		};                                                                                                           // 588
	}                                                                                                             // 589
	['log', 'debug', 'error', 'info', 'warn', 'time', 'timeEnd'].forEach(function(v) {                            // 590
		console[v] = makeConsole(v);                                                                                 // 591
	});                                                                                                           // 592
}                                                                                                              // 593
function Catiline(obj) {                                                                                       // 594
	if (typeof obj === 'function') {                                                                              // 595
		obj = {                                                                                                      // 596
			data: obj                                                                                                   // 597
		};                                                                                                           // 598
	}                                                                                                             // 599
	var codeWord = 'com.catilinejs.' + (Catiline._hasWorker ? 'iframe' : 'worker') + Math.random();               // 600
	var self = this;                                                                                              // 601
	var promises = [];                                                                                            // 602
	addEvents(self, function(data, transfer) {                                                                    // 603
		if (catiline._noTransferable) {                                                                              // 604
			worker.postMessage(data);                                                                                   // 605
		}                                                                                                            // 606
		else {                                                                                                       // 607
			worker.postMessage(data, transfer);                                                                         // 608
		}                                                                                                            // 609
	});                                                                                                           // 610
	var rejectPromises = function(msg) {                                                                          // 611
		if (typeof msg !== 'string' && 'preventDefault' in msg) {                                                    // 612
			msg.preventDefault();                                                                                       // 613
			msg = msg.message;                                                                                          // 614
		}                                                                                                            // 615
		promises.forEach(function(p) {                                                                               // 616
			if (p) {                                                                                                    // 617
				p.reject(msg);                                                                                             // 618
			}                                                                                                           // 619
		});                                                                                                          // 620
	};                                                                                                            // 621
	obj.__codeWord__ = codeWord;                                                                                  // 622
	obj.__initialize__ = [workerSetup, addEvents, makeWorkerConsole];                                             // 623
	if (!('initialize' in obj)) {                                                                                 // 624
		if ('init' in obj) {                                                                                         // 625
			obj.__initialize__.push(obj.init);                                                                          // 626
		}                                                                                                            // 627
	}                                                                                                             // 628
	else {                                                                                                        // 629
		obj.__initialize__.push(obj.initialize);                                                                     // 630
	}                                                                                                             // 631
                                                                                                               // 632
	if (!('events' in obj)) {                                                                                     // 633
		obj.events = {};                                                                                             // 634
	}                                                                                                             // 635
	if ('listners' in obj && typeof obj.listners !== 'function') {                                                // 636
		for (var key in obj.listners) {                                                                              // 637
			self.on(key, obj.listners[key]);                                                                            // 638
		}                                                                                                            // 639
	}                                                                                                             // 640
	var fObj = 'var _db = {\n\t';                                                                                 // 641
	var keyFunc = function(key) {                                                                                 // 642
		var out = function(data, transfer) {                                                                         // 643
			var i = promises.length;                                                                                    // 644
			promises[i] = catiline.deferred();                                                                          // 645
			if (catiline._noTransferable) {                                                                             // 646
				worker.postMessage([                                                                                       // 647
					[codeWord, i], key, data]);                                                                               // 648
			}                                                                                                           // 649
			else {                                                                                                      // 650
				worker.postMessage([                                                                                       // 651
					[codeWord, i], key, data], transfer);                                                                     // 652
			}                                                                                                           // 653
			return promises[i].promise;                                                                                 // 654
		};                                                                                                           // 655
		return out;                                                                                                  // 656
	};                                                                                                            // 657
	var i = false;                                                                                                // 658
	for (var key$0 in obj) {                                                                                      // 659
		if(['listners','initialize','init'].indexOf(key$0)>-1){                                                      // 660
			continue;                                                                                                   // 661
		}                                                                                                            // 662
		if (i) {                                                                                                     // 663
			fObj += ',\n\t';                                                                                            // 664
		}                                                                                                            // 665
		else {                                                                                                       // 666
			i = true;                                                                                                   // 667
		}                                                                                                            // 668
		if (typeof obj[key$0] === 'function') {                                                                      // 669
			fObj = fObj + key$0 + ':' + obj[key$0].toString();                                                          // 670
			self[key$0] = keyFunc(key$0);                                                                               // 671
		}                                                                                                            // 672
		else {                                                                                                       // 673
			var outThing = catiline.stringify(obj[key$0]);                                                              // 674
			if (typeof outThing !== 'undefined') {                                                                      // 675
				fObj = fObj + key$0 + ':' + outThing;                                                                      // 676
			}                                                                                                           // 677
		}                                                                                                            // 678
	}                                                                                                             // 679
	fObj = fObj + '};';                                                                                           // 680
	var worker = catiline.makeWorker(['\'use strict\';', '',                                                      // 681
	fObj, '_db.__initialize__.forEach(function(f){', '	f.call(_db,_db);', '});', 'for(var key in _db.events){', '	_db.on(key,_db.events[key]);', '}'], codeWord);
	worker.onmessage = function(e) {                                                                              // 683
		self.trigger('message', e.data[1]);                                                                          // 684
		if (e.data[0][0] === codeWord) {                                                                             // 685
			promises[e.data[0][1]].resolve(e.data[1]);                                                                  // 686
			promises[e.data[0][1]] = 0;                                                                                 // 687
		}                                                                                                            // 688
		else {                                                                                                       // 689
			self.trigger(e.data[0][0], e.data[1]);                                                                      // 690
		}                                                                                                            // 691
	};                                                                                                            // 692
	self.on('error', rejectPromises);                                                                             // 693
	worker.onerror = function(e) {                                                                                // 694
		self.trigger('error', e);                                                                                    // 695
	};                                                                                                            // 696
	self.on('console', makeConsole);                                                                              // 697
	self._close = function() {                                                                                    // 698
		worker.terminate();                                                                                          // 699
		rejectPromises('closed');                                                                                    // 700
		return catiline.resolve();                                                                                   // 701
	};                                                                                                            // 702
	if (!('close' in self)) {                                                                                     // 703
		self.close = self._close;                                                                                    // 704
	}                                                                                                             // 705
}                                                                                                              // 706
catiline.Worker = Catiline;                                                                                    // 707
                                                                                                               // 708
catiline.worker = function(obj){                                                                               // 709
    return new Catiline(obj);                                                                                  // 710
};                                                                                                             // 711
function makeActualKeyFuncs(resolvePromises, self) {                                                           // 712
	return {                                                                                                      // 713
		keyFunc: function(k) {                                                                                       // 714
			return function(data, transfer) {                                                                           // 715
				return resolvePromises(k, data, transfer);                                                                 // 716
			};                                                                                                          // 717
		},                                                                                                           // 718
		keyFuncBatch: function(k) {                                                                                  // 719
			return function(array) {                                                                                    // 720
				return catiline.all(array.map(function(data) {                                                             // 721
					return resolvePromises(k, data);                                                                          // 722
				}));                                                                                                       // 723
			};                                                                                                          // 724
		},                                                                                                           // 725
		keyFuncBatchCB: function(k) {                                                                                // 726
			return function(array) {                                                                                    // 727
				return catiline.all(array.map(function(data) {                                                             // 728
					return resolvePromises(k, data).then(self.__cb__);                                                        // 729
				}));                                                                                                       // 730
			};                                                                                                          // 731
		},                                                                                                           // 732
		keyFuncBatchTransfer: function(k) {                                                                          // 733
			return function(array) {                                                                                    // 734
				return catiline.all(array.map(function(data) {                                                             // 735
					return resolvePromises(k, data[0], data[1]);                                                              // 736
				}));                                                                                                       // 737
			};                                                                                                          // 738
		},                                                                                                           // 739
		keyFuncBatchTransferCB: function(k) {                                                                        // 740
			return function(array) {                                                                                    // 741
				return catiline.all(array.map(function(data) {                                                             // 742
					return resolvePromises(k, data[0], data[1]).then(self.__cb__);                                            // 743
				}));                                                                                                       // 744
			};                                                                                                          // 745
		}                                                                                                            // 746
	};                                                                                                            // 747
}                                                                                                              // 748
function makeKeyFuncs(resolvePromises, self, obj){                                                             // 749
	var funcs = makeActualKeyFuncs(resolvePromises, self);                                                        // 750
	for (var key in obj) {                                                                                        // 751
		self[key] = funcs.keyFunc(key);                                                                              // 752
		self.batch[key] = funcs.keyFuncBatch(key);                                                                   // 753
		self.__batchcb__[key] = funcs.keyFuncBatchCB(key);                                                           // 754
		self.batchTransfer[key] = funcs.keyFuncBatchTransfer(key);                                                   // 755
		self.__batchtcb__[key] = funcs.keyFuncBatchTransferCB(key);                                                  // 756
	}                                                                                                             // 757
}                                                                                                              // 758
function addBatchEvents(self, workers, n){                                                                     // 759
	self.on = function (eventName, func, context) {                                                               // 760
		workers.forEach(function (worker) {                                                                          // 761
			worker.on(eventName, func, context);                                                                        // 762
		});                                                                                                          // 763
		return self;                                                                                                 // 764
	};                                                                                                            // 765
	self.off = function (eventName, func, context) {                                                              // 766
		workers.forEach(function (worker) {                                                                          // 767
			worker.off(eventName, func, context);                                                                       // 768
		});                                                                                                          // 769
		return self;                                                                                                 // 770
	};                                                                                                            // 771
	self.fire = function (eventName, data) {                                                                      // 772
		workers[~~ (Math.random() * n)].fire(eventName, data);                                                       // 773
		return self;                                                                                                 // 774
	};                                                                                                            // 775
}                                                                                                              // 776
function makeUnmanaged(workers, n){                                                                            // 777
	return function(key, data, transfer, promise){                                                                // 778
		promise.promise.cancel = function(reason){                                                                   // 779
			return promise.reject(reason);                                                                              // 780
		};                                                                                                           // 781
		workers[~~ (Math.random() * n)][key](data, transfer).then(function(v){                                       // 782
			return promise.resolve(v);                                                                                  // 783
		},function(v){                                                                                               // 784
			return promise.reject(v);                                                                                   // 785
		});                                                                                                          // 786
		return promise.promise;                                                                                      // 787
	};                                                                                                            // 788
}                                                                                                              // 789
function makeQueueWorkers(n,idle,obj){                                                                         // 790
	var workers = [];                                                                                             // 791
	var numIdle = -1;                                                                                             // 792
	while (++numIdle < n) {                                                                                       // 793
		workers[numIdle] = new catiline.Worker(obj);                                                                 // 794
		idle.push(numIdle);                                                                                          // 795
	}                                                                                                             // 796
	return workers;                                                                                               // 797
}                                                                                                              // 798
function CatilineQueue(obj, n, dumb) {                                                                         // 799
	var self = this;                                                                                              // 800
	var numIdle = n;                                                                                              // 801
	var idle = [];                                                                                                // 802
	var que = [];                                                                                                 // 803
	var queueLen = 0;                                                                                             // 804
	var workers = makeQueueWorkers(n,idle,obj);                                                                   // 805
	addBatchEvents(self, workers, n);                                                                             // 806
	var batchFire = function (eventName, data) {                                                                  // 807
		workers.forEach(function (worker) {                                                                          // 808
			worker.fire(eventName, data);                                                                               // 809
		});                                                                                                          // 810
		return self;                                                                                                 // 811
	};                                                                                                            // 812
	                                                                                                              // 813
	self.batch.fire = batchFire;                                                                                  // 814
	self.batchTransfer.fire = batchFire;                                                                          // 815
                                                                                                               // 816
	function clearQueue(mgs) {                                                                                    // 817
		mgs = mgs || 'canceled';                                                                                     // 818
		queueLen = 0;                                                                                                // 819
		var oQ = que;                                                                                                // 820
		que = [];                                                                                                    // 821
		oQ.forEach(function (p) {                                                                                    // 822
			p[3].reject(mgs);                                                                                           // 823
		});                                                                                                          // 824
		return self;                                                                                                 // 825
	}                                                                                                             // 826
	self.clearQueue = clearQueue;                                                                                 // 827
	makeKeyFuncs(resolvePromises, self, obj);                                                                     // 828
	                                                                                                              // 829
                                                                                                               // 830
	function done(num) {                                                                                          // 831
		if (queueLen) {                                                                                              // 832
			var data = que.shift();                                                                                     // 833
			queueLen--;                                                                                                 // 834
			workers[num][data[0]](data[1], data[2]).then(function (d) {                                                 // 835
				done(num);                                                                                                 // 836
				data[3].resolve(d);                                                                                        // 837
			}, function (d) {                                                                                           // 838
				done(num);                                                                                                 // 839
				data[3].reject(d);                                                                                         // 840
			});                                                                                                         // 841
		}                                                                                                            // 842
		else {                                                                                                       // 843
			numIdle++;                                                                                                  // 844
			idle.push(num);                                                                                             // 845
		}                                                                                                            // 846
	}                                                                                                             // 847
	var resolveUnmanagedPromises;                                                                                 // 848
	if(dumb){                                                                                                     // 849
		resolveUnmanagedPromises = makeUnmanaged(workers, n);                                                        // 850
	}                                                                                                             // 851
	function resolvePromises(key, data, transfer) { //srsly better name!                                          // 852
		var promise = catiline.deferred();                                                                           // 853
		if (dumb) {                                                                                                  // 854
			return resolveUnmanagedPromises(key, data, transfer,promise);                                               // 855
		}                                                                                                            // 856
		if (!queueLen && numIdle) {                                                                                  // 857
			var num = idle.pop();                                                                                       // 858
			numIdle--;                                                                                                  // 859
			promise.promise.cancel = function(reason){                                                                  // 860
				return promise.reject(reason);                                                                             // 861
			};                                                                                                          // 862
			workers[num][key](data, transfer).then(function (d) {                                                       // 863
				done(num);                                                                                                 // 864
				promise.resolve(d);                                                                                        // 865
			}, function (d) {                                                                                           // 866
				done(num);                                                                                                 // 867
				promise.reject(d);                                                                                         // 868
			});                                                                                                         // 869
		} else if (queueLen || !numIdle) {                                                                           // 870
			var queueItem = [key, data, transfer, promise];                                                             // 871
			promise.promise.cancel = function(reason){                                                                  // 872
				var loc = que.indexOf(queueItem);                                                                          // 873
				if(loc>-1){                                                                                                // 874
					que.splice(loc,1);                                                                                        // 875
					queueLen--;                                                                                               // 876
				}                                                                                                          // 877
				return promise.reject(reason);                                                                             // 878
			};                                                                                                          // 879
			queueLen = que.push(queueItem);                                                                             // 880
		}                                                                                                            // 881
		return promise.promise;                                                                                      // 882
	}                                                                                                             // 883
	self._close = function () {                                                                                   // 884
		return catiline.all(workers.map(function (w) {                                                               // 885
			return w._close();                                                                                          // 886
		}));                                                                                                         // 887
	};                                                                                                            // 888
	if (!('close' in self)) {                                                                                     // 889
		self.close = self._close;                                                                                    // 890
	}                                                                                                             // 891
}                                                                                                              // 892
CatilineQueue.prototype.__batchcb__ = {};                                                                      // 893
CatilineQueue.prototype.__batchtcb__ = {};                                                                     // 894
CatilineQueue.prototype.batch = function (cb) {                                                                // 895
	if (typeof cb === 'function') {                                                                               // 896
		this.__cb__ = cb;                                                                                            // 897
		return this.__batchcb__;                                                                                     // 898
	}                                                                                                             // 899
	else {                                                                                                        // 900
		return this.clearQueue(cb);                                                                                  // 901
	}                                                                                                             // 902
};                                                                                                             // 903
CatilineQueue.prototype.batchTransfer = function (cb) {                                                        // 904
	if (typeof cb === 'function') {                                                                               // 905
		this.__batchtcb__.__cb__ = cb;                                                                               // 906
		return this.__batchtcb__;                                                                                    // 907
	}                                                                                                             // 908
	else {                                                                                                        // 909
		return this.clearQueue(cb);                                                                                  // 910
	}                                                                                                             // 911
};                                                                                                             // 912
catiline.Queue = CatilineQueue;                                                                                // 913
catiline.queue = function (obj, n, dumb) {                                                                     // 914
	return new catiline.Queue(obj, n, dumb);                                                                      // 915
};                                                                                                             // 916
                                                                                                               // 917
function catiline(object,queueLength,unmanaged){                                                               // 918
	if(arguments.length === 1 || !queueLength || queueLength <= 1){                                               // 919
		return new catiline.Worker(object);                                                                          // 920
	}else{                                                                                                        // 921
		return new catiline.Queue(object,queueLength,unmanaged);                                                     // 922
	}                                                                                                             // 923
}                                                                                                              // 924
//will be removed in v3                                                                                        // 925
catiline.setImmediate = catiline.nextTick;                                                                     // 926
function initBrowser(catiline){                                                                                // 927
	var origCW = global.cw;                                                                                       // 928
	catiline.noConflict=function(newName){                                                                        // 929
		global.cw = origCW;                                                                                          // 930
		if(newName){                                                                                                 // 931
			global[newName]=catiline;                                                                                   // 932
		}                                                                                                            // 933
	};                                                                                                            // 934
	global.catiline = catiline;                                                                                   // 935
	global.cw = catiline;                                                                                         // 936
	if(!('communist' in global)){                                                                                 // 937
		global.communist=catiline;                                                                                   // 938
	}                                                                                                             // 939
                                                                                                               // 940
}                                                                                                              // 941
                                                                                                               // 942
if(typeof define === 'function'){                                                                              // 943
	define(function(require){                                                                                     // 944
		catiline.SHIM_WORKER_PATH=require.toUrl('./catiline.js');                                                    // 945
		return catiline;                                                                                             // 946
	});                                                                                                           // 947
}else if(typeof module === 'undefined' || !('exports' in module)){                                             // 948
	initBrowser(catiline);                                                                                        // 949
} else {                                                                                                       // 950
	module.exports=catiline;                                                                                      // 951
}catiline.version = '2.9.3';                                                                                   // 952
})(this);}                                                                                                     // 953
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 962
                                                                                                                      // 963
}).call(this);                                                                                                        // 964
                                                                                                                      // 965
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['nerdmed:catiline'] = {};

})();
