/**
 * route-manager
 * Route manager component
 * 
 * @copyright 2013 Enrico Marino and Federico Spini
 * @license MIT
 */

/**
 * Expose `RouteManager`
 */

module.exports = RouteManager;

/**
 * @constructor RouteManager
 * 
 * @param {Router} router router
 * @param {Object} object object
 * @api public
 */

function RouteManager (router, object) {
  if (!(this instanceof RouteManager)) {
    return new RouteManager(router, object);
  }

  this.router = router;
  this.object = object;
}

/**
 * bind
 * Bind `route` to  `method`.
 *
 * @example
 *    events.bind('#page/:page', 'onpage')
 *
 * @param {String} event `event` name
 * @param {String} method `method` name
 * @return {RouteManager} this for chaining
 * @api public
 */

RouteManager.prototype.bind = function (route, method) {
  if (toString.call(route) === '[object Object]') {
    return this.bind_all(event);
  }
  
  var router = this.router;
  var object = this.object;
  var fn = object[method].bind(object);

  router.route(route, fn);

  return this;
};

/**
 * bind_all
 * Bind `route` to  `method`.
 * for each pair `route`/`method` in `obj`
 *
 * @param {Object} obj
 *   @param {String} event `event` name
 *   @param {String} method `method` name
 * @return {RouteManager} this for chaining
 * @api public
 */

RouteManager.prototype.bind_all = function (obj) {
  Object.keys(obj).forEach(function(key) {
    this.bind(key, obj[key]);
  }, this);
  return this;
};
