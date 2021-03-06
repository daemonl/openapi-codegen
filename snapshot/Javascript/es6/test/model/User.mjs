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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.swagger_petstore);
  }
}(this, function(expect, swagger_petstore) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new swagger_petstore.User();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('swagger_petstore', function() {
    it('should create an instance of swagger_petstore', function() {
      // uncomment below and update the code to test swagger_petstore
      //var instane = new swagger_petstore.swagger_petstore();
      //expect(instance).to.be.a(swagger_petstore.swagger_petstore);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new swagger_petstore.User();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new swagger_petstore.User();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new swagger_petstore.User();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new swagger_petstore.User();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new swagger_petstore.User();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new swagger_petstore.User();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new swagger_petstore.User();
      //expect(instance).to.be();
    });

    it('should have the property userStatus (base name: "userstatus")', function() {
      // uncomment below and update the code to test the property userStatus
      //var instane = new swagger_petstore.User();
      //expect(instance).to.be();
    });

  });

}));
