var require = meteorInstall({"imports":{"api":{"addOns.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/addOns.js                                                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({AddOns:function(){return AddOns}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                     //
var AddOns = new Mongo.Collection('addOns', { idGeneration: 'MONGO' });                                              // 3
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 5
  Meteor.publish('addOns', function () {                                                                             // 6
    return AddOns.find();                                                                                            // 7
  });                                                                                                                // 8
}                                                                                                                    // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"anomalyTriggers.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/anomalyTriggers.js                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({AnomalyTriggers:function(){return AnomalyTriggers}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                     //
var AnomalyTriggers = new Mongo.Collection('anomalyTriggers', { idGeneration: 'MONGO' });                            // 3
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 5
  Meteor.publish('anomalyTriggers', function () {                                                                    // 6
    return AnomalyTriggers.find();                                                                                   // 7
  });                                                                                                                // 8
}                                                                                                                    // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"blocks.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/blocks.js                                                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({Blocks:function(){return Blocks}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                     //
var Blocks = new Mongo.Collection('blocks', { idGeneration: 'MONGO' });                                              // 3
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 5
  Meteor.publish('blocks', function () {                                                                             // 6
    return Blocks.find();                                                                                            // 7
  });                                                                                                                // 8
}                                                                                                                    // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"bundleTypes.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/bundleTypes.js                                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({BundleTypes:function(){return BundleTypes}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                     //
var BundleTypes = new Mongo.Collection('bundleTypes', { idGeneration: 'MONGO' });                                    // 3
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 5
  Meteor.publish('bundleTypes', function () {                                                                        // 6
    return BundleTypes.find();                                                                                       // 7
  });                                                                                                                // 8
}                                                                                                                    // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"deleted.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/deleted.js                                                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({Deleted:function(){return Deleted}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                     //
var Deleted = new Mongo.Collection('deleted', { idGeneration: 'MONGO' });                                            // 3
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 5
  Meteor.publish('deleted', function () {                                                                            // 6
    return Deleted.find();                                                                                           // 7
  });                                                                                                                // 8
}                                                                                                                    // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"fulfillmentSettings.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/fulfillmentSettings.js                                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({FulfillmentSettings:function(){return FulfillmentSettings}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                     //
var FulfillmentSettings = new Mongo.Collection('fulfillmentSettings', { idGeneration: 'MONGO' });                    // 3
FulfillmentSettings.attachSchema(new SimpleSchema({                                                                  // 4
	deliveryFee: { type: Number, decimal: true },                                                                       // 5
	'timestamps.deliveryFee': { type: Date, optional: true },                                                           // 6
                                                                                                                     //
	freeDeliveryThreshold: { type: Number },                                                                            // 8
	'timestamps.freeDeliveryThreshold': { type: Date, optional: true },                                                 // 9
                                                                                                                     //
	minDays: { type: Number },                                                                                          // 11
	'timestamps.minDays': { type: Date, optional: true },                                                               // 12
                                                                                                                     //
	cutoffTime: { type: Number },                                                                                       // 14
	'timestamps.cutoffTime': { type: Date, optional: true }                                                             // 15
}), { transform: true });                                                                                            // 4
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 18
	Meteor.publish('fulfillmentSettings', function () {                                                                 // 19
		return FulfillmentSettings.find();                                                                                 // 20
	});                                                                                                                 // 21
}                                                                                                                    // 22
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"ingredients.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/ingredients.js                                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({Ingredients:function(){return Ingredients}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                     //
var Ingredients = new Mongo.Collection('ingredients', { idGeneration: 'MONGO' });                                    // 3
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 5
  Meteor.publish('ingredients', function () {                                                                        // 6
    return Ingredients.find();                                                                                       // 7
  });                                                                                                                // 8
}                                                                                                                    // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"locationSurcharges.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/locationSurcharges.js                                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({LocationSurcharges:function(){return LocationSurcharges}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                     //
var LocationSurcharges = new Mongo.Collection('locationSurcharges', { idGeneration: 'MONGO' });                      // 3
LocationSurcharges.attachSchema(new SimpleSchema({                                                                   // 4
  surcharge: { type: Number, decimal: true },                                                                        // 5
  postalPrefix: { type: String }                                                                                     // 6
}), { transform: true });                                                                                            // 4
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 9
  Meteor.publish('locationSurcharges', function () {                                                                 // 10
    return LocationSurcharges.find();                                                                                // 11
  });                                                                                                                // 12
}                                                                                                                    // 13
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"mealPlans.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/mealPlans.js                                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({MealPlans:function(){return MealPlans}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                     //
var MealPlans = new Mongo.Collection('mealPlans', { idGeneration: 'MONGO' });                                        // 3
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 5
  Meteor.publish('mealPlans', function () {                                                                          // 6
    return MealPlans.find();                                                                                         // 7
  });                                                                                                                // 8
}                                                                                                                    // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"mealStock.js":["meteor/mongo","../helpers",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/mealStock.js                                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({MealStock:function(){return MealStock}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var formatDate;module.import('../helpers',{"formatDate":function(v){formatDate=v}});
                                                                                                                     // 2
                                                                                                                     //
