/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 1.5.0
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.swagger_petstore) {
      root.swagger_petstore = {};
    }
    root.swagger_petstore.swagger_petstore = factory(root.swagger_petstore.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The Order model module.
   * @module Order/Order
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Order</code>.
   * @alias module:Order/Order
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Order/Order} obj Optional instance to populate.
   * @return {module:Order/Order} The populated <code>Order</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id']
      }
      if (data.hasOwnProperty('petid')) {
        obj['petid']
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity']
      }
      if (data.hasOwnProperty('shipdate')) {
        obj['shipdate']
      }
      if (data.hasOwnProperty('status')) {
        obj['status']
      }
      if (data.hasOwnProperty('complete')) {
        obj['complete']
      }
    }
    return obj;
  }
  /**
   * @member {} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {} petid
   */
  exports.prototype['petid'] = undefined;
  /**
   * @member {} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {} shipdate
   */
  exports.prototype['shipdate'] = undefined;
  /**
   * Order Status
   * @member {} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {} complete
   */
  exports.prototype['complete'] = undefined;
  /**
   * @return {}
   */
  exports.prototype.getId = function() {
    return this['id'];
  }

  /**
   * @param {} id
   */
  exports.prototype.setId = function(id) {
    this['id'] = id;
  }

  /**
   * @return {}
   */
  exports.prototype.getPetId = function() {
    return this['petid'];
  }

  /**
   * @param {} petId
   */
  exports.prototype.setPetId = function(petId) {
    this['petid'] = petId;
  }

  /**
   * @return {}
   */
  exports.prototype.getQuantity = function() {
    return this['quantity'];
  }

  /**
   * @param {} quantity
   */
  exports.prototype.setQuantity = function(quantity) {
    this['quantity'] = quantity;
  }

  /**
   * @return {}
   */
  exports.prototype.getShipDate = function() {
    return this['shipdate'];
  }

  /**
   * @param {} shipDate
   */
  exports.prototype.setShipDate = function(shipDate) {
    this['shipdate'] = shipDate;
  }

  /**
   * Returns Order Status
   * @return {}
   */
  exports.prototype.getStatus = function() {
    return this['status'];
  }

  /**
   * Sets Order Status
   * @param {} status Order Status
   */
  exports.prototype.setStatus = function(status) {
    this['status'] = status;
  }

  /**
   * @return {}
   */
  exports.prototype.getComplete = function() {
    return this['complete'];
  }

  /**
   * @param {} complete
   */
  exports.prototype.setComplete = function(complete) {
    this['complete'] = complete;
  }


  return exports;
}));
