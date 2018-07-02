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

export class petApi {
    protected basePath = '/v2';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * @summary Add a new pet to the store
     * @param body Pet object that needs to be added to the store
     */
    public addPet (body: object, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/pet';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addPet.');
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
     * @summary Update an existing pet
     * @param body Pet object that needs to be added to the store
     */
    public updatePet (body: object, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/pet';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updatePet.');
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
     * Multiple status values can be provided with comma separated strings
     * @summary Finds Pets by status
     * @param status Status values that need to be considered for filter
     */
    public findPetsByStatus (status: Array<string>, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<object>> {
        const localVarPath = this.basePath + '/pet/findByStatus';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'status' is not null or undefined
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling findPetsByStatus.');
        }

        if (status !== undefined) {
            queryParameters['status'] = status;
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
     * Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @summary Finds Pets by tags
     * @param tags Tags to filter by
     */
    public findPetsByTags (tags: Array<string>, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<object>> {
        const localVarPath = this.basePath + '/pet/findByTags';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'tags' is not null or undefined
        if (tags === null || tags === undefined) {
            throw new Error('Required parameter tags was null or undefined when calling findPetsByTags.');
        }

        if (tags !== undefined) {
            queryParameters['tags'] = tags;
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
     * Returns a single pet
     * @summary Find pet by ID
     * @param petId ID of pet to return
     */
    public getPetById (petId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Pet> {
        const localVarPath = this.basePath + '/pet/{petId}'
            .replace('{' + 'petId' + '}', encodeURIComponent(String(petId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling getPetById.');
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
     * @summary Updates a pet in the store with form data
     * @param petId ID of pet that needs to be updated
     * @param body 
     */
    public updatePetWithForm (petId: number, body?: object, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/pet/{petId}'
            .replace('{' + 'petId' + '}', encodeURIComponent(String(petId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling updatePetWithForm.');
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
     * @summary Deletes a pet
     * @param petId Pet id to delete
     * @param api_key 
     */
    public deletePet (petId: number, api_key?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/pet/{petId}'
            .replace('{' + 'petId' + '}', encodeURIComponent(String(petId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling deletePet.');
        }

        headerParams['api_key'] = api_key;

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
    /**
     * 
     * @summary uploads an image
     * @param petId ID of pet to update
     * @param body 
     */
    public uploadFile (petId: number, body?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<ApiResponse> {
        const localVarPath = this.basePath + '/pet/{petId}/uploadImage'
            .replace('{' + 'petId' + '}', encodeURIComponent(String(petId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling uploadFile.');
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
}