var MealStock = new Mongo.Collection('mealStock', { idGeneration: 'MONGO' });                                        // 4
MealStock.attachSchema(new SimpleSchema({                                                                            // 5
	initial: { type: Number, optional: true },                                                                          // 6
	adjustment: { type: Number, optional: true },                                                                       // 7
	restock: { type: Number, optional: true },                                                                          // 8
	output: { type: Number, optional: true },                                                                           // 9
	sales: { type: Number, optional: true },                                                                            // 10
	nonSales: { type: Number, optional: true },                                                                         // 11
	stock: { type: Number, optional: true },                                                                            // 12
                                                                                                                     //
	lastUpdated: { type: Object, optional: true, blackbox: true },                                                      // 14
	meal: { type: Mongo.ObjectID },                                                                                     // 15
	date: { type: String }                                                                                              // 16
}), { transform: true });                                                                                            // 5
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 19
	Meteor.publish('mealStock', function () {                                                                           // 20
		return MealStock.find();                                                                                           // 21
	});                                                                                                                 // 22
                                                                                                                     //
	Meteor.publish('mealStockForDates', function (minDate, maxDate) {                                                   // 24
		return MealStock.find({ date: { $gte: formatDate(minDate), $lte: formatDate(maxDate) } });                         // 25
	});                                                                                                                 // 26
}                                                                                                                    // 27
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"meals.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/meals.js                                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({Meals:function(){return Meals}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                     //
var Meals = new Mongo.Collection('meals', { idGeneration: 'MONGO' });                                                // 3
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 5
  Meteor.publish('meals', function () {                                                                              // 6
    return Meals.find();                                                                                             // 7
  });                                                                                                                // 8
}                                                                                                                    // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"orders.js":["meteor/mongo","../helpers",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/orders.js                                                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({Orders:function(){return Orders}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var formatDate;module.import('../helpers',{"formatDate":function(v){formatDate=v}});
                                                                                                                     //
var Orders = new Mongo.Collection('orders', { idGeneration: 'MONGO' });                                              // 3
                                                                                                                     // 4
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 6
  Meteor.publish('orders', function () {                                                                             // 7
    return Orders.find();                                                                                            // 8
  });                                                                                                                // 9
                                                                                                                     //
  Meteor.publish('ordersByDate', function (minDate, maxDate) {                                                       // 11
    return Orders.find({ 'deliveryOptions.date': { $gte: formatDate(minDate), $lt: formatDate(maxDate) } });         // 12
  });                                                                                                                // 13
                                                                                                                     //
  Meteor.publish('orderById', function (id) {                                                                        // 15
    return Orders.find(id);                                                                                          // 16
  });                                                                                                                // 17
                                                                                                                     //
  Meteor.publish('futureOrders', function (id) {                                                                     // 19
    return Orders.find({ 'deliveryOptions.date': { $gte: formatDate(new Date()) } });                                // 20
  });                                                                                                                // 21
}                                                                                                                    // 22
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"partners.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/partners.js                                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({Partners:function(){return Partners}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
var Partners = new Mongo.Collection('partners', { idGeneration: 'MONGO' });                                          // 2
if (Meteor.isServer) {                                                                                               // 3
  Meteor.publish('partners', function () {                                                                           // 4
    return Partners.find();                                                                                          // 5
  });                                                                                                                // 6
}                                                                                                                    // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"portions.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/portions.js                                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({Portions:function(){return Portions}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                     //
var Portions = new Mongo.Collection('portions', { idGeneration: 'MONGO' });                                          // 3
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 5
  Meteor.publish('portions', function () {                                                                           // 6
    return Portions.find();                                                                                          // 7
  });                                                                                                                // 8
}                                                                                                                    // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"promotions.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/promotions.js                                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({Promotions:function(){return Promotions}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                     //
var Promotions = new Mongo.Collection('promotions', { idGeneration: 'MONGO' });                                      // 3
Promotions.attachSchema(new SimpleSchema({                                                                           // 4
	name: { type: String },                                                                                             // 5
	deliveryFee: { type: Boolean, defaultValue: false },                                                                // 6
	start: { type: String },                                                                                            // 7
	end: { type: String },                                                                                              // 8
	fulfillmentStart: { type: String, optional: true },                                                                 // 9
	fulfillmentEnd: { type: String, optional: true },                                                                   // 10
	discount: { type: Number, optional: true },                                                                         // 11
	overridePrice: { type: Number, optional: true, decimal: true },                                                     // 12
	type: { type: String },                                                                                             // 13
	promoCode: { type: String },                                                                                        // 14
	sku: { type: String },                                                                                              // 15
	usageLimit: { type: Number, optional: true },                                                                       // 16
                                                                                                                     //
	premiumAllowance: { type: Number, optional: true },                                                                 // 18
	premiumCap: { type: Number, optional: true },                                                                       // 19
                                                                                                                     //
	mealPlan: { type: SimpleSchema.RegEx.Id, optional: true, defaultValue: null },                                      // 21
	portion: { type: SimpleSchema.RegEx.Id, optional: true, defaultValue: null },                                       // 22
	bundleType: { type: SimpleSchema.RegEx.Id, optional: true, defaultValue: null }                                     // 23
}), { transform: true });                                                                                            // 4
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 26
	Meteor.publish('promotions', function () {                                                                          // 27
		return Promotions.find();                                                                                          // 28
	});                                                                                                                 // 29
}                                                                                                                    // 30
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"sides.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/sides.js                                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({Sides:function(){return Sides}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                     //
var Sides = new Mongo.Collection('sides', { idGeneration: 'MONGO' });                                                // 3
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 5
  Meteor.publish('sides', function () {                                                                              // 6
    return Sides.find();                                                                                             // 7
  });                                                                                                                // 8
}                                                                                                                    // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"stockCache.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/stockCache.js                                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({StockCache:function(){return StockCache}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
var StockCache = new Mongo.Collection('stockCache', { idGeneration: 'MONGO' });                                      // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"surveys.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/surveys.js                                                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({Surveys:function(){return Surveys}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
var Surveys = new Mongo.Collection('surveys', { idGeneration: 'MONGO' });                                            // 2
if (Meteor.isServer) {                                                                                               // 3
  Meteor.publish('surveys', function () {                                                                            // 4
    return Surveys.find();                                                                                           // 5
  });                                                                                                                // 6
}                                                                                                                    // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"timeSlots.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/timeSlots.js                                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({TimeSlots:function(){return TimeSlots}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                     //
var TimeSlots = new Mongo.Collection('timeSlots', { idGeneration: 'MONGO' });                                        // 3
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 5
  Meteor.publish('timeSlots', function () {                                                                          // 6
    return TimeSlots.find();                                                                                         // 7
  });                                                                                                                // 8
}                                                                                                                    // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"users.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/users.js                                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});                                              // 1
                                                                                                                     //
