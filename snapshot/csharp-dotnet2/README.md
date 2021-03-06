# IO.OpenAPI - the C# library for the Swagger Petstore

This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.

This C# SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- SDK version: 1.0.0
- Build date: Mon Jul 02 2018 20:01:50 GMT+1000 (AEST)
- Build package: csharp-dotnet2
    For more information, please visit [https://swagger.io](https://swagger.io)

<a name="frameworks-supported"></a>
## Frameworks supported
- .NET 2.0

<a name="dependencies"></a>
## Dependencies
- Mono compiler
- Newtonsoft.Json.7.0.1
- RestSharp.Net2.1.1.11

Note: NuGet is downloaded by the mono compilation script and packages are installed with it. No dependency DLLs are bundled with this generator

<a name="installation"></a>
## Installation
Run the following command to generate the DLL
- [Mac/Linux] `/bin/sh compile-mono.sh`
- [Windows] TODO

Then include the DLL (under the `bin` folder) in the C# project, and use the namespaces:
```csharp
using IO.OpenAPI;
using IO.OpenAPI.Client;
using IO.OpenAPI;
```
<a name="getting-started"></a>
## Getting Started

```csharp
using System;
using System.Diagnostics;
using IO.OpenAPI;
using IO.OpenAPI.Client;
using IO.OpenAPI;

namespace Example
{
    public class Example
    {
        public void main()
        {

            // Configure OAuth2 access token for authorization: petstore_auth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new petApi();
            var body = new object(); // object | Pet object that needs to be added to the store

            try
            {
                // 
                apiInstance.addPet(body);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling petApi.addPet: " + e.Message );
            }
        }
    }
}
```

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to */v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*petApi* | [**addPet**](petApi.md#addpet) | **POST** /pet | Add a new pet to the store
*petApi* | [**updatePet**](petApi.md#updatepet) | **PUT** /pet | Update an existing pet
*petApi* | [**findPetsByStatus**](petApi.md#findpetsbystatus) | **GET** /pet/findByStatus | Finds Pets by status
*petApi* | [**findPetsByTags**](petApi.md#findpetsbytags) | **GET** /pet/findByTags | Finds Pets by tags
*petApi* | [**getPetById**](petApi.md#getpetbyid) | **GET** /pet/{petId} | Find pet by ID
*petApi* | [**updatePetWithForm**](petApi.md#updatepetwithform) | **POST** /pet/{petId} | Updates a pet in the store with form data
*petApi* | [**deletePet**](petApi.md#deletepet) | **DELETE** /pet/{petId} | Deletes a pet
*petApi* | [**uploadFile**](petApi.md#uploadfile) | **POST** /pet/{petId}/uploadImage | uploads an image
*storeApi* | [**getInventory**](storeApi.md#getinventory) | **GET** /store/inventory | Returns pet inventories by status
*storeApi* | [**placeOrder**](storeApi.md#placeorder) | **POST** /store/order | Place an order for a pet
*storeApi* | [**getOrderById**](storeApi.md#getorderbyid) | **GET** /store/order/{orderId} | Find purchase order by ID
*storeApi* | [**deleteOrder**](storeApi.md#deleteorder) | **DELETE** /store/order/{orderId} | Delete purchase order by ID
*userApi* | [**createUser**](userApi.md#createuser) | **POST** /user | Create user
*userApi* | [**createUsersWithArrayInput**](userApi.md#createuserswitharrayinput) | **POST** /user/createWithArray | Creates list of users with given input array
*userApi* | [**createUsersWithListInput**](userApi.md#createuserswithlistinput) | **POST** /user/createWithList | Creates list of users with given input array
*userApi* | [**loginUser**](userApi.md#loginuser) | **GET** /user/login | Logs user into the system
*userApi* | [**logoutUser**](userApi.md#logoutuser) | **GET** /user/logout | Logs out current logged in user session
*userApi* | [**getUserByName**](userApi.md#getuserbyname) | **GET** /user/{username} | Get user by user name
*userApi* | [**updateUser**](userApi.md#updateuser) | **PUT** /user/{username} | Updated user
*userApi* | [**deleteUser**](userApi.md#deleteuser) | **DELETE** /user/{username} | Delete user

<a name="documentation-for-models"></a>
## Documentation for Models

 - [Order.Order](Order.md)
 - [Category.Category](Category.md)
 - [User.User](User.md)
 - [Tag.Tag](Tag.md)
 - [Pet.Pet](Pet.md)
 - [ApiResponse.ApiResponse](ApiResponse.md)

<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="petstore_auth"></a>
### petstore_auth

- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: http://petstore.swagger.io/oauth/dialog
- **Scopes**: 
  - write:pets: 
  - read:pets: 

<a name="api_key"></a>
### api_key

- **Type**: API key
- **API key parameter name**: api_key
- **Location**: HTTP header

