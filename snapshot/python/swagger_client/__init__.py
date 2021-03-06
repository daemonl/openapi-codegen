# coding: utf-8

# flake8: noqa

"""
    Swagger Petstore

    This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.  # noqa: E501

    OpenAPI spec version: 1.0.0
    Contact: apiteam@swagger.io
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

from __future__ import absolute_import

# import apis into sdk package
from swagger_client.api.pet import petApi
from swagger_client.api.store import storeApi
from swagger_client.api.user import userApi
# import ApiClient
from swagger_client.api_client import ApiClient
from swagger_client.configuration import Configuration
# import models into sdk package
from Order.clsOrder import Order
from Category.clsCategory import Category
from User.clsUser import User
from Tag.clsTag import Tag
from Pet.clsPet import Pet
from ApiResponse.clsApiResponse import ApiResponse
