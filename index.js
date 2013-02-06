
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
  this.bindings = {};
}