// export const Users = new Mongo.Collection('users', {idGeneration: 'MONGO'});                                      //
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 5
  Meteor.publish('users', function () {                                                                              // 6
    return Meteor.users.find();                                                                                      // 7
  });                                                                                                                // 8
}                                                                                                                    // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"StockCalculator.js":["babel-runtime/helpers/classCallCheck","./date","./api/mealStock","./helpers",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/StockCalculator.js                                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({StockCalculator:function(){return StockCalculator}});var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var addDays,formatDate,today;module.import('./date',{"addDays":function(v){addDays=v},"formatDate":function(v){formatDate=v},"today":function(v){today=v}});var MealStock;module.import('./api/mealStock',{"MealStock":function(v){MealStock=v}});var mealSales;module.import('./helpers',{"mealSales":function(v){mealSales=v}});
                                                                                                                     // 1
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     //
var StockCalculator = function () {                                                                                  // 5
  StockCalculator.calculate = function calculate(initial, date, mealId, api) {                                       // 5
    var mealStock = api.findMealStock(mealId, date) || {}; //MealStock.findOne({meal:mealId, date:date}) || {};      // 7
                                                                                                                     //
    var sales = mealSales(mealId, date);                                                                             // 9
    var output = sales + (mealStock.nonSales || 0);                                                                  // 10
    var stock = initial + (mealStock.adjustment || 0) - output + (mealStock.restock || 0);                           // 11
                                                                                                                     //
    return {                                                                                                         // 13
      initial: initial,                                                                                              // 14
      adjustment: mealStock.adjustment,                                                                              // 15
      sales: sales,                                                                                                  // 16
      nonSales: mealStock.nonSales || 0,                                                                             // 17
      output: output,                                                                                                // 18
      restock: mealStock.restock || 0,                                                                               // 19
      stock: stock                                                                                                   // 20
    };                                                                                                               // 13
  };                                                                                                                 // 22
                                                                                                                     //
  function StockCalculator(mealId) {                                                                                 // 24
    _classCallCheck(this, StockCalculator);                                                                          // 24
                                                                                                                     //
    this.today = formatDate(new Date());                                                                             // 25
    this.firstDate = '2016-08-29';                                                                                   // 26
    this.mealId = mealId;                                                                                            // 27
    this._calcCache = {};                                                                                            // 28
    this._mealStockCache = {};                                                                                       // 29
    this._cache = {};                                                                                                // 30
  }                                                                                                                  // 31
                                                                                                                     //
  StockCalculator.prototype.cachedValues = function cachedValues(date) {                                             // 5
    return this._calcCache[date];                                                                                    // 34
  };                                                                                                                 // 35
                                                                                                                     //
  StockCalculator.prototype.initCache = function initCache(date) {};                                                 // 5
                                                                                                                     //
  StockCalculator.prototype.findMealStock = function findMealStock(date) {                                           // 5
    if (!this._mealStockCache[date]) {                                                                               // 42
      this._mealStockCache[date] = MealStock.findOne({ meal: this.mealId, date: date });                             // 43
    }                                                                                                                // 44
    return this._mealStockCache[date];                                                                               // 45
  };                                                                                                                 // 46
                                                                                                                     //
  StockCalculator.prototype.forDate = function forDate(date) {                                                       // 5
    date = typeof date == 'string' ? date : formatDate(date);                                                        // 49
                                                                                                                     //
    if (!this._cache[date]) {                                                                                        // 51
      this._cache[date] = this._forDate(date);                                                                       // 52
    }                                                                                                                // 53
                                                                                                                     //
    return this._cache[date];                                                                                        // 55
  };                                                                                                                 // 56
                                                                                                                     //
  StockCalculator.prototype._forDate = function _forDate(date) {                                                     // 5
    var _this = this;                                                                                                // 58
                                                                                                                     //
    if (date < formatDate(today())) {                                                                                // 59
      return this.findMealStock(date);                                                                               // 60
    }                                                                                                                // 61
    var firstDate = formatDate(today());                                                                             // 62
    var currentDate = firstDate;                                                                                     // 63
    var prevDate;                                                                                                    // 64
    while (currentDate <= date) {                                                                                    // 65
      if (!this._calcCache[currentDate]) {                                                                           // 66
        var mealStock = this.findMealStock(currentDate) || {};                                                       // 67
        var initial = currentDate == firstDate ? mealStock.initial : this._calcCache[prevDate].stock || 0;           // 68
        this._calcCache[currentDate] = StockCalculator.calculate(initial, currentDate, this.mealId, {                // 69
          findMealStock: function findMealStock(mealId, date) {                                                      // 70
            return _this.findMealStock(date);                                                                        // 70
          }                                                                                                          // 70
        });                                                                                                          // 69
      }                                                                                                              // 72
      prevDate = currentDate;                                                                                        // 73
      currentDate = formatDate(addDays(currentDate, 1));                                                             // 74
    }                                                                                                                // 75
    return this._calcCache[date];                                                                                    // 76
  };                                                                                                                 // 77
                                                                                                                     //
  return StockCalculator;                                                                                            // 5
}();                                                                                                                 // 5
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"date.js":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/date.js                                                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
function today() {                                                                                                   // 1
    var now = new Date();                                                                                            //
    return createDay(now.getFullYear(), now.getMonth(), now.getDate());                                              //
}                                                                                                                    // 4
exports.today = today;                                                                                               // 1
function createDay(year, month, day) {                                                                               // 6
    return new Date(year, month, day, 0, 0, 0);                                                                      //
}                                                                                                                    // 8
exports.createDay = createDay;                                                                                       // 6
function addDays(date, days) {                                                                                       // 9
    date = convertToDate(date);                                                                                      //
    return createDay(date.getFullYear(), date.getMonth(), date.getDate() + days);                                    //
}                                                                                                                    // 12
exports.addDays = addDays;                                                                                           // 9
function firstDayOfMonth(month) {                                                                                    // 13
    return createDay(month.getFullYear(), month.getMonth(), 1);                                                      //
}                                                                                                                    // 15
exports.firstDayOfMonth = firstDayOfMonth;                                                                           // 13
function calendarDaysForMonth(month, square) {                                                                       // 16
    if (square === void 0) { square = true; }                                                                        //
    var days = [];                                                                                                   //
    var firstDay = firstDayOfMonth(month);                                                                           //
    if (square) {                                                                                                    //
        for (var i = 0; i < 7 - (7 - firstDay.getDay()); ++i) {                                                      //
            days.unshift(addDays(firstDay, -(i + 1)));                                                               //
        }                                                                                                            //
    }                                                                                                                //
    var day = firstDay;                                                                                              //
    while (day.getMonth() == month.getMonth() || day.getMonth() > month.getMonth() && days.length % 7 && square) {   //
        days.push(day);                                                                                              //
        day = addDays(day, 1);                                                                                       //
    }                                                                                                                //
    return days;                                                                                                     //
}                                                                                                                    // 30
exports.calendarDaysForMonth = calendarDaysForMonth;                                                                 // 16
function convertToDate(date) {                                                                                       // 32
    if (typeof date == 'string') {                                                                                   //
        return new Date(Date.parse(date + ' 00:00'));                                                                //
    }                                                                                                                //
    else {                                                                                                           //
        return date;                                                                                                 //
    }                                                                                                                //
}                                                                                                                    // 39
exports.convertToDate = convertToDate;                                                                               // 32
function formatDate(date) {                                                                                          // 41
    if (date) {                                                                                                      //
        return date.getFullYear() + '-' + _.padStart(date.getMonth() + 1, 2, '0') + '-' + _.padStart(date.getDate(), 2, '0');
    }                                                                                                                //
}                                                                                                                    // 45
exports.formatDate = formatDate;                                                                                     // 41
function weeksForMonth(month) {                                                                                      // 47
    var days = calendarDaysForMonth(month);                                                                          //
    var weeks = [];                                                                                                  //
    for (var i = 0; i < days.length / 7; ++i) {                                                                      //
        weeks.push(days.slice(i * 7, i * 7 + 7));                                                                    //
    }                                                                                                                //
    return weeks;                                                                                                    //
}                                                                                                                    // 54
exports.weeksForMonth = weeksForMonth;                                                                               // 47
//# sourceMappingURL=date.js.map                                                                                     //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"helpers.js":["./api/orders",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/helpers.js                                                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({formatDate:function(){return formatDate},amPm:function(){return amPm},timeDisplay:function(){return timeDisplay},mealSales:function(){return mealSales},monthName:function(){return monthName}});var Orders;module.import('./api/orders',{"Orders":function(v){Orders=v}});_ = lodash;
                                                                                                                     //
                                                                                                                     // 3
                                                                                                                     //
