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

import ApiClient from '../ApiClient';


  /**
   * The Tag model module.
   * @module Tag/Tag
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Tag</code>.
   * @alias module:Tag/Tag
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Tag/Tag} obj Optional instance to populate.
   * @return {module:Tag/Tag} The populated <code>Tag</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id']
      }
      if (data.hasOwnProperty('name')) {
        obj['name']
      }
    }
    return obj;
  }
  /**
   * @member {} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {} name
   */
  exports.prototype['name'] = undefined;
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
  exports.prototype.getName = function() {
    return this['name'];
  }

  /**
   * @param {} name
   */
  exports.prototype.setName = function(name) {
    this['name'] = name;
  }


  return exports;
}));
