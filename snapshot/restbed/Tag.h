/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator 1.5.0.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/*
 * Tag.h
 *
 * 
 */

#ifndef Tag_H_
#define Tag_H_



undefined
#include <memory>


/// <summary>
/// 
/// </summary>
class  Tag
{
public:
    Tag();
    virtual ~Tag();
    
    std::string toJsonString();
    void fromJsonString(std::string const& jsonString);

    /////////////////////////////////////////////
    /// Tag members
    
    /// <summary>
    /// 
    /// </summary>
    int getId() const;
    void setId(int value);
    /// <summary>
    /// 
    /// </summary>
    string getName() const;
    void setName(string value);

protected:
    int m_id;
    string m_name;
};


#endif /* Tag_H_ */
