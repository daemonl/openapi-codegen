/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class userApi {
    protected basePath = '/v2';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * This can only be done by the logged in user.
     * @summary Create user
     * @param body Created user object
     */
    public createUser (body: object, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createUser.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: body,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary Creates list of users with given input array
     * @param body List of user object
     */
    public createUsersWithArrayInput (body: Array<object>, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/createWithArray';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createUsersWithArrayInput.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: body,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary Creates list of users with given input array
     * @param body List of user object
     */
    public createUsersWithListInput (body: Array<object>, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/createWithList';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createUsersWithListInput.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: body,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary Logs user into the system
     * @param username The user name for login
     * @param password The password for login in clear text
     */
    public loginUser (username: string, password: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
        const localVarPath = this.basePath + '/user/login';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling loginUser.');
        }

        // verify required parameter 'password' is not null or undefined
        if (password === null || password === undefined) {
            throw new Error('Required parameter password was null or undefined when calling loginUser.');
        }

        if (username !== undefined) {
            queryParameters['username'] = username;
        }

        if (password !== undefined) {
            queryParameters['password'] = password;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary Logs out current logged in user session
     */
    public logoutUser (extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/logout';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary Get user by user name
     * @param username The name that needs to be fetched. Use user1 for testing. 
     */
    public getUserByName (username: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<User> {
        const localVarPath = this.basePath + '/user/{username}'
            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling getUserByName.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * This can only be done by the logged in user.
     * @summary Updated user
     * @param username name that need to be updated
     * @param body Updated user object
     */
    public updateUser (username: string, body: object, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/{username}'
            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling updateUser.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateUser.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: body,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * This can only be done by the logged in user.
     * @summary Delete user
     * @param username The name that needs to be deleted
     */
    public deleteUser (username: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/{username}'
            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling deleteUser.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