function formatDate(date) {                                                                                          // 5
  if (date) {                                                                                                        // 6
    return date.getFullYear() + '-' + _.padStart(date.getMonth() + 1, 2, '0') + '-' + _.padStart(date.getDate(), 2, '0');
  }                                                                                                                  // 8
}                                                                                                                    // 9
                                                                                                                     //
function amPm(time) {                                                                                                // 11
  var appendSuffix = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];                      // 11
                                                                                                                     //
  var date = new Date(Date.parse('Jan 1 ' + time));                                                                  // 12
  var hours = date.getHours();                                                                                       // 13
  var suffix = hours >= 12 ? "pm" : "am";                                                                            // 14
  hours = (hours + 11) % 12 + 1;                                                                                     // 15
                                                                                                                     //
  return hours + (appendSuffix ? '' + suffix : '');                                                                  // 17
}                                                                                                                    // 18
                                                                                                                     //
function timeDisplay(time) {                                                                                         // 20
  if (time) {                                                                                                        // 21
    return amPm(time.start, false) + '-' + amPm(time.end);                                                           // 22
  }                                                                                                                  // 23
}                                                                                                                    // 24
                                                                                                                     //
function mealSales(mealId, date) {                                                                                   // 26
  var orders = Orders.find({ 'deliveryOptions.date': date, state: 'completed', bundles: { $elemMatch: { mealSelections: { $elemMatch: { 'meal._id': mealId } } } } }).fetch();
  var sales = 0;                                                                                                     // 28
  for (var _iterator = orders, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;                                                                                                        // 29
                                                                                                                     //
    if (_isArray) {                                                                                                  // 29
      if (_i >= _iterator.length) break;                                                                             // 29
      _ref = _iterator[_i++];                                                                                        // 29
    } else {                                                                                                         // 29
      _i = _iterator.next();                                                                                         // 29
      if (_i.done) break;                                                                                            // 29
      _ref = _i.value;                                                                                               // 29
    }                                                                                                                // 29
                                                                                                                     //
    var order = _ref;                                                                                                // 29
                                                                                                                     //
    for (var _iterator2 = order.bundles, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;                                                                                                     // 30
                                                                                                                     //
      if (_isArray2) {                                                                                               // 30
        if (_i2 >= _iterator2.length) break;                                                                         // 30
        _ref2 = _iterator2[_i2++];                                                                                   // 30
      } else {                                                                                                       // 30
        _i2 = _iterator2.next();                                                                                     // 30
        if (_i2.done) break;                                                                                         // 30
        _ref2 = _i2.value;                                                                                           // 30
      }                                                                                                              // 30
                                                                                                                     //
      var bundle = _ref2;                                                                                            // 30
                                                                                                                     //
      for (var _iterator3 = bundle.mealSelections, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;                                                                                                   // 31
                                                                                                                     //
        if (_isArray3) {                                                                                             // 31
          if (_i3 >= _iterator3.length) break;                                                                       // 31
          _ref3 = _iterator3[_i3++];                                                                                 // 31
        } else {                                                                                                     // 31
          _i3 = _iterator3.next();                                                                                   // 31
          if (_i3.done) break;                                                                                       // 31
          _ref3 = _i3.value;                                                                                         // 31
        }                                                                                                            // 31
                                                                                                                     //
        var mealSelection = _ref3;                                                                                   // 31
                                                                                                                     //
        if (mealSelection.meal._id._str == mealId._str) {                                                            // 32
          sales += mealSelection.quantity;                                                                           // 33
          break;                                                                                                     // 34
        }                                                                                                            // 35
      }                                                                                                              // 36
    }                                                                                                                // 37
  }                                                                                                                  // 38
  return sales;                                                                                                      // 39
}                                                                                                                    // 40
                                                                                                                     //
