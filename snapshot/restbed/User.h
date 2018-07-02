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
 * User.h
 *
 * 
 */

#ifndef User_H_
#define User_H_



undefined
#include <memory>


/// <summary>
/// 
/// </summary>
class  User
{
public:
    User();
    virtual ~User();
    
    std::string toJsonString();
    void fromJsonString(std::string const& jsonString);

    /////////////////////////////////////////////
    /// User members
    
    /// <summary>
    /// 
    /// </summary>
    int getId() const;
    void setId(int value);
    /// <summary>
    /// 
    /// </summary>
    string getUsername() const;
    void setUsername(string value);
    /// <summary>
    /// 
    /// </summary>
    string getFirstName() const;
    void setFirstName(string value);
    /// <summary>
    /// 
    /// </summary>
    string getLastName() const;
    void setLastName(string value);
    /// <summary>
    /// 
    /// </summary>
    string getEmail() const;
    void setEmail(string value);
    /// <summary>
    /// 
    /// </summary>
    string getPassword() const;
    void setPassword(string value);
    /// <summary>
    /// 
    /// </summary>
    string getPhone() const;
    void setPhone(string value);
    /// <summary>
    /// User Status
    /// </summary>
    int getUserStatus() const;
    void setUserStatus(int value);

protected:
    int m_id;
    string m_username;
    string m_firstName;
    string m_lastName;
    string m_email;
    string m_password;
    string m_phone;
    int m_userStatus;
};


#endif /* User_H_ */