function monthName(month) {                                                                                          // 43
  switch (month + 1) {                                                                                               // 44
    case 1:                                                                                                          // 45
      return 'January';                                                                                              // 45
    case 2:                                                                                                          // 46
      return 'February';                                                                                             // 46
    case 3:                                                                                                          // 47
      return 'March';                                                                                                // 47
    case 4:                                                                                                          // 48
      return 'April';                                                                                                // 48
    case 5:                                                                                                          // 49
      return 'May';                                                                                                  // 49
    case 6:                                                                                                          // 50
      return 'June';                                                                                                 // 50
    case 7:                                                                                                          // 51
      return 'July';                                                                                                 // 51
    case 8:                                                                                                          // 52
      return 'August';                                                                                               // 52
    case 9:                                                                                                          // 53
      return 'September';                                                                                            // 53
    case 10:                                                                                                         // 54
      return 'October';                                                                                              // 54
    case 11:                                                                                                         // 55
      return 'November';                                                                                             // 55
    case 12:                                                                                                         // 56
      return 'December';                                                                                             // 56
  }                                                                                                                  // 44
}                                                                                                                    // 58
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"server":{"main.js":["meteor/meteor","../imports/api/users","../imports/helpers","../imports/date","../imports/StockCalculator","meteor/http","../imports/api/orders","../imports/api/portions","../imports/api/mealPlans","../imports/api/bundleTypes","../imports/api/meals","../imports/api/ingredients","../imports/api/timeSlots","../imports/api/blocks","../imports/api/locationSurcharges","../imports/api/fulfillmentSettings","../imports/api/promotions","../imports/api/mealStock","../imports/api/sides","../imports/api/surveys","../imports/api/addOns","../imports/api/partners","../imports/api/anomalyTriggers","../imports/api/deleted","../imports/api/stockCache",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// server/main.js                                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});module.import('../imports/api/users');var formatDate,mealSales;module.import('../imports/helpers',{"formatDate":function(v){formatDate=v},"mealSales":function(v){mealSales=v}});var addDays,today;module.import('../imports/date',{"addDays":function(v){addDays=v},"today":function(v){today=v}});var StockCalculator;module.import('../imports/StockCalculator',{"StockCalculator":function(v){StockCalculator=v}});var HTTP;module.import('meteor/http',{"HTTP":function(v){HTTP=v}});var Orders;module.import('../imports/api/orders',{"Orders":function(v){Orders=v}});var Portions;module.import('../imports/api/portions',{"Portions":function(v){Portions=v}});var MealPlans;module.import('../imports/api/mealPlans',{"MealPlans":function(v){MealPlans=v}});var BundleTypes;module.import('../imports/api/bundleTypes',{"BundleTypes":function(v){BundleTypes=v}});var Meals;module.import('../imports/api/meals',{"Meals":function(v){Meals=v}});var Ingredients;module.import('../imports/api/ingredients',{"Ingredients":function(v){Ingredients=v}});var TimeSlots;module.import('../imports/api/timeSlots',{"TimeSlots":function(v){TimeSlots=v}});var Blocks;module.import('../imports/api/blocks',{"Blocks":function(v){Blocks=v}});var LocationSurcharges;module.import('../imports/api/locationSurcharges',{"LocationSurcharges":function(v){LocationSurcharges=v}});var FulfillmentSettings;module.import('../imports/api/fulfillmentSettings',{"FulfillmentSettings":function(v){FulfillmentSettings=v}});var Promotions;module.import('../imports/api/promotions',{"Promotions":function(v){Promotions=v}});var MealStock;module.import('../imports/api/mealStock',{"MealStock":function(v){MealStock=v}});var Sides;module.import('../imports/api/sides',{"Sides":function(v){Sides=v}});var Surveys;module.import('../imports/api/surveys',{"Surveys":function(v){Surveys=v}});var AddOns;module.import('../imports/api/addOns',{"AddOns":function(v){AddOns=v}});var Partners;module.import('../imports/api/partners',{"Partners":function(v){Partners=v}});var AnomalyTriggers;module.import('../imports/api/anomalyTriggers',{"AnomalyTriggers":function(v){AnomalyTriggers=v}});var Deleted;module.import('../imports/api/deleted',{"Deleted":function(v){Deleted=v}});var StockCache;module.import('../imports/api/stockCache',{"StockCache":function(v){StockCache=v}});
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     // 4
                                                                                                                     // 5
                                                                                                                     // 6
                                                                                                                     // 7
                                                                                                                     // 8
                                                                                                                     // 9
                                                                                                                     // 10
                                                                                                                     // 11
                                                                                                                     // 12
                                                                                                                     // 13
                                                                                                                     // 14
                                                                                                                     // 15
                                                                                                                     // 16
                                                                                                                     // 17
                                                                                                                     // 18
                                                                                                                     // 19
                                                                                                                     // 20
                                                                                                                     // 21
                                                                                                                     // 22
                                                                                                                     // 23
                                                                                                                     // 24
                                                                                                                     // 25
                                                                                                                     //
_ = lodash;                                                                                                          // 27
                                                                                                                     //
var api = new Restivus({                                                                                             // 29
	// useDefaultAuth: true,                                                                                            //
	// auth: {                                                                                                          //
	// 	token: 'auth.apiKey'                                                                                            //
	// }                                                                                                                //
});                                                                                                                  // 29
                                                                                                                     //
// api.addRoute('compute-stock', {                                                                                   //
// 	get: function() {                                                                                                //
// 		computeStock(new Date(Date.parse(this.queryParams.date)));                                                      //
// 		return '';                                                                                                      //
// 	}                                                                                                                //
// });                                                                                                               //
                                                                                                                     //
api.addRoute('export-inventory-status', {                                                                            // 43
	get: function get() {                                                                                               // 44
		console.log(this.queryParams);                                                                                     // 45
		var filter = this.queryParams.filter;                                                                              // 46
		var query = {};                                                                                                    // 47
		if (filter) {                                                                                                      // 48
			var mealPlans = MealPlans.find({ name: new RegExp(filter, 'i') }).fetch().map(function (mealPlan) {               // 49
				return mealPlan._id;                                                                                             // 49
			});                                                                                                               // 49
			var portions = Portions.find({ name: new RegExp(filter, 'i') }).fetch().map(function (portion) {                  // 50
				return portion._id;                                                                                              // 50
			});                                                                                                               // 50
			query.$or = [{ name: new RegExp(filter, 'i') }, { sku: new RegExp(filter, 'i') }, { mealPlan: { $in: mealPlans } }, { portion: { $in: portions } }];
		}                                                                                                                  // 52
		var meals = Meals.find(query).fetch();                                                                             // 53
		var rows = [];                                                                                                     // 54
		for (var _iterator = meals, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref;                                                                                                         // 55
                                                                                                                     //
			if (_isArray) {                                                                                                   // 55
				if (_i >= _iterator.length) break;                                                                               // 55
				_ref = _iterator[_i++];                                                                                          // 55
			} else {                                                                                                          // 55
				_i = _iterator.next();                                                                                           // 55
				if (_i.done) break;                                                                                              // 55
				_ref = _i.value;                                                                                                 // 55
			}                                                                                                                 // 55
                                                                                                                     //
			var meal = _ref;                                                                                                  // 55
                                                                                                                     //
			var stockCalculator = new StockCalculator(meal._id);                                                              // 56
			var values = stockCalculator.forDate(this.queryParams.date);                                                      // 57
			rows.push({                                                                                                       // 58
				'Product Name': meal.name,                                                                                       // 59
				'Meal Plan': MealPlans.findOne(meal.mealPlan).name,                                                              // 60
				'Portion': Portions.findOne(meal.portion).name,                                                                  // 61
				'SKU': meal.sku,                                                                                                 // 62
				'Initial': values.initial,                                                                                       // 63
				'Sales': values.sales,                                                                                           // 64
				'Non-sales': values.nonSales,                                                                                    // 65
				'Output': values.output,                                                                                         // 66
				'Restock': values.restock,                                                                                       // 67
				'Stock': values.stock                                                                                            // 68
			});                                                                                                               // 58
		}                                                                                                                  // 70
		this.response.setHeader('Content-type', 'text/csv');                                                               // 71
		this.response.setHeader('Content-Disposition', 'attachment; filename=inventory-status.' + this.queryParams.date + '.csv');
		this.response.write('"' + _.keys(rows[0] || {}).join('","') + '"\n');                                              // 73
		for (var _iterator2 = rows, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
			var _ref2;                                                                                                        // 74
                                                                                                                     //
			if (_isArray2) {                                                                                                  // 74
				if (_i2 >= _iterator2.length) break;                                                                             // 74
				_ref2 = _iterator2[_i2++];                                                                                       // 74
			} else {                                                                                                          // 74
				_i2 = _iterator2.next();                                                                                         // 74
				if (_i2.done) break;                                                                                             // 74
				_ref2 = _i2.value;                                                                                               // 74
			}                                                                                                                 // 74
                                                                                                                     //
			var row = _ref2;                                                                                                  // 74
                                                                                                                     //
			this.response.write('"' + _.values(row).join('","') + '"\n');                                                     // 75
		}                                                                                                                  // 76
		this.done();                                                                                                       // 77
	}                                                                                                                   // 78
});                                                                                                                  // 43
                                                                                                                     //
api.addRoute('migrate-meal-stock', {                                                                                 // 81
	get: function get() {                                                                                               // 82
		var mealStocks = MealStock.find({ date: '2016-08-29', initial: null }).fetch();                                    // 83
		for (var _iterator3 = mealStocks, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
			var _ref3;                                                                                                        // 84
                                                                                                                     //
			if (_isArray3) {                                                                                                  // 84
				if (_i3 >= _iterator3.length) break;                                                                             // 84
				_ref3 = _iterator3[_i3++];                                                                                       // 84
			} else {                                                                                                          // 84
				_i3 = _iterator3.next();                                                                                         // 84
				if (_i3.done) break;                                                                                             // 84
				_ref3 = _i3.value;                                                                                               // 84
			}                                                                                                                 // 84
                                                                                                                     //
			var mealStock = _ref3;                                                                                            // 84
                                                                                                                     //
			MealStock.update(mealStock._id, { $set: { initial: mealStock.stock } });                                          // 85
		}                                                                                                                  // 86
	}                                                                                                                   // 87
});                                                                                                                  // 81
                                                                                                                     //
function recordStock() {                                                                                             // 90
	var _today = formatDate(today());                                                                                   // 91
	var yesterday = formatDate(addDays(today(), -1));                                                                   // 92
	var meals = Meals.find().fetch();                                                                                   // 93
	for (var _iterator4 = meals, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
		var _ref4;                                                                                                         // 94
                                                                                                                     //
		if (_isArray4) {                                                                                                   // 94
			if (_i4 >= _iterator4.length) break;                                                                              // 94
			_ref4 = _iterator4[_i4++];                                                                                        // 94
		} else {                                                                                                           // 94
			_i4 = _iterator4.next();                                                                                          // 94
			if (_i4.done) break;                                                                                              // 94
			_ref4 = _i4.value;                                                                                                // 94
		}                                                                                                                  // 94
                                                                                                                     //
		var meal = _ref4;                                                                                                  // 94
                                                                                                                     //
		// console.log(meal._id._str, yesterday);                                                                          //
		var yesterdaysStock = MealStock.findOne({ date: yesterday, meal: meal._id });                                      // 96
		var values = StockCalculator.calculate(yesterdaysStock.initial, yesterday, meal._id, {                             // 97
			findMealStock: function findMealStock(mealId, date) {                                                             // 98
				return MealStock.findOne({ meal: mealId, date: date });                                                          // 99
			}                                                                                                                 // 100
		});                                                                                                                // 97
                                                                                                                     //
		// console.log(values);                                                                                            //
		MealStock.update(yesterdaysStock._id, { $set: values });                                                           // 104
                                                                                                                     //
		if (!MealStock.findOne({ date: _today, meal: meal._id })) {                                                        // 106
			MealStock.insert(_.assign({ date: _today, meal: meal._id }, { initial: values.stock }));                          // 107
		} else {                                                                                                           // 108
			MealStock.update({ date: _today, meal: meal._id }, { $set: { initial: values.stock } });                          // 110
		}                                                                                                                  // 111
	}                                                                                                                   // 112
}                                                                                                                    // 113
                                                                                                                     //
api.addRoute('record-stock', {                                                                                       // 115
	get: function get() {                                                                                               // 116
		recordStock();                                                                                                     // 117
		return '';                                                                                                         // 118
	}                                                                                                                   // 119
});                                                                                                                  // 115
                                                                                                                     //
api.addRoute('generate-stock-cache', {                                                                               // 122
	get: function get() {                                                                                               // 123
		var meals = Meals.find().fetch();                                                                                  // 124
		var firstDate = '2016-08-29';                                                                                      // 125
		for (var _iterator5 = meals, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
			var _ref5;                                                                                                        // 126
                                                                                                                     //
			if (_isArray5) {                                                                                                  // 126
				if (_i5 >= _iterator5.length) break;                                                                             // 126
				_ref5 = _iterator5[_i5++];                                                                                       // 126
			} else {                                                                                                          // 126
				_i5 = _iterator5.next();                                                                                         // 126
				if (_i5.done) break;                                                                                             // 126
				_ref5 = _i5.value;                                                                                               // 126
			}                                                                                                                 // 126
                                                                                                                     //
			var meal = _ref5;                                                                                                 // 126
                                                                                                                     //
			var date = firstDate;                                                                                             // 127
			var lastDate = formatDate(today());                                                                               // 128
			var prevDate, prevValues;                                                                                         // 129
			do {                                                                                                              // 130
				var values = StockCalculator.calculate(date == firstDate ? (MealStock.findOne({ meal: meal._id, date: date }) || { initial: 0 }).initial : prevValues.stock, date, meal._id, {
					findMealStock: function findMealStock(mealId, date) {                                                           // 132
						return MealStock.findOne({ meal: mealId, date: date });                                                        // 133
					}                                                                                                               // 134
				});                                                                                                              // 131
				if (!MealStock.findOne({ date: date, meal: meal._id })) {                                                        // 136
					MealStock.insert(_.assign({ date: date, meal: meal._id }, values));                                             // 137
				} else {                                                                                                         // 138
					MealStock.update({ date: date, meal: meal._id }, { $set: values });                                             // 140
				}                                                                                                                // 141
				prevDate = date;                                                                                                 // 142
				prevValues = values;                                                                                             // 143
				date = formatDate(addDays(date, 1));                                                                             // 144
			} while (date != lastDate);                                                                                       // 145
		}                                                                                                                  // 146
		return '';                                                                                                         // 147
	}                                                                                                                   // 148
});                                                                                                                  // 122
                                                                                                                     //
api.addRoute('stock', {                                                                                              // 151
	get: function get() {                                                                                               // 152
		var meals = Meals.find().fetch();                                                                                  // 153
		var yesterday = addDays(today(), -1);                                                                              // 154
		var stockCache = StockCache.findOne({});                                                                           // 155
		var yesterdaysStock;                                                                                               // 156
		if (!stockCache || stockCache.timestamp.valueOf() != yesterday.valueOf()) {                                        // 157
			yesterdaysStock = {};                                                                                             // 158
			for (var _iterator6 = meals, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
				var _ref6;                                                                                                       // 159
                                                                                                                     //
				if (_isArray6) {                                                                                                 // 159
					if (_i6 >= _iterator6.length) break;                                                                            // 159
					_ref6 = _iterator6[_i6++];                                                                                      // 159
				} else {                                                                                                         // 159
					_i6 = _iterator6.next();                                                                                        // 159
					if (_i6.done) break;                                                                                            // 159
					_ref6 = _i6.value;                                                                                              // 159
				}                                                                                                                // 159
                                                                                                                     //
				var meal = _ref6;                                                                                                // 159
                                                                                                                     //
				var stockCalculator = new StockCalculator(meal._id);                                                             // 160
				yesterdaysStock[meal._id._str] = (stockCalculator.forDate(yesterday) || { stock: 0 }).stock;                     // 161
			}                                                                                                                 // 162
			if (stockCache) {                                                                                                 // 163
				StockCache.update({ _id: stockCache._id }, { $set: { timestamp: yesterday, stock: yesterdaysStock } });          // 164
			} else {                                                                                                          // 165
				StockCache.insert({ timestamp: yesterday, stock: yesterdaysStock });                                             // 167
			}                                                                                                                 // 168
		} else {                                                                                                           // 169
			yesterdaysStock = stockCache.stock;                                                                               // 171
		}                                                                                                                  // 172
		var stock = {};                                                                                                    // 173
		for (var _iterator7 = meals, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
			var _ref7;                                                                                                        // 174
                                                                                                                     //
			if (_isArray7) {                                                                                                  // 174
				if (_i7 >= _iterator7.length) break;                                                                             // 174
				_ref7 = _iterator7[_i7++];                                                                                       // 174
			} else {                                                                                                          // 174
				_i7 = _iterator7.next();                                                                                         // 174
				if (_i7.done) break;                                                                                             // 174
				_ref7 = _i7.value;                                                                                               // 174
			}                                                                                                                 // 174
                                                                                                                     //
			var _meal = _ref7;                                                                                                // 174
                                                                                                                     //
			stock[_meal._id._str] = StockCalculator.calculate(yesterdaysStock[_meal._id._str], formatDate(today()), _meal._id, {
				findMealStock: function findMealStock(mealId, date) {                                                            // 176
					return MealStock.findOne({ meal: mealId, date: date });                                                         // 177
				}                                                                                                                // 178
			}).stock;                                                                                                         // 175
		}                                                                                                                  // 180
		return stock;                                                                                                      // 181
	}                                                                                                                   // 182
});                                                                                                                  // 151
                                                                                                                     //
function computeStock(date) {                                                                                        // 185
	var previousDay = formatDate(addDays(date, -1));                                                                    // 186
                                                                                                                     //
	var mealStocks = MealStock.find({ date: previousDay }).fetch();                                                     // 188
                                                                                                                     //
	for (var _iterator8 = mealStocks, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
		var _ref8;                                                                                                         // 190
                                                                                                                     //
		if (_isArray8) {                                                                                                   // 190
			if (_i8 >= _iterator8.length) break;                                                                              // 190
			_ref8 = _iterator8[_i8++];                                                                                        // 190
		} else {                                                                                                           // 190
			_i8 = _iterator8.next();                                                                                          // 190
			if (_i8.done) break;                                                                                              // 190
			_ref8 = _i8.value;                                                                                                // 190
		}                                                                                                                  // 190
                                                                                                                     //
		var mealStock = _ref8;                                                                                             // 190
                                                                                                                     //
		var sales = mealSales(mealStock.meal, previousDay);                                                                // 191
		var output = sales + (mealStock.nonSales || 0);                                                                    // 192
		var final = mealStock.stock - output + (mealStock.restock || 0);                                                   // 193
		MealStock.update({                                                                                                 // 194
			meal: mealStock.meal,                                                                                             // 195
			date: formatDate(date)                                                                                            // 196
		}, { $set: {                                                                                                       // 194
				stock: final                                                                                                     // 198
			} }, { upsert: true });                                                                                           // 197
	}                                                                                                                   // 200
}                                                                                                                    // 201
                                                                                                                     //
Meteor.startup(function () {});                                                                                      // 203
                                                                                                                     //
SyncedCron.add({                                                                                                     // 206
	name: 'Update stock for day.',                                                                                      // 207
	schedule: function schedule(parser) {                                                                               // 208
		return parser.cron('0 0 */1 * *');                                                                                 // 209
	},                                                                                                                  // 210
	job: function job() {                                                                                               // 211
		recordStock();                                                                                                     // 212
	}                                                                                                                   // 213
});                                                                                                                  // 206
SyncedCron.start();                                                                                                  // 215
                                                                                                                     //
Meteor.methods({                                                                                                     // 217
	uploadImage: function uploadImage(args) {                                                                           // 218
		var result = HTTP.post(Meteor.settings['public'].imageServerUrl + '/upload.php?type=' + (args.type || 'raster'), {
			content: args.data                                                                                                // 220
		});                                                                                                                // 219
		console.log(result);                                                                                               // 222
		if (result.data.result == 'success') {                                                                             // 223
			return result.data;                                                                                               // 224
			// Meteor.users.update({_id:Meteor.userId()}, {$set:{'profile.picture':result.data.url}});                        //
		}                                                                                                                  // 226
	},                                                                                                                  // 227
	clearStockCache: function clearStockCache() {                                                                       // 228
		StockCache.remove({});                                                                                             // 229
	},                                                                                                                  // 230
	sendResetPasswordEmail: function sendResetPasswordEmail(userId) {                                                   // 231
		Accounts.sendResetPasswordEmail(userId);                                                                           // 232
	}                                                                                                                   // 233
});                                                                                                                  // 217
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".ts"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